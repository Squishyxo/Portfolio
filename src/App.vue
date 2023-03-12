<template>
  <div>
    <TopRight />
    <Footer2 />
    <PhoneNavigation />
    <router-view />
  </div>
</template>
<script>
import TopRight from './components/TopRight.vue';
import Footer2 from './components/Footer2.vue';
import PhoneNavigation from './components/PhoneNavigation.vue';
export default {
  components: {
    TopRight,
    Footer2,
    PhoneNavigation,
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@500;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@500;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=NTR&display=swap');

:root {
  /* font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, Ubuntu, roboto, noto, segoe ui, arial, sans-serif; */
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  --primary-color: #FFCB36;
  --secondary-color: #0E141F;
  --third-color: #42b983;
  --cards-color: #E9EDDE;
  --code-color: #111;
  --button-color: #FFCB36;
  --font1: 'Raleway', sans-serif;
  --font2: 'Inter', sans-serif;
  --font3: 'Roboto', sans-serif;
  --font4: 'NTR', sans-serif;
  --header-padding: 0.3rem;

  color: var(--primary-color);
  background-color: var(--secondary-color);
}
// html {
//   --s: 50px;
//   --c: #191b22;
//   --_s: calc(2*var(--s)) calc(2*var(--s));
//   --_g: 35.36% 35.36% at;
//   --_c: #0000 66%,#20222a 68% 70%,#0000 72%;
//   background: 
//     radial-gradient(var(--_g) 100% 25%,var(--_c)) var(--s) var(--s)/var(--_s), 
//     radial-gradient(var(--_g) 0 75%,var(--_c)) var(--s) var(--s)/var(--_s), 
//     radial-gradient(var(--_g) 100% 25%,var(--_c)) 0 0/var(--_s), 
//     radial-gradient(var(--_g) 0 75%,var(--_c)) 0 0/var(--_s), 
//     repeating-conic-gradient(var(--c) 0 25%,#0000 0 50%) 0 0/var(--_s), 
//     radial-gradient(var(--_c)) 0 calc(var(--s)/2)/var(--s) var(--s) var(--c);
//   background-attachment: fixed;
// }

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
.date {
  text-align: center;
  opacity: 80%;
  padding: var(--header-padding);
  color: var(--primary-color);
}
.main {
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
@media (max-width: 1100px) {
.main{
width: 100%;
}
}
</style>
