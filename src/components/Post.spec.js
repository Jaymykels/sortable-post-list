import { shallowMount } from '@vue/test-utils'
import Post from './Post.vue'
import { direction } from '../utils'

describe('Post.vue', () => {
    const move = jest.fn()
    const propsData = {
        directions: [direction.UP, direction.DOWN],
        text: 'Hello World!',
        index: 4,
        move
    }

    test('contains the post passed to it', () => {
        const wrapper = shallowMount(Post, {
            propsData
        })
        expect(wrapper.text()).toContain(propsData.text)
    });

    test('displays up and down buttons', () => {
        const wrapper = shallowMount(Post, {
            propsData
        })
        expect(wrapper.find('#up').exists()).toBe(true)
        expect(wrapper.find('#down').exists()).toBe(true)
    });

    test('displays up button only', () => {
        const wrapper = shallowMount(Post, {
            propsData: {
                ...propsData,
                directions: [direction.UP]
            }
        })
        expect(wrapper.find('#up').exists()).toBe(true)
        expect(wrapper.find('#down').exists()).toBe(false)
    });

    test('displays down button only', () => {
        const wrapper = shallowMount(Post, {
            propsData: {
                ...propsData,
                directions: [direction.DOWN]
            }
        })
        expect(wrapper.find('#up').exists()).toBe(false)
        expect(wrapper.find('#down').exists()).toBe(true)
    });

    test('calls the move function with the right parameters', () => {
        const wrapper = shallowMount(Post, {
            propsData: {
                ...propsData,
                directions: [direction.UP]
            }
        })
        wrapper.find('svg').trigger('click')
        expect(move).toHaveBeenCalledWith(direction.UP, 4)
    })
});