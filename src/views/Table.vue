<template>
  <div>
    <div v-for="(row, rowIndex) in matrix" :key="'row-' + rowIndex" class="container">
      <Cell
        v-for="(col, colIndex) in row"
        :key="'col-' + colIndex"
        :initialValue="matrix[rowIndex][colIndex]"
        :title="rowHelp + matrix[rowIndex][colIndex]"
      ></Cell>
    </div>
  </div>
</template>

<script>
import Cell from "./Cell";

export default {
  name: "Table",
  components: { Cell },
  props: ["matrix"],
  data() {
    return {
      rowHelp: "Help text for "
    };
  },
  mounted() {
    let helpIndex = this.matrix[this.row].indexOf("help");
    this.rowHelp = this.matrix[this.row][helpIndex + 2];
  },
  watch: {
    // eslint-disable-next-line no-unused-vars
    rowHelp: function(newRowHelp) {
      // eslint-disable-next-line no-console
      //console.log("Value changed to " + newValue);
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  padding-left: 0;
}
</style>