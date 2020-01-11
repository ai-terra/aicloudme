<template>
  <div class="flex-item">
    <textarea v-model="value"></textarea>
  </div>
</template>

<script>
export default {
  name: "Cell",
  props: ["initialValue"],
  data() {
    return {
      value: ""
    };
  },
  mounted() {
    this.value = this.initialValue;
  },
  watch: {
    // eslint-disable-next-line no-unused-vars
    value: function(newValue) {
      // eslint-disable-next-line no-console
      //console.log("Value changed to " + newValue);
    }
  }
};
</script>

<style>
textarea {
  margin: 0px;
  border: 0px;
  padding: 0px;
}

.flex-item {
  margin: 0px;
  /* padding-left: 0.5rem; */
  max-height: 20px;
  overflow: visible;
  border-top: solid 1px grey;
  border-left: solid 1px grey;
}

.flex-item :hover {
  background-color: rgba(108, 167, 84, 0.5);
}

.flex-item:nth-child(odd) {
  /* max-width: 1.8rem; */
  max-width: 30px;
}

.flex-item:nth-child(even) {
  max-width: 70px;
}

.flex-item textarea {
  height: 100%;
  resize: none;
  background: transparent;
  border: none;
}

.flex-item textarea:focus {
  background: white;
  border: none;
  box-shadow: none;
  outline: none;
}
</style>