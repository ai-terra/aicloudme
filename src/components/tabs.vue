<template>
  <div class="tabs">
    <div
      class="tab"
      :class="matrixId == 0 ? 'logo-red':matrixId == 1 ? 'logo-yellow':'logo-blue'"
      title="Status"
      @click="tab[matrixId] = '0'"
    >BANK</div>
    <div
      class="tab"
      :class="matrixId == 0 ? 'logo-red':matrixId == 1 ? 'logo-yellow':'logo-blue'"
      title="Status"
      @click="tab[matrixId] = 'a'"
    >STATUS</div>
    <div
      class="tab"
      :class="matrixId == 0 ? 'logo-red':matrixId == 1 ? 'logo-yellow':'logo-blue'"
      title="Rates"
      @click="tab[matrixId] = 'b'"
    >RATES</div>
    <div
      class="tab"
      :class="matrixId == 0 ? 'logo-red':matrixId == 1 ? 'logo-yellow':'logo-blue'"
      title="Docs"
      @click="tab[matrixId] = 'c'"
    >DOCS</div>
    <div
      class="tab"
      :class="matrixId == 0 ? 'logo-red':matrixId == 1 ? 'logo-yellow':'logo-blue'"
      title="Book"
      @click="tab[matrixId] = 'd'"
    >BOOK</div>
    <div
      class="tab"
      :class="matrixId == 0 ? 'logo-red':matrixId == 1 ? 'logo-yellow':'logo-blue'"
      title="Input"
      @click="tab[matrixId] = 'e'"
    >INPUT</div>
    <div
      class="tab"
      :class="matrixId == 0 ? 'logo-red':matrixId == 1 ? 'logo-yellow':'logo-blue'"
      title="Steps"
      @click="tab[matrixId] = 'f'"
    >STEPS</div>
    <div
      class="tab"
      :class="matrixId == 0 ? 'logo-red':matrixId == 1 ? 'logo-yellow':'logo-blue'"
      title="Output"
      @click="tab[matrixId] = 'g'"
    >OUTPUT</div>
    <div
      class="tab"
      :class="matrixId == 0 ? 'logo-red':matrixId == 1 ? 'logo-yellow':'logo-blue'"
      title="Pay"
      @click="tab[matrixId] = 'h'"
    >PAY</div>
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

.logo-red {
  background-color: rgba(238, 71, 67, 0.7);
}

.logo-yellow {
  background-color: rgba(254, 203, 47, 0.7);
}

.logo-blue {
  background-color: rgba(43, 171, 238, 0.7);
}
</style>

