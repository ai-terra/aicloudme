<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12">
          <div class="title-container">
            <!-- <div><img id="logo" src="./assets/amp-logo.png"></div> -->
            <div contenteditable="true">
                <h1 class="title-long">AI Ops Engine&nbsp;</h1><h1 class="title-short"> AI Ops&nbsp;</h1>
                <h5>max performance﹡profit﹡progress</h5>
            </div>
            <div class="title"><button class="player btn btn-success" @click="pause ? start() : stop()">{{ pause ? '>' : '| |'}}</button></div>
            <div class="title"><button class="player btn btn-warning" @click="play">+</button></div>
            <div class="title chromosomes" contenteditable="true">✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦</div>
            <div class="title" contenteditable="true"><h1>Jobs News:</h1></div>
            <div class="title news-scroller" contenteditable="true">
              <ul>
                <li>Idea: Add Job Request to Job News</li>
                <li>Budgeted: Table scrapper</li>
                <li>Social: Job ranking and priorities</li>
              </ul>
            </div>
            <div class="title" contenteditable="true"><h1>Skills News:</h1></div>
            <div class="title news-scroller" contenteditable="true">
              <ul>
                <li>Idea: Friendly community platform</li>
                <li>Budgeted: Table scrapper</li>
                <li>Social: Job ranking and priorities</li>
              </ul>
            </div>
          </div>

          <div id="ai-protocol">

            <div id="ai-prog">
              <div class="buttons">
                <button contenteditable="true" class="next btn btn-warning" @click="setCell('project-table', 3, 5, 'votes')">Rank</button>
                <button contenteditable="true" class="next btn btn-primary" @click="nextBranch">Next Branch</button>
                <button contenteditable="true" class="next btn btn-primary" @click="addNewRule">New Rule:</button>
                <input type="text" class="input-add-new" name="new-rule" value="eg: cheapest - use cheapest operations" size="40" maxlength="40">
                <!-- <button contenteditable="true" class="next btn btn-primary" @click="addTableRow('progress-table', 8, [1, 'type', 'value', 'name','value', 'name1', 'value1'])">Next Pay</button> -->
              </div>
              <ul class="list-group">
                <transition-group name="slide-down" type="animation" appear>
                  <li class="list-group-item" v-for="project in projects" v-bind:key="project"><h3>&nbsp;&nbsp;&nbsp;Blockchain ( Job-{{ project }}, Ops-{{ services[0] }}, Branch {{ branch }}/{{ branches[0] }}, 'fastest')</h3>

                    <table id="progress-table" class="matrix">
                      <tr class="row" v-for="(row, index) in mixops" v-bind:key="index">                          
                        <td contenteditable="true" class="cell" v-for="(col, index) in row" v-bind:key="index">
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
                <button contenteditable="true" class="next btn btn-primary" @click="show = !show">New Request:</button>
                <input type="text" class="input-add-new" name="new-job" value="eg: Add Job Request to Job News" size="40" maxlength="40">
                <button class="next btn btn-warning" @click="play">+</button>
              </div>
              <ul class="list-group">
                <transition-group name="slide-up" type="animation" appear>
                  <li class="list-group-item" v-for="project in projects" v-bind:key="project"><h3>&nbsp;&nbsp;&nbsp;Project {{ project }}: Title[{{ project }}] - Friend[{{ project }}] - [Interest] - Job-{{ project }}</h3>

                    <table id="project-table" class="matrix">
                      <tr class="row" v-for="(row, index) in mixops" v-bind:key="index">                          
                        <td contenteditable="true" class="cell" v-for="(col, index) in row" v-bind:key="index">
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
                <button contenteditable="true" class="next btn btn-primary" @click="load = !load">New Offer:</button>
                <input type="text" class="input-add-new" name="new-ops" value="eg: Execute or book top required ops." size="40" maxlength="40">
                <button class="next btn btn-warning" @click="play">+</button>
              </div>
              <ul class="list-group">
                <transition-group name="slide-down" type="animation" appear>
                  <li class="list-group-item" v-for="service in services" v-bind:key="service"><h3>&nbsp;&nbsp;&nbsp;Service {{ service }}: Title[{{ service }}] - Friend[{{ service }}] - [Interest] - Ops-{{ service }}</h3>
                    
                    <table id="service-table" class="matrix">
                      <tr class="row" v-for="(row, index) in mixops" v-bind:key="index">                          
                        <td contenteditable="true" class="cell" v-for="(col, index) in row" v-bind:key="index">
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
            <p>VAL = JOB ﹡ OPS
            <br><br>
            Web &nbsp;Bank &nbsp;Engine</p>
          </div>

          <div id="editor">
            <div class="title-container">
              <div>
                  <h2 class="title-long">Edit</h2>
              </div>
              <div class="title"><button class="btn btn-primary" @click="show = !show;">Interests</button></div>
              <div class="title"><button class="btn btn-primary" @click="show = !show;">Friends</button></div>
              <div class="title"><button class="btn btn-primary" @click="show = !show;">Rules</button></div>
              <div class="title"><button class="btn btn-primary" @click="show = !show;">+Project</button></div>
              <div class="title"><button class="btn btn-primary" @click="show = !show;">+Service</button></div>
              <div class="title"><button class="btn btn-warning" @click="show = !show;">Commit</button></div>
              <div class="title"><button class="btn btn-warning" @click="play">+</button></div>
              <div class="title"><button class="player btn btn-success" @click="pause ? start() : stop()">{{ pause ? '>' : '| |' }}</button></div>
            </div>

            <table class="matrix">
              <tr class="row" v-for="(row, index) in mixops" v-bind:key="index">                          
                <td contenteditable="true" class="cell-edit" v-for="(col, index) in row" v-bind:key="index">
                  {{ col }}
                </td>
              </tr>
            </table>

            <!-- <table id="edit-table" contenteditable="true">
              <tr><th class="col0-head"> </th><th>A</th><th>B</th><th>C</th><th>D</th><th>E</th><th>F</th><th>G</th><th>H</th><th>I</th><th>J</th><th>K</th><th>L</th><th>M</th><th>N</th><th>O</th><th>P</th><th>Q</th><th>R</th><th>S</th><th>T</th><th>U</th><th>V</th><th>W</th><th>X</th><th>Y</th><th>Z</th></tr>

              <tr><td class="col0-head">1</td><td>Social</td><td>funded</td><td>...</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
              <tr><td class="col0-data">a</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
              <tr><td class="col0-data">b</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
              <tr><td class="col0-data">c</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>

              <tr><td class="col0-head">2</td><td>Rates</td><td>coins</td><td>...</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
              <tr><td class="col0-data">a</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
              <tr><td class="col0-data">b</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
              <tr><td class="col0-data">c</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>

              <tr><td class="col0-head">3</td><td>Terms</td><td>def</td><td>...</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
              <tr><td class="col0-data">a</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
              <tr><td class="col0-data">b</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
              <tr><td class="col0-data">c</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>

              <tr><td class="col0-head">4</td><td>Book</td><td>done</td><td>...</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
              <tr><td class="col0-data">a</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
              <tr><td class="col0-data">b</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
              <tr><td class="col0-data">c</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>

              <tr><td class="col0-head">5</td><td>Input</td><td>create</td><td>...</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
              <tr><td class="col0-data">a</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
              <tr><td class="col0-data">b</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
              <tr><td class="col0-data">c</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>

              <tr><td class="col0-head">6</td><td>Steps</td><td>min</td><td>...</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
              <tr><td class="col0-data">a</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
              <tr><td class="col0-data">b</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
              <tr><td class="col0-data">c</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>

              <tr><td class="col0-head">7</td><td>Output</td><td>checks</td><td>...</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
              <tr><td class="col0-data">a</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
              <tr><td class="col0-data">b</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
              <tr><td class="col0-data">c</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>

              <tr><td class="col0-head">8</td><td>Paid</td><td>value</td><td>...</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
              <tr><td class="col0-data">a</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
              <tr><td class="col0-data">b</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
              <tr><td class="col0-data">c</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            </table> -->

          </div>

          <div id="footer">
            <div class="title-container">
              <div class="footer-items">
                <h4 class="title-long">W3AI Meetups 
                  <a href="https://www.meetup.com/SocialAI/">Toronto</a> 
                  <a href="https://www.meetup.com/Manhattan-AIR/">NYC</a> 
                  <a href="https://www.meetup.com/HalifaxAIG/">Halifax</a>
                </h4>
                <h4 class="title-long">© Ianta Labs | MIT License</h4>
                <h4 class="title-long"><a href="https://github.com/ai-dev-ops/amp-processor">Dev AI Ops Engine @ Github</a></h4>
              </div>
            </div>
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
      speed: 2000,  // 1000 milliseconds
      pause: true,
      show: true,
      load: true,
      rules: ['fastest'],
      results: [8],
      projects: [24],
      branch: 1,
      branches: [360],
      services: [7],
      blockchains: [365],
      mixops: [
        [' ','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
        ['1','SOCIAL','>','open','','','','','','','','','','','','','','','','','','','','','','',''],
        ['a','V','','','','','','','','','','','','','','','','','','','','','','','','',''],
        ['2','RATES','>','money','&','votes','','','','','','','','','','','','','','','','','','','','',''],
        ['a','V','','','','','','','','','','','','','','','','','','','','','','','','',''],
        ['3','TERMS','>','defs','','','','','','','','','','','','','','','','','','','','','','',''],
        ['a','V','','','','','','','','','','','','','','','','','','','','','','','','',''],
        ['4','BOOK','>','done','','','','','','','','','','','','','','','','','','','','','','',''],
        ['a','V','','','','','','','','','','','','','','','','','','','','','','','','',''],
        ['5','INPUT','>','create','','','','','','','','','','','','','','','','','','','','','','',''],
        ['a','V','','','','','','','','','','','','','','','','','','','','','','','','',''],
        ['6','STEPS','>','mix','','','','','','','','','','','','','','','','','','','','','','',''],
        ['a','V','','','','','','','','','','','','','','','','','','','','','','','','',''],
        ['7','OUTPUT','>','checks','','','','','','','','','','','','','','','','','','','','','','',''],
        ['a','V','','','','','','','','','','','','','','','','','','','','','','','','',''],
        ['8','PAY','>','Paid','','','','','','','','','','','','','','','','','','','','','','',''],
        ['a','V','','','','','','','','','','','','','','','','','','','','','','','','','']
      ]
    };
  },
  methods: {
    start() {
      this.pause = false;
      this.interval = setInterval(this.play, this.speed);
    },
    play() {
      this.nextProject();
      this.nextService();
    },
    stop() {
      this.pause = true;
      clearInterval(this.interval);
    },
    runOneOps() {
      // Read/update current Service and Project tables/matrix - to include user edits
      this.readProject();
      this.readService();

      // Run/Eval Service Input queries on Project data and add/update results as step[0]

      // Run/Eval Service Steps/Functions/Commands and update Service results

      // Run/Eval Service Output queries and update Project Output And Blockchain Branches

    },
    readProject() { // Read user edits/updates in project table
      // ToDo readProject()
    },
    readService() { // Read user edits/updates in service table
      // Todo readService()
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
.container-fluid {
  padding: 0px;
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
  margin: 15px 10px 0px;
}

.player {
  width: 3rem;
}

.chromosomes {
  height: 3.4rem;
  width: 20rem;
  margin-top: 1.2rem;
  line-height: 90%;
  word-break: break-word; 
  color: rgba(108, 167, 84, 1);
  overflow-y: auto;
}

.news-scroller {
  width: 32rem;
  height: 5.25rem;
  border: 1px solid rgba(108, 167, 84, 1);
}

#ai-protocol {
  width: 100%;
  height: 64rem;
  display: flex;
  flex-direction: row;
  overflow-y: auto;
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
  width: 6rem;
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
  min-width: 2rem;
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

@keyframes fade-out {
  from {background-color: rgba(108, 167, 84, .2);}
  to {background-color: rgba(108, 167, 84, .4);}
}

.fade-on-read {
  background-color: rgba(254, 233, 78, .2);
  animation: fade-out .1s 1;
}

.fade-on-change {
  background-color: rgba(108, 167, 84, .2);
  animation: fade-out .1s 1;
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
  transform: translate(1.1rem, -51.5rem);
  color: lightgrey;
  z-index: -1;
}

#edit-title {
  margin-left: 1rem;
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

.footer-items {
  display: flex;
  align-items: center;
}

h4 {
  padding-right: 6.3rem;
}

@media screen and (min-width: 1200px) {

  h1.title-short {
    display: none;
  }

  div.background-text {
    font-size: 18rem;
  }

  #editor {
    transform: translate(0, -93rem);
  }

  #footer {
    transform: translate(0, -93rem);
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
