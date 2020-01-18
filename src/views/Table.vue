<template>
  <div class="table">
    <div v-for="(row, rowIndex) in matrix" :key="'row-' + rowIndex" class="container">
      <Cell
        v-for="(col, colIndex) in row"
        :key="'col-' + colIndex"
        :initialValue="matrix[rowIndex][colIndex]"
        :title="titleMatrix[rowIndex][colIndex]"
        :class="[
          (matrix[rowIndex][colIndex] == 'Click') ? 'click-btn' : '',
          (matrix[rowIndex][colIndex] == 'Cmd') ? 'cmd-btn' : '',
          (matrix[rowIndex][colIndex] == 'Order') ? 'order-btn' : '',
          (matrix[rowIndex][colIndex] == 'Verbal') ? 'verbal-btn' : '',
          (matrix[rowIndex][colIndex] == 'Post') ? 'post' : ''
        ]"
      ></Cell>
    </div>
  </div>
</template>

<script>
import Cell from "./Cell";

export default {
  name: "Table",
  components: { Cell },
  props: ["matrix", "sheetView"],
  data() {
    return {
      rowHelp: "Help text for "
    };
  },
  computed: {
    titleMatrix: function() {
      let result = [];
      // first run to read the original matrix
      for (let i in this.matrix) {
        let row = this.matrix[i];
        let resultRow = [];
        for (var j in row) {
          let col = row[j];
          resultRow.push(col);
        }
        result.push(resultRow);
      }
      // second run to set the help text for hovering over buttons
      for (let i in result) {
        let row = result[i];
        for (let j in row) {
          let helpText = result[i][j];
          if (helpText == "Click") {
            result[i][j] =
              "Run code and log result in tx blockchain\nEstimated time: milliseconds";
          } else if (helpText == "Cmd") {
            result[i][j] =
              "Execute command and log result in tx blockchain\nEstimated time: seconds";
          } else if (helpText == "Order") {
            result[i][j] =
              "Place order and log details in tx blockchain\nEstimated time: hours";
          } else if (helpText == "Verbal") {
            result[i][j] =
              "Verbal promise and log details in tx blockchain\nEstimated time: days";
          }
        }
      }

      return result;
    }
  }
  // mounted() {
  //   let helpIndex = this.matrix[this.row].indexOf("help");
  //   this.rowHelp = this.matrix[this.row][helpIndex + 2];
  // },
  // watch: {
  //   // eslint-disable-next-line no-unused-vars
  //   rowHelp: function(newRowHelp) {
  //     // eslint-disable-next-line no-console
  //     //console.log("Value changed to " + newValue);
  //   }
  // }
};
</script>

<style scoped>
.table {
  margin: 0px;
  border: 0px;
  padding: 0px;
}
.container {
  margin-left: -15px;
  /* border-right: 1px solid grey; */
  display: flex;
  padding-left: 0;
}
.click-btn {
  margin: 0px 0px;
  /* box-shadow: 1px 1px #888888; */
  border-radius: 8px 8px 8px 8px;
  background-color: lightsteelblue;
  color: black;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
}
.cmd-btn {
  margin: 0px 0px;
  /* box-shadow: 1px 1px #888888; */
  border-radius: 8px 8px 8px 8px;
  background-color: orange;
  color: black;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
}
.order-btn {
  margin: 0px 0px;
  /* box-shadow: 1px 1px #888888; */
  border-radius: 8px 8px 8px 8px;
  background-color: lightsalmon;
  color: black;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
}
.verbal-btn {
  margin: 0px 0px;
  /* box-shadow: 1px 1px #888888; */
  border-radius: 8px 8px 8px 8px;
  background-color: lightcoral;
  color: black;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
}

.post {
  /* background-image: url("./assets/amp-logo.png"); */
  /* background-color: lightblue; */
  color: darkblue;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
}
</style>