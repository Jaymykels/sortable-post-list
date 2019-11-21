import Posts from './Posts.vue'
import { mount } from '@vue/test-utils'
import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import storeConfig from '../store/store.config'
import Post from '../components/Post.vue'
import Action from '../components/Action.vue'
import flushPromises from 'flush-promises'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Posts.vue', () => {
    let store
    jest.useFakeTimers()
    beforeEach(() => {
        const state = {
            posts: [],
            actions: []
        }
        const config = { ...storeConfig(), state }
        store = new Vuex.Store(config)
    });

    test('should load posts and actions', async () => {
        //mocing a successful response using fetch
        const mockSuccessResponse = new Array(10).fill().map((_, i) => {
            return { title: `Posts ${i + 1}` }
        })
        const mockJsonPromise = Promise.resolve(mockSuccessResponse)
        const mockFetchPromise = Promise.resolve({
            json: () => mockJsonPromise,
        })
        global.fetch = jest.fn().mockImplementation(() => mockFetchPromise)

        const wrapper = mount(Posts, {
            store,
            localVue
        })

        expect(wrapper.text()).toContain('Loading posts...')

        //complete all pending promises
        await flushPromises()
        //shows posts
        expect(wrapper.findAll(Post).length).toBe(5)

        //shows message for no actions
        expect(wrapper.text()).toContain('No action taken')

        //shows action when a post is moved
        wrapper.find('#down').trigger('click')
        wrapper.find('#down').trigger('click')
        expect(wrapper.findAll(Action).length).toBe(2)

        //removes actions when time travel
        wrapper.find('#button-0').trigger('click')
        //speed up the set timeout
        jest.runAllTimers()
        expect(wrapper.text()).toContain('No action taken')
    });

    test('should display error message', async () => {
        const mockFetchPromise = Promise.reject()
        global.fetch = jest.fn().mockImplementation(() => mockFetchPromise)
        
        const wrapper = mount(Posts, {
            store,
            localVue
        })

        //await all pending promises
        await flushPromises()

        expect(wrapper.text()).toContain('An error occurred trying to load posts')
    });
});