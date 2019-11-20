import { shallowMount } from '@vue/test-utils'
import App from './App.vue'
import Posts from './container/Posts.vue'

describe('App.vue', () => {
    test('should mount successfully', () => {
        const wrapper = shallowMount(App)
        expect(wrapper.find(Posts).is(Posts)).toBe(true)        
    });
});