<template>
  <div class="spreadsheet">
    <Table :matrix="sheet" :view="tabs"></Table>
  </div>
</template>

<script>
import Table from "./Table";

export default {
  name: "Spreadsheet",
  components: { Table },
  props: ["sheet", "tabs"]
};
</script>

<style scoped>
</style>