<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12">
          <div class="title-container">

            <div class="header-group titles">
              <!-- <div><img id="logo" src="./assets/amp-logo.png"></div> -->
              <div contenteditable="true">
                  <h1 class="long">{{ team.title }}&nbsp;</h1><h1 class="short">{{ team.titleShort }}&nbsp;</h1>
                  <h5 class="long">{{ team.subtitle }}&nbsp;</h5><h5 class="short">{{ team.subtitleShort }}&nbsp;</h5>
              </div>

              <div class="title" title="Start / Stop Engine"><button class="btn btn-success player" 
                @click="pause ? start() : stop()">{{ pause ? '>' : '| |'}}</button></div>
              <div class="title">
                <div class="config-btn" title="cycle time: 1-9" @click="cycleId++">{{ cycle[cycleId%cycle.length] }}</div>
                <div class="config-btn" title="cycle time: sec / min" @click="timeUnitId++">&nbsp; {{ timeUnit[timeUnitId%timeUnit.length] }} &nbsp;</div>
              </div>
              <div class="title" title="Manual / batch cycles"><button class="btn btn-warning player" @click="play">1</button></div>
              <div class="title">
                <div class="config-btn" title="run > com > edu > soc > dev > ops > test > bank" 
                  @click="viewId++">&nbsp; {{ view[viewId%view.length] }} &nbsp;</div>
                <div class="config-btn" title="View posts or view table" 
                  @click="fbview = !fbview">&nbsp; {{ fbview ? 'web' : 'edit' }} &nbsp;</div>
              </div>
              <div class="title" contenteditable="true">
                <div class="config-btn">&nbsp;Sign Up&nbsp;</div>
                <div class="config-btn">&nbsp;Sign In&nbsp;</div>

              </div>
            </div>
            
            <div class="header-group devNews">
              <div class="title news-scroller" contenteditable="true">
                <ul class="scroller">
                  <li v-for="(title, devPostId) in newDevPosts.slice(0, 3)" 
                      v-bind:key="devPostId">{{ title }}</li>
                </ul>
              </div>
              <div class="title long"><h1>{{ team.newDevTitle }}</h1></div>
              <div class="title short" @click="postNameId++"><h1>{{ postName[postNameId%postName.length] }}</h1></div>
            </div>

            <div class="header-group opsNews">
              <div class="title long"><h1>{{ team.newOpsTitle }}</h1></div>
              <div class="title short" @click="opsNameId++"><h1>{{ opsName[opsNameId%opsName.length] }}</h1></div>
              <div class="title news-scroller" contenteditable="true">
                <ul class="scroller">
                  <li v-for="(title, opsPostId) in newOpsPosts.slice(0, 3)" 
                  v-bind:key="opsPostId">{{ title }}</li>
                </ul>
              </div>
            </div>

          </div>

          <div id="ai-protocol">

            <div id="ai-prog">
              <div class="buttons">
                <button class="next btn btn-warning" @click="setCell('b-table', 2, 3, 'Ok')">Rank</button>
                <button class="next btn btn-primary" title="Next Option" @click="nextBranch">Options</button>
                <button class="next btn btn-primary" @click="addNewRule">Rule:</button>
                <input type="text" class="input-add-new" name="new-rule" value="ECO - use ECO first services" size="40" maxlength="40">
                <!-- <button contenteditable="true" class="next btn btn-primary" @click="addTableRow('b-table', 8, [1, 'type', 'value', 'name','value', 'name1', 'value1'])">Next Pay</button> -->
              </div>
              <ul class="list-group">
                <transition-group name="slide-down" type="animation" appear>
                  <li class="list-group-item" v-for="project in viewProjects" v-bind:key="project">
                    <h3 title="AI FairBook Blockchain - Public market ledger for the project">
                      &nbsp;&nbsp;fairBlockChain (dev{{ project }}, ops{{ services[0] }}, option {{ branch }}/{{ branches[0] }}, 'ROI')</h3>

                    <table id="b-table" class="matrix">
                      <tr class="row">
                        <td class="cell config-btn" title="Click to expand visible rows" @click="expandRows">{{ corner }}</td>
                        <td class="cell tbl-head" v-for="(h, index) in header" v-bind:key="index">{{ h }}</td>                       
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
                  <li class="list-group-item" v-for="project in viewProjects" v-bind:key="project">
                    
                    <div class="table-title">
                      <h3 class="long" title="Dev FairBook - Project & Job Demand in your social network">
                        &nbsp;&nbsp;project {{ project }}: title[{{ project }}] - owner[{{ project }}] - [shares] - dev{{ project }}</h3>
                      <h3 class="short" title="Dev FairBook - Project & Job Demand in your social network">
                        &nbsp;&nbsp; <div class="icon3x3prj">{{ projectIcon }}</div>&nbsp;title[{{ project }}] - owner[{{ project }}] - [shares]</h3>
                      <div class="fork" title="fork (copy) project" @click="onProjectFork">f</div>
                    </div>

                    <div v-if="fbview">
                      <div>List of posts, docs, etc from the table</div>
                    </div>

                    <table v-else id="d-table" class="matrix">
                      <tr class="row">
                        <td class="cell config-btn" title="Click to expand visible rows" @click="expandRows">{{ corner }}</td>
                        <td class="cell tbl-head" v-for="(h, index) in header" v-bind:key="index">{{ h }}</td>                       
                      </tr>                      
                      <tr class="row" v-for="(row, rowIndex) in matrixDev" v-bind:key="rowIndex">                          
                        <td contenteditable="true" class="cell" 
                        matrix="Dev" 
                        v-for="(cell, colIndex) in row" v-bind:key="colIndex"
                        :row="rowIndex" :col="colIndex"
                        :tab="Math.floor(rowIndex/(visibleRows+1) + 1)" :tabrow="rowIndex%(visibleRows+1)"
                        :class="[
                                  (rowIndex%(visibleRows+1) == 0) ? tabClass : '',
                                  ((rowIndex%(visibleRows+1) == 0) && (colIndex == 1)) ? tabTitle : '',
                                  (matrixOps[rowIndex][colIndex] == 'Click') ? checkBtn : '',
                                  (matrixOps[rowIndex][colIndex] == 'Post') ? postClass : ''
                                ]"
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

                    <div class="table-title">
                      <h3 class="long" title="Ops FairBook - Service & Skills Offer in your social network">
                        &nbsp;&nbsp;service {{ service }}: title[{{ service }}] - owner[{{ service }}] - [shares] - ops{{ service }}</h3>
                      <h3 class="short" title="Ops FairBook - Service & Skills Offer in your social network">
                        &nbsp;&nbsp;<div class="icon3x3srv">{{ serviceIcon }}</div>&nbsp;title[{{ service }}] - owner[{{ service }}] - [shares]</h3>
                      <div class="fork" title="fork (copy) service" @click="onServiceFork">f</div>
                    </div>

                    <table id="o-table" class="matrix">
                      <tr class="row">
                        <td class="cell config-btn" title="Click to expand visible rows" @click="expandRows">{{ corner }}</td>
                        <td class="cell tbl-head" v-for="(h, index) in header" v-bind:key="index">{{ h }}</td>                       
                      </tr>
                      <tr class="row" v-for="(row, rowIndex) in matrixOps" v-bind:key="rowIndex">                          
                        <td contenteditable="true" class="cell" 
                        matrix="Ops" 
                        v-for="(cell, colIndex) in row" v-bind:key="colIndex"
                        :row="rowIndex" :col="colIndex" 
                        :tab="Math.floor(rowIndex/(visibleRows+1) + 1)" :tabrow="rowIndex%(visibleRows+1)"
                        :class="[
                                  (rowIndex%(visibleRows+1) == 0) ? tabClass : '',
                                  ((rowIndex%(visibleRows+1) == 0) && (colIndex == 1)) ? tabTitle : '',
                                  (matrixOps[rowIndex][colIndex] == 'Click') ? checkBtn : '',
                                  (matrixOps[rowIndex][colIndex] == 'Post') ? postClass : ''
                                ]"
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
                <table id="e-table" class="matrix">
                  <tr class="row">
                    <td class="cell config-btn" title="Click to expand visible rows or Right click for full tab view" @click="expandRows" @click.prevent.right="expandRowsBatch">{{ corner }}</td>
                    <td class="cell tbl-head" v-for="(h, index) in header" v-bind:key="index">{{ h }}</td>                       
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
              <h4><a href="https://ai-cell.web.app">CEO</a></h4>
              <h4><a href="https://ai-banks.web.app">FIN</a></h4>
              <h4><a href="https://ai-gov.web.app">GOV</a></h4>
              <h4><a href="https://ai-pmo.web.app">PMO</a></h4>
              <h4><a href="https://ai-erp.web.app">ERP</a></h4>
              <h4><a href="https://ai-hrm.web.app">HRM</a></h4>
              <h4><a href="https://ai-pto.web.app">PTO</a></h4>
              <h4><a href="https://ai-eco.web.app">ECO</a></h4>
              <h4><a href="https://ai-press.web.app">Press</a></h4>
              <h4><a href="https://ai-cell.web.app">EDU</a></h4>
              <h4><a href="https://ai-devops.web.app">DevOps</a></h4>
              <h4><a href="https://ai-teams.web.app">Team</a></h4>
            </div> 
            <div id="my-dev-ops" class="title-container">
              <h4><a href="https://ai-cell.web.app">Stem</a></h4>
              <h4><a href="https://ai-banks.web.app">RPA</a></h4>
              <h4><a href="https://ai-gov.web.app">R&D</a></h4>
              <h4><a href="https://ai-pmo.web.app">MIL</a></h4>
              <h4><a href="https://ai-erp.web.app">CRM</a></h4>
              <h4><a href="https://ai-hrm.web.app">HCM</a></h4>
              <h4><a href="https://ai-pto.web.app">BIZ</a></h4>
              <h4><a href="https://ai-eco.web.app">SOC</a></h4>
              <h4><a href="https://ai-press.web.app">MED</a></h4>
              <h4><a href="https://ai-cell.web.app">BIO</a></h4>
              <h4><a href="https://ai-devops.web.app">Agile</a></h4>
              <h4><a href="https://ai-teams.web.app">POL</a></h4>
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
                <h4 class="long"><a href="https://github.com/live-ai">
                innovation engines @ github</a></h4>
                <h4 class="short"><a href="https://github.com/live-ai/stem-cell">
                ai stem cell @ github</a></h4>
                <h4 class="long" contenteditable="true">Innovation Engine / W3AI SNN Protocol</h4>
              </div>            
            </div>             
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';  // for connecting to Frirebase RTDB

import db from './db.js';
// import firebase from 'firebase/app' // as part of Vuefire to nennect to Firestore
// import 'firebase/firestore'

// const db = firebase.initializeApp({ projectId: 'aiplanet' }).firestore()

import aiteam from './assets/ai-team.json';
export default {
  name: "app",
  data() {
    return {
      team: aiteam,
      interval: 'timer', 
      speed: 2000,  // milliseconds
      cycle: [1,2,3,4,5,6,7,8,9],
      cycleId: 1,
      timeUnit: ['sec', 'min'],
      timeUnitId: 0,
      view: ['run', 'com', 'edu', 'soc', 'dev', 'ops', 'test', 'bank'],
      viewId: 0,
      mode: ['CEO', 'DEV', 'OPS', 'EDU', 'QA', 'UA'],
      modeId: 0,
      postName: ["job", "post", "dev", "repo", "prj", "bid", "rDNA"],
      postNameId: 0,
      opsName: ["ads" , "app", "ops", "srv", "offr", "ask", "rRNA"],
      opsNameId: 1,
      backgroundText: `&nbsp;&nbsp; ai &nbsp;&nbsp; &nbsp;web &nbsp; app
            <br><br>
            &nbsp;ai web &nbsp;&nbsp; cells`,
      liveText: `&nbsp;&nbsp; ai &nbsp;&nbsp; &nbsp;web &nbsp; app
            <br><br>
            &nbsp;ai web &nbsp;&nbsp; cells`,
      devText: `&nbsp;&nbsp; ai &nbsp;&nbsp; &nbsp;dev &nbsp; ops
      <br><br>
      &nbsp;ai web &nbsp;&nbsp; cells`,
      visibleRows: 1,
      visibleTab: 1,
      pause: true,
      show: true,
      load: true,
      rules: ['FAST'],
      results: [8],
      fbview: false,
      noView: 'noview',
      viewProjects: [24],
      projects: [],
      projectIcon: '◼◼◼◼◼◼◼◼◼',
      serviceIcon: '◼◼◼◼◼◼◼◼◼',
      branch: 1,
      branches: [360],
      services: [7],
      blockchains: [365],
      tabClass: 'tabline',
      tabTitle: 'tabname',
      checkBtn: 'checkbtn',
      postClass: 'postclass',
      currentTable: '',
      currentRow: '',
      currentCol: '',
      currentCellVal: '',
      fx: '',
      fxEval: '',
      corner: 1,
      rowsBatch: 5,
      header: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
      blankTabMatrix: [['a','','','','','','','','','','','','','','','','','','','','','','','','','','']],
      blankTabRow: ['a','','','','','','','','','','','','','','','','','','','','','','','','','',''],
      textEdit: `
Hello World!

Just another live innovation post.
Add a check list to transform it in an open ai plan.
Or add your services to join ai innovators worldwide.

Live ai innovators
clone ai web cells:
github.com/live-ai`,
      matrixBiz: [
        ['a','STATUS',':','OK?','','','','','','','','','','','','','','','','','','','','','','',''],
        ['1','da-State',':','-','','oa-State',':','-','','','','','','','','','','','','','','','','','','',''],
        ['b','RATES',':','DEAL?','','','','','','','','','','','','','','','','','','','','','','',''],
        ['1','db-State',':','-','','ob-State',':','-','','','','','','','','','','','','','','','','','','',''],
        ['c','DOCS',':','TERMS?','','','','','','','','','','','','','','','','','','','','','','',''],
        ['1','dc-State',':','-','','oc-State',':','-','','','','','','','','','','','','','','','','','','',''],
        ['d','BOOK',':','BOOKED?','','','','','','','','','','','','','','','','','','','','','','',''],
        ['1','dd-State',':','-','','od-State',':','-','','','','','','','','','','','','','','','','','','',''],
        ['e','INPUT',':','CREATED?','','','','','','','','','','','','','','','','','','','','','','',''],
        ['1','de-State',':','-','','oe-State',':','-','','','','','','','','','','','','','','','','','','',''],
        ['f','STEPS',':','PLANNED?','','','','','','','','','','','','','','','','','','','','','','',''],
        ['1','df-State',':','-','','of-State',':','-','','','','','','','','','','','','','','','','','','',''],
        ['g','OUTPUT',':','TESTED?','','','','','','','','','','','','','','','','','','','','','','',''],
        ['1','dg-State',':','-','','og-State',':','-','','','','','','','','','','','','','','','','','','',''],
        ['h','PAY',':','PAID?','','','','','','','','','','','','','','','','','','','','','','',''],
        ['1','dh-State',':','-','','oh-State',':','-','','','','','','','','','','','','','','','','','','','']
      ],
      listDev: [  // list/rows of posts, docs, links, obj, etc from matrixDev
        {title: 'Toronto W3AI News', post: 'bla bla, bla', author: 'SI'}
      ],  
      matrixDev: [
        ['a','SOCIAL',':','project','','title',':','Innovation 1','','priority','=','1','','votes','=','247','','comments','=','144','','clones','=','24','','',''],
        ['1','Click',':','= if ( oa-Market == "ready" ) { da-State = "Ok" } else { da-State = "Quit" }','','','','','','','','','','','','','','','','','','','','','','',''],
        ['b','RATES',':','money','','','','','','','','','','','','','','','','','','','','','','',''],
        ['1','type',':','script','','','','','','','','','','','','','','','','','','','','','','',''],
        ['c','DOCS',':','terms','','','','','','','','','','','','','','','','','','','','','','',''],
        ['1','Post',':','Toronto W3AI News','','posts',':','24','','comments',':','36','','','','','','','','','','','','','','',''],
        ['d','BOOK',':','done','','','','','','','','','','','','','','','','','','','','','','',''],
        ['1','type',':','calendar','','','','','','','','','','','','','','','','','','','','','','',''],
        ['e','INPUT',':','create','','','','','','','','','','','','','','','','','','','','','','',''],
        ['1','','','','','','','','','','','','','','','','','','','','','','','','','',''],
        ['f','STEPS',':','plan','','','','','','','','','','','','','','','','','','','','','','',''],
        ['1','','','','','','','','','','','','','','','','','','','','','','','','','',''],
        ['g','OUTPUT',':','test','','','','','','','','','','','','','','','','','','','','','','',''],
        ['1','','','','','','','','','','','','','','','','','','','','','','','','','',''],
        ['h','PAY',':','paid','','','','','','','','','','','','','','','','','','','','','','',''],
        ['1','','','','','','','','','','','','','','','','','','','','','','','','','','']
      ],
      matrixOps: [
        ['a','MARKET',':','ready','','title',':','Skill 37','','usage','=','247k','','','','','','','','','','','','','','',''],
        ['1','Click',':','= if ( da-Social == "project" ) { oa-State = "Ok" } else { oa-State = "Quit" }','','','','','','','','','','','','','','','','','','','','','','',''],
        ['b','RATES',':','money','','','','','','','','','','','','','','','','','','','','','','',''],
        ['1','','','','','','','','','','','','','','','','','','','','','','','','','',''],
        ['c','DOCS',':','terms','','','','','','','','','','','','','','','','','','','','','','',''],
        ['1','Post',':','Toronto W3AI Updates','','','','','','','','','','','','','','','','','','','','','','',''],
        ['d','BOOK',':','done','','','','','','','','','','','','','','','','','','','','','','',''],
        ['1','','','','','','','','','','','','','','','','','','','','','','','','','',''],
        ['e','INPUT',':','create','','','','','','','','','','','','','','','','','','','','','','',''],
        ['1','','','','','','','','','','','','','','','','','','','','','','','','','',''],
        ['f','STEPS',':','plan','','','','','','','','','','','','','','','','','','','','','','',''],
        ['1','','','','','','','','','','','','','','','','','','','','','','','','','',''],
        ['g','OUTPUT',':','test','','','','','','','','','','','','','','','','','','','','','','',''],
        ['1','','','','','','','','','','','','','','','','','','','','','','','','','',''],
        ['h','PAY',':','paid','','','','','','','','','','','','','','','','','','','','','','',''],
        ['1','','','','','','','','','','','','','','','','','','','','','','','','','','']
      ],
      matrixEdit: [
        ['a','STATUS',':','post','','','','','','','','','','','','','','','','','','','','','','',''],
        ['1','','','','','','','','','','','','','','','','','','','','','','','','','',''],
        ['b','RATES',':','money','','','','','','','','','','','','','','','','','','','','','','',''],
        ['1','','','','','','','','','','','','','','','','','','','','','','','','','',''],
        ['c','DOCS',':','terms','','','','','','','','','','','','','','','','','','','','','','',''],
        ['1','','','','','','','','','','','','','','','','','','','','','','','','','',''],
        ['d','BOOK',':','done','','','','','','','','','','','','','','','','','','','','','','',''],
        ['1','','','','','','','','','','','','','','','','','','','','','','','','','',''],
        ['e','INPUT',':','create','','','','','','','','','','','','','','','','','','','','','','',''],
        ['1','','','','','','','','','','','','','','','','','','','','','','','','','',''],
        ['f','STEPS',':','plan','','','','','','','','','','','','','','','','','','','','','','',''],
        ['1','','','','','','','','','','','','','','','','','','','','','','','','','',''],
        ['g','OUTPUT',':','test','','','','','','','','','','','','','','','','','','','','','','',''],
        ['1','','','','','','','','','','','','','','','','','','','','','','','','','',''],
        ['h','PAY',':','paid','','','','','','','','','','','','','','','','','','','','','','',''],
        ['1','','','','','','','','','','','','','','','','','','','','','','','','','','']
      ],
      newDevPosts: [
        'Funded: 5min ai engine install',
        'Voting: Chinese, Hindi, Spanish',
        'Idea: Add Job & Help Requests'
      ],
      newOpsPosts: [
        'COM: Governance Banks',
        'ORG: Party Campaign Ops',
        'EDU: Research priorities'
      ]
    };
  },

  firestore: {
    projects: db.collection('projects')
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

      // dev dummy animation
      this.setCell('d-table', 2, 2, 'ok');
      this.setCell('o-table', 2, 2, 'ok');
      this.setCell('b-table', 2, 3, 'ok');
      this.setCell('b-table', 2, 7, 'ok');
      this.setCell('b-table', 1, 3, 'OK');

      this.setCell('d-table', 4, 2, 'ok');
      this.setCell('o-table', 4, 2, 'ok');
      this.setCell('b-table', 4, 3, 'ok');
      this.setCell('b-table', 4, 7, 'ok');
      this.setCell('b-table', 3, 3, 'OK');

      this.setCell('d-table', 6, 2, 'ok');
      this.setCell('o-table', 6, 2, 'ok');
      this.setCell('b-table', 6, 3, 'ok');
      this.setCell('b-table', 6, 7, 'ok');
      this.setCell('b-table', 5, 3, 'OK');

      this.setCell('d-table', 8, 2, 'ok');
      this.setCell('o-table', 8, 2, 'ok');
      this.setCell('b-table', 8, 3, 'ok');
      this.setCell('b-table', 8, 7, 'ok');
      this.setCell('b-table', 7, 3, 'OK');

      this.setCell('d-table', 10, 2, 'ok');
      this.setCell('o-table', 10, 2, 'ok');
      this.setCell('b-table', 10, 3, 'ok');
      this.setCell('b-table', 10, 7, 'ok');
      this.setCell('b-table', 9, 3, 'OK');

      this.setCell('d-table', 12, 2, 'ok');
      this.setCell('o-table', 12, 2, 'ok');
      this.setCell('b-table', 12, 3, 'ok');
      this.setCell('b-table', 12, 7, 'ok');
      this.setCell('b-table', 11, 3, 'OK');

      this.setCell('d-table', 14, 2, 'ok');
      this.setCell('o-table', 14, 2, 'ok');
      this.setCell('b-table', 14, 3, 'ok');
      this.setCell('b-table', 14, 7, 'ok');
      this.setCell('b-table', 13, 3, 'OK');

      this.setCell('d-table', 16, 2, 'ok');
      this.setCell('o-table', 16, 2, 'ok');
      this.setCell('b-table', 16, 3, 'ok');
      this.setCell('b-table', 16, 7, 'ok');
      this.setCell('b-table', 15, 3, 'OK');      

      // Run/Eval Service Input queries on Project data and add/update results as step[0]

      // Run/Eval Service Steps/Functions/Commands and update Service results

      // Run/Eval Service Output queries and update Project Output And Blockchain Branches
      this.writeProgress();
    },
    readProject() { // Read user edits/updates in project table
      // ToDo readProject()
      let projectTable = document.getElementById('d-table');  // To move in an ini method?
      
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
      let serviceTable = document.getElementById('o-table');  // To move in an ini method?
      
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
    writeProgress() { // Read user edits/updates in progress table - ToDo - To review
      // Todo readService()
      let serviceTable = document.getElementById('b-table');  // To move in an ini method? serviceTable or bizTable (former progress-table)
      
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
      let m = mat[0].toUpperCase();                                     // m - matrix/table: B | D | O | E

      let col = this.currentCol = el.target.getAttribute('col');        // col - col: 1-26
      let c = this.header[col - 1];                                     // c - col: A-Z
      // let row = this.currentRow = el.target.getAttribute('row');        // row - row: 1,... - the row in the matrix table
      // let tr = row;                                                      

      // let tab = Math.floor( row / (this.visibleRows+1) + 1);         // tab - tab 1-8
      let tab = el.target.getAttribute('tab');
      let t = tab;                                                      // t - tab a-h
      
      let tabrow = el.target.getAttribute('tabrow');                    // r - row: 1,... - the row in the tab
      let r = tabrow;

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
      this.corner = this.visibleRows;
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
    expandRowsBatch() {
      // add a batch of rows
      for (let newRows = 0; newRows < this.rowsBatch; newRows++) {
        this.expandRows();
      }
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
    onProjectFork() {
      this.newDevPosts.unshift('New project idea');

      const lines = { ...this.matrixDev }

      db.collection('projects').add({
          tablelines: lines
        });
      // axios.post('https://aiplanet.firebaseio.com/projects.json', this.matrixDev)
      // axios.post('https://firestore.googleapis.com/v1/projects/aiplanet/databases/(default)/documents/projects', this.matrixDev)
      //   .then(res => console.log(res))
      //   .catch(err => console.log(err));
    },
    onServiceFork() {
      this.newOpsPosts.unshift('New service idea');
      axios.post('https://aiplanet.firebaseio.com/services.json', this.matrixOps)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    },
    generateIcon3x3(index, symbol) {
      let hex = index.toString(2);
      hex = hex + hex;
      hex = hex.replace(/[0]/g, ' ');
      hex = hex.replace(/[1]/g, symbol);
      return hex;
    },
    nextProject() {
      // let projectsNo = this.viewProjects.length;
      this.viewProjects.push(Math.floor(Math.random()*100)); // add project to end/bottom
      this.viewProjects.shift();  // removes the first project
      this.projectIcon = this.generateIcon3x3(this.viewProjects[0], '◼');
      // ToDo: add branches and results structures to project data structure - Code below is just demo/dummy
      this.branches.push(Math.floor(Math.random()*100));
      this.branches.shift();
      this.branch = 1;
    },
    nextService() {
      // let servicesNo = this.services.length;
      this.services.unshift(Math.floor(Math.random()*100)); // add service to top
      this.services.pop();  // removes the last service
      this.serviceIcon = this.generateIcon3x3(this.services[0], '◼');
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
  width: 70%;
  height: 6rem;
  border: 1px solid rgba(108, 167, 84, 1);
}

.scroller {
  margin-left: 1rem;
  padding-left: 1rem;
}

.table-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.tbl-head {
  background-color: whitesmoke;
}

.fork {
  width: 3rem;
  height: 3rem;
  padding: .5rem;
  margin-right: 1rem;
  border-radius: 1.5rem 0 1.5rem 0;
  color: white;
  /* font-weight: bold; */
  background-color: rgba(108, 167, 84, 1);
  text-align: center;
  cursor: pointer;
}

.fork:hover {
  background-color: rgba(108, 167, 84, .8);
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
  /* border-bottom: 1px solid peru; */
  /* border-bottom: 1px solid grey; */
}

.tabname {
  border-radius: 10px 10px 0px 0px;
  background-color: rgba(108, 167, 84, .7);
  /* background-color: #6aa84f; */
  /* background-color: burlywood; */
  /* background-color: lightslategrey; */
  color: white;
  text-align: center;
  font-weight: bold;
}

.config-btn {
  border-radius: 8px 8px 8px 8px;
  background-color: lightgrey;
  color: black;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
}

.checkbtn {
  border-radius: 8px 8px 8px 8px;
  background-color: lightsteelblue;
  color: black;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
}

.postclass {
  /* background-image: url("./assets/amp-logo.png"); */
  background-color: lightblue;
  color: darkblue;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
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

#b-table,
#d-table,
#o-table {
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

.short {
  display: flex;
  flex-direction: row;
}

.icon3x3prj {
  font-family: monospace;
  width: 2.4rem;
  height: 2.4rem;
  font-size: .8rem;
  overflow-y: hidden;
  overflow-wrap: break-word; 
  /* border: 1px solid lightgray; */
  margin: 0rem;
  padding: 0rem;
  color: #f1453d;
}

.icon3x3srv {
  font-family: monospace;
  width: 2.4rem;
  height: 2.4rem;
  font-size: .8rem;
  overflow-y: hidden;
  overflow-wrap: break-word; 
  /* border: 1px solid lightgray; */
  margin: 0rem;
  padding: 0rem;
  color: #1eaaf1;
}

.noview {
  display: none;
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
