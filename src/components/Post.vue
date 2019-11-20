<template>
  <div
    class="bg-white shadow rounded overflow-hidden sm:mr-10 border flex justify-between p-4 sm:mb-6 mb-4"
  >
    <div class="w-11/12 sm:text-lg text-sm py-4 text-gray-700">{{ text }}</div>
    <div :class="[ directions.length > 1 ? 'flex flex-col justify-between' : 'py-6']">
      <div v-for="item in directions" :key="item">
        <svg
          v-if="item === direction.UP"
          @click="move(item, index)"
          aria-hidden="true"
          id="up"
          focusable="false"
          data-prefix="fas"
          data-icon="chevron-up"
          class="sm:h-4 h-3 text-indigo-700 hover:text-indigo-300"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"
          />
        </svg>
        <svg
          v-if="item === direction.DOWN"
          @click="move(item, index)"
          aria-hidden="true"
          id="down"
          focusable="false"
          data-prefix="fas"
          data-icon="chevron-down"
          class="sm:h-4 h-3 text-indigo-700 hover:text-indigo-300"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import { direction } from "../utils";
export default {
  props: {
    directions: Array,
    text: String,
    index: Number,
    move: Function
  },
  data() {
    return {
      direction
    };
  }
};
</script>