<template>
  <div class="card">
    <div class="poster">
      <div class="title">
        <h2 v-html="matrix[3]"></h2>
      </div>
    </div>
    <ul class="controls">
      <li class="react">Views</li>
      <li class="react">Like</li>
      <li class="react">Comment</li>
      <li class="react">Share</li>
      <li class="react" @click="showEdit = !showEdit">Edit</li>
    </ul>
    <textarea class="edit" v-if="showEdit" v-model="matrix[3]" placeholder="edit post"></textarea>
  </div>
</template>

<script>
export default {
  props: ["matrix"],
  data() {
    return {
      showEdit: false
    };
  }
};
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
}

.poster {
  width: 100%;
  height: 100px;
  background-image: url("./../assets/img/innovators-200.jpg");
  background-color: azure;
}

h2 {
  margin: 1rem;
  color: white;
  text-align: center;
  align-self: center;
}

.controls {
  width: 95%;
  margin: 1rem;
  display: flex;
  justify-items: center;
  justify-content: space-between;
  list-style-type: none;
  padding: 0;
}

.react {
  cursor: pointer;
}

.title {
  margin: 1rem;
  width: 95%;
}

.edit {
  background: transparent;
  margin: 0 1rem 1rem 1rem;
  width: 95%;
}
</style>