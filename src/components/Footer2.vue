<template>
  <footer>
    <div class="navigation">
      <ul>
        <a href="/#home"><li>/home</li></a>
        <a href="/#about"><li>/about</li></a>
        <a href="/#projects"><li>/projects</li></a>
        <a href="/#skills"><li>/skills</li></a>
      </ul>
    </div>
    <div class="navIcons">
      <div class="icons lighticons">
        <a
          href="https://www.linkedin.com/in/mohammed-alshukaili-578a64222/"
          target="_blank"
        >
          <img v-if="!lightTheme" src="../assets/linkedin.svg" />
          <img v-else src="../assets/linkedin2.svg" />
        </a>
        <a href="https://github.com/Squishyxo" target="_blank">
          <img v-if="!lightTheme" src="../assets/github.svg" />
          <img v-else src="../assets/github2.svg" />
        </a>
        <a href="https://leetcode.com/mohammedxoxo51/" target="_blank">
          <img v-if="!lightTheme" src="../assets/leetcode.svg" />
          <img v-else src="../assets/leetcode2.svg" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer2',
  computed: {
    lightTheme() {
      return this.$store.state.lightTheme;
    },
  },
};
</script>

<style scoped lang="scss">
footer {
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 3%;
  bottom: 3%;
  font-family: var(--font4);
}
footer > * {
  margin: 1rem 0;
  font-size: 1rem;
}
footer div ul {
  list-style: none;
}
.navigation ul li {
  margin: 0.4rem 0;
  cursor: pointer;
  overflow: hidden;

}
.navIcons ul {
  display: flex;
  li {
    cursor: pointer;
    margin: 0 0.4rem;
  }
}
.icons {
  width: 100%;
  display: flex;
  justify-content: start;
}
.icons a {
  margin: 0 0.8rem 0 0;
}
.icons a img {
  width: 1.2rem;
}
.icons a {
  transition: 0.3s all ease-in-out;
}
.icons:hover a {
  opacity: 0.3;
}

.icons a:hover {
  opacity: 1;
}
@media (max-width: 1100px) {
footer{
  display: none;
}
}
</style>
