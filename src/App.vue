<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xs-12 col-sm-10 col-sm-offset-1 col-md-10 col-md-offset-1">
          <h1>ai mass progress</h1>
          <hr />
          <div id="ai-protocol">

            <div id="ai-prog">
              <button class="btn btn-primary" @click="addTableRow('progress-table', 1, [1, 'type', 'value', 'name','value', 'name1', 'value1'])">Next Step</button>
              <transition name="slide-down" type="animation" appear>
                <div id="progress" v-show="show">
                  <table id="progress-table">
                    <tr><th></th><th>A</th><th>B</th><th>C</th><th>D</th><th>E</th><th>F</th></tr>

                    <tr><td class="col0-head">1</td><td>Progress</td><td>status</td><td>...</td><td></td><td></td><td></td></tr>
                    <tr><td class="col0-data">a</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                    <tr><td class="col0-data">b</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                    <tr><td class="col0-data">c</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>

                    <tr><td class="col0-head">2</td><td>Rate</td><td>coins</td><td>...</td><td></td><td></td><td></td></tr>
                    <tr><td class="col0-data">a</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                    <tr><td class="col0-data">b</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                    <tr><td class="col0-data">c</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>

                    <tr><td class="col0-head">3</td><td>Terms</td><td>def</td><td>...</td><td></td><td></td><td></td></tr>
                    <tr><td class="col0-data">a</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                    <tr><td class="col0-data">b</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                    <tr><td class="col0-data">c</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>

                    <tr><td class="col0-head">4</td><td>Book</td><td>done</td><td>...</td><td></td><td></td><td></td></tr>
                    <tr><td class="col0-data">a</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                    <tr><td class="col0-data">b</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                    <tr><td class="col0-data">c</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>

                    <tr><td class="col0-head">5</td><td>Input</td><td>checks</td><td>...</td><td></td><td></td><td></td></tr>
                    <tr><td class="col0-data">a</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                    <tr><td class="col0-data">b</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                    <tr><td class="col0-data">c</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>

                    <tr><td class="col0-head">6</td><td>Steps</td><td>min</td><td>...</td><td></td><td></td><td></td></tr>
                    <tr><td class="col0-data">a</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                    <tr><td class="col0-data">b</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                    <tr><td class="col0-data">c</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>

                    <tr><td class="col0-head">7</td><td>Output</td><td>create</td><td>...</td><td></td><td></td><td></td></tr>
                    <tr><td class="col0-data">a</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                    <tr><td class="col0-data">b</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                    <tr><td class="col0-data">c</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>

                    <tr><td class="col0-head">8</td><td>Paid</td><td>value</td><td>...</td><td></td><td></td><td></td></tr>
                    <tr><td class="col0-data">a</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                    <tr><td class="col0-data">b</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                    <tr><td class="col0-data">c</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>

                  </table>
                </div>
              </transition>
            </div>

            <div id="ai-jobs">
              <button class="btn btn-primary" @click="show = !show">Next Job</button>
              <transition name="slide-up" type="animation" appear>
                <div id="project" v-show="show">
                  <table id="project-table">
                    <tr><th></th><th>A</th><th>B</th><th>C</th><th>D</th><th>E</th><th>F</th></tr>

                    <tr><td class="col0-head">1</td><td>Job</td><td>status</td><td>...</td><td></td><td></td><td></td></tr>
                    <tr><td class="col0-data">a</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                    <tr><td class="col0-data">b</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                    <tr><td class="col0-data">c</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>

                    <tr><td class="col0-head">2</td><td>Rate</td><td>coins</td><td>...</td><td></td><td></td><td></td></tr>
                    <tr><td class="col0-data">a</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                    <tr><td class="col0-data">b</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                    <tr><td class="col0-data">c</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>

                    <tr><td class="col0-head">3</td><td>Terms</td><td>def</td><td>...</td><td></td><td></td><td></td></tr>
                    <tr><td class="col0-data">a</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                    <tr><td class="col0-data">b</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                    <tr><td class="col0-data">c</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>

                    <tr><td class="col0-head">4</td><td>Book</td><td>done</td><td>...</td><td></td><td></td><td></td></tr>
                    <tr><td class="col0-data">a</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                    <tr><td class="col0-data">b</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                    <tr><td class="col0-data">c</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>

                    <tr><td class="col0-head">5</td><td>Input</td><td>create</td><td>...</td><td></td><td></td><td></td></tr>
                    <tr><td class="col0-data">a</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                    <tr><td class="col0-data">b</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                    <tr><td class="col0-data">c</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>

                    <tr><td class="col0-head">6</td><td>Steps</td><td>min</td><td>...</td><td></td><td></td><td></td></tr>
                    <tr><td class="col0-data">a</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                    <tr><td class="col0-data">b</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                    <tr><td class="col0-data">c</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>

                    <tr><td class="col0-head">7</td><td>Output</td><td>checks</td><td>...</td><td></td><td></td><td></td></tr>
                    <tr><td class="col0-data">a</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                    <tr><td class="col0-data">b</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                    <tr><td class="col0-data">c</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>

                    <tr><td class="col0-head">8</td><td>Paid</td><td>value</td><td>...</td><td></td><td></td><td></td></tr>
                    <tr><td class="col0-data">a</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                    <tr><td class="col0-data">b</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                    <tr><td class="col0-data">c</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                  </table>
                </div>
              </transition>
            </div>

            <div id="ai-ops">
              <button class="btn btn-primary" @click="load = !load">Next Task</button>
              <transition name="slide-down" type="animation" appear>
                <div id="service" v-show="show">
                  <table id="service-table">
                    <tr><th></th><th>A</th><th>B</th><th>C</th><th>D</th><th>E</th><th>F</th></tr>

                    <tr><td class="col0-head">1</td><td>Ops</td><td>status</td><td>...</td><td></td><td></td><td></td></tr>
                    <tr><td class="col0-data">a</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                    <tr><td class="col0-data">b</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                    <tr><td class="col0-data">c</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>

                    <tr><td class="col0-head">2</td><td>Rate</td><td>coins</td><td>...</td><td></td><td></td><td></td></tr>
                    <tr><td class="col0-data">a</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                    <tr><td class="col0-data">b</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                    <tr><td class="col0-data">c</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>

                    <tr><td class="col0-head">3</td><td>Terms</td><td>def</td><td>...</td><td></td><td></td><td></td></tr>
                    <tr><td class="col0-data">a</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                    <tr><td class="col0-data">b</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                    <tr><td class="col0-data">c</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>

                    <tr><td class="col0-head">4</td><td>Book</td><td>done</td><td>...</td><td></td><td></td><td></td></tr>
                    <tr><td class="col0-data">a</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                    <tr><td class="col0-data">b</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                    <tr><td class="col0-data">c</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>

                    <tr><td class="col0-head">5</td><td>Input</td><td>checks</td><td>...</td><td></td><td></td><td></td></tr>
                    <tr><td class="col0-data">a</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                    <tr><td class="col0-data">b</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                    <tr><td class="col0-data">c</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>

                    <tr><td class="col0-head">6</td><td>Steps</td><td>min</td><td>...</td><td></td><td></td><td></td></tr>
                    <tr><td class="col0-data">a</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                    <tr><td class="col0-data">b</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                    <tr><td class="col0-data">c</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>

                    <tr><td class="col0-head">7</td><td>Output</td><td>create</td><td>...</td><td></td><td></td><td></td></tr>
                    <tr><td class="col0-data">a</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                    <tr><td class="col0-data">b</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                    <tr><td class="col0-data">c</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>

                    <tr><td class="col0-head">8</td><td>Paid</td><td>value</td><td>...</td><td></td><td></td><td></td></tr>
                    <tr><td class="col0-data">a</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                    <tr><td class="col0-data">b</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                    <tr><td class="col0-data">c</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>

                  </table>
                </div>
              </transition>
            </div>

          </div>
          
          <br />
          <br />
          <!-- <transition name="fade">
          <div class="alert alert-info" v-if="show">This is some info</div>
          </transition>-->
          <div id="matcher">

          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      show: true,
      load: true
    };
  },
  // created: function() {
  //   this.addTableRow('progress', 1, [1, 'type', 'value', 'name','value', 'name1', 'value1']);
  // },
  methods: {
    addTableRow(tableId, contextId, array) {
      let table = document.getElementById(tableId);
      let row = table.insertRow(1);
      // row.className = "c" + contextId + " " + "b" + branchId;
      row.className = "t" + Date.now() + " "+ "c" + contextId;

      let l = array.length;
      let cell = [];

      for (let i = 0; i < l; i++) {
        cell[i] = row.insertCell(i);
        cell[i].innerHTML = array[i];
      }
    }
  }
};
</script>

<style>
#ai-protocol {
  display: flex;
  flex-direction: row;
}



.btn {
  margin-right: 10px;
}

table {
  width: 100%;
  background-color: white;
}

th {
  background-color: whitesmoke;
}

th,
td {
  padding: 0 0.5rem;
  border: 1px solid grey;
}

.col0-head,
.col0-data {
  text-align: center;
  background-color: whitesmoke;
}

.col0-head {
  font-weight: bold;
}

#matcher {
  width: 100%;
  height: 100%;
  display: inline-block;
}

#project,
#service,
#progress {
  width: 33%;
  height: 100%;
  margin: 0px;
  display: inline-block;
}

.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 1s;
}

.fade-leave {
  /* opacity: 1; */
}

.fade-leave-active {
  transition: opacity 1s;
  opacity: 0;
}

.slide-up-enter {
  opacity: 0;
  /* transform: translateY(20px); */
}

.slide-up-enter-active {
  animation: slide-up-in 0.125s ease-out forwards;
  transition: opacity 0.125s;
}

.slide-up-leave {
}

.slide-up-leave-active {
  animation: slide-up-out 0.125s ease-out forwards;
  transition: opacity 0.125s;
  opacity: 0;
}

@keyframes slide-up-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slide-up-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-20px);
  }
}

.slide-down-enter {
  opacity: 0;
  /* transform: translateY(20px); */
}

.slide-down-enter-active {
  animation: slide-down-in 0.125s ease-out forwards;
  transition: opacity 0.125s;
}

.slide-down-leave {
}

.slide-down-leave-active {
  animation: slide-down-out 0.125s ease-out forwards;
  transition: opacity 0.125s;
  opacity: 0;
}

@keyframes slide-down-in {
  from {
    transform: translateY(-20px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slide-down-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(20px);
  }
}
</style>
