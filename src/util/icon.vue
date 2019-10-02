<template>
    <div class="icon">
        <div v-for="(bits, id) in 9" v-bind:key="id">
            <div class="square" 
            :class="(bits[id] == '1') ? 'full' : 'blank'"></div>
        </div>
    </div>
</template>

<style scoped>
.icon {
    width: 3rem;
    height: 3rem; 
}

.square {
    width: 1rem;
    height: 1rem;
}

.full {
    background-color: grey;
}

.blank {
    background-color: transparent;
}

</style>