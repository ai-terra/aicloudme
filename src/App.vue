<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1>Animations</h1>
          <hr />
          <button class="btn btn-primary" @click="show = !show">Show Alert</button>
          <br />
          <br />
          <!-- <transition name="fade">
          <div class="alert alert-info" v-if="show">This is some info</div>
          </transition>-->
          <div id="matcher">
            <transition name="slide" type="animation">
              <div class="project alert alert-info" v-show="show">
                <table>
                  <tr>
                    <th></th>
                    <th>A</th>
                    <th>B</th>
                    <th>C</th>
                    <th>D</th>
                    <th>E</th>
                    <th>F</th>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Lab</td>
                    <td>name</td>
                    <td>...</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Terms</td>
                    <td>def</td>
                    <td>...</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>In</td>
                    <td>create</td>
                    <td>...</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Steps</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Out</td>
                    <td>checks</td>
                    <td>...</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </table>
              </div>
            </transition>
            <transition name="slidedown" type="animation">
              <div class="service alert alert-info" v-show="show">
                <table>
                  <tr>
                    <th></th>
                    <th>A</th>
                    <th>B</th>
                    <th>C</th>
                    <th>D</th>
                    <th>E</th>
                    <th>F</th>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Ops</td>
                    <td>name</td>
                    <td>...</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Terms</td>
                    <td>def</td>
                    <td>...</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>In</td>
                    <td>checks</td>
                    <td>...</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Steps</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Out</td>
                    <td>create</td>
                    <td>...</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </table>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    };
  },
  name: "app"
};
</script>

<style>
table {
  width: 100%;
  background-color: white;
}

th {
  background-color: whitesmoke;
}

table,
th,
td {
  border: 1px solid grey;
}

#matcher {
  width: 100%;
}

.project {
  width: 50%;
  display: inline-block;
}

.service {
  width: 50%;
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

.slide-enter {
  opacity: 0;
  /* transform: translateY(20px); */
}

.slide-enter-active {
  animation: slide-in 0.125s ease-out forwards;
  transition: opacity 0.125s;
}

.slide-leave {
}

.slide-leave-active {
  animation: slide-out 0.125s ease-out forwards;
  transition: opacity 0.125s;
  opacity: 0;
}

@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-20px);
  }
}

.slidedown-enter {
  opacity: 0;
  /* transform: translateY(20px); */
}

.slidedown-enter-active {
  animation: slidedown-in 0.125s ease-out forwards;
  transition: opacity 0.125s;
}

.slidedown-leave {
}

.slidedown-leave-active {
  animation: slidedown-out 0.125s ease-out forwards;
  transition: opacity 0.125s;
  opacity: 0;
}

@keyframes slidedown-in {
  from {
    transform: translateY(-20px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slidedown-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(20px);
  }
}
</style>
