<template>
  <div class="flex flex-wrap sm:-mx-20">
    <div class="w-full sm:w-1/2 px-10 pb-12">
      <h5 class="mb-6 text-white text-2xl font-normal">Sortable Post List</h5>
      <p v-if="loading" class="text-center text-gray-700">
        <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" class="mx-auto" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          width="40px" height="40px" viewBox="0 0 40 40" enable-background="new 0 0 40 40" xml:space="preserve">
          <path opacity="0.2" fill="#000" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946
            s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634
            c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"/>
          <path fill="#000" d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0
            C22.32,8.481,24.301,9.057,26.013,10.047z">
            <animateTransform attributeType="xml"
              attributeName="transform"
              type="rotate"
              from="0 20 20"
              to="360 20 20"
              dur="0.5s"
              repeatCount="indefinite"/>
            </path>
          </svg>
          Loading posts...
      </p>
      <p v-if="errorMsg" class="text-red-400 text-xl">{{ errorMsg }}</p>
        <transition-group name="list">
          <Post v-for="(post, index) in posts" :key="post" :index="index" :text="post" :move="move" :directions="getDirections(index)" />
        </transition-group>
    </div>
    <div class="w-full sm:w-1/2 px-10">
      <div class="bg-gray-200 shadow border-solid rounded overflow-hidden border-b">
        <div
          class="bg-gray-100 px-4 py-4 text-xl border-solid border-gray-100 border text-gray-700"
        >List of actions commited</div>
        <div class="m-3 sm:m-6">
          <transition-group name="list">
            <Action
              v-for="action in actions"
              :action="action"
              :timeTravel="timeTravel"
              :key="action.id"
            />
          </transition-group>
          <p v-if="actions.length < 1" class="text-gray-700">No action taken</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Post from "../components/Post.vue";
import Action from "../components/Action.vue";
import { direction, action_types } from "../utils";
import { mapState } from "vuex";

export default {
  components: {
    Post,
    Action
  },

  mounted () {
    this.loadPosts()
    },

  data() {
    return {
      loading: true,
      errorMsg: ''
    }
  },

  computed: {
    ...mapState(["posts", "actions"])
  },

  methods: {
    move(direction, index) {
      this.$store.dispatch(action_types.MOVE_POST, {
        direction,
        index,
        post: this.posts[index]
      });
    },

    timeTravel(action) {
      this.$store.dispatch(action_types.TIME_TRAVEL, this.actions[0]);
      setTimeout(() => {
        if(this.actions.length > 0 && this.actions[0].id >= action.id)
          this.timeTravel(action)
      }, 1000);
    },

    getDirections(index) {
      let directions = [];
      if (index > 0) directions.push(direction.UP);
      if (index < this.posts.length - 1) directions.push(direction.DOWN);
      return directions;
    },

    async loadPosts(){
      this.$store.dispatch(action_types.FETCH_POSTS)
        .then(() => {
          this.loading = false
        })
        .catch(err => {
          this.loading = false
          this.errorMsg = err
        })
      
      }
  }
};
</script>