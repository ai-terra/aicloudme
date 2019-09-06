<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12">
          <div class="title-container">
            <!-- <div><img id="logo" src="./assets/amp-logo.png"></div> -->
            <div contenteditable="true">
                <h1 class="title-long">live biz&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1><h1 class="title-short"> ai cell&nbsp;</h1>
                <h5>live ai biz engines</h5>
            </div>
            <div class="title"><button class="player btn btn-success" @click="pause ? start() : stop()">{{ pause ? '>' : '| |'}}</button></div>
            <div class="title"><button class="player btn btn-warning" @click="play">+</button></div>
            <div class="title chromosomes" contenteditable="true">under dev daily deploys contributors welcome ✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦</div>
            <div class="title" contenteditable="true"><h1>&nbsp;new biz:</h1></div>
            <div class="title news-scroller" contenteditable="true">
              <ul>
                <li>Funded: Famous 5 mins AI Com Engine install</li>
                <li>Voting: Chinese, Hindi, Spanish, Arabic, Russian apps</li>
                <li>Idea: Add Issue & Help Requests to Job post loop</li>
              </ul>
            </div>
            <div class="title" contenteditable="true"><h1>&nbsp;&nbsp;&nbsp;&nbsp;new ops:</h1></div>
            <div class="title news-scroller" contenteditable="true">
              <ul>
                <li>COM: My Governance Team & AI Banks</li>
                <li>ORG: Political Party and Campaign Ops</li>
                <li>EDU: Research ranking and priorities</li>
              </ul>
            </div>
          </div>

          <div id="ai-protocol">

            <div id="ai-prog">
              <div class="buttons">
                <button contenteditable="true" class="next btn btn-warning" @click="setCell('project-table', 3, 5, 'votes')">Rank</button>
                <button contenteditable="true" class="next btn btn-primary" @click="nextBranch">Next Option</button>
                <button contenteditable="true" class="next btn btn-primary" @click="addNewRule">New Rule:</button>
                <input type="text" class="input-add-new" name="new-rule" value="eg: ECO - use eco first services" size="40" maxlength="40">
                <!-- <button contenteditable="true" class="next btn btn-primary" @click="addTableRow('progress-table', 8, [1, 'type', 'value', 'name','value', 'name1', 'value1'])">Next Pay</button> -->
              </div>
              <ul class="list-group">
                <transition-group name="slide-down" type="animation" appear>
                  <li class="list-group-item" v-for="project in projects" v-bind:key="project">
                    <h3>&nbsp;&nbsp;&nbsp;livebook ( team-{{ project }}, ops-{{ services[0] }}, branch {{ branch }}/{{ branches[0] }}, 'TRUST')</h3>

                    <table id="progress-table" class="matrix">
                      <tr class="row">
                        <td class="cell" @click="expandRows">{{ corner }}</td>
                        <td class="cell" v-for="(h, index) in header" v-bind:key="index">{{ h }}</td>                       
                      </tr>                      
                      <tr class="row" v-for="(row, rowIndex) in matrixIni" v-bind:key="rowIndex">                          
                        <td contenteditable="true" class="cell" 
                        matrix="Res" 
                        v-for="(col, colIndex) in row" v-bind:key="colIndex"
                        :row="rowIndex" :col="colIndex"
                        @click="onCellClick"
                        >
                          {{ col }}
                        </td>
                      </tr>

                    </table>

                  </li>
                </transition-group>
              </ul>
              <div class="background-text">
                <p>&nbsp;</p>
                <!-- <p>RES</p> -->
              </div>
            </div>

            <div id="ai-jobs">
              <div class="buttons">
                <button contenteditable="true" class="next btn btn-primary" @click="nextProject">Next Project</button>
                <button contenteditable="true" class="next btn btn-primary" @click="show = !show">New Team:</button>
                <input type="text" class="input-add-new" name="new-job" value="eg: Add Job Request to Job News" size="40" maxlength="40">
                <button class="next btn btn-warning" @click="runOneOps">+</button>
              </div>
              <ul class="list-group">
                <transition-group name="slide-up" type="animation" appear>
                  <li class="list-group-item" v-for="project in projects" v-bind:key="project">
                    <h3>&nbsp;project {{ project }}: title[{{ project }}] - owner[{{ project }}] - [shares] - team-{{ project }}</h3>

                    <table id="project-table" class="matrix">
                      <tr class="row">
                        <td class="cell" @click="expandRows">{{ corner }}</td>
                        <td class="cell" v-for="(h, index) in header" v-bind:key="index">{{ h }}</td>                       
                      </tr>                      
                      <tr class="row" v-for="(row, rowIndex) in matrixIni" v-bind:key="rowIndex">                          
                        <td contenteditable="true" class="cell" 
                        matrix="Dev" 
                        v-for="(col, colIndex) in row" v-bind:key="colIndex"
                        :row="rowIndex" :col="colIndex"
                        @click="onCellClick"
                        >
                          {{ col }}
                        </td>
                      </tr>

                    </table>

                  </li>
                </transition-group>
              </ul>
              <div class="background-text">
                <p>&nbsp;</p>
                <!-- <p>REQ</p> -->
              </div>
            </div>

            <div id="ai-ops">
              <div class="buttons">
                <button contenteditable="true" class="next btn btn-primary" @click="nextService">Next Service</button>
                <button contenteditable="true" class="next btn btn-primary" @click="load = !load">New Ops:</button>
                <input type="text" class="input-add-new" name="new-ops" value="eg: Execute or book top required ops." size="40" maxlength="40">
                <button class="next btn btn-warning" @click="runOneOps">+</button>
              </div>
              <ul class="list-group">
                <transition-group name="slide-down" type="animation" appear>
                  <li class="list-group-item" v-for="service in services" v-bind:key="service">
                    <h3>&nbsp;&nbsp;&nbsp;service {{ service }}: title[{{ service }}] - owner[{{ service }}] - [shares] - ops-{{ service }}</h3>
                    
                    <table id="service-table" class="matrix">
                      <tr class="row">
                        <td class="cell" @click="expandRows">{{ corner }}</td>
                        <td class="cell" v-for="(h, index) in header" v-bind:key="index">{{ h }}</td>                       
                      </tr>
                      <tr class="row" v-for="(row, rowIndex) in matrixIni" v-bind:key="rowIndex">                          
                        <td contenteditable="true" class="cell" 
                        matrix="Ops" 
                        v-for="(col, colIndex) in row" v-bind:key="colIndex"
                        :row="rowIndex" :col="colIndex"
                        @click="onCellClick"
                        >
                          {{ col }}
                        </td>
                      </tr>
                    </table>

                  </li>
                </transition-group>
              </ul>
              <div class="background-text">
                <p>&nbsp;</p>
                <!-- <p>OPS</p> -->
              </div>
            </div>

          </div>

          <div class="background-signs">
            <p><span v-html="backgroundText"></span></p>
          </div>

          <div id="editor">
            <div class="buttons">
              <div><h2 class="title"><i>fx</i></h2></div>
              <div class="input-edit" contenteditable="true" >{{ fx }}</div>
              <button class="edit btn btn-warning" @click="show = !show;">Commit</button>
              <button class="edit btn btn-warning" @click="runOneOps">+</button>
              <button class="edit player btn btn-success" @click="pause ? start() : stop()">{{ pause ? '>' : '| |' }}</button>
              <div><h2 class="title" contenteditable="true"></h2></div>
              <button class="edit btn btn-primary" @click="show = !show;">Values</button>
              <button class="edit btn btn-primary" @click="show = !show;">Members</button>
              <button class="edit btn btn-primary" @click="show = !show;">Projects</button>
              <button class="edit btn btn-primary" @click="show = !show;">Services</button>
              <button class="edit btn btn-primary" @click="show = !show;">Engine</button>
              <button class="edit btn btn-primary" @click="show = !show;">Wiki</button>
              <button class="edit btn btn-danger" @click="show = !show;">Code</button>
              <button class="edit btn btn-warning" @click="show = !show;"><b>&lt;</b></button>
              <button class="edit btn btn-success" @click="show = !show;"><b>EDU</b></button>
            </div>

            <div id="editor-tabs">

              <div id="text-editor">
                <textarea id="textEdit" v-model="textEdit" placeholder="Edit your AI Post & Ops here."></textarea>
              </div>

              <div id="table-editor">
                <table class="matrix">
                  <tr class="row">
                    <td class="cell" @click="expandRows" @click.prevent.right="tabViews">{{ corner }}</td>
                    <td class="cell" v-for="(h, index) in header" v-bind:key="index">{{ h }}</td>                       
                  </tr>

                  <tr class="row" v-for="(row, rowIndex) in matrixIni" v-bind:key="rowIndex">                          
                    <td contenteditable="true" class="cell" 
                    matrix="Editor" 
                    v-for="(col, colIndex) in row" v-bind:key="colIndex"
                    :row="rowIndex" :col="colIndex"
                    @click="onCellClick"
                    >
                      {{ col }}
                    </td>
                  </tr>                                 

                </table>
              </div>

            </div>

          </div>

          <div id="footer">
            <div class="title-container">
              <div class="footer-items">
                <h4 class="title-long">W3AI Meetups 
                  <a href="https://www.meetup.com/SocialAI/">Toronto </a> 
                  <a href="https://www.meetup.com/Manhattan-AIR/">NYC </a> 
                  <a href="https://www.meetup.com/HalifaxAIG/">Halifax </a>
                </h4>
                <h4 class="title-long">© Ianta Labs | MIT License</h4>
                <h4 class="title-long"><a href="https://github.com/ai-teams/live-biz">
                Download Free AI Engine @ Github</a></h4>
                <h4 class="title-long" contenteditable="true">live biz by ai teams</h4>
              </div>            
            </div>
            <!-- <div id="ai-engines">
              <h4>free ai engine web apps</h4>
              <h4>auto updated ai cells</h4>
            </div>               -->
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
      interval: 'timer', 
      speed: 2000,  // milliseconds
      backgroundText: `&nbsp;&nbsp;live &nbsp; &nbsp;&nbsp;biz &nbsp; &nbsp;ops
            <br><br>
            ai &nbsp; biz &nbsp; engine`,
      liveText: `&nbsp;&nbsp;live &nbsp; &nbsp;&nbsp;biz &nbsp; &nbsp;ops
            <br><br>
            ai &nbsp; biz &nbsp; engine`,
      devText: `&nbsp;&nbsp;res &nbsp;=&nbsp;&nbsp;dev &nbsp;⋆&nbsp;ops
      <br><br>
      ai &nbsp; biz &nbsp; engine`,
      visibleRows: 1,
      visibleTab: 1,
      pause: true,
      show: true,
      load: true,
      rules: ['FAST'],
      results: [8],
      projects: [24],
      branch: 1,
      branches: [360],
      services: [7],
      blockchains: [365],
      currentTable: '',
      currentRow: '',
      currentCol: '',
      currentCellVal: '',
      fx: '',
      corner: 'a',
      header: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
      blankTabMatrix: [['a','','','','','','','','','','','','','','','','','','','','','','','','','','']],
      blankTabRow: ['a','','','','','','','','','','','','','','','','','','','','','','','','','',''],
      textEdit: `
Hello World!

This is your first business post.
Add a check list to transform it in a biz project.
Or add cloud ops to get your business live.

free biz cells to share:
github.com/ai-teams/live-biz`,
      matrixIni: [
        // ['a','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
        ['1','STATUS',':','post','','','','','','','','','','','','','','','','','','','','','','',''],
        ['a','','','','','','','','','','','','','','','','','','','','','','','','','',''],
        ['2','FUNDS',':','money','','','','','','','','','','','','','','','','','','','','','','',''],
        ['a','','','','','','','','','','','','','','','','','','','','','','','','','',''],
        ['3','DOCS',':','terms','','','','','','','','','','','','','','','','','','','','','','',''],
        ['a','','','','','','','','','','','','','','','','','','','','','','','','','',''],
        ['4','BOOK',':','done','','','','','','','','','','','','','','','','','','','','','','',''],
        ['a','','','','','','','','','','','','','','','','','','','','','','','','','',''],
        ['5','INPUT',':','create','','','','','','','','','','','','','','','','','','','','','','',''],
        ['a','','','','','','','','','','','','','','','','','','','','','','','','','',''],
        ['6','STEPS',':','plan','','','','','','','','','','','','','','','','','','','','','','',''],
        ['a','','','','','','','','','','','','','','','','','','','','','','','','','',''],
        ['7','OUTPUT',':','test','','','','','','','','','','','','','','','','','','','','','','',''],
        ['a','','','','','','','','','','','','','','','','','','','','','','','','','',''],
        ['8','PAY',':','paid','','','','','','','','','','','','','','','','','','','','','','',''],
        ['a','','','','','','','','','','','','','','','','','','','','','','','','','','']
      ]
    };
  },
  methods: {
    start() {
      this.pause = false;
      this.interval = setInterval(this.play, this.speed);
      this.backgroundText = this.liveText;
    },
    play() {
      // To add a conditional for visualization/animation or not
      this.runOneOps();
      this.nextProject();
      // this.readProject();
      this.nextService();
      // this.readService();
    },
    stop() {
      this.pause = true;
      clearInterval(this.interval);
      this.backgroundText = this.devText;
    },
    runOneOps() {
      // Read/update current Service and Project tables/matrix - to include user edits
      this.readProject();
      this.readService();

      // Run/Eval Service Input queries on Project data and add/update results as step[0]

      // Run/Eval Service Steps/Functions/Commands and update Service results

      // Run/Eval Service Output queries and update Project Output And Blockchain Branches
      this.writeProgress();
    },
    readProject() { // Read user edits/updates in project table
      // ToDo readProject()
      let projectTable = document.getElementById('project-table');  // To move in an ini method?
      
      // Read VOTING, FUNDS, TERMS and BOOK tabs from project table
      for (let row = 2; row <= 8; row=row+2) {
        let x = projectTable.rows[row].cells;
        for (let col = 1; col <= 13; col=col+2) { // for demo read vizible cols
          // x[col].innerHTML = value; // set value => should read cell into projectMatrix
          x[col].classList.add('fade-on-job-rules-read');
        }
      }
      
      // Read INPUT, STEPS, OUTPUT and PAY tabs from project table
      for (let row = 10; row <= 16; row=row+2) {
        let x = projectTable.rows[row].cells;
        for (let col = 1; col <= 13; col=col+2) { // for demo read vizible cols
          // x[col].innerHTML = value; // set value => should read cell into projectMatrix
          x[col].classList.add('fade-on-job-status-read');
        }
      }

      // el.style.opacity = 0.5;
      // done();
    },
    readService() { // Read user edits/updates in service table
      // Todo readService()
      let serviceTable = document.getElementById('service-table');  // To move in an ini method?
      
      // Read VOTING, FUNDS, TERMS and BOOK tabs from service table
      for (let row = 2; row <= 8; row=row+2) {
        let x = serviceTable.rows[row].cells;
        for (let col = 1; col <= 13; col=col+2) { // for demo read vizible cols
          // x[col].innerHTML = value; // set value => should read cell into projectMatrix
          x[col].classList.add('fade-on-ops-rules-read');
        }
      }
      
      // Read INPUT, STEPS, OUTPUT and PAY tabs from service table
      for (let row = 10; row <= 16; row=row+2) {
        let x = serviceTable.rows[row].cells;
        for (let col = 1; col <= 13; col=col+2) { // for demo read vizible cols
          // x[col].innerHTML = value; // set value => should read cell into projectMatrix
          x[col].classList.add('fade-on-ops-exe-read');
        }
      }
      // done();
    },
    writeProgress() { // Read user edits/updates in progress table
      // Todo readService()
      let serviceTable = document.getElementById('progress-table');  // To move in an ini method?
      
      // Write VOTING, FUNDS, TERMS and BOOK tabs to progress table
      for (let row = 2; row <= 8; row=row+2) {
        let x = serviceTable.rows[row].cells;
        for (let col = 1; col <= 13; col=col+2) { // for demo read vizible cols
          // x[col].innerHTML = value; // set value => should read cell into projectMatrix
          x[col].classList.add('fade-on-block-deal-write');
        }
      }
      
      // Write INPUT, STEPS, OUTPUT and PAY tabs to progress table
      for (let row = 10; row <= 16; row=row+2) {
        let x = serviceTable.rows[row].cells;
        for (let col = 1; col <= 13; col=col+2) { // for demo read vizible cols
          // x[col].innerHTML = value; // set value => should read cell into projectMatrix
          x[col].classList.add('fade-on-block-pay-write');
        }
      }
      // done();
    },
    onCellClick(el) {
      let m = this.currentTable = el.target.getAttribute('matrix');
      let r = this.currentRow = el.target.getAttribute('row');
      let c = this.currentCol = el.target.getAttribute('col');
      let v = this.currentCellVal = el.target.innerHTML.trim();
      // this.fx = '$ ' + m + r + c + v;
      if ( this.fx[0] === '=' ) {
        this.fx += this.currentTable[0].toUpperCase() 
                + Math.floor(this.currentRow/(this.visibleRows+1) + 1)
                + this.header[this.currentCol - 1] 
                + this.header[this.currentRow%(this.visibleRows+1) - 1].toLowerCase();
      } else {
        this.fx = this.currentCellVal;
      }
      this.textEdit = ' > ' + m + ' ' + r + ' ' + c + ' ' + v + '\n' + this.textEdit;
    },
    expandRows() {
      this.visibleRows++;
      this.corner = this.header[this.visibleRows - 1].toLowerCase();
      // add blankRows to the matrix table
      let newRow = this.blankTabRow.slice(0); // copy blankTabRow to new array
      newRow[0] = this.corner;
      for (let tab = 0; tab < 8; tab++) {
        // insert newRow in matrix at index - first param
        this.matrixIni.splice(this.visibleRows + (this.visibleRows + 1) * tab, 0, newRow);
      }
    },
    tabViews() {
      // add remaining rows to the end of alphabet
      for (let rows = this.visibleRows; rows < this.header.length; rows++) {
        this.expandRows();
      }
      this.corner = this.visibleTab;
    },
    showPause() { // Toggle play button between play '>' and pause '||'
      return this.pause ? '| |' :  '>';
    },
    nextBranch() {  // To add animation for showing the next branch table
      this.branch++;
    },
    addNewRule() {
      this.rules.push('new rule');
    },
    nextProject() {
      // let projectsNo = this.projects.length;
      this.projects.push(Math.floor(Math.random()*100)); // add project to end/bottom
      this.projects.shift();  // removes the first project
      // ToDo: add branches and results structures to project data structure - Code below is just demo/dummy
      this.branches.push(Math.floor(Math.random()*100));
      this.branches.shift();
      this.branch = 1;
    },
    nextService() {
      // let servicesNo = this.services.length;
      this.services.unshift(Math.floor(Math.random()*100)); // add service to top
      this.services.pop();  // removes the last service
    },
    // ToDo - To include in Processor / Eval workflow
    addTableRow(tableId, contextId, array) {
      let table = document.getElementById(tableId);
      let row = table.insertRow(1);
      // row.className = "t" + Date.now() + " "+ "c" + contextId;

      let l = array.length;
      let cell = [];

      for (let i = 0; i < l; i++) {
        cell[i] = row.insertCell(i);
        cell[i].innerHTML = array[i];
      }
    },
    // TODO - check table/rows/cells length, etc
    setCell(tableId, row, col, value) {
      let table = document.getElementById(tableId);
      let x = table.rows[row].cells;

      x[col].innerHTML = value;

      x[col].classList.add('fade-on-change');
    }
  }
};
</script>

<style>
html {
  /* font-size: 80%; */
  /* font-size: smaller; */
  /* font-size: calc(14px - .5vw); */
}

.container-fluid {
  padding: 0px;
  overflow-x: hidden;
}

#logo {
  width: 2.7rem;
  height: 2.7rem;
  margin: .9rem 2rem 0 0rem;
}

.title-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 1rem;
}

.title {
  align-self: center;
  margin: 15px 10px 0px 0px;
}

.player {
  margin-left: 1rem;
  width: 3rem;
}

.chromosomes {
  height: 3.4rem;
  width: 26rem;
  margin-top: 1.2rem;
  line-height: 90%;
  word-break: break-word; 
  color: rgba(108, 167, 84, 1);
  overflow-y: auto;
}

.news-scroller {
  width: 35rem;
  height: 5.25rem;
  border: 1px solid rgba(108, 167, 84, 1);
}

#ai-protocol {
  width: 100%;
  height: 64rem;
  display: flex;
  flex-direction: row;
  overflow-y: auto;
  overflow-x: hidden;
}

#editor {
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
}

#editor-tabs {
  width: 100%;
  display: flex;
  flex-direction: row;
}

#table-editor,
#text-editor {
  width: 50%;
  overflow-x: auto;
}

#textEdit {
  padding: 1rem;
  font-size: 2rem;
  width: 100%;
  height: 100%;
  background-color: transparent;
}

.buttons {
  margin-left: 1rem;
  display: flex;
  align-items: center;
  align-content: space-around;
}

#ai-prog,
#ai-jobs,
#ai-ops {
  width: 33.33%;
  display: flex;
  flex-direction: column;
}

.btn {
  margin: 10px 0;
}

.next {
  max-width: 12rem;
  margin-right: 1rem;
}

.input-add-new {
  border-top: 5px;
  padding-left: 5px;
  margin-right: 1rem;
  width: 26rem;
  height: 3rem;
  font-size: 1.5rem;
}

h2.title-long {
  margin: 0 0 0 5rem;
}

h2.title {
  margin: 0 0 0 1rem;
}

.edit {
  margin-right: 1rem;
}

.input-edit {
  border: 1px solid lightgray;
  padding-left: 5px;
  padding-top: 2px;
  margin: 0rem 1rem 0 1rem;
  width: 75rem;
  height: 3rem;
  font-size: 2rem;
}

.matrix {
  margin-left: 1.3rem;
}

.row {
  display: flex;
  flex-direction: row;
  padding: 0px;
}

li.list-group-item {
  padding: 0px;
}

.list-group {
  margin: 0px;
  overflow-x: auto;
  overflow-y: auto;
  border: 1px solid grey;
  background: transparent;
}

.list-group-item {
  margin: 0px;
  border: 0px;
  background: transparent;
}

.cell:nth-child(even) {
  width: 7rem;
}

.cell:nth-child(odd) {
  text-align: center;
}

.cell-edit:nth-child(even) {
  width: 10rem;
}

.list-row {
  margin: 0px;
  border: 0px;
  padding: 0px;
}

.cell,
.cell-edit {
  padding: 0 0.5rem;
  min-width: 3rem;
  max-width: 10rem;
  overflow-x: auto;
  overflow-wrap: normal;
}

.cell:hover {
  background-color: rgba(108, 167, 84, .5);
}

table {
  width: 100%;
  overflow-x: auto;
  border-bottom: 1px solid grey;
}

th {
  min-width: 2rem;
  background-color: whitesmoke;
}

th,
td {
  padding: 0 0.5rem;
  border-left: 1px solid grey;
}

tr {
  border-top: 1px solid grey;
}

td:hover {
  background-color: rgba(108, 167, 84, .5);
}

@keyframes fade-in {
  from {background-color: rgba(108, 167, 84, .2);}
  to {background-color: rgba(108, 167, 84, .4);}
}
@keyframes fade-out {
  from {background-color: rgba(100, 100, 100, .2);}
  to {background-color: rgba(100, 100, 100, .4);}
}

/* .fade-on-job-rules-read {
  background-color: rgba(238, 71, 67, .2);
  animation:  fade-in .125s .250s 1 backwards,
              fade-out .125s .250s 1 backwards;
} */

.fade-on-job-rules-read {
  background-color: rgba(238, 71, 67, .2);
  animation:  fade-in .125s 1;
}

.fade-on-ops-rules-read {
  background-color: rgba(238, 71, 67, .2);
  animation: fade-in .250s 1;
}

.fade-on-job-status-read {
  background-color: rgba(254, 233, 78, .2);
  animation: fade-in .500s 1;
}

.fade-on-ops-exe-read {
  background-color: rgba(58, 155, 252, .2);
  animation: fade-in .625s 1;
}

.fade-on-block-deal-write {
  background-color: rgba(108, 167, 84, .2);
  animation: fade-in .375s 1;
}

.fade-on-block-pay-write {
  background-color: rgba(254, 233, 78, .2);
  animation: fade-in .750s 1;
}

.fade-on-change {
  background-color: rgba(108, 167, 84, 0);
  animation: fade-in .125s 1;
}

.fade-on-done {
  background-color: transparent;
  animation: fade-in .125s 1;
}

.col0-head,
.col0-data {
  text-align: center;
  max-width: 1.5rem;
  background-color: whitesmoke;
}

.col0-head {
  font-weight: bold;
}

#project,
#service,
#progress {
  width: 100%;
  margin: 0px;
  overflow-x: auto;
  overflow-y: auto;
  display: inline-block;
}

#project-table,
#service-table,
#progress-table {
  width: 100%;
  /* margin: 0px; */
}

.background-text {
  text-align: center;
  position: relative;
  transform: translate(1rem, -25rem);
  color: lightgrey;
  z-index: -1;
}

.background-signs {
  font-size: 18rem;
  text-align: center;
  position: relative;
  transform: translate(0rem, -51.5rem);
  color: lightgrey;
  z-index: -1;
}

#edit-title {
  margin-left: 1rem;
}

.grey {
  color: lightgrey;
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
  transform: translateY(20px);
}

.slide-up-enter-active {
  animation: slide-up-in 0.250s ease-out forwards;
  transition: opacity 0.250s;
}

.slide-up-leave {
}

.slide-up-leave-active {
  animation: slide-up-out 0.250s ease-out forwards;
  transition: opacity 0.250s;
  opacity: 0;
  position: relative;
}

.slide-up-move {
  transition: transform 0.250s;
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
  transform: translateY(20px);
}

.slide-down-enter-active {
  animation: slide-down-in 0.250s ease-out forwards;
  transition: opacity 0.250s;
}

.slide-down-leave {
}

.slide-down-leave-active {
  animation: slide-down-out 0.250s ease-out forwards;
  transition: opacity 0.250s;
  opacity: 0;
  position: relative;
}

.slide-down-move {
  transition: transform 0.250s;
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

.footer-items {
  display: flex;
  align-items: center;
}

h4 {
  padding-right: 7rem;
}

@media screen and (min-width: 1200px) {

  h1.title-short {
    display: none;
  }

  div.background-text {
    font-size: 18rem;
  }

  #editor {
    transform: translate(0, -92.5rem);
  }

  #footer {
    transform: translate(0, -92rem);
  }

  .footer-items {
    flex-direction: row;
  }
}

@media screen and (max-width: 1200px) {

  h1.title-long {
    display: none;
  }

  #ai-prog {
    display: none;
  }

  #ai-jobs,
  #ai-ops {
    width: 50%;
  }

  div.buttons {
    display: none;
  }

  div.background-text {
    display: none;
  }

  div.background-signs {
    display: none;
  }

  #editor {
    display: none;
  }

  .footer-items {
      flex-direction: column;
  }
}
</style>
