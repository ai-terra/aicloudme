<template>
    <div class="icon">
        <div v-for="(bit, id) in bits" v-bind:key="id">
            <div class="square" 
            :class="[(bit == '1') ? 'full' : 'blank']">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["bits"],
      data() {
    return {
      full: 'full',
      blank: 'blank'
    };
  }
}
</script>

<style scoped>
.icon {
    margin: 0 1rem;
    width: 2.5rem;
    height: 2.5rem; 
    display: flex;
    flex-wrap: wrap;
    overflow-y: hidden;
    cursor: pointer;
}

.square {
    width: .5rem;
    height: .5rem;
    margin: 0rem;
    border: 0rem;
    padding: 0rem;
}

.full {
    background-color: grey;
}

.blank {
    background-color: transparent;
}

</style>