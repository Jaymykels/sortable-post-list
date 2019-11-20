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

    test('should load posts and actions', async () => {
        const state = {
            posts: [],
            actions: []
        }
        const config = { ...storeConfig(), state }
        const store = new Vuex.Store(config)


        const mockSuccessResponse = new Array(10).fill().map((_, i) => {
            return { title: `Posts ${i + 1}` }
        })
        const mockJsonPromise = Promise.resolve(mockSuccessResponse)
        const mockFetchPromise = Promise.resolve({
            json: () => mockJsonPromise,
        });
        global.fetch = jest.fn().mockImplementation(() => mockFetchPromise)

        const wrapper = mount(Posts, {
            store,
            localVue
        })

        expect(wrapper.text()).toContain('Loading posts...')

        await flushPromises()
        //shows posts
        expect(wrapper.findAll(Post).length).toBe(5)

        //shows message for no actions
        expect(wrapper.text()).toContain('No action taken')

        //shows action when a post is moved
        wrapper.find('#down').trigger('click')
        expect(wrapper.findAll(Action).length).toBe(1)

        //removes action when time travel
        wrapper.find('button').trigger('click')
        expect(wrapper.text()).toContain('No action taken')
    });
});