import { direction } from '../utils'

export const mutationTypes = {
    ...direction,
    ADD_ACTION: 'ADD_ACTION',
    REMOVE_ACTION: 'REMOVE_ACTION'
}

const sortDescending = arr => arr.sort((a, b) => a.id > b.id ? -1 : (a.id < b.id ? 1 : 0))

export default function storeConfig() {
    return {
        state: {
            posts: [...Array.from({ length: 5 }, (_, key) => `Post ${key+1}`)],
            actions: []
        },
        mutations: {
            [mutationTypes.UP](state, index) {
                var temp = state.posts[index]
                state.posts[index] = state.posts[index - 1]
                state.posts[index - 1] = temp
            },
            [mutationTypes.DOWN](state, index) {
                var temp = state.posts[index]
                state.posts[index] = state.posts[index + 1]
                state.posts[index + 1] = temp
            },
            [mutationTypes.ADD_ACTION](state, payload) {
                var actions = [...state.actions]
                actions.push({ ...payload, id: state.actions.length })
                state.actions = sortDescending(actions)
            },
            [mutationTypes.REMOVE_ACTION](state) {
                var actions = [...state.actions]
                actions.shift()
                state.actions = sortDescending(actions)
            }
        },
        actions: {
            //move post 
            move({ commit }, payload) {
                commit(mutationTypes.ADD_ACTION, payload)
                commit(payload.direction, payload.index)
            },
            //undo an action
            timeTravel({ commit }, payload) {
                commit(mutationTypes.REMOVE_ACTION)
                commit(payload.direction, payload.index)
            }
        }
    }
}