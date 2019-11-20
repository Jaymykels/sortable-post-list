<template>
  <div id="app" class="min-h-screen font-sans">
    <div class="container mx-auto py-6 sm:py-12 sm:px-4">
      <Posts/>
    </div>
  </div>
</template>

<script>
import Posts from "./container/Posts.vue";

export default {
  name: "app",
  components: {
    Posts
  }
};
</script>