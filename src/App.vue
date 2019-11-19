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
              <Action v-for="(action, index) in actions" :action="action" :timeTravel="timeTravel" :key="index"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Post from './components/Post'
import Action from './components/Action'
export default {
  name: 'app',
  components: {
    Post,
    Action
  },
  data() {
    return {
      posts: Array.from({ length: 5 }, (value, key) => `Post ${key}`),
      actions: []
    }
  },
  methods: {
    move(direction, index) {
      console.log(direction, index)
      this.actions.push({
        direction,
        index,
        post : this.posts[index]
      })
    },
    timeTravel(action) {
      console.log(action)
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