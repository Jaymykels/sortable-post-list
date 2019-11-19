<template>
  <div id="app" class="min-h-screen font-sans">
    <div class="container mx-auto py-6 sm:py-12 sm:px-4">
      <div class="flex flex-wrap sm:-mx-20">
        <div class="w-full sm:w-1/2 px-10 pb-12">
          <h5 class="mb-6 text-white text-2xl font-normal">Sortable Post List</h5>
          <div v-for="(post, index) in posts" :key="index">
            <Post :index="index" :text="post" :move="move" :directions="getDirections(index)"/>
          </div>
        </div>
        <div class="w-full sm:w-1/2 px-10">
          <div class="bg-gray-200 shadow border-solid rounded overflow-hidden border-b">
            <div class="bg-gray-100 px-4 py-4 text-xl border-solid border-gray-100 border">
              List of actions commited
            </div>
            <div class="m-3 sm:m-6">
              <div class="bg-white h-20 rounded p-3 shadow border flex justify-between">
                <div class="sm:my-3 my-1 sm:text-base text-sm">
                  Moved post 1 from index 2 to index 1
                </div>
                <button class="h-12 m-1 bg-green-300 rounded text-sm shadow sm:text-base w-32 hover:text-white">
                  Time travel
                </button>
              </div>
              <div class="bg-white h-20 rounded p-3 shadow border flex justify-between">
                <div class="sm:my-3 my-1 sm:text-base text-sm">
                  Moved post 3 from index 4 to index 3
                </div>
                <button class="h-12 m-1 bg-green-300 rounded text-sm shadow sm:text-base w-32 hover:text-white">
                  Time travel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Post from './components/Post'
export default {
  name: 'app',
  components: {
    Post
  },
  data() {
    return {
      posts: Array.from({ length: 5 }, (value, key) => `Post ${key}`)
    }
  },
  methods: {
    move(direction, index) {
      console.log(direction, index)
    },
    getDirections(index) {
      let directions = []
      if (index > 0)
        directions.push('UP')
      if (index < this.posts.length - 1)
        directions.push('DOWN')
      return directions
    }
  },
}
</script>