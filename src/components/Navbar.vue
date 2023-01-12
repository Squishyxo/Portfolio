<template>
  <nav id="Navbar">
    <h1>Mohammed</h1>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/projects">Projects</router-link></li>
      <li><router-link to="/skills">Skills</router-link></li>
    </ul>
    <div class="top-right">
      <button><router-link to="/contact">CONTACT</router-link></button>
      <img
        v-if="lightTheme"
        @click="changeTheme"
        class="lightmode"
        src="../assets/lightmode.svg"
      />
      <img
        v-if="!lightTheme"
        @click="changeTheme"
        class="lightmode"
        src="../assets/darkmode.svg"
      />
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    changeTheme() {
      this.$store.commit('changeTheme');
    },
  },
  computed: {
    lightTheme() {
      return this.$store.state.lightTheme;
    },
  },
};
</script>

<style scoped lang="scss">
nav {
  width: 100vw;
  height: 10vh;
  background-color: var(--nav-color);
  padding: 0 3rem;
  color: #777;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  position: fixed;
  z-index: 1;
  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-width: 20%;
    height: 100%;
    list-style: none;
    font-size: 1.1rem;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
      'Lucida Sans', Arial, sans-serif;
    li {
      overflow: hidden;
      margin: 1rem;
      cursor: pointer;
      &:hover {
        color: #42b983;
        transition: 0.2s all ease-in-out;
      }
    }
  }
  h1 {
    overflow: hidden;
    color: #fff;
  }
  button {
    width: 7vw;
    height: 5vh;
    border-radius: 0.3rem;
    cursor: pointer;
    outline: inherit;
    border: none;
    border: 3px solid #42b983;
    background-color: var(--nav-color);
    color: #fff;
    a {
      color: #fff;
    }
    &:hover {
      background-color: #42b983;
      color: var(--secondary-color);
      transition: 0.2s all ease-in-out;
    }
  }
}
li {
  display: inline-block;
  position: relative;
}

li:after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: -0.3rem;
  left: 0;
  background-color: #42b983;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

li:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
nav ul li .router-link-active {
  color: #42b983;
}
.lightmode {
  width: 2rem;
}
.top-right {
  display: flex;
  align-items: center;
}
.top-right > * {
  margin: 1rem;
  cursor: pointer;
}
</style>
