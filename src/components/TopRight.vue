<template>
  <div class="top-right">
    <router-link to="/contact">
      <button class="cssbuttons-io-button">
        Contact Me
        <div class="icon">
          <img class="envelope" src="../assets/envelope.svg" />
        </div>
      </button>
    </router-link>
    <img
      v-if="lightTheme"
      @click="changeTheme"
      class="theme"
      src="../assets/lightmode.svg"
    />
    <img
      v-if="!lightTheme"
      @click="changeTheme"
      class="theme lightmode"
      src="../assets/darkmode.svg"
    />
  </div>
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
  font-family: var(--font2);
  .logo {
    a {
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
        color: #fff;
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
      font-size: 1.2rem;

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
}
li a {
  display: inline-block;
  position: relative;
  overflow: hidden;
  margin: 0 0.7rem;
  padding: 1rem;
  transition: 0.2s transform ease-in-out;
}

nav ul li .router-link-active {
  color: #fff;
}
.theme {
  width: 2rem;
}
.lightmode {
  filter: invert(100%) sepia(4%) saturate(15%) hue-rotate(84deg)
    brightness(106%) contrast(104%);
}
.top-right {
  position: fixed;
  right: 1%;
  top: 1%;
  display: flex;
  align-items: center;
  font-family: var(--font2);
  border-radius: 15px;
  z-index: 5;
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
.cssbuttons-io-button {
  background: #111;
  color: white;
  font-family: inherit;
  padding: 0.35em;
  padding-left: 1.2em;
  font-size: 14px;
  font-weight: 500;
  border-radius: 0.9em;
  border: none;
  letter-spacing: 0.05em;
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
  height: 2.8em;
  padding-right: 3.3em;
  border: 2px solid #fff;
  cursor: pointer;
}

.cssbuttons-io-button .icon {
  background: white;
  margin-left: 1em;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.2em;
  width: 2.2em;
  border-radius: 0.7em;
  right: 0.3em;
  transition: all 0.3s;
}

.cssbuttons-io-button:hover .icon {
  width: calc(100% - 0.6em);
}

.cssbuttons-io-button:hover .icon svg {
  transform: translateX(0.1em);
}

.cssbuttons-io-button:active .icon {
  transform: scale(0.95);
}
.envelope {
  width: 1.3rem;
}
h3 {
  font-family: system-ui, sans-serif;
  font-size: 3rem;
  margin: 0;
  cursor: pointer;
  padding: 0 0.1em;
}
.ul li a {
  color: rgba(0, 0, 0, 0);
  background: linear-gradient(90deg, #fff 50%, #696666 0) var(--_p, 100%) / 200%
    no-repeat;
  -webkit-background-clip: text;
  background-clip: text;
  transition: 0.4s;
}
.ul li a:hover {
  --_p: 0%;
}
@media (max-width: 1100px) {
.top-right{
  display: none;
}
}
</style>
