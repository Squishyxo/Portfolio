<template>
  <nav id="Navbar">
    <div class="logo">
      <router-link to="/"><h1>Mohammed</h1>
      <span>&lt;/&gt;</span></router-link>
    </div>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/projects">Projects</router-link></li>
      <li><router-link to="/skills">Skills</router-link></li>
    </ul>
    <div class="top-right">
      <router-link to="/contact"><button>
        <strong>CONTACT</strong>
      </button></router-link>
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
  background-color: #111;
  border-bottom: 3px solid #fff;
  padding: 0 3rem;
  color: #777;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  position: fixed;
  z-index: 1;
  font-family: var(--font1);
  .logo {
a{
      display: flex;
    align-items: flex-end;
    height: 40%;
  overflow: hidden;
  h1 {
      margin: -0.1rem 0;
      font-size: 2rem;
    }
    span {
      font-family: var(--font3);
      color: #42b983;
      margin: 0 0.3rem;
      font-size: 0.8rem;
    }
}
  }
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
    list-style: none;
    font-size: 1.1rem;

    li {
      overflow: hidden;
      cursor: pointer;
      display: flex;
      justify-content: space-around;
      align-items: center;

      &:hover {
        color: #fff;
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
    background-color: #111;
    color: #fff;
    font-family: var(--font1);
    a {
      color: #fff;
      strong {
        letter-spacing: 0.12rem;
      }
    }
    &:hover {
      background-color: #42b983;
      color: var(--secondary-color);
      transition: 0.2s all ease-in-out;
    }
  }
}
li a {
  display: inline-block;
  position: relative;
  overflow: hidden;
  margin: 0 0.7rem;
}

li a:after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 3px;
  bottom: -0.1rem;
  left: 0;
  background-color: #fff;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

li a:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
nav ul li .router-link-active {
  color: #fff;
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
@media (max-width: 1200px) {
  .top-right {
    button {
      a {
        font-size: 0.7rem;
      }
    }
  }
}
</style>
