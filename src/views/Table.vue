<template>
  <div>
    <div v-for="(row, rowIndex) in matrix" :key="'row-' + rowIndex" class="container">
      <Cell
        v-for="(col, colIndex) in row"
        :key="'col-' + colIndex"
        :initialValue="matrix[rowIndex][colIndex]"
        :title="titleMatrix[rowIndex][colIndex]"
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
  computed: {
    titleMatrix: function() {
      var result = [];

      for (var i in this.matrix) {
        var row = this.matrix[i];
        var resultRow = [];
        for (var j in row) {
          var col = row[j];
          resultRow.push(col);
        }
        result.push(resultRow);
      }

      return result;
    }
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