<template>
  <div>
    <div class="container">
      <h1>/ FRONTEND</h1>
      <p class="date">Year 1 and 2, 2020 - 2022</p>
      <div class="content">
        <p>
          I have studied frontend development for two years. During this time, I
          gained experience and expertise in creating visually appealing and
          interactive web pages using HTML, CSS, and JavaScript. I have worked
          on various projects that involve designing responsive websites,
          implementing animations, and optimizing web pages for performance and
          accessibility. <br />
          Semester 1 was an introduction to multiple programming language
          including frontend development. <br />
          Semester 2, I had to design and create a website for a client that my
          university chose for me. <br />
          In semester 3, I learned about JavaScript frameworks and decided to
          stick with Vue.js for the whole semester. My client asked for a
          backend solution to the website that I was working on. Therefore, I
          investigated backend tools and decided to work wit Firebase to deliver
          the project. <br />
          I am not planning to study more web development in the future, I just
          practice it in my free time.
        </p>
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
