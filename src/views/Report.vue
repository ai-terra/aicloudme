/* eslint-disable vue/valid-v-bind */
<template>
  <div>
    <div class="card" v-for="(post,i) in matrix" :key="i">
      <div class="list">
        <div
          v-for="item in 10"
          :key="item"
          class="poster"
          :style="{ backgroundImage: 'url(' + require('./../assets/img/users/2' + randomInt(10,99) + '.png') + ')', 
                      backgroundColor: 'rgba(' 
                        + randomInt(10,250) + ','
                        + randomInt(10,250) + ',' 
                        + randomInt(10,250) + ',' 
                        + '0.' + randomInt(20,90)
                        + ')'}"
        ></div>
      </div>
      <div class="title">
        <h2 v-html="post[3]"></h2>
      </div>
      <ul class="controls">
        <li class="react">Views</li>
        <li class="react">Like</li>
        <li class="react">Comment</li>
        <li class="react">Share</li>
        <li class="react" @click="showEdit = !showEdit">Edit</li>
      </ul>
      <textarea class="edit" v-if="showEdit" v-model="post[3]" placeholder="edit post"></textarea>
    </div>
  </div>
</template>

<script>
export default {
  props: ["matrix"],
  data() {
    return {
      showEdit: false
    };
  },
  methods: {
    randomInt(min, max) {
      // min and max included
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
  }
};
</script>

<style scoped>
.card {
  position: relative;
  max-height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
}

.list {
  background-color: rgba(170, 211, 223, 0.9);
  width: 100%;
  max-height: 100px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

.poster {
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  /* background-image: url("./../assets/img/01.svg"); */
  /* background-image: url("https://firebasestorage.googleapis.com/v0/b/aibase.appspot.com/o/img%2Fworld-200.png?alt=media&token=0f5e2753-4b10-4c8c-a8ea-63f62ab56277"); */
  background-color: rgba(170, 211, 223, 0.9);
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  background-blend-mode: multiply;
}

h2 {
  margin: 1rem;
  color: #666;
  background-color: rgba(200, 200, 200, 0.8);
  text-align: center;
  align-self: center;
}

.controls {
  position: relative;
  top: 0px;
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
  position: absolute;
  top: 15px;
  margin: 1rem;
  width: 95%;
}

.edit {
  background: transparent;
  margin: 0 1rem 1rem 1rem;
  width: 95%;
}
</style>