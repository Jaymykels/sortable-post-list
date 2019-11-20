import storeConfig, { mutationTypes } from './store.config'
import Vuex from 'vuex'
import { createLocalVue } from '@vue/test-utils'
import { direction } from '../utils'

const localVue = createLocalVue()
localVue.use(Vuex)
const { mutations } = storeConfig()

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
            actions: [
                { id: 0, direction: direction.UP, index: 4, post: 'Post 4' },
                { id: 1, direction: direction.UP, index: 3, post: 'Post 4' },
                { id: 2, direction: direction.UP, index: 2, post: 'Post 4' },
            ]
        }
        mutations[mutationTypes.ADD_ACTION](state, { direction: direction.UP, index: 1, post: 'Post 4' })
        expect(state.actions[0].index).toBe(1)
    });

    test('should remove action', () => {
        const state = {
            actions: [
                { id: 2, direction: direction.UP, index: 2, post: 'Post 4' },
                { id: 1, direction: direction.UP, index: 3, post: 'Post 4' },
                { id: 0, direction: direction.UP, index: 4, post: 'Post 4' },
            ]
        }
        mutations[mutationTypes.REMOVE_ACTION](state)
        expect(state.actions[0].index).toBe(3)
    });

    test('should move post and time travel', () => {
        const state = {
            posts: [...Array.from({ length: 5 }, (_, key) => `Post ${key}`)],
            actions: []
        }
        const config = { ...storeConfig(), state }
        const store = new Vuex.Store(config)

        //should move post
        store.dispatch('move', { direction: direction.DOWN, index: 0 })
        expect(store.state.posts[1]).toBe('Post 0')
        expect(store.state.actions[0].direction).toBe(direction.DOWN)

        //should time travel
        const action = store.state.actions[0]
        store.dispatch('timeTravel', { direction: action.direction, index: action.index })
        expect(store.state.actions.length).toBe(0)
        expect(store.state.posts[0]).toBe('Post 0')
    });
});