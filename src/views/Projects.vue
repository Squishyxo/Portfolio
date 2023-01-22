<template>
  <div>
    <div class="container">
      <h1>Projects</h1>
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
  h1{
    text-align: center;
    margin-bottom: 3rem;
  }
  width: 70vw;
  margin: 10rem auto 5rem auto;
  padding: 0.5rem;
  font-family: var(--font1);
}
@media (max-width: 1300px) {
.container{
  width: 80vw;
}
}
@media (max-width: 1000px) {
.container{
  width: 90vw;
}
}
</style>
