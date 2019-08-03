<template>
  <div id="app">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Animations</h1>
        <hr />
        <button class="btn btn-primary" @click="show = !show">Show Alert</button>
        <br />
        <br />
        <!-- <transition name="fade">
          <div class="alert alert-info" v-if="show">This is some info</div>
        </transition>   -->
        <transition name="slide" type="animation">
          <div class="alert alert-info" v-if="show">This is some info</div>
        </transition>  
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
    animation: slide-in .125s ease-out forwards;
    transition: opacity .125s;
  }

  .slide-leave {

  }

  .slide-leave-active {
    animation: slide-out .125s ease-out forwards;
    transition: opacity .125s;
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
</style>
