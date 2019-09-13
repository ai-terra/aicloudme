<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12">
          <div class="title-container">

            <div class="header-group titles">
              <!-- <div><img id="logo" src="./assets/amp-logo.png"></div> -->
              <div contenteditable="true">
                  <h1 class="long">{{ team.title }}</h1><h1 class="short">{{ team.titleShort }}</h1>
                  <h5 class="long">{{ team.subtitle }}</h5><h5 class="short">{{ team.subtitleShort }}</h5>
              </div>

              <div class="title" title="Start / Stop Engine"><button class="btn btn-success player" @click="pause ? start() : stop()">{{ pause ? '>' : '| |'}}</button></div>
              <div class="title" contenteditable="true">2<br>sec</div>
              <div class="title" contenteditable="true">8 tabs<br>engine</div>
              <div class="title" title="Manual cycles"><button class="btn btn-warning player" @click="play">1</button></div>
            </div>
            
            <div class="header-group devNews">
              <div class="title long"><h1>{{ team.newDevTitle }}</h1></div>
              <div class="title short"><h1>{{ team.newDevTitleShort }}</h1></div>
              <div class="title news-scroller" contenteditable="true">
                <ul>
                  <li>Funded: Famous 5 mins AI Team Engine install</li>
                  <li>Voting: Chinese, Hindi, Spanish, Arabic, Russian apps</li>
                  <li>Idea: Add Issue & Help Requests to Job post loop</li>
                </ul>
              </div>
            </div>

            <div class="header-group opsNews">
              <div class="title long"><h1>{{ team.newOpsTitle }}</h1></div>
              <div class="title short"><h1>{{ team.newOpsTitleShort }}</h1></div>
              <div class="title news-scroller" contenteditable="true">
                <ul>
                  <li>COM: My Governance Team & AI Banks</li>
                  <li>ORG: Political Party and Campaign Ops</li>
                  <li>EDU: Research ranking and priorities</li>
                </ul>
              </div>
            </div>

          </div>

          <div id="ai-protocol">

            <div id="ai-prog">
              <div class="buttons">
                <button contenteditable="true" class="next btn btn-warning" @click="setCell('project-table', 3, 5, 'votes')">Rank</button>
                <button contenteditable="true" class="next btn btn-primary" @click="nextBranch">Next Option</button>
                <button contenteditable="true" class="next btn btn-primary" @click="addNewRule">New Rule:</button>
                <input type="text" class="input-add-new" name="new-rule" value="eg: ECO - use ECO first services" size="40" maxlength="40">
                <!-- <button contenteditable="true" class="next btn btn-primary" @click="addTableRow('progress-table', 8, [1, 'type', 'value', 'name','value', 'name1', 'value1'])">Next Pay</button> -->
              </div>
              <ul class="list-group">
                <transition-group name="slide-down" type="animation" appear>
                  <li class="list-group-item" v-for="project in projects" v-bind:key="project">
                    <h3 title="AI FairBook Blockchain - Public market ledger for the project">
                      &nbsp;&nbsp;&nbsp;AIBlockChain (dev{{ project }}, ops{{ services[0] }}, option {{ branch }}/{{ branches[0] }}, 'ROI')</h3>

                    <table id="progress-table" class="matrix">
                      <tr class="row">
                        <td class="cell" @click="expandRows">{{ corner }}</td>
                        <td class="cell" v-for="(h, index) in header" v-bind:key="index">{{ h }}</td>                       
                      </tr>                      
                      <tr class="row" v-for="(row, rowIndex) in matrixBiz" v-bind:key="rowIndex">                          
                        <td contenteditable="true" class="cell" 
                        matrix="Biz" 
                        v-for="(cell, colIndex) in row" v-bind:key="colIndex"
                        :row="rowIndex" :col="colIndex"
                        :tab="Math.floor(rowIndex/(visibleRows+1) + 1)" :tabrow="rowIndex%(visibleRows+1)"
                        :class="[(rowIndex%(visibleRows+1) == 0) ? tabClass : '',
                                ((rowIndex%(visibleRows+1) == 0) && (colIndex == 1)) ? tabTitle : '']"
                        @click="onCellClick"
                        >
                          {{ cell }}
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
                <button contenteditable="true" class="next btn btn-primary" @click="show = !show">New Job:</button>
                <input type="text" class="input-add-new" name="new-job" value="eg: Add Job Request to Job News" size="40" maxlength="40">
                <button class="next btn btn-warning" @click="runOneOps">+</button>
              </div>
              <ul class="list-group">
                <transition-group name="slide-up" type="animation" appear>
                  <li class="list-group-item" v-for="project in projects" v-bind:key="project">
                    <h3 class="long" title="Dev FairBook - Project & Job Demand in your social network">
                      &nbsp;&nbsp;&nbsp;project {{ project }}: title[{{ project }}] - owner[{{ project }}] - [shares] - dev{{ project }}</h3>
                    <h3 class="short" title="Dev FairBook - Project & Job Demand in your social network">
                      &nbsp;&nbsp;&nbsp;project {{ project }}: title[{{ project }}] - owner[{{ project }}] - [shares]</h3>

                    <table id="project-table" class="matrix">
                      <tr class="row">
                        <td class="cell" @click="expandRows">{{ corner }}</td>
                        <td class="cell" v-for="(h, index) in header" v-bind:key="index">{{ h }}</td>                       
                      </tr>                      
                      <tr class="row" v-for="(row, rowIndex) in matrixDev" v-bind:key="rowIndex">                          
                        <td contenteditable="true" class="cell" 
                        matrix="Dev" 
                        v-for="(cell, colIndex) in row" v-bind:key="colIndex"
                        :row="rowIndex" :col="colIndex"
                        :tab="Math.floor(rowIndex/(visibleRows+1) + 1)" :tabrow="rowIndex%(visibleRows+1)"
                        :class="[(rowIndex%(visibleRows+1) == 0) ? tabClass : '',
                                ((rowIndex%(visibleRows+1) == 0) && (colIndex == 1)) ? tabTitle : '']"
                        @click="onCellClick"
                        >
                          {{ cell }}
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
                    <h3 class="long" title="Ops FairBook - Service & Skills Offer in your social network">
                      &nbsp;&nbsp;&nbsp;service {{ service }}: title[{{ service }}] - owner[{{ service }}] - [shares] - ops{{ service }}</h3>
                    <h3 class="short" title="Ops FairBook - Service & Skills Offer in your social network">
                      &nbsp;&nbsp;&nbsp;service {{ service }}: title[{{ service }}] - owner[{{ service }}] - [shares]</h3>

                    <table id="service-table" class="matrix">
                      <tr class="row">
                        <td class="cell" @click="expandRows">{{ corner }}</td>
                        <td class="cell" v-for="(h, index) in header" v-bind:key="index">{{ h }}</td>                       
                      </tr>
                      <tr class="row" v-for="(row, rowIndex) in matrixOps" v-bind:key="rowIndex">                          
                        <td contenteditable="true" class="cell" 
                        matrix="Ops" 
                        v-for="(cell, colIndex) in row" v-bind:key="colIndex"
                        :row="rowIndex" :col="colIndex" 
                        :tab="Math.floor(rowIndex/(visibleRows+1) + 1)" :tabrow="rowIndex%(visibleRows+1)"
                        :class="[(rowIndex%(visibleRows+1) == 0) ? tabClass : '',
                                ((rowIndex%(visibleRows+1) == 0) && (colIndex == 1)) ? tabTitle : '']"
                        @click="onCellClick"
                        >
                          {{ cell }}
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
              <button class="edit btn btn-warning" @click="show = !show;">Clone</button>
              <button class="edit btn btn-warning" @click="runOneOps">+</button>
              <button class="edit player btn btn-success" @click="pause ? start() : stop()">{{ pause ? '>' : '| |' }}</button>
              <div><h2 class="title" contenteditable="true"></h2></div>
              <button class="edit btn btn-primary" @click="show = !show;">Interests</button>
              <button class="edit btn btn-primary" @click="show = !show;">Members</button>
              <button class="edit btn btn-primary" @click="show = !show;">Projects</button>
              <button class="edit btn btn-primary" @click="show = !show;">Services</button>
              <button class="edit btn btn-primary" @click="show = !show;">Engine</button>
              <button class="edit btn btn-primary" @click="show = !show;">Wiki</button>
              <button class="edit btn btn-danger" @click="show = !show;">Code</button>
              <button class="edit btn btn-warning" @click="show = !show;"><b>&lt;</b></button>
              <button class="edit btn btn-success" @click="modeId++;"><b>{{ mode[modeId%mode.length] }}</b></button>
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

                  <tr class="row" v-for="(row, rowIndex) in matrixEdit" v-bind:key="rowIndex">                          
                    <td contenteditable="true" class="cell" 
                    matrix="Edit" 
                    v-for="(cell, colIndex) in row" v-bind:key="colIndex"
                    :row="rowIndex" :col="colIndex"
                    :tab="Math.floor(rowIndex/(visibleRows+1) + 1)" :tabrow="rowIndex%(visibleRows+1)"
                    :class="[(rowIndex%(visibleRows+1) == 0) ? tabClass : '',
                            ((rowIndex%(visibleRows+1) == 0) && (colIndex == 1)) ? tabTitle : '']"
                    @click="onCellClick"
                    >
                      {{ cell }}
                    </td>
                  </tr>                                 

                </table>
              </div>

            </div>

          </div>

          <div id="footer">
            <div id="ai-engines" class="title-container">
              <h4>I <span style="color: red;">&hearts;</span> AI Teams:</h4>
              <h4><a href="https://ai-cell.web.app">AI CEO</a></h4>
              <h4><a href="https://ai-banks.web.app">AI FIN</a></h4>
              <h4><a href="https://ai-gov.web.app">AI GOV</a></h4>
              <h4><a href="https://ai-pmo.web.app">AI PMO</a></h4>
              <h4><a href="https://ai-erp.web.app">AI ERP</a></h4>
              <h4><a href="https://ai-hrm.web.app">AI HRM</a></h4>
              <h4><a href="https://ai-pto.web.app">AI PTO</a></h4>
              <h4><a href="https://ai-eco.web.app">AI ECO</a></h4>
              <h4><a href="https://ai-press.web.app">AI Press</a></h4>
              <h4><a href="https://ai-cell.web.app">AI EDU</a></h4>
              <h4><a href="https://ai-devops.web.app">AI DevOps</a></h4>
              <h4><a href="https://ai-teams.web.app">AI Team</a></h4>
            </div> 
            <div id="my-dev-ops" class="title-container">
              <h4>my dev/ops:</h4>
              <h4><a href="https://ai-cell.web.app">12 / 34</a></h4>
              <h4><a href="https://ai-banks.web.app">56 / 78</a></h4>
              <h4><a href="https://ai-gov.web.app">19 / 24</a></h4>
              <h4><a href="https://ai-pmo.web.app">17 / 35</a></h4>
              <h4><a href="https://ai-erp.web.app">16 / 22</a></h4>
              <h4><a href="https://ai-hrm.web.app">22 / 48</a></h4>
              <h4><a href="https://ai-pto.web.app">13 / 29</a></h4>
              <h4><a href="https://ai-eco.web.app">35 / 74</a></h4>
              <h4><a href="https://ai-press.web.app">40 / 87</a></h4>
              <h4><a href="https://ai-cell.web.app">35 / 49</a></h4>
              <h4><a href="https://ai-devops.web.app">36 / 72</a></h4>
              <h4><a href="https://ai-teams.web.app">77 / 30</a></h4>
            </div> 
            <div id="web-dev-ops" class="title-container">
              <h4>web dev/ops:</h4>
              <h4><a href="https://ai-cell.web.app">12 / 34</a></h4>
              <h4><a href="https://ai-banks.web.app">56 / 78</a></h4>
              <h4><a href="https://ai-gov.web.app">19 / 24</a></h4>
              <h4><a href="https://ai-pmo.web.app">17 / 35</a></h4>
              <h4><a href="https://ai-erp.web.app">16 / 22</a></h4>
              <h4><a href="https://ai-hrm.web.app">22 / 48</a></h4>
              <h4><a href="https://ai-pto.web.app">13 / 29</a></h4>
              <h4><a href="https://ai-eco.web.app">35 / 74</a></h4>
              <h4><a href="https://ai-press.web.app">40 / 87</a></h4>
              <h4><a href="https://ai-cell.web.app">35 / 49</a></h4>
              <h4><a href="https://ai-devops.web.app">36 / 72</a></h4>
              <h4><a href="https://ai-teams.web.app">77 / 30</a></h4>
            </div> 
            <div class="title-container">
              <div class="footer-items">
                <h4 class="long">W3AI Social Neural Network Protocol</h4>
                <h4 class="long">W3AI Meetups 
                  <a href="https://www.meetup.com/SocialAI/">Toronto </a> 
                  <a href="https://www.meetup.com/Manhattan-AIR/">NYC </a> 
                  <a href="https://www.meetup.com/HalifaxAIG/">Halifax </a>
                </h4>
                <h4>© Ianta Labs | MIT License</h4>
                <h4 class="long"><a href="https://github.com/ai-teams">
                Download Free AI Teams @ Github</a></h4>
                <h4 class="short"><a href="https://github.com/ai-teams">
                Free AI Teams @ Github</a></h4>
                <h4 class="long" contenteditable="true">AI Team Engine / W3AI SNN Protocol</h4>
              </div>            
            </div>             
          </div>



        </div>
      </div>
    </div>
  </div>
</template>

<script>
import aiteam from './assets/ai-team.json';
export default {
  name: "app",
  data() {
    return {
      team: aiteam,
      interval: 'timer', 
      speed: 2000,  // milliseconds
      mode: ['CEO', 'DEV', 'OPS', 'EDU', 'QA', 'UA'],
      modeId: 0,
      backgroundText: `&nbsp; &nbsp;AI&nbsp; &nbsp; &nbsp; &nbsp; Dev &nbsp; &nbsp; Ops
            <br><br>
            &nbsp; AI&nbsp;Team &nbsp; &nbsp; Engine`,
      liveText: `&nbsp; &nbsp;live &nbsp; &nbsp;&nbsp;Dev &nbsp; &nbsp; Ops
            <br><br>
            &nbsp; AI&nbsp;Team &nbsp;&nbsp; Engine`,
      devText: `&nbsp; &nbsp;AI &nbsp; &nbsp; &nbsp; Dev &nbsp; &nbsp; Ops
      <br><br>
      &nbsp; AI&nbsp;Team &nbsp;&nbsp; Engine`,
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
      tabClass: 'tabline',
      tabTitle: 'tabname',
      currentTable: '',
      currentRow: '',
      currentCol: '',
      currentCellVal: '',
      fx: '',
      fxEval: '',
      corner: 'a',
      header: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
      blankTabMatrix: [['a','','','','','','','','','','','','','','','','','','','','','','','','','','']],
      blankTabRow: ['a','','','','','','','','','','','','','','','','','','','','','','','','','',''],
      textEdit: `
Hello World!

This is your first AI Team post.
Add a test list to transform it in a business project.
Or add cloud ops to get your team engine live.

Clone AI Teams at:
github.com/ai-teams`,
      matrixBiz: [
        ['1','STATUS',':','OK','','','','','','','','','','','','','','','','','','','','','','',''],
        ['a','Check1a',':','Ok','','Check1a',':','Ok','','','','','','','','','','','','','','','','','','',''],
        ['2','RATES',':','OK','','','','','','','','','','','','','','','','','','','','','','',''],
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
      ],
      matrixDev: [
        ['1','STATUS',':','project','','priority','=','1','','votes','=','247','','likes','=','1234','','comments','=','144','','clones','=','24','','',''],
        ['a','Check1',':','= if ( opsStatus == "ready" ) { state = "Ok" } else { state = "Quit" }','','','','','','','','','','','','','','','','','','','','','','',''],
        ['2','RATES',':','money','','','','','','','','','','','','','','','','','','','','','','',''],
        ['a','type',':','script','','','','','','','','','','','','','','','','','','','','','','',''],
        ['3','DOCS',':','terms','','','','','','','','','','','','','','','','','','','','','','',''],
        ['a','type',':','file','','posts',':','24','','comments',':','36','','','','','','','','','','','','','','',''],
        ['4','BOOK',':','done','','','','','','','','','','','','','','','','','','','','','','',''],
        ['a','type',':','cal','','','','','','','','','','','','','','','','','','','','','','',''],
        ['5','INPUT',':','create','','','','','','','','','','','','','','','','','','','','','','',''],
        ['a','','','','','','','','','','','','','','','','','','','','','','','','','',''],
        ['6','STEPS',':','plan','','','','','','','','','','','','','','','','','','','','','','',''],
        ['a','','','','','','','','','','','','','','','','','','','','','','','','','',''],
        ['7','OUTPUT',':','test','','','','','','','','','','','','','','','','','','','','','','',''],
        ['a','','','','','','','','','','','','','','','','','','','','','','','','','',''],
        ['8','PAY',':','paid','','','','','','','','','','','','','','','','','','','','','','',''],
        ['a','','','','','','','','','','','','','','','','','','','','','','','','','','']
      ],
      matrixOps: [
        ['1','STATUS',':','ready','','','','','','','','','','','','','','','','','','','','','','',''],
        ['a','Check1',':','= if ( devStatus == "project" ) { state = "Ok" } else { state = "Quit" }','','','','','','','','','','','','','','','','','','','','','','',''],
        ['2','RATES',':','money','','','','','','','','','','','','','','','','','','','','','','',''],
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
      ],
      matrixEdit: [
        ['1','STATUS',':','post','','','','','','','','','','','','','','','','','','','','','','',''],
        ['a','','','','','','','','','','','','','','','','','','','','','','','','','',''],
        ['2','RATES',':','money','','','','','','','','','','','','','','','','','','','','','','',''],
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
      ],
      newDevPosts: [
        'Funded: Famous 5 mins AI Team Engine install',
        'Voting: Chinese, Hindi, Spanish, Arabic, Russian apps',
        'Idea: Add Issue & Help Requests to Job post loop'
      ],
      newOpsPosts: [
        'COM: My Governance Team & AI Banks',
        'ORG: Political Party and Campaign Ops',
        'EDU: Research ranking and priorities'
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
      let mat = this.currentTable = el.target.getAttribute('matrix');   // mat - matrix/table: Biz | Dev | Ops | Edit
      let m = mat[0].toUpperCase();                                     // m - matrix/table: R | D | O | E
      let col = this.currentCol = el.target.getAttribute('col');        // col - col: 1-26
      let c = this.header[col - 1];                                     // c - col: A-Z
      let row = this.currentRow = el.target.getAttribute('row');        // row - row: 1 - 26 * 26
      let r = this.header[row%(this.visibleRows+1) - 1].toLowerCase();  // r - row: a-z
      let tab = Math.floor(this.currentRow/(this.visibleRows+1) + 1);   // tab - tab 1-8
      let t = tab;                                                      // t - tab 1-8
      let val = this.currentCellVal = el.target.innerHTML.trim();       // val - cell value - string
      let v = val;

      if ( this.fx[0] === '=' ) {
        this.fx += ' ' + m + t + c + r + '';
      } else {
        this.fx = v;
      }
      if (this.modeId == 0) {
        // if mode[0] is CEO - educational / training
        // ToDo: hide fx if blank
        this.textEdit = ' > tbl: ' + m + ' tab: ' + t + ' row: ' + r + ' col: ' + c + ' val: ' + v + '\n > fx = ' + eval(this.fx) + '\n' + this.textEdit;
      } else {
        // mainly for dev
        this.textEdit = ' > ' + m + ' ' + t + ' ' + r + ' ' + c + ' ' + v + '\n > ' + this.fx + '\n' + this.textEdit;
      }
    },
    expandRows() {
      this.visibleRows++;
      this.corner = this.header[this.visibleRows - 1].toLowerCase();
      // add blankRows to the matrix table
      let newRow = this.blankTabRow.slice(0); // copy blankTabRow to new array
      newRow[0] = this.corner;
      for (let tab = 0; tab < 8; tab++) {
        // insert newRow in matrix at index - first param
        this.matrixBiz.splice(this.visibleRows + (this.visibleRows + 1) * tab, 0, newRow);
        this.matrixDev.splice(this.visibleRows + (this.visibleRows + 1) * tab, 0, newRow);
        this.matrixOps.splice(this.visibleRows + (this.visibleRows + 1) * tab, 0, newRow);
        this.matrixEdit.splice(this.visibleRows + (this.visibleRows + 1) * tab, 0, newRow);
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
  justify-content: space-between;
  margin-left: 1rem;
}

.header-group {
  width: 33.33%;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.title {
  align-self: center;
  margin: 15px 10px 0px 0px;
}

.player {
  /* margin-left: 1rem; */
  width: 4rem;
  height: 4rem;
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
  width: 80%;
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

h2.long {
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

.tabline {
  border-bottom: 1px solid #6aa84f;
}

.tabname {
  border-radius: 8px 8px 0px 0px;
  background-color: #6aa84f;
  color: white;
  text-align: center;
  font-weight: bold;
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
  overflow-x: visible;
  overflow-wrap: normal;
  white-space: nowrap;
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
  padding-right: 6rem;
}

@media screen and (min-width: 1200px) {

  .short {
    display: none;
  }
  .short {
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

  .long {
    display: none;
  }
  .long {
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
