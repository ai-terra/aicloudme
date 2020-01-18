<template>
  <div class="spreadsheet">
    <Table :matrix="sheet" :tabs-direction="tabs-direction"></Table>
  </div>
</template>

<script>
import Table from "./Table";

export default {
  name: "Spreadsheet",
  components: { Table },
  props: ["sheet", "tabs-direction"]
};
</script>

<style scoped>
</style>