<template>
  <div>
    <TopRight />
    <div class="main">
      <HomeView />
      <About />
      <Skills />
      <Projects />
    </div>
    <Footer2 />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import PhoneNavigation from '../components/PhoneNavigation.vue';
import HomeView from '../views/HomeView.vue';
import About from '../views/About.vue';
import Projects from '../views/Projects.vue';
import Skills from '../views/Skills2.vue';
import TopRight from '../components/TopRight.vue';
import Footer2 from '../components/Footer2.vue';
export default {
  components: {
    Navbar,
    PhoneNavigation,
    HomeView,
    About,
    Projects,
    Skills,
    TopRight,
    Footer2,
  },
};
</script>

<style lang="scss"></style>
