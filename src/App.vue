<template>
  <div id="app">
    <div id="nav">


      <nav class="navbar navbar-expand-lg navbar-dark">
        <img id="myLogo" src="./assets/lg.png" alt="">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <router-link to="/">Home</router-link> |
            </li>
            <li class="nav-item">
              <router-link to="/about">About</router-link> |
            </li>
            <li class="nav-item">
              <router-link to="/analysts">Reviews|</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <router-view />
    <div class="footer">
      <a href="https://github.com/alexcab-dev/creativeLab3">GitHub</a>
    </div>
  </div>
</template>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #041628;
    color: #9FA3A7;
    letter-spacing: -0.085em;
  }

  .navbar {
    border-bottom-right-radius: 30px;
    border-bottom-left-radius: 30px;
    background-color: black !important;
  }

  #nav a {
    font-weight: bold;
    color: white;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }

  .footer {
    bottom: 0;
    left: 0;
    border: solid;
    border-color: black;
    width: 100%;
    background-color: black;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    text-align: center;
    position: fixed;

  }
</style>
