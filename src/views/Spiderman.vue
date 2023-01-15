<template>
  <div>
    <div class="container">
      <div class="content">
        <!-- <img class="sm" src="../assets/spiderman+.JPG" /> -->
        <div class="flex">
          <h1>Spiderman</h1>
          <img v-if="!lightTheme" class="svg2" src="../assets/thumbsup1.svg" />
          <img v-else class="svg2" src="../assets/thumbsup2.svg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    lightTheme() {
      return this.$store.state.lightTheme;
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  width: 60vw;
  margin: 15rem auto 5rem auto;
  padding: 0.5rem;
  font-family: var(--font1);
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    gap: 10rem;
    .sm {
      width: 25vw;
      height: 60vh;
      border-radius: 12px;
    }
    .flex {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 20rem;
      gap: 2rem;
      .svg2 {
        width: 3rem;
      }
    }
  }
}
</style>
