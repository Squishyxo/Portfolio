<template>
  <div id="projects">
    <div class="container">
      <h1>/ projects</h1>
      <Card />
    </div>
  </div>
</template>

<script>
import Card from '../components/Card.vue';

export default {
  name: 'Projects',
  components: {
    Card,
  },
};
</script>

<style scoped lang="scss">
.container {
  h1 {
    text-align: center;
    margin-bottom: 3rem;
    padding: 0.5rem;
  }
  width: 80vw;
  margin: 0 auto 5rem auto;
  padding: 0.5rem;
  font-family: var(--font2);
}
@media (max-width: 1300px) {
  .container {
    width: 80vw;
  }
}
@media (max-width: 1000px) {
  .container {
    width: 90vw;
  }
}
</style>
