import storeConfig, { mutation_types } from './store.config'
import Vuex from 'vuex'
import { createLocalVue } from '@vue/test-utils'
import { direction, action_types } from '../constants'
import flushPromises from 'flush-promises'

const localVue = createLocalVue()
localVue.use(Vuex)
const { mutations } = storeConfig()
const actions = [
    { id: 2, direction: direction.UP, index: 2, post: 'Post 4' },
    { id: 1, direction: direction.UP, index: 3, post: 'Post 4' },
    { id: 0, direction: direction.UP, index: 4, post: 'Post 4' },
]

describe('Store', () => {
    test('should swap post', () => {
        const state = {
            posts: [...Array.from({ length: 5 }, (_, key) => `Post ${key}`)]
        }
        //test it moves up
        mutations[direction.UP](state, 4)
        expect(state.posts[3]).toBe('Post 4')
        //test it moves down
        mutations[direction.DOWN](state, 3)
        expect(state.posts[4]).toBe('Post 4')
    });

    test('should add action', () => {
        const state = {
            actions
        }
        mutations[mutation_types.ADD_ACTION](state, { direction: direction.UP, index: 1, post: 'Post 4' })
        expect(state.actions[0].index).toBe(1)
    });

    test('should remove action', () => {
        const state = {
            actions
        }
        mutations[mutation_types.REMOVE_ACTION](state)
        expect(state.actions[0].index).toBe(3)
    });

    test('should load posts', () => {
        const state = {
            posts: []
        }
        mutations[mutation_types.LOAD_POSTS](state, ['Post 1'])
        expect(state.posts[0]).toBe('Post 1')
    });

    test('should move post and time travel', () => {
        const state = {
            posts: [...Array.from({ length: 5 }, (_, key) => `Post ${key}`)],
            actions: []
        }
        const config = { ...storeConfig(), state }
        const store = new Vuex.Store(config)

        //should move post
        store.dispatch(action_types.MOVE_POST, { direction: direction.DOWN, index: 0 })
        expect(store.state.posts[1]).toBe('Post 0')
        expect(store.state.actions[0].direction).toBe(direction.DOWN)

        //should time travel
        const action = store.state.actions[0]
        store.dispatch(action_types.TIME_TRAVEL, { direction: action.direction, index: action.index })
        expect(store.state.actions.length).toBe(0)
        expect(store.state.posts[0]).toBe('Post 0')
    });

    test('should fetch posts', async () => {
        const mockSuccessResponse = new Array(10).fill().map((_, i) => {
            return { title: `Posts ${i + 1}` }
        })
        const mockJsonPromise = Promise.resolve(mockSuccessResponse)
        const mockFetchPromise = Promise.resolve({
            json: () => mockJsonPromise,
        });
        global.fetch = jest.fn().mockImplementation(() => mockFetchPromise)

        const store = new Vuex.Store(storeConfig())
        store.dispatch(action_types.FETCH_POSTS)
        expect(global.fetch).toHaveBeenCalled()
        await flushPromises()
        expect(store.state.posts.length).toBe(5)
    });
});