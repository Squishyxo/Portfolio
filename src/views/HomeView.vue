<template>
  <div class="container">
    <div class="header">
      <div class="left-header">
        <h1>Hi, I'm Mohammed</h1>
        <p class="muted">@M7MD.2k</p>
        <p class="intro">
          I like networking, monitoring, coding & a bit of designing.
        </p>
        <router-link to="/about">
          <div class="more">
            <p>More about me</p>
            <span>></span>
          </div>
        </router-link>
        <div class="icons">
          <a
            href="https://www.linkedin.com/in/mohammed-alshukaili-578a64222/"
            target="_blank"
            ><img src="../assets/linkedin.svg"
          /></a>
          <a href="https://github.com/Squishyxo" target="_blank"
            ><img src="../assets/github.svg"
          /></a>
          <a href="https://www.instagram.com/m7md.2k/" target="_blank"
            ><img src="../assets/instagram.svg"
          /></a>
        </div>
      </div>
      <div class="right-header">
        <img src="../assets/spiderman.jpg" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
};
</script>

<style scoped lang="scss">
.container {
  width: 80%;
  margin: 15rem auto 5rem auto;
}
.left-header h1 {
  font-size: 3rem;
  line-height: 3rem;
  height: 5rem;
}
.header {
  display: flex;
  justify-content: space-around;
}
.right-header img {
  width: 35rem;
  height: 30rem;
  object-fit: cover;
  border-radius: 10px;
}
.left-header > * {
  padding: 0.5rem;
  font-size: 1.5rem;
}
.left-header {
  a {
    color: #777;
    text-decoration: none;
    &:hover {
      p,
      span {
        color: #fff;
        transition: 0.3s all ease-in-out;
      }
    }
  }
}
.more {
  width: 13rem;
  height: 3rem;
  margin: 1rem 0;
  background-color: var(--nav-color);
  font-size: 1rem;
  border-radius: 13px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
}

.intro {
  padding: 0.5rem;
  font-size: 1.5rem;
}
.muted {
  color: rgba(255, 255, 255, 0.7);
  font-size: 1rem;
}
.icons {
  width: 10rem;
  display: flex;
  justify-content: space-around;
}
.icons a img {
  width: 1.8rem;
  transition: 0.2s all ease-in-out;
}
.icons a img:hover {
  filter: invert(63%) sepia(62%) saturate(385%) hue-rotate(101deg)
    brightness(88%) contrast(90%);
}
</style>
