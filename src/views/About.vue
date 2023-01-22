<template>
  <div>
    <div class="container">
      <div class="about-header">
        <h1>About</h1>
        <a href="https://en.wikipedia.org/wiki/Oman" target="_blank"
          ><img v-if="!lightTheme" class="oman" src="../assets/oman2.svg" />
          <img v-else class="oman" src="../assets/oman3.svg" />
        </a>
      </div>
      <p>
        Hi there! My name is Mohammed Alshukaili and I am currently studying a
        Bachelor of Cyber Security degree at Fontys in The Netherlands. I have
        always been fascinated by technology and how it can be used to solve
        problems and make our lives easier. I am excited to learn more about
        computer science and how it can be applied in the real world. In my free
        time, I enjoy staying up to date with the latest trends in technology
        and programming languages.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Projects',
  computed: {
    lightTheme() {
      return this.$store.state.lightTheme;
    },
  },
};
</script>

<style scoped>
.container {
  width: 50%;
  margin: 15rem auto 5rem auto;
}
h1 {
  font-weight: 800;
  height: 3rem;
  overflow: hidden;
  font-family: var(--font1);
}
p {
  font-size: 1.3rem;
  line-height: 1.7rem;
  margin: 2rem 0;
  font-family: var(--font1);
}
.about-header {
  display: flex;
  width: 100%;
  height: 5rem;
  align-items: center;
  justify-content: space-between;
}
.about-header > * {
  display: flex;
  text-align: center;
  align-items: center;
}
.oman {
  width: 4rem;
}
@media (max-width: 1100px) {
  .container {
    width: 80%;
    margin: 10rem auto;
  }
  p {
    font-size: 1rem;
  }
}
@media (max-width: 600px) {
  .oman {
    display: none;
  }
}
</style>
