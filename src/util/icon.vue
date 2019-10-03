<template>
    <div class="icon">

        <div class="bits-col1">
            <div v-for="(bit, id) in bits" v-bind:key="id">
                <div class="square" 
                :class="[(bit == '1') ? 'full' : 'blank']">
                </div>
            </div>
        </div>

        <div class="bits-col2">
            <div v-for="(bit, id) in bits" v-bind:key="id">
                <div class="square" 
                :class="[(bit == '1') ? 'full' : 'blank']">
                </div>
            </div>
        </div>

        <div class="bits-middle">
            <div v-for="(bit, id) in bits" v-bind:key="id">
                <div class="square" 
                :class="[(bit == '1') ? 'full' : 'blank']">
                </div>
            </div>
        </div>

        <div class="bits-col2">
            <div v-for="(bit, id) in bits" v-bind:key="id">
                <div class="square" 
                :class="[(bit == '1') ? 'full' : 'blank']">
                </div>
            </div>
        </div>

        <div class="bits-col1">
            <div v-for="(bit, id) in bits" v-bind:key="id">
                <div class="square" 
                :class="[(bit == '1') ? 'full' : 'blank']">
                </div>
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
    flex-direction: row;
    flex-wrap: wrap;
    overflow-y: hidden;
    cursor: pointer;
    background-color: yellowgreen;
}

.bits-col1 {
    width: .5rem;
    height: 2.5rem;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
}

.bits-col2 {
    width: .5rem;
    height: 2.5rem;
    display: flex;
    flex-direction: column-reverse;
    flex-wrap: wrap;
}

.bits-middle {
    width: .5rem;
    height: 2.5rem;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
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