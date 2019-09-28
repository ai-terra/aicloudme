<template>
  <div>
    <!-- <h1>Test Post Component</h1> -->
    <div v-html="matrix[3]"></div>
    <!-- <input type="text" v-model="matrix[3]" /> -->
    <textarea v-model="matrix[3]" placeholder="edit post"></textarea>
  </div>
</template>

<script>
export default {
  props: ["matrix"]
};
</script>

<style scoped>
</style>