<template>
  <div class="tabs">
    <div class="tab" title="Status">STATUS</div>
    <div class="tab" title="Rates">RATES</div>
    <div class="tab" title="Docs">DOCS</div>
    <div class="tab" title="Book">BOOK</div>
    <div class="tab" title="Input">INPUT</div>
    <div class="tab" title="Steps">STEPS</div>
    <div class="tab" title="Output">OUTPUT</div>
    <div class="tab" title="Pay">PAY</div>
  </div>
</template>

<style scoped>
.tabs {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.tab {
  width: 12.5%;
  border-radius: 0px 0px 10px 10px;
  margin-left: 1px;
  margin-right: 1px;
  background-color: rgba(108, 167, 84, 0.7);
  color: white;
  text-align: center;
  font-weight: bold;
}
</style>

