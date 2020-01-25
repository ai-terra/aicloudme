<template>
  <div class="tabs">
    <div class="tab" title="Status" @click="tab[matrixId] = '0'">CEO</div>
    <div class="tab" title="Status" @click="tab[matrixId] = 'a'">STATUS</div>
    <div class="tab" title="Rates" @click="tab[matrixId] = 'b'">RATES</div>
    <div class="tab" title="Docs" @click="tab[matrixId] = 'c'">DOCS</div>
    <div class="tab" title="Book" @click="tab[matrixId] = 'd'">BOOK</div>
    <div class="tab" title="Input" @click="tab[matrixId] = 'e'">INPUT</div>
    <div class="tab" title="Steps" @click="tab[matrixId] = 'f'">STEPS</div>
    <div class="tab" title="Output" @click="tab[matrixId] = 'g'">OUTPUT</div>
    <div class="tab" title="Pay" @click="tab[matrixId] = 'h'">PAY</div>
  </div>
</template>

<script>
export default {
  props: {
    tab: {
      type: Array
    },
    matrixId: {
      type: Number
    }
  }
};
</script>

<style scoped>
.tabs {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.tab {
  width: 11.11%;
  border-radius: 0px 0px 10px 10px;
  margin-left: 1px;
  margin-right: 1px;
  background-color: rgba(108, 167, 84, 0.7);
  color: white;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
}
</style>

