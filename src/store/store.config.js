import { direction, action_types } from '../constants'

export const mutation_types = {
    ...direction,
    ADD_ACTION: 'ADD_ACTION',
    REMOVE_ACTION: 'REMOVE_ACTION',
    LOAD_POSTS: 'LOAD_POSTS'
}

const POST_URL = 'https://jsonplaceholder.typicode.com/posts'

const sortDescending = arr => arr.sort((a, b) => a.id > b.id ? -1 : (a.id < b.id ? 1 : 0))

export default function storeConfig() {
    return {
        state: {
            posts: [],
            actions: []
        },
        mutations: {
            [mutation_types.UP](state, index) {
                var temp = state.posts[index]
                state.posts[index] = state.posts[index - 1]
                state.posts[index - 1] = temp
            },
            [mutation_types.DOWN](state, index) {
                var temp = state.posts[index]
                state.posts[index] = state.posts[index + 1]
                state.posts[index + 1] = temp
            },
            [mutation_types.ADD_ACTION](state, payload) {
                var actions = [...state.actions]
                actions.push({ ...payload, id: state.actions.length })
                state.actions = sortDescending(actions)
            },
            [mutation_types.REMOVE_ACTION](state) {
                var actions = [...state.actions]
                actions.shift()
                state.actions = sortDescending(actions)
            },
            [mutation_types.LOAD_POSTS](state, posts) {
                state.posts = posts
            }
        },
        actions: {
            //move post 
            [action_types.MOVE_POST]({ commit }, payload) {
                commit(mutation_types.ADD_ACTION, payload)
                commit(payload.direction, payload.index)
            },
            //undo an action
            [action_types.TIME_TRAVEL]({ commit }, payload) {
                commit(mutation_types.REMOVE_ACTION)
                commit(payload.direction, payload.index)
            },
            //fetch posts
            [action_types.FETCH_POSTS]({ commit }) {
                return new Promise((resolve, reject) => {
                    fetch(POST_URL, { headers: { Accept: "application/json" } })
                        .then(res => res.json())
                        .then(res => {
                            var posts = res.slice(0, 5).map(post => post.title)
                            commit(mutation_types.LOAD_POSTS, posts);
                            resolve("Fetched posts successfully")
                        })
                        .catch(() => {
                            reject('An error occurred trying to load posts')
                        });
                });
            }
        }
    }
}