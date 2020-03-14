/* eslint-disable no-console */
/* eslint-disable no-console */
<template>
  <div id="app">
    <app-header />

    <router-view></router-view>

    <div class="container-fluid">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12">
          <div class="title-container">
            <div class="header-group titles">
              <!-- <div><img id="logo" src="./assets/amp-logo.png"></div> -->
              <div contenteditable="true">
                <h1 class="long">{{ team.title }}&nbsp;</h1>
                <h1 class="short">{{ team.titleShort }}&nbsp;</h1>
                <h5 class="long" contenteditable="true">{{ team.subtitle }}&nbsp;</h5>
                <h5 class="short" contenteditable="true">{{ team.subtitleShort }}&nbsp;</h5>
              </div>

              <div class="title" title="Start / Stop Engine">
                <button
                  class="btn btn-success player"
                  @click="pause ? start() : stop()"
                >{{ pause ? '>' : '| |'}}</button>
              </div>
              <div class="title">
                <div
                  class="config-btn"
                  title="cycle time: 1-9"
                  @click="cycleId++"
                >{{ cycle[cycleId%cycle.length] }}</div>
                <div
                  class="config-btn"
                  title="cycle time: sec / min"
                  @click="timeUnitId++"
                >&nbsp; {{ timeUnit[timeUnitId%timeUnit.length] }} &nbsp;</div>
              </div>
              <div class="title" title="Manual / batch cycles">
                <button class="btn btn-warning player" @click="play">1</button>
              </div>
              <div class="title">
                <div
                  class="config-btn"
                  title="run > com > edu > soc > dev > ops > test > bank"
                  @click="viewId++"
                >&nbsp; {{ view[viewId%view.length] }} &nbsp;</div>
                <div
                  class="config-btn"
                  title="Switch views: fb | xls | yml | d3"
                  @click="fbview = !fbview"
                >&nbsp; {{ fbview ? 'fb' : 'xls' }} &nbsp;</div>
              </div>
              <!-- <div class="title" contenteditable="true">
                <div class="config-btn">&nbsp;Sign Up&nbsp;</div>
                <div class="config-btn">&nbsp;Sign In&nbsp;</div>
              </div>-->
            </div>

            <div class="header-group devNews">
              <div class="title news-scroller" contenteditable="true">
                <ul class="scroller">
                  <li
                    v-for="(title, devPostId) in newDevPosts.slice(0, 3)"
                    v-bind:key="devPostId"
                  >{{ title }}</li>
                </ul>
              </div>
              <div class="title long">
                <h2>{{ team.newDevTitle }}</h2>
              </div>
              <div class="title short" @click="postNameId++">
                <h2>{{ postName[postNameId%postName.length] }}</h2>
              </div>
            </div>

            <div class="header-group opsNews">
              <div class="title long">
                <h2>{{ team.newOpsTitle }}</h2>
              </div>
              <div class="title short" @click="opsNameId++">
                <h2>{{ opsName[opsNameId%opsName.length] }}</h2>
              </div>
              <div class="title news-scroller" contenteditable="true">
                <ul class="scroller">
                  <li
                    v-for="(title, opsPostId) in newOpsPosts.slice(0, 3)"
                    v-bind:key="opsPostId"
                  >{{ title }}</li>
                </ul>
              </div>
            </div>
          </div>

          <div id="flags">
            <div v-for="index in 6" :key="index">
              <img
                class="flag"
                v-for="flag in team.flags"
                v-bind:key="flag"
                :src="require('./assets/flags/'+ flag + '.png')"
              />
            </div>
          </div>

          <div id="ai-protocol">
            <div id="ai-prog">
              <div class="buttons">
                <button class="next btn btn-warning" @click="setCell('b-table', 2, 3, 'Ok')">Rank</button>
                <button class="next btn btn-primary" title="Next Option" @click="nextBranch">Options</button>
                <button class="next btn btn-primary" @click="addNewRule">Rule:</button>
                <input
                  type="text"
                  class="input-add-new"
                  name="new-rule"
                  value="ECO - use ECO first services"
                  size="40"
                  maxlength="40"
                />
                <!-- <button contenteditable="true" class="next btn btn-primary" @click="addTableRow('b-table', 8, [1, 'type', 'value', 'name','value', 'name1', 'value1'])">Next Pay</button> -->
              </div>
              <ul class="list-group">
                <transition-group name="slide-down" type="animation" appear>
                  <li class="list-group-item" v-for="project in viewProjects" v-bind:key="project">
                    <div class="table-title">
                      <h3 class="line" title="Patent blockchain status - % tests passed">
                        &nbsp;&nbsp;tx(
                        <img
                          class="owner"
                          :src="require('./assets/img/users/2'+ project + '.png')"
                        />
                        <ai-icon :bits="projectIconBits"></ai-icon>&#65121;
                        <ai-icon :bits="serviceIconBits"></ai-icon>
                        <img
                          class="owner"
                          :src="require('./assets/img/users/2'+ services[0] + '.png')"
                        />
                        <!-- {{ services[0] ops }} -->
                        , {{ branch }}/{{ branches[0] }},
                        {{ policyRule[randomInt(0, policyRule.length - 1)] }})
                        <!-- ~ {{ services[0] % project }}% -->
                        ~ {{ randomInt(1, 100) }}%
                      </h3>
                    </div>

                    <!-- <section class="views"> -->

                    <div v-if="fbview">
                      <ai-report :matrix="listBiz"></ai-report>
                    </div>

                    <!-- </section> -->

                    <div class="scrollable">
                      <table id="b-table" class="matrix">
                        <tr class="row">
                          <td
                            class="cell config-btn"
                            title="Click to expand visible rows"
                            @click="expandRows"
                          >{{ corner }}</td>
                          <td
                            class="cell tbl-head"
                            v-for="(h, index) in header"
                            v-bind:key="index"
                          >{{ h }}</td>
                        </tr>
                        <tr class="row" v-for="(row, rowIndex) in matrixBiz" v-bind:key="rowIndex">
                          <td
                            contenteditable="true"
                            class="cell"
                            matrix="Biz"
                            v-for="(cell, colIndex) in row"
                            v-bind:key="colIndex"
                            :row="rowIndex"
                            :col="colIndex"
                            :tab="Math.floor(rowIndex/(visibleRows+1) + 1)"
                            :tabrow="rowIndex%(visibleRows+1)"
                            :class="[(rowIndex%(visibleRows+1) == 0) ? tabClass : '',
                                  ((rowIndex%(visibleRows+1) == 0) && (colIndex == 1)) ? tabTitle : '']"
                            @click="onCellClick"
                          >{{ cell }}</td>
                        </tr>
                      </table>
                    </div>
                  </li>
                </transition-group>
              </ul>

              <Tabs :tab="tab" :matrixId="0" />

              <div class="background-text">
                <p>&nbsp;</p>
                <!-- <p>RES</p> -->
              </div>
            </div>

            <div id="ai-jobs">
              <div class="buttons">
                <button class="next btn btn-primary" @click="nextProject">Projects</button>
                <button class="next btn btn-primary" @click="addProject">+</button>
                <input
                  type="text"
                  class="input-add-new"
                  v-model="matrixDev[0][7]"
                  size="20"
                  maxlength="40"
                />
                <button
                  class="next btn btn-warning"
                  @click="uploadProject"
                  title="Update project to ai store"
                >u</button>
                <button
                  class="next btn btn-warning"
                  @click="sheetView = !sheetView"
                  title="Switch Tabs/Folder direction: Vertical/Horizontal"
                >{{ sheetView ? '-' : '|' }}</button>
              </div>
              <ul class="list-group">
                <transition-group name="slide-up" type="animation" appear>
                  <li class="list-group-item" v-for="project in viewProjects" v-bind:key="project">
                    <div class="table-title">
                      <h3 class="long" title="Dev Project & Job Demand in your social network">
                        <!-- <div class="icon3x3prj">{{ projectIcon }}</div>&nbsp;  -->
                        <ai-icon :bits="projectIconBits"></ai-icon>
                        <!-- title[{{ project }}]  -->
                        {{ team.demoProjects[project] }}
                        <img
                          class="owner"
                          :src="require('./assets/img/users/2'+ project + '.png')"
                        />
                        <img class="icon" :src="require('./assets/icons/share.png')" />
                        [{{ project }}]
                      </h3>

                      <h3 class="short" title="Dev Project & Job Demand in your social network">
                        <!-- <div class="icon3x3prj">{{ projectIcon }}</div>&nbsp; -->
                        <ai-icon :bits="projectIconBits"></ai-icon>
                        <!-- title[{{ project }}]  -->
                        {{ team.demoProjects[project] }}
                        <img
                          class="owner"
                          :src="require('./assets/img/users/2'+ project + '.png')"
                        />
                        <img class="icon" :src="require('./assets/icons/share.png')" />
                        [{{ project }}]
                      </h3>

                      <div class="fork" title="fork (copy) project" @click="onProjectFork">f</div>
                    </div>

                    <!-- <section class="views"> -->

                    <div v-if="fbview">
                      <ai-post :matrix="devPosts"></ai-post>
                    </div>

                    <!-- <div>
                        <Table :matrix="matrixDev"></Table>
                    </div>-->

                    <!-- </section> -->

                    <div class="scrollable">
                      <table id="d-table" class="matrix">
                        <tr class="row">
                          <td
                            class="cell config-btn"
                            title="Click to expand visible rows"
                            @click="expandRows"
                          >{{ corner }}</td>
                          <td
                            class="cell tbl-head"
                            v-for="(h, index) in header"
                            v-bind:key="index"
                          >{{ h }}</td>
                        </tr>

                        <div v-if="sheetView">
                          <Spreadsheet :sheet="matrixDev" :tabs="sheetView"></Spreadsheet>
                        </div>

                        <tr class="row" v-for="(row, rowIndex) in matrixDev" v-bind:key="rowIndex">
                          <td
                            class="cell"
                            style="position: relative;"
                            v-for="(cell, colIndex) in row"
                            v-bind:key="colIndex"
                            matrix="Dev"
                            :row="rowIndex"
                            :col="colIndex"
                            :valueini="matrixDev[rowIndex][colIndex]"
                            :tab="Math.floor(rowIndex/(visibleRows+1) + 1)"
                            :tabrow="rowIndex%(visibleRows+1)"
                            :title="matrixDev[rowIndex][colIndex]"
                            :class="[
                                        (rowIndex%(visibleRows+1) == 0) ? tabClass : '',
                                        ((rowIndex%(visibleRows+1) == 0) && (colIndex == 1)) ? tabTitle : '',
                                        (matrixDev[rowIndex][colIndex] == 'Click') ? checkBtn : '',
                                        (matrixDev[rowIndex][colIndex] == 'Cmd') ? cmdBtn : '',
                                        (matrixDev[rowIndex][colIndex] == 'Order') ? orderBtn : '',
                                        (matrixDev[rowIndex][colIndex] == 'Verbal') ? verbalBtn : '',
                                        (matrixDev[rowIndex][colIndex] == 'Post') ? postClass : ''
                                      ]"
                          >
                            <!-- <div contenteditable="true" :id="'Dev:' + rowIndex + ':' + colIndex" 
                                class="cell" 
                                style="visibility: visible; position: relative; z-index: 20; left: 0; top: 0;">
                                {{ matrixDev[rowIndex][colIndex] }}
                            </div>-->

                            <!-- <input :id="'DevInput:' + rowIndex + ':' + colIndex"
                            style="text-align: inherit; visibility: visible; width: inherit; background: transparent; position: relative; z-index: 40; left: 0; top: 0;"-->

                            <textarea
                              :id="'DevInput:' + rowIndex + ':' + colIndex"
                              rows="1"
                              cols="60"
                              style="text-align: inherit; overflow-x: auto; overflow-wrap: normal; white-space: nowrap; visibility: visible; resize: none; width: inherit; background: transparent; position: relative; z-index: 40; left: 0; top: 0;"
                              class="cell-input"
                              type="text"
                              v-model="matrixDev[rowIndex][colIndex]"
                              matrix="Dev"
                              :row="rowIndex"
                              :col="colIndex"
                              :tab="Math.floor(rowIndex/(visibleRows+1) + 1)"
                              :tabrow="rowIndex%(visibleRows+1)"
                              :class="[
                                          (rowIndex%(visibleRows+1) == 0) ? tabClass : '',
                                          ((rowIndex%(visibleRows+1) == 0) && (colIndex == 1)) ? tabTitle : '',
                                          (matrixDev[rowIndex][colIndex] == 'Click') ? checkBtn : '',
                                          (matrixDev[rowIndex][colIndex] == 'Post') ? postClass : ''
                                        ]"
                              v-on:keyup="fx = $event.target.value"
                            />
                          </td>
                        </tr>
                      </table>
                    </div>
                  </li>
                </transition-group>
              </ul>

              <Tabs :tab="tab" :matrixId="1" />

              <div class="background-text">
                <p>&nbsp;</p>
                <!-- <p>REQ</p> -->
              </div>
            </div>

            <div id="ai-ops">
              <div class="buttons">
                <button class="next btn btn-primary" @click="nextService">Services</button>
                <button class="next btn btn-primary" @click="load = !load">+</button>
                <input
                  type="text"
                  class="input-add-new"
                  name="new-ops"
                  value="eg: Execute or book top required ops."
                  size="40"
                  maxlength="40"
                />
                <button class="next btn btn-warning" @click="runOneOps">+</button>
              </div>
              <ul class="list-group">
                <transition-group name="slide-down" type="animation" appear>
                  <li class="list-group-item" v-for="service in services" v-bind:key="service">
                    <div class="table-title">
                      <h3
                        class="long"
                        title="Ops Patents - Service & Skills Offer in your social network"
                      >
                        <!-- <div class="icon3x3srv">{{ serviceIcon }}</div>&nbsp; -->
                        <ai-icon :bits="serviceIconBits"></ai-icon>
                        <!-- title[{{ service }}]  -->
                        {{ team.demoServices[service] }}
                        <img
                          class="owner"
                          :src="require('./assets/img/users/2'+ service + '.png')"
                        />
                        <img class="icon" :src="require('./assets/icons/share.png')" />
                        [{{ service }}]
                      </h3>

                      <h3
                        class="short"
                        title="Ops FairBook - Service & Skills Offer in your social network"
                      >
                        <!-- <div class="icon3x3srv">{{ serviceIcon }}</div>&nbsp; -->
                        <ai-icon :bits="serviceIconBits"></ai-icon>
                        <!-- title[{{ service }}] -->
                        {{ team.demoServices[service] }}
                        <img
                          class="owner"
                          :src="require('./assets/img/users/2'+ service + '.png')"
                        />
                        <img class="icon" :src="require('./assets/icons/share.png')" />
                        [{{ service }}]
                      </h3>

                      <div class="fork" title="fork (copy) service" @click="onServiceFork">f</div>
                    </div>

                    <!-- <section class="views"> -->

                    <div v-if="fbview">
                      <ai-post :matrix="listOps"></ai-post>
                    </div>

                    <!-- </section> -->

                    <div class="scrollable">
                      <table id="o-table" class="matrix">
                        <tr class="row">
                          <td
                            class="cell config-btn"
                            title="Click to expand visible rows"
                            @click="expandRows"
                          >{{ corner }}</td>
                          <td
                            class="cell tbl-head"
                            v-for="(h, index) in header"
                            v-bind:key="index"
                          >{{ h }}</td>
                        </tr>

                        <template v-if="tab[2] === '0'">
                          <tr
                            class="row"
                            v-for="(row, rowIndex) in matrixOps"
                            v-bind:key="rowIndex"
                          >
                            <td
                              contenteditable="true"
                              class="cell"
                              matrix="Ops"
                              v-for="(cell, colIndex) in row"
                              v-bind:key="colIndex"
                              :row="rowIndex"
                              :col="colIndex"
                              :tab="Math.floor(rowIndex/(visibleRows+1) + 1)"
                              :tabrow="rowIndex%(visibleRows+1)"
                              :class="[
                                        (rowIndex%(visibleRows+1) == 0) ? tabClass : '',
                                        ((rowIndex%(visibleRows+1) == 0) && (colIndex == 1)) ? tabTitle : '',
                                        (matrixOps[rowIndex][colIndex] == 'Click') ? checkBtn : '',
                                        (matrixOps[rowIndex][colIndex] == 'Post') ? postClass : ''
                                      ]"
                              @click="onCellClick"
                            >{{ cell }}</td>
                          </tr>
                        </template>

                        <template v-else>
                          <tr
                            class="row"
                            v-for="(row, rowIndex) in filteredMatrixOps"
                            v-bind:key="rowIndex"
                          >
                            <td
                              contenteditable="true"
                              class="cell"
                              matrix="Ops"
                              v-for="(cell, colIndex) in row"
                              v-bind:key="colIndex"
                              :row="rowIndex"
                              :col="colIndex"
                              :tab="Math.floor(rowIndex/(visibleRows+1) + 1)"
                              :tabrow="rowIndex%(visibleRows+1)"
                              :class="[
                                        (rowIndex%(visibleRows+1) == 0) ? tabClass : '',
                                        ((rowIndex%(visibleRows+1) == 0) && (colIndex == 1)) ? tabTitle : '',
                                        (matrixOps[rowIndex][colIndex] == 'Click') ? checkBtn : '',
                                        (matrixOps[rowIndex][colIndex] == 'Post') ? postClass : ''
                                      ]"
                              @click="onCellClick"
                            >{{ cell }}</td>
                          </tr>
                        </template>
                      </table>
                    </div>
                  </li>
                </transition-group>
              </ul>

              <Tabs :tab="tab" :matrixId="2" />

              <div class="background-text">
                <p>&nbsp;</p>
                <!-- <p>OPS</p> -->
              </div>
            </div>

            <!-- </div> -->
          </div>

          <div class="background-signs">
            <p>
              <span v-html="backgroundText"></span>
            </p>
          </div>

          <div id="editor">
            <div class="buttons">
              <div>
                <h2 class="title">
                  <i>fx</i>
                </h2>
              </div>
              <div class="input-edit" contenteditable="true">{{ fx }}</div>
              <button class="edit btn btn-warning" @click="show = !show;">Clone</button>
              <button class="edit btn btn-warning" @click="runOneOps">+</button>
              <button
                class="edit player btn btn-success"
                @click="pause ? start() : stop()"
              >{{ pause ? '>' : '| |' }}</button>
              <div>
                <h2 class="title" contenteditable="true"></h2>
              </div>
              <button class="edit btn btn-primary" @click="show = !show;">Interests</button>
              <button class="edit btn btn-primary" @click="show = !show;">Members</button>
              <button class="edit btn btn-primary" @click="show = !show;">Projects</button>
              <button class="edit btn btn-primary" @click="show = !show;">Services</button>
              <button class="edit btn btn-primary" @click="show = !show;">Wiki</button>
              <button class="edit btn btn-danger" @click="show = !show;">Code</button>
              <button class="edit btn btn-warning" @click="show = !show;">
                <b>&lt;</b>
              </button>
              <button class="edit btn btn-success" @click="modeId++;">
                <b>{{ mode[modeId%mode.length] }}</b>
              </button>
            </div>

            <div id="editor-tabs">
              <div id="text-editor">
                <textarea
                  id="textEdit"
                  v-model="matrixDev[1][11]"
                  placeholder="Edit your AI Post & Ops here."
                ></textarea>
              </div>

              <div id="table-editor">
                <table id="e-table" class="matrix">
                  <tr class="row">
                    <td
                      class="cell config-btn"
                      title="Click to expand visible rows or Right click for full tab view"
                      @click="expandRows"
                      @click.prevent.right="expandRowsBatch"
                    >{{ corner }}</td>
                    <td
                      class="cell tbl-head"
                      v-for="(h, index) in header"
                      v-bind:key="index"
                    >{{ h }}</td>
                  </tr>

                  <tr class="row" v-for="(row, rowIndex) in matrixEdit" v-bind:key="rowIndex">
                    <td
                      contenteditable="true"
                      class="cell"
                      matrix="Edit"
                      v-for="(cell, colIndex) in row"
                      v-bind:key="colIndex"
                      :row="rowIndex"
                      :col="colIndex"
                      :tab="Math.floor(rowIndex/(visibleRows+1) + 1)"
                      :tabrow="rowIndex%(visibleRows+1)"
                      :class="[(rowIndex%(visibleRows+1) == 0) ? tabClass : '',
                            ((rowIndex%(visibleRows+1) == 0) && (colIndex == 1)) ? tabTitle : '']"
                      @click="onCellClick"
                    >{{ cell }}</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>

          <div id="footer">
            <div id="ai-engines" class="title-container">
              <h4>
                <a href="https://ai-cell.web.app">CEO</a>
              </h4>
              <h4>
                <a href="https://ai-banks.web.app">FIN</a>
              </h4>
              <h4>
                <a href="https://ai-gov.web.app">GOV</a>
              </h4>
              <h4>
                <a href="https://ai-pmo.web.app">PMO</a>
              </h4>
              <h4>
                <a href="https://ai-erp.web.app">ERP</a>
              </h4>
              <h4>
                <a href="https://ai-hrm.web.app">HRM</a>
              </h4>
              <h4>
                <a href="https://ai-pto.web.app">PTO</a>
              </h4>
              <h4>
                <a href="https://ai-eco.web.app">ECO</a>
              </h4>
              <h4>
                <a href="https://ai-press.web.app">Press</a>
              </h4>
              <h4>
                <a href="https://ai-cell.web.app">EDU</a>
              </h4>
              <h4>
                <a href="https://ai-devops.web.app">DevOps</a>
              </h4>
              <h4>
                <a href="https://ai-teams.web.app">Team</a>
              </h4>
            </div>
            <div id="my-dev-ops" class="title-container">
              <h4>
                <a href="https://ai-cell.web.app">DNA</a>
              </h4>
              <h4>
                <a href="https://ai-banks.web.app">RPA</a>
              </h4>
              <h4>
                <a href="https://ai-gov.web.app">R&D</a>
              </h4>
              <h4>
                <a href="https://ai-pmo.web.app">MIL</a>
              </h4>
              <h4>
                <a href="https://ai-erp.web.app">CRM</a>
              </h4>
              <h4>
                <a href="https://ai-hrm.web.app">HCM</a>
              </h4>
              <h4>
                <a href="https://ai-pto.web.app">BIZ</a>
              </h4>
              <h4>
                <a href="https://ai-eco.web.app">SOC</a>
              </h4>
              <h4>
                <a href="https://ai-press.web.app">MED</a>
              </h4>
              <h4>
                <a href="https://ai-cell.web.app">BIO</a>
              </h4>
              <h4>
                <a href="https://ai-devops.web.app">Agile</a>
              </h4>
              <h4>
                <a href="https://ai-teams.web.app">POL</a>
              </h4>
            </div>
            <div class="title-container">
              <div class="footer-items">
                <h4 class="long">W3AI Social Neural Network</h4>
                <h4 class="long">
                  W3AI Meetups&nbsp;
                  <a href="https://www.meetup.com/SocialAI/">Toronto</a>&nbsp;
                  <a href="https://www.meetup.com/Manhattan-AIR/">NYC</a>&nbsp;
                  <a href="https://www.meetup.com/HalifaxAIG/">Halifax</a>
                </h4>
                <h4>Stefan Ianta @ Pythian</h4>
                <h4 class="long">
                  <a href="https://github.com/aibase">innovation engines @ github</a>
                </h4>
                <h4 class="short">
                  <a href="https://github.com/aibase/ai-git">ai git PoC @ github</a>
                </h4>
                <h4 class="long" contenteditable="true">Collaboration Engine / W3AI SNN Protocol</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"; // for connecting to Frirebase RTDB
import redisAxios from "axios"; // for connecting to local Redis db

import fb from "./gcp.js";
const fs = fb.firestore();
const storage = fb.storage(); //  Firebase / GCP Storage

import aiteam from "./ai-config.json";

import Header from "./components/header.vue";
import Tabs from "./components/tabs.vue";

import Post from "./views/Post.vue";
import Report from "./views/Report.vue";

import Icon from "./util/icon.vue";
import Spreadsheet from "./views/Spreadsheet";
// import gcp from "./gcp.js";

export default {
  name: "app",
  components: {
    "app-header": Header,
    "ai-post": Post,
    "ai-report": Report,
    "ai-icon": Icon,
    Spreadsheet,
    Tabs
  },
  created() {
    this.$store.dispatch("tryAutoLogin");
  },
  data() {
    return {
      team: aiteam,
      interval: "timer",
      speed: 2000, // milliseconds
      cycle: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      cycleId: 1,
      timeUnit: ["sec", "min"],
      timeUnitId: 0,
      view: ["run", "com", "edu", "soc", "dev", "ops", "test", "bank"],
      viewId: 0,
      sheetView: false,
      mode: ["CEO", "DEV", "OPS", "EDU", "QA", "UA"],
      modeId: 0,
      policyRule: [
        "ROI",
        "FAM",
        "SOC",
        "ECO",
        "BIZ",
        "POL",
        "LOC",
        "PWR",
        "CTRL",
        "TEAM",
        "FUN",
        "ATTN",
        "MED",
        "GAME",
        "LIFE"
      ],
      postName: ["job", "post", "dev", "repo", "prj", "bid", "rDNA"],
      postNameId: 0,
      opsName: ["ads", "app", "ops", "srv", "offr", "ask", "rRNA"],
      opsNameId: 1,
      backgroundText: `&nbsp; cash = &nbsp;project &nbsp;&#x2731 ops
            <br><br>
            &nbsp;ai &nbsp; accelerator`,
      liveText: `&nbsp; ATP &nbsp; &nbsp; DNA &nbsp;&nbsp; RNA
            <br><br>
            market &nbsp;engine`,
      devText: `ai &nbsp;&nbsp;= &nbsp; &nbsp;git&nbsp; &nbsp;&#x2731 &nbsp; ops
      <br><br>
      eXchange &nbsp;engine`,
      visibleRows: 1,
      tab: ["0", "0", "0"],
      pause: true,
      show: true,
      load: true,
      rules: ["FAST"],
      results: [8],
      patentState: 10,
      fbview: true,
      noView: "noview",
      viewProjects: [24],
      projects: [],
      projectStore: [],
      // newProjectTitle: 'New Project Title',
      projectIconBits: "11010",
      serviceIconBits: "10110",
      // projectIcon: '11100',
      // serviceIcon: '10111',
      branch: 1,
      branches: [8],
      services: [10],
      blockchains: [365],
      tabClass: "tabline",
      tabTitle: "tabname",
      checkBtn: "checkbtn",
      cmdBtn: "cmdbtn",
      orderBtn: "orderbtn",
      verbalBtn: "verbalbtn",
      postClass: "postclass",
      currentTable: "",
      currentRow: "",
      currentCol: "",
      currentCellVal: " ",
      fx: "",
      fxEval: "",
      corner: 1,
      rowsBatch: 5,
      header: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"
      ],
      blankTabMatrix: [
        [
          "a",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ]
      ],
      blankTabRow: [
        "a",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ],
      textEdit: `
Hello World!

Just another super productivity app.
Add incentive check lists to trigger innovators worldwide.
Or add your services to contribute to world's projects.

clone free ai open apps:
github.com/ai-accelerator`,
      listBiz: [
        [
          "1",
          "Post",
          ":",
          "Best Practices Blockchains",
          "",
          "subtitle",
          ":",
          "welcome to ai web"
        ],
        [
          "1",
          "Post",
          ":",
          "Ranked Contribution Blockchains",
          "",
          "subtitle",
          ":",
          "welcome to ai web"
        ]
      ],
      matrixBiz: [
        [
          "a",
          "STATUS",
          ":",
          "OK?",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ],
        [
          "1",
          "tx-State",
          ":",
          "-",
          "",
          "pa-State",
          ":",
          "-",
          "",
          "sa-State",
          ":",
          "-",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ],
        [
          "b",
          "RATES",
          ":",
          "DEAL?",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ],
        [
          "1",
          "tx-State",
          ":",
          "-",
          "",
          "pb-State",
          ":",
          "-",
          "",
          "sb-State",
          ":",
          "-",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ],
        [
          "c",
          "DOCS",
          ":",
          "TERMS?",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ],
        [
          "1",
          "tx-State",
          ":",
          "-",
          "",
          "pc-State",
          ":",
          "-",
          "",
          "sc-State",
          ":",
          "-",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ],
        [
          "d",
          "BOOK",
          ":",
          "BOOKED?",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ],
        [
          "1",
          "tx-State",
          ":",
          "-",
          "",
          "pd-State",
          ":",
          "-",
          "",
          "sd-State",
          ":",
          "-",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ],
        [
          "e",
          "INPUT",
          ":",
          "CREATED?",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ],
        [
          "1",
          "tx-State",
          ":",
          "-",
          "",
          "pe-State",
          ":",
          "-",
          "",
          "se-State",
          ":",
          "-",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ],
        [
          "f",
          "STEPS",
          ":",
          "PLANNED?",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ],
        [
          "1",
          "tx-State",
          ":",
          "-",
          "",
          "pf-State",
          ":",
          "-",
          "",
          "sf-State",
          ":",
          "-",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ],
        [
          "g",
          "OUTPUT",
          ":",
          "TESTED?",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ],
        [
          "1",
          "tx-State",
          ":",
          "-",
          "",
          "pg-State",
          ":",
          "-",
          "",
          "sg-State",
          ":",
          "-",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ],
        [
          "h",
          "PAY",
          ":",
          "PAID?",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ],
        [
          "1",
          "tx-State",
          ":",
          "-",
          "",
          "ph-State",
          ":",
          "-",
          "",
          "sh-State",
          ":",
          "-",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ]
      ],
      listDev: [
        // list/rows of posts, docs, links, obj, etc from matrixDev
        { title: "Toronto W3AI News", post: "bla bla, bla", author: "SI" }
      ],
      matrixDev: [
        [
          "a",
          "SOCIAL",
          ":",
          "project",
          "",
          "title",
          ":",
          "AI Economy",
          "",
          "priority",
          "=",
          "1",
          "",
          "votes",
          "=",
          "247",
          "",
          "comments",
          "=",
          "144",
          "",
          "clones",
          "=",
          "24",
          "",
          "",
          "\n"
        ],
        [
          "1",
          "Post",
          ":",
          "Project Data & Scripts Database",
          "",
          "subtitle",
          ":",
          "welcome to ai web",
          "",
          "body",
          ":",
          `AI super productivity app.
Add incentive check lists to trigger ai innovators worldwide.
Or add your services to contribute to world's innovation projects.`,
          "",
          "signature",
          ":",
          `clone free ai world apps:
github.com/ai-accelerator`,
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "\n"
        ],
        [
          "b",
          "RATES",
          ":",
          "money",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "\n"
        ],
        [
          "1",
          "Post",
          ":",
          "Recombinant Project Templates",
          "",
          "help",
          ":",
          "Check if service rate is in project range",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "\n"
        ],
        [
          "c",
          "DOCS",
          ":",
          "terms",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "\n"
        ],
        [
          "1",
          "Click",
          ":",
          '= if ( sc-Docs == "ready" ) { pc-State = "Ok" } else { pc-State = "Quit" }',
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "\n"
        ],
        // ['1','Post',':','Toronto W3AI News','','posts',':','24','','comments',':','36','','','','','','','','','','','','','','','\n'],
        [
          "d",
          "BOOK",
          ":",
          "done",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "\n"
        ],
        [
          "1",
          "Click",
          ":",
          '= if ( sd-Book == "open" ) { pd-State = "Ok" } else { pd-State = "Quit" }',
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "\n"
        ],
        // ['1','Gantt',':','calendar','','','','','','','','','','','','','','','','','','','','','','','\n'],
        [
          "e",
          "INPUT",
          ":",
          "create",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "\n"
        ],
        [
          "1",
          "Click",
          ":",
          '= if ( se-Input == "match" ) { pe-State = "Ok" } else { pe-State = "Quit" }',
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "\n"
        ],
        [
          "f",
          "STEPS",
          ":",
          "plan",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "\n"
        ],
        [
          "1",
          "Cmd",
          ":",
          '= if ( sf-Steps == "ok" ) { pf-State = "Ok" && cmd = "gcloud firestore create-indexes index.yaml"} else { pf-State = "Quit" }',
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "\n"
        ],
        [
          "g",
          "OUTPUT",
          ":",
          "test",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "\n"
        ],
        [
          "1",
          "Order",
          ":",
          '= if ( sg-Output == "created" ) { pg-State = "Ok" && request = "@QA-Team : run tests"} else { pg-State = "Quit" }',
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "\n"
        ],
        [
          "h",
          "PAY",
          ":",
          "paid",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "\n"
        ],
        [
          "1",
          "Verbal",
          ":",
          '= if ( sh-Pay == "cashed" ) { ph-State = "Done" && verbal = "Thanks!"} else { ph-State = "Feedback" }',
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "\n"
        ]
      ],
      listOps: [
        [
          "1",
          "Post",
          ":",
          "Service Data & Scripts Database",
          "",
          "subtitle",
          ":",
          "welcome to ai web"
        ],
        [
          "1",
          "Post",
          ":",
          "Recombinant Service APIs",
          "",
          "subtitle",
          ":",
          "realtime recombinant services"
        ]
      ],
      matrixOps: [
        [
          "a",
          "MARKET",
          ":",
          "ready",
          "",
          "title",
          ":",
          "Skill 37",
          "",
          "usage",
          "=",
          "247k",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ],
        [
          "1",
          "Click",
          ":",
          '= if ( pa-Social == "project" ) { sa-State = "Ok" } else { sa-State = "Quit" }',
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ],
        //         ['2','Post',':','Hello Service World!','','subtitle',':','welcome to ai web','','body',':',
        //         `AI super productivity services.
        // Add incentive check lists to trigger ai innovators worldwide.
        // Or add your services to contribute to world's innovation projects.`,'','signature',':',`clone free ai world apps:
        // github.com/ai-accelerator`,'','','','','','','','','','','\n'],
        [
          "b",
          "RATES",
          ":",
          "money",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ],
        [
          "1",
          "Click",
          ":",
          '= if ( pb-Rates == "range" ) { sb-State = "Ok" } else { sb-State = "Quit" }',
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ],
        [
          "c",
          "DOCS",
          ":",
          "terms",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ],
        [
          "1",
          "Click",
          ":",
          '= if ( pc-Docs == "public" ) { sc-State = "Ok" } else { sc-State = "Quit" }',
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ],
        [
          "d",
          "BOOK",
          ":",
          "done",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ],
        [
          "1",
          "Click",
          ":",
          '= if ( pd-Book == "open" ) { sd-State = "Ok" } else { sd-State = "Quit" }',
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ],
        [
          "e",
          "INPUT",
          ":",
          "test",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ],
        [
          "1",
          "Click",
          ":",
          '= if ( pe-Input == "match" ) { se-State = "Ok" } else { se-State = "Quit" }',
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ],
        [
          "f",
          "STEPS",
          ":",
          "plan",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ],
        [
          "1",
          "Click",
          ":",
          '= if ( pf-Steps == "tasks" ) { sf-State = "Ok" } else { sf-State = "Quit" }',
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ],
        [
          "g",
          "OUTPUT",
          ":",
          "create",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ],
        [
          "1",
          "Click",
          ":",
          '= if ( pg-Output == "tested" ) { sg-State = "Ok" } else { sg-State = "Quit" }',
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ],
        [
          "h",
          "PAY",
          ":",
          "paid",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ],
        [
          "1",
          "Click",
          ":",
          '= if ( ph-Pay == "paid" ) { sh-State = "Done" } else { sh-State = "Back" }',
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ]
      ],
      matrixEdit: [
        [
          "a",
          "STATUS",
          ":",
          "post",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ],
        [
          "1",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ],
        [
          "b",
          "RATES",
          ":",
          "money",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ],
        [
          "1",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ],
        [
          "c",
          "DOCS",
          ":",
          "terms",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ],
        [
          "1",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ],
        [
          "d",
          "BOOK",
          ":",
          "done",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ],
        [
          "1",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ],
        [
          "e",
          "INPUT",
          ":",
          "create",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ],
        [
          "1",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ],
        [
          "f",
          "STEPS",
          ":",
          "plan",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ],
        [
          "1",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ],
        [
          "g",
          "OUTPUT",
          ":",
          "test",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ],
        [
          "1",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ],
        [
          "h",
          "PAY",
          ":",
          "paid",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ],
        [
          "1",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ]
      ],
      newDevPosts: [
        "Funded: 5min innovation engine install",
        "Voting: Chinese & Hindi innovation engine",
        "Idea: Job posts as innovation demand"
      ],
      newOpsPosts: [
        "COM: xl cash = meta AI/ML/Kubernetes",
        "ORG: Innovation/Project Rendering",
        "R&D: Code/Branch Ranking Blockchains"
      ]
    };
  },
  computed: {
    devPosts: function() {
      return this.matrixDev.filter(row => row[1] === "Post");
    },
    filteredMatrixOps: function() {
      let result = [];
      let tabLine = false;

      for (let i = 0; i < this.matrixOps.length; i++) {
        let element = this.matrixOps[i];
        // eslint-disable-next-line no-console
        console.log(this.tab[2]);

        if (this.tab[2] === "0") {
          result.push(element);
        }

        if (element[0] === this.tab[2]) {
          result.push(element);
          let cursorIndex = i + 1;

          // eslint-disable-next-line no-console
          console.log(cursorIndex);

          if (cursorIndex < this.matrixOps.length) {
            var regex = /[0-9]+/;
            let cursor;
            let char;

            do {
              cursor = this.matrixOps[cursorIndex];
              char = cursor[0];
              // eslint-disable-next-line no-console
              console.log("char is: " + char);
              if (regex.test(char)) {
                // eslint-disable-next-line no-console
                console.log("test passed");
                result.push(cursor);
              } else {
                // eslint-disable-next-line no-console
                console.log("test failed");
                return result;
              }
              cursorIndex++;
            } while (cursorIndex <= this.matrixOps.length);

            return result;
          }

          tabLine = true;
        }

        if (!isNaN(element[0]) && tabLine) {
          result.push(element);
        } else {
          break;
        }
      }

      return result;
    }
  },

  firestore: {
    projects: fs.collection("projects")
  },

  mounted() {
    if (localStorage.getItem("projects")) {
      try {
        this.projectStore = JSON.parse(localStorage.getItem("projects"));
      } catch (e) {
        localStorage.removeItem("projects");
      }
    }
  },

  filters: {
    //tabView: function (matrix) {
    //  if (matrix[0])
    //}
  },

  methods: {
    randomInt(min, max) {
      // min and max included
      return Math.floor(Math.random() * (max - min + 1) + min);
    },
    uploadProject() {
      let storageRef = storage.ref();
      // let dataRef = storageRef.child('data');
      let pathname = "data/projects/";
      pathname = pathname + this.matrixDev[0][7];
      let projectDataRef = storageRef.child(pathname);

      let projectName = this.matrixDev[0][7] + ".ai";
      let newProjectData = this.matrixDev.slice(0);
      let file = new File(newProjectData, projectName, {
        type: "text/plain",
        lastModified: new Date().getTime()
      });

      /* eslint-disable no-unused-vars */
      projectDataRef.put(file).then(function(snapshot) {
        // console.log('Uploaded a blob or file!');
      });
      /* eslint-enable no-unused-vars */
    },
    addProject() {
      // ensure they actually typed something as new Project Title
      if (!this.matrixDev[0][7]) {
        return;
      }

      let newProject = this.matrixDev.slice(0); // copy the current matrixDev
      this.projectStore.splice(0, 0, newProject); // Add new project at the end of the projects store
      this.saveProjects();
    },
    removeProject(x) {
      this.projectStore.splice(x, 1);
      this.saveProjects();
    },
    saveProjects() {
      const parsed = JSON.stringify(this.projectStore);
      localStorage.setItem("projects", parsed);
    },

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

      this.setCellAndColor("d-table", 2, 2, "ok", "project-color");
      this.setCellAndColor("o-table", 2, 2, "ok", "service-color");
      this.setCellAndColor("b-table", 2, 11, "ok", "service-color");
      this.setCellAndColor("b-table", 2, 7, "ok", "project-color");
      this.setCellAndColor("b-table", 2, 3, "ok", "blockchain-color");
      this.setCellAndColor("b-table", 1, 3, "OK", "blockchain-green");

      this.setCellAndColor("d-table", 4, 2, "ok", "project-color");
      this.setCellAndColor("o-table", 4, 2, "ok", "service-color");
      this.setCellAndColor("b-table", 4, 11, "ok", "service-color");
      this.setCellAndColor("b-table", 4, 7, "ok", "project-color");
      this.setCellAndColor("b-table", 4, 3, "ok", "blockchain-color");
      this.setCellAndColor("b-table", 3, 3, "OK", "blockchain-green");

      this.setCellAndColor("d-table", 6, 2, "ok", "project-color");
      this.setCellAndColor("o-table", 6, 2, "ok", "service-color");
      this.setCellAndColor("b-table", 6, 11, "ok", "service-color");
      this.setCellAndColor("b-table", 6, 7, "ok", "project-color");
      this.setCellAndColor("b-table", 6, 3, "ok", "blockchain-color");
      this.setCellAndColor("b-table", 5, 3, "OK", "blockchain-green");

      this.setCellAndColor("d-table", 8, 2, "ok", "project-color");
      this.setCellAndColor("o-table", 8, 2, "ok", "service-color");
      this.setCellAndColor("b-table", 8, 11, "ok", "service-color");
      this.setCellAndColor("b-table", 8, 7, "ok", "project-color");
      this.setCellAndColor("b-table", 8, 3, "ok", "blockchain-color");
      this.setCellAndColor("b-table", 7, 3, "OK", "blockchain-green");

      this.setCellAndColor("d-table", 10, 2, "ok", "project-color");
      this.setCellAndColor("o-table", 10, 2, "ok", "service-color");
      this.setCellAndColor("b-table", 10, 11, "ok", "service-color");
      this.setCellAndColor("b-table", 10, 7, "ok", "project-color");
      this.setCellAndColor("b-table", 10, 3, "ok", "blockchain-color");
      this.setCellAndColor("b-table", 9, 3, "OK", "blockchain-green");

      this.setCellAndColor("d-table", 12, 2, "ok", "project-color");
      this.setCellAndColor("o-table", 12, 2, "ok", "service-color");
      this.setCellAndColor("b-table", 12, 11, "ok", "service-color");
      this.setCellAndColor("b-table", 12, 7, "ok", "project-color");
      this.setCellAndColor("b-table", 12, 3, "ok", "blockchain-color");
      this.setCellAndColor("b-table", 11, 3, "OK", "blockchain-green");

      this.setCellAndColor("d-table", 14, 2, "ok", "project-color");
      this.setCellAndColor("o-table", 14, 2, "ok", "service-color");
      this.setCellAndColor("b-table", 14, 11, "ok", "service-color");
      this.setCellAndColor("b-table", 14, 7, "ok", "project-color");
      this.setCellAndColor("b-table", 14, 3, "ok", "blockchain-color");
      this.setCellAndColor("b-table", 13, 3, "OK", "blockchain-green");

      this.setCellAndColor("d-table", 16, 2, "ok", "project-color");
      this.setCellAndColor("o-table", 16, 2, "ok", "service-color");
      this.setCellAndColor("b-table", 16, 11, "ok", "service-color");
      this.setCellAndColor("b-table", 16, 7, "ok", "project-color");
      this.setCellAndColor("b-table", 16, 3, "ok", "blockchain-color");
      this.setCellAndColor("b-table", 15, 3, "OK", "blockchain-green");

      // Run/Eval Service Input queries on Project data and add/update results as step[0]

      // Run/Eval Service Steps/Functions/Commands and update Service results

      // Run/Eval Service Output queries and update Project Output And Blockchain Branches
      this.writeProgress();
    },
    readProject() {
      // Read user edits/updates in project table
      // ToDo readProject() form matrix synced to market / Firestore
      // Dummy animation of reading & changing table cells
      // let projectTable = document.getElementById('d-table');  // To move in an ini method?
      // // Read VOTING, FUNDS, TERMS and BOOK tabs from project table
      // for (let row = 2; row <= 8; row=row+2) {
      //   let x = projectTable.rows[row].cells;
      //   for (let col = 1; col <= 13; col=col+2) { // for demo read vizible cols
      //     // x[col].innerHTML = value; // set value => should read cell into projectMatrix
      //     x[col].classList.add('fade-on-job-rules-read');
      //   }
      // }
      // // Read INPUT, STEPS, OUTPUT and PAY tabs from project table
      // for (let row = 10; row <= 16; row=row+2) {
      //   let x = projectTable.rows[row].cells;
      //   for (let col = 1; col <= 13; col=col+2) { // for demo read vizible cols
      //     // x[col].innerHTML = value; // set value => should read cell into projectMatrix
      //     x[col].classList.add('fade-on-job-status-read');
      //   }
      // }
      // el.style.opacity = 0.5;
      // done();
    },
    readService() {
      // Read user edits/updates in service table
      // Todo readService() form matrix synced to market / Firestore
      // Dummy animation of reading & changing table cells
      // let serviceTable = document.getElementById('o-table');  // To move in an ini method?
      // // Read VOTING, FUNDS, TERMS and BOOK tabs from service table
      // for (let row = 2; row <= 8; row=row+2) {
      //   let x = serviceTable.rows[row].cells;
      //   for (let col = 1; col <= 13; col=col+2) { // for demo read vizible cols
      //     // x[col].innerHTML = value; // set value => should read cell into projectMatrix
      //     x[col].classList.add('fade-on-ops-rules-read');
      //   }
      // }
      // // Read INPUT, STEPS, OUTPUT and PAY tabs from service table
      // for (let row = 10; row <= 16; row=row+2) {
      //   let x = serviceTable.rows[row].cells;
      //   for (let col = 1; col <= 13; col=col+2) { // for demo read vizible cols
      //     // x[col].innerHTML = value; // set value => should read cell into projectMatrix
      //     x[col].classList.add('fade-on-ops-exe-read');
      //   }
      // }
      // done();
    },
    writeProgress() {
      // Read user edits/updates in progress table - ToDo - To review
      // Todo writeProgress() form matrix synced to market / Firestore
      // // Dummy animation of reading & changing table cells
      // let serviceTable = document.getElementById('b-table');  // To move in an ini method? serviceTable or bizTable (former progress-table)
      // // Write VOTING, FUNDS, TERMS and BOOK tabs to progress table
      // for (let row = 2; row <= 8; row=row+2) {
      //   let x = serviceTable.rows[row].cells;
      //   for (let col = 1; col <= 13; col=col+2) { // for demo read vizible cols
      //     // x[col].innerHTML = value; // set value => should read cell into projectMatrix
      //     x[col].classList.add('fade-on-block-deal-write');
      //   }
      // }
      // // Write INPUT, STEPS, OUTPUT and PAY tabs to progress table
      // for (let row = 10; row <= 16; row=row+2) {
      //   let x = serviceTable.rows[row].cells;
      //   for (let col = 1; col <= 13; col=col+2) { // for demo read vizible cols
      //     // x[col].innerHTML = value; // set value => should read cell into projectMatrix
      //     x[col].classList.add('fade-on-block-pay-write');
      //   }
      // }
      // done();
    },
    updateCell(matrix, row, col) {
      // let mat = this.currentTable = el.target.getAttribute(matrix);   // mat - matrix/table: Biz | Dev | Ops | Edit
      // let m = mat[0].toUpperCase();                                     // m - matrix/table: B | D | O | E

      // let col = this.currentCol = el.target.getAttribute('col');        // col - col: 1-26
      // let c = this.header[col - 1];                                     // c - col: A-Z
      // let row = this.currentRow = el.target.getAttribute('row');        // row - row: 1,... - the row in the matrix table
      // // let tr = row;

      // // let tab = Math.floor( row / (this.visibleRows+1) + 1);         // tab - tab 1-8
      // let tab = el.target.getAttribute('tab');
      // let t = tab;                                                      // t - tab a-h

      // let tabrow = el.target.getAttribute('tabrow');                    // r - row: 1,... - the row in the tab
      // let r = tabrow;

      let cellId = matrix + ":" + row + ":" + col;
      // console.log(cellId);

      let cellToUpdate = document.getElementById(cellId);

      // ToDo - switch statement for Biz, Dev, Ops Edit matrices
      cellToUpdate.innerHTML = this.matrixDev[row][col];
    },
    onCellClick(el) {
      /* eslint-disable no-unused-vars */
      let mat = (this.currentTable = el.target.getAttribute("matrix")); // mat - matrix/table: Biz | Dev | Ops | Edit
      let m = mat[0].toUpperCase(); // m - matrix/table: B | D | O | E

      let col = (this.currentCol = el.target.getAttribute("col")); // col - col: 1-26
      let c = this.header[col - 1]; // c - col: A-Z
      let row = (this.currentRow = el.target.getAttribute("row")); // row - row: 1,... - the row in the matrix table
      // let tr = row;

      // let tab = Math.floor( row / (this.visibleRows+1) + 1);         // tab - tab 1-8
      let tab = el.target.getAttribute("tab");
      let t = tab; // t - tab a-h

      let tabrow = el.target.getAttribute("tabrow"); // r - row: 1,... - the row in the tab
      let r = tabrow;

      // let val = this.currentCellVal = el.target.innerHTML.trim();       // val - cell value - string
      // let val = this.currentCellVal = el.target.getAttribute('valueini');      // val - cell value - string
      let v = this.matrixDev[row][col];
      this.currentCellVal = v;
      /* eslint-enable no-unused-vars */

      let cellId = mat + ":" + row + ":" + col;

      // console.log('test onCellClick')
      // console.log(m, c, t, r, cellId);

      let cellToUpdate = document.getElementById(cellId);
      cellToUpdate.innerHTML = v;

      // this.fx = this.currentCellVal;

      // if ( this.fx[0] === '=' ) {
      //   this.fx += ' ' + m + t + c + r + '';
      // } else {
      //   this.fx = v;
      // }
      // if (this.modeId == 0) {
      //   // if mode[0] is CEO - educational / training
      //   // ToDo: hide fx if blank
      //   this.textEdit = ' > tbl: ' + m + ' tab: ' + t + ' row: ' + r + ' col: ' + c + ' val: ' + v + '\n > fx = ' + eval(this.fx) + '\n' + this.textEdit;
      // } else {
      //   // mainly for dev
      //   this.textEdit = ' > ' + m + ' ' + t + ' ' + r + ' ' + c + ' ' + v + '\n > ' + this.fx + '\n' + this.textEdit;
      // }
    },
    expandRows() {
      this.visibleRows++;
      this.corner = this.visibleRows;
      // add blankRows to the matrix table
      let newRow = this.blankTabRow.slice(0); // copy blankTabRow to new array
      newRow[0] = this.corner;
      for (let tab = 0; tab < 8; tab++) {
        // insert newRow in matrix at index - first param
        this.matrixBiz.splice(
          this.visibleRows + (this.visibleRows + 1) * tab,
          0,
          newRow
        );
        this.matrixDev.splice(
          this.visibleRows + (this.visibleRows + 1) * tab,
          0,
          newRow
        );
        this.matrixOps.splice(
          this.visibleRows + (this.visibleRows + 1) * tab,
          0,
          newRow
        );
        this.matrixEdit.splice(
          this.visibleRows + (this.visibleRows + 1) * tab,
          0,
          newRow
        );
      }
    },
    expandRowsBatch() {
      // add a batch of rows
      for (let newRows = 0; newRows < this.rowsBatch; newRows++) {
        this.expandRows();
      }
    },
    showPause() {
      // Toggle play button between play '>' and pause '||'
      return this.pause ? "| |" : ">";
    },
    nextBranch() {
      // To add animation for showing the next branch table
      this.branch++;
    },
    addNewRule() {
      this.rules.push("new rule");
    },
    onProjectFork() {
      this.newDevPosts.unshift("New project idea");

      const lines = { ...this.matrixDev };

      fs.collection("projects").add({
        tablelines: lines
      });

      // experimenting with adding task to local Redis database
      redisAxios.post("/task/add", { task: "Test task sent form Vue app" });

      // axios.post('https://aiplanet.firebaseio.com/projects.json', this.matrixDev)
      // axios.post('https://firestore.googleapis.com/v1/projects/aibase/databases/(default)/documents/projects', this.matrixDev)
      //   .then(res => console.log(res))
      //   .catch(err => console.log(err));
    },
    onServiceFork() {
      this.newOpsPosts.unshift("New service idea");
      axios.post("https://aibase.firebaseio.com/services.json", this.matrixOps);
      // .then(res => console.log(res))
      // .catch(err => console.log(err));
    },
    generateIconBits(index, symbol) {
      let hex = (200 + index).toString(2);
      hex = hex.substr(-5);
      // hex = hex + hex;
      hex = hex.replace(/[0]/g, "8");
      hex = hex.replace(/[1]/g, symbol);
      return hex;
    },
    nextProject() {
      // let projectsNo = this.viewProjects.length;
      this.viewProjects.push(Math.floor(Math.random() * 100)); // add project to end/bottom
      this.viewProjects.shift(); // removes the first project
      this.projectIconBits = this.generateIconBits(this.viewProjects[0], "1");
      // ToDo: add branches and results structures to project data structure - Code below is just demo/dummy
      this.branches.push(Math.floor(Math.random() * 100));
      this.branches.shift();
      this.branch = 1;
    },
    nextService() {
      // let servicesNo = this.services.length;
      this.services.unshift(Math.floor(Math.random() * 100)); // add service to top
      this.services.pop(); // removes the last service
      this.serviceIconBits = this.generateIconBits(this.services[0], "1");
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
    // TODO - setCell in the matrices linked to Firestore / not in tables

    // TODO - add color param (related to status GYR or prj/srv, etc)
    // TODO - add delay/async param (related to local processing or external/API)
    // Todo - experiment with dual color for processing and result etc
    setCell(tableId, row, col, value) {
      let table = document.getElementById(tableId);
      let x = table.rows[row].cells;

      x[col].innerHTML = value;

      x[col].classList.add("fade-on-change");
    },
    setCellAndColor(tableId, row, col, value, color) {
      let table = document.getElementById(tableId);
      let x = table.rows[row].cells;

      x[col].innerHTML = value;

      x[col].classList.add(color);
      x[col].classList.add("fade-on-change");
      // setTimeout(250);
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
  margin: 0.9rem 2rem 0 0rem;
}

h1.long {
  margin: 0.5rem 0 0.5rem;
}

h5.long {
  margin: 0px;
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
  /* background-color: #6aa84f; */
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

#flags {
  display: flex;
  flex-direction: row;
  height: 20px;
  overflow-x: hidden;
}

.flag {
  width: 15px;
  height: 10px;
}

.table-title {
  height: 5rem;
  border-bottom: 1px solid grey;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.tbl-head {
  background-color: rgba(100, 100, 100, 0.2);
}

textarea {
  padding: 0;
  overflow-x: visible;
}

.line {
  display: flex;
}

.owner {
  width: 30px;
  height: 30px;
  margin: 0 15px;
  border-radius: 15px 15px 15px 15px;
}

.icon {
  width: 30px;
  height: 30px;
  margin: 0 3px;
}

.fork {
  width: 3rem;
  height: 3rem;
  padding: 0.5rem;
  margin-right: 1rem;
  border-radius: 1.5rem 0 1.5rem 0;
  color: white;
  /* font-weight: bold; */
  background-color: rgba(108, 167, 84, 1);
  text-align: center;
  cursor: pointer;
}

.fork:hover {
  background-color: rgba(108, 167, 84, 0.8);
}

#ai-protocol {
  width: 100%;
  max-height: 64rem;
  display: flex;
  flex-direction: row;
  overflow-y: hidden;
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
  border-left: 1px solid #888888;
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

/* #ai-market {
  width: 100%;
  max-height: 64rem;
  display: flex;
  flex-direction: row;
  overflow-y: hidden;
} */

#ai-prog,
#ai-jobs,
#ai-ops {
  width: 33.33%;
  max-height: 64rem;
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
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

.long {
  display: flex;
  flex-direction: row;
}

h2 {
  margin: 0rem;
  border: 0rem;
  padding: 0rem;
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
  font-size: 1.6rem;
}

.matrix {
  margin-left: 1.3rem;
  /* margin-left: 0rem; */
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
  /* overflow-x: auto; */
  overflow-y: auto;
  border: 1px solid grey;
  background: transparent;
}

.scrollable {
  margin: 0px;
  overflow-x: auto;
  overflow-y: auto;
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
  background-color: rgba(108, 167, 84, 0.7);
  /* background-color: #6aa84f; */
  /* background-color: burlywood; */
  /* background-color: lightslategrey; */
  color: white;
  text-align: center;
  font-weight: bold;
}

.config-btn {
  margin: 0px 0px;
  box-shadow: 1px 1px #888888;
  border-radius: 8px 8px 8px 8px;
  background-color: lightsteelblue;
  color: black;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
}

.checkbtn {
  margin: 0px 0px;
  /* box-shadow: 1px 1px #888888; */
  border-radius: 8px 8px 8px 8px;
  background-color: lightsteelblue;
  color: black;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
}

.cmdbtn {
  margin: 0px 0px;
  /* box-shadow: 1px 1px #888888; */
  border-radius: 8px 8px 8px 8px;
  background-color: orange;
  color: black;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
}

.orderbtn {
  margin: 0px 0px;
  /* box-shadow: 1px 1px #888888; */
  border-radius: 8px 8px 8px 8px;
  background-color: lightsalmon;
  color: black;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
}

.verbalbtn {
  margin: 0px 0px;
  /* box-shadow: 1px 1px #888888; */
  border-radius: 8px 8px 8px 8px;
  background-color: lightcoral;
  color: black;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
}

.postclass {
  /* background-image: url("./assets/amp-logo.png"); */
  /* background-color: lightblue; */
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
  padding: 0;
  max-height: 20px;
  min-width: 3rem;
  max-width: 10rem;
  overflow-x: visible;
  overflow-wrap: normal;
  white-space: nowrap;
}

.cell-input {
  direction: ltr;
  text-align: left;
  position: absolute;
  /* z-index: 20; */
  min-width: 100%;
  /* box-sizing: border-box; */
  /* min-width: 3rem;
  max-width: 10rem; */
  text-overflow: visible;
  margin: 0px;
  border: 0px;
  padding: 0;
  background: transparent;
}

.cell-input:nth-child(even) {
  /* min-width: 7rem; */
  min-width: 8rem;
  /* overflow-x: visible; */
  text-align: left;
}

.cell-input:nth-child(odd) {
  max-width: 1.9rem;
  /* box-sizing: border-box; */
  text-align: center;
}

.cell-input:focus {
  outline: none;
}

.cell:hover {
  background-color: rgba(108, 167, 84, 0.5);
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
  padding: 0;
  border-left: 1px solid grey;
}

tr {
  border-top: 1px solid grey;
}

td:hover {
  background-color: rgba(108, 167, 84, 0.5);
}

@keyframes fade-in {
  from {
    background-color: rgba(108, 167, 84, 0.2);
  }
  to {
    background-color: rgba(108, 167, 84, 0.4);
  }
}
@keyframes fade-out {
  from {
    background-color: rgba(100, 100, 100, 0.2);
  }
  to {
    background-color: rgba(100, 100, 100, 0.4);
  }
}

/* .fade-on-job-rules-read {
  background-color: rgba(238, 71, 67, .2);
  animation:  fade-in .125s .250s 1 backwards,
              fade-out .125s .250s 1 backwards;
} */

.fade-on-job-rules-read {
  background-color: rgba(238, 71, 67, 0.2);
  animation: fade-in 0.125s 1;
}

.fade-on-ops-rules-read {
  background-color: rgba(238, 71, 67, 0.2);
  animation: fade-in 0.25s 1;
}

.fade-on-job-status-read {
  background-color: rgba(254, 233, 78, 0.2);
  animation: fade-in 0.5s 1;
}

.fade-on-ops-exe-read {
  background-color: rgba(58, 155, 252, 0.2);
  animation: fade-in 0.625s 1;
}

.fade-on-block-deal-write {
  background-color: rgba(108, 167, 84, 0.2);
  animation: fade-in 0.375s 1;
}

.fade-on-block-pay-write {
  background-color: rgba(254, 233, 78, 0.2);
  animation: fade-in 0.75s 1;
}

.fade-on-change {
  background-color: rgba(108, 167, 84, 0);
  animation: fade-in 0.125s 0.125s 1;
}

.fade-on-done {
  background-color: transparent;
  animation: fade-in 0.125s 1;
}

.project-color {
  color: rgba(254, 203, 47, 0.9);
}

.service-color {
  color: rgba(43, 171, 238, 0.9);
}

.blockchain-color {
  color: rgba(238, 71, 67, 0.9);
}

.blockchain-green {
  color: green;
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
  transform: translate(0rem, -31rem);
  /* transform: translate(0rem, -51.5rem); */
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
  animation: slide-up-in 0.25s ease-out forwards;
  transition: opacity 0.25s;
}

.slide-up-leave {
}

.slide-up-leave-active {
  animation: slide-up-out 0.25s ease-out forwards;
  transition: opacity 0.25s;
  opacity: 0;
  position: relative;
}

.slide-up-move {
  transition: transform 0.25s;
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
  animation: slide-down-in 0.25s ease-out forwards;
  transition: opacity 0.25s;
}

.slide-down-leave {
}

.slide-down-leave-active {
  animation: slide-down-out 0.25s ease-out forwards;
  transition: opacity 0.25s;
  opacity: 0;
  position: relative;
}

.slide-down-move {
  transition: transform 0.25s;
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
  width: 2.35rem;
  height: 2.35rem;
  font-size: 0.8rem;
  overflow-y: hidden;
  overflow-wrap: break-word;
  /* border: 1px solid lightgray; */
  margin: 0rem;
  padding: 0rem;
  color: #f1453d;
  cursor: pointer;
}

.icon3x3srv {
  font-family: monospace;
  width: 2.4rem;
  height: 2.4rem;
  font-size: 0.8rem;
  overflow-y: hidden;
  overflow-wrap: break-word;
  /* border: 1px solid lightgray; */
  margin: 0rem;
  border: 0rem;
  padding: 0rem;
  color: #1eaaf1;
  /* background-color: yellowgreen; */
  cursor: pointer;
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
    transform: translate(0, -79rem);
  }

  #footer {
    transform: translate(0, -79rem);
  }

  .footer-items {
    flex-direction: row;
  }
}

@media screen and (max-width: 1200px) {
  .long {
    display: none;
  }

  .titles {
    width: 100%;
  }

  .devNews,
  .opsNews {
    display: none;
  }

  #ai-prog {
    display: none;
  }

  #ai-jobs,
  #ai-ops {
    width: 50%;
    max-height: 36rem;
    overflow-y: hidden;
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
