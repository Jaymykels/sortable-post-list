<template>
  <div class="bg-white rounded p-3 shadow border flex flex-wrap">
    <div class="sm:my-3 my-1 sm:text-base text-sm w-3/4 text-gray-700">{{ message }}</div>
    <button
      @click="timeTravel(action)"
      class="h-12 m-1 bg-green-300 rounded text-sm shadow sm:text-base w-1/5 hover:text-white text-gray-700"
      :id="`button-${action.id}`"
    >Time travel</button>
  </div>
</template>

<script>
import { direction } from "../constants";
export default {
  props: {
    action: Object,
    timeTravel: Function
  },
  computed: {
    message() {
      return `Moved ${this.action.post} from index ${
        this.action.index
      } to index ${
        this.action.direction === direction.UP
          ? this.action.index - 1
          : this.action.index + 1
      }`;
    }
  }
};
</script>