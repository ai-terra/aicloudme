<template>
  <div>
    <div class="title">
      <h2 v-html="matrix[3]"></h2>
    </div>
    <ul class="controls">
      <li class="react">Views</li>
      <li class="react">Like</li>
      <li class="react">Comment</li>
      <li class="react">Share</li>
      <li class="react">Edit</li>
    </ul>
    <textarea class="title" v-model="matrix[3]" placeholder="edit post"></textarea>
  </div>
</template>

<script>
export default {
  props: ["matrix"]
};
</script>

<style scoped>
h2 {
  margin: 1rem;
}

.controls {
  width: 95%;
  margin-left: 1rem;
  display: flex;
  justify-items: center;
  justify-content: space-between;
  list-style-type: none;
  padding: 0;
}

.react {
}

.title {
  margin: 1rem;
  width: 95%;
}

textarea.title {
  background: transparent;
}
</style>