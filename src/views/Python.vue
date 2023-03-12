<template>
  <div>
    <div class="container">
      <h1>/ Python</h1>
      <p>
        Python is a powerful programming language that can be used to automate
        tasks and save time. I will do this by coming up a problem whic is a
        task in this scenario, and I will try to solve the problem using by
        writing a python script.
      </p>
      <div class="content">
        <h2>Problem 1:</h2>
        <p class="code">
          The downlods folder in my file system has too many images that feel a
          bit chaotic. I need to come up with a solution using python.<br />
          The script will mv all the images from the Downloads folder to a new
          folder.
        </p>
        <img src="../assets/PyScript1.png" alt="" />
      </div>
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
    h2,
    h3 {
      font-size: 1.5rem;
    }
    img {
      margin-bottom: 3rem;
      border-radius: 5px;
    }
  }
}
p {
  font-size: 1.25rem;
  line-height: 2rem;
  overflow: hidden;
}
.code {
  padding: 0.5rem;
  background-color: var(--primary-color);
  color: var(--code-color);
  border-radius: 7px;
  line-height: 2;
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
