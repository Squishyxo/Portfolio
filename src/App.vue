<template>
  <div>
    <Navbar />
    <PhoneNavigation />
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import PhoneNavigation from './components/PhoneNavigation.vue';
export default {
  components: {
    Navbar,
    PhoneNavigation,
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@500;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inknut+Antiqua:wght@500&display=swap');

:root {
  /* font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, Ubuntu, roboto, noto, segoe ui, arial, sans-serif; */
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  --primary-color: #fff;
  --secondary-color: #111;
  --third-color: #42b983;
  --nav-color: #222;
  --font1: 'Raleway', sans-serif;
  --font2: 'Playfair Display', serif;
  --font3: 'Inknut Antiqua', serif;

  color: var(--primary-color);
  background-color: var(--secondary-color);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  letter-spacing: 1.25px;
  scroll-behavior: smooth;
  overflow-x: hidden;
}

li a {
  text-decoration: inherit;
  color: inherit;
}

a {
  text-decoration: none;
  color: inherit;
}

.svg {
  width: 1rem;
  cursor: pointer;
}

ul {
  list-style: inside;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  min-height: 2rem;
  overflow: hidden;
}
</style>
