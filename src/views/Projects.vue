<template>
  <div>
    <div class="container">
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
  width: 60vw;
  margin: 10rem auto 5rem auto;
  padding: 0.5rem;
}
</style>
