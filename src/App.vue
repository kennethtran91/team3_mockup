<template>
    <div id="app">
      <nav class="navbar is-primary">

  <div class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item" href="/">
        Home
      </a>
        <a class="navbar-item" href="/patient">
          Patient
      </a>
        <a class="navbar-item" href="/doctor">
          Doctors
      </a>
    </div>
    

    <div class="navbar-end">
            <router-link class="navbar-item" v-if="authenticated" to="/login" v-on:click.native="logout()" replace>Logout</router-link>
    </div>
  </div>
</nav>
        <router-view @authenticated="setAuthenticated" />
    </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                authenticated: false,
                mockAccount1: {
                    username: "patient",
                },
                mockAccount2: {
                    username: "doctor",
                }
            }
        },
        mounted() {
            if(!this.authenticated) {
                this.$router.replace({ name: "login" });
            }
        },
        methods: {
            setAuthenticated(status) {
                this.authenticated = status;
            },
            logout() {
                this.authenticated = false;
            }
        }
    }
</script>

<style>
    html {
        background-color: #f3f3f3;
    }
    h1 {
        padding: 0;
        margin-top: 0;
        font-size: 35px;
    }
    #app {
        width: 100%;
        margin: auto;
        padding-top: 0px;
        margin-bottom: 10px;
    }

</style>