<template>
  <div>
    <div class="container">
      <h1>Not yet</h1>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.container {
  width: 50vw;
  margin: 12rem auto 5rem auto;
  padding: 0.5rem;
  font-family: var(--font2);
  h1 {
    text-align: center;
    height: 3rem;
    font-size: 2rem;
    letter-spacing: 0.2rem;
  }
  .content {
    margin: 2rem 0;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
}
p {
  font-size: 1.25rem;
  line-height: 2rem;
  overflow: hidden;
}
@media (max-width: 1300px) {
  .container {
    margin: 10rem auto 5rem auto;
    width: 80vw;
  }
}
@media (max-width: 1000px) {
  .container {
    width: 95vw;
  }
}
</style>
