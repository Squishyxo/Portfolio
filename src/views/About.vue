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
        Hi there! My name is Mohammed Alshukaili and I am currently studying
        cybersecurity. I have always been fascinated by technology and its
        impact on our daily lives, but I am especially interested in how we can
        protect ourselves and our information from cyber threats. As a
        cybersecurity student, I have gained a solid understanding of network
        security, cryptography, ethical hacking, and risk management. I am
        constantly learning about new technologies and techniques to stay ahead
        of cybercriminals and protect our digital assets. In my free time, I
        enjoy exploring new technology trends, participating in online security
        forums, and practicing my skills in cybersecurity competitions. I am
        passionate about making the digital world a safer place for everyone and
        am excited to see what the future holds for this rapidly evolving field.
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
  font-family: var(--font2);
}
h1 {
  font-weight: 800;
  overflow: hidden;
}
p {
  font-size: 1.5rem;
  line-height: 1.5;
  margin: 2rem 0;
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
    width: 90%;
    margin: 10rem auto;
  }
  p {
    font-size: 1.25rem;
  }
}
@media (max-width: 600px) {
  .oman {
    display: none;
  }
}
</style>
