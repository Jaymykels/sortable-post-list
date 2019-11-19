<template>
    <div class="bg-white h-20 rounded p-3 shadow border flex justify-between">
        <div class="sm:my-3 my-1 sm:text-base text-sm">
            {{ message }}
        </div>
        <button @click="timeTravel(action)" class="h-12 m-1 bg-green-300 rounded text-sm shadow sm:text-base w-32 hover:text-white">
            Time travel
        </button>
    </div>
</template>

<script>
    export default {
        props: {
            action: Object,
            timeTravel: Function
        },
        computed: {
            message() {
                return `Moved ${this.action.post} from index ${this.action.index} to index ${this.action.direction === 'UP' ? this.action.index - 1 : this.action.index + 1}`
            }
        }
    }
</script>