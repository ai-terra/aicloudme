<template>
  <header id="header">
    <div class="logo">
      <router-link to="/">ai git</router-link>
    </div>
    <nav>
      <ul>
        <li v-if="!auth">
          <router-link to="/signup">sign up</router-link>
        </li>
        <li v-if="!auth">
          <router-link to="/signin">sign in</router-link>
        </li>
        <li v-if="auth">
          <router-link to="/dashboard">web</router-link>
        </li>
        <li v-if="auth">
          <button @click="onLogout" class="logout">logout</button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  computed: {
    auth() {
      return this.$store.getters.isAuthenticated;
    }
  },
  methods: {
    onLogout() {
      this.$store.dispatch("logout");
    }
  }
};
</script>

<style scoped>
#header {
  height: 56px;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  background-color: #6aa84f;
  padding: 0 20px 8px 20px;
}

.logo {
  font-size: 70px;
  font-weight: bold;
  color: white;
  cursor: pointer;
}

.logo a {
  text-decoration: none;
  color: white;
}

nav {
  height: 100%;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  flex-flow: row;
  align-items: center;
}

li {
  margin: 0 16px;
  cursor: pointer;
}

li a {
  text-decoration: none;
  color: white;
}

li a:hover,
li a:active,
li a.router-link-active {
  color: #333;
}

.logout {
  background-color: transparent;
  border: none;
  font: inherit;
  color: white;
  cursor: pointer;
}
</style>