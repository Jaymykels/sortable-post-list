import { shallowMount } from '@vue/test-utils'
import Action from './Action.vue'
import { direction } from '../constants'

describe('Action.vue', () => {
    const timeTravel = jest.fn()
    const propsData = {
        action: { direction: direction.UP, index: 2, post: 'Post 1' },
        timeTravel
    }
    let wrapper

    beforeEach(() => {
        wrapper = shallowMount(Action, {
            propsData
        })
    });

    afterEach(() => { });

    test('generates the right message', () => {
        expect(wrapper.text()).toContain(`Moved ${propsData.action.post} from index ${propsData.action.index} to index ${propsData.action.index - 1}`)
    });

    test('call the time travel function with the right parameters', () => {
        wrapper.find('button').trigger('click')
        expect(timeTravel).toHaveBeenCalledWith(propsData.action)
    });
});