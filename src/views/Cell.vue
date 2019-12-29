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
.flex-item {
  max-height: 20px;
  overflow: visible;
  border: solid 1px #000;
}

.flex-item :hover {
  background-color: rgba(108, 167, 84, 0.5);
}

.flex-item:nth-child(odd) {
  max-width: 1.8rem;
}

.flex-item:nth-child(even) {
  max-width: 8.8rem;
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