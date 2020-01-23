<template>
  <div class="tabs">
    <div class="tab" title="Status">a</div>
    <div class="tab" title="Rates">b</div>
    <div class="tab" title="Docs">c</div>
    <div class="tab" title="Book">d</div>
    <div class="tab" title="Input">e</div>
    <div class="tab" title="Steps">f</div>
    <div class="tab" title="Output">g</div>
    <div class="tab" title="Pay">h</div>
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

