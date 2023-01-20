<template>
  <div class="container">
    <div class="header">
      <div class="left-header">
        <h1>Hi, I'm Mohammed</h1>
        <p class="muted">@M7MD.2k</p>
        <p class="intro">
          I do networking, monitoring, coding & a bit of designing.
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
      <div class="centerimg">
        <div class="right-header">
          <img src="../assets/frontend.jpeg" />
        </div>
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
  font-family: var(--font1);
}
.header {
  display: flex;
  justify-content: space-around;
}
.right-header img {
  width: 35vw;
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
      p {
        color: #fff;
        transition: 0.3s all ease-in-out;
      }
      span {
        color: #fff;
        transition: 0.3s all ease-in-out;
        display: block;
      }
      .more {
        width: 14rem;
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
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  transition: 0.5s all ease-in-out;
  p {
    font-family: var(--font1);
  }
}

.intro {
  padding: 0.5rem;
  font-size: 1.5rem;
  font-family: var(--font1);
}
.muted {
  color: rgba(255, 255, 255, 0.7);
  font-size: 1rem;
  font-family: var(--font3);
}
.icons {
  width: 30%;
  display: flex;
  justify-content: start;
}
.icons a {
  margin: 0 1.2rem 0 0;
}
.icons a img {
  width: 1.8rem;
  transition: 0.2s all ease-in-out;
}
.icons a img:hover {
  filter: invert(63%) sepia(62%) saturate(385%) hue-rotate(101deg)
    brightness(88%) contrast(90%);
}

@media (max-width: 1100px) {
  .header {
    flex-direction: column;
  }
  .container {
    width: 90%;
    margin: 10rem auto;
  }
  .centerimg {
    margin: 5rem 0;
    width: 100%;
    display: flex;
    justify-content: center;
    img {
      width: 60vw;
      height: 70vh;
    }
  }
  .icons {
    width: 100%;
    justify-content: center;
  }
  .more {
    width: 8rem;
    height: 2rem;
    margin: 1rem 0;
    font-size: 0.7rem;
    border-radius: 8px;
  }
  .left-header {
    a {
      color: #777;
      text-decoration: none;
      span {
        display: none;
      }
    }
  }
  .centerimg {
    margin: 3rem 0;
    img {
      width: 90vw;
    }
  }
}
@media (max-width: 600px) {
  .container {
    margin: 10rem auto auto auto;
  }
  .left-header h1 {
    font-size: 2rem;
    height: 3rem;
  }
  .intro {
    font-size: 1.1rem;
  }
  .more {
    width: 8rem;
    height: 2rem;
    margin: 1rem 0;
    font-size: 0.7rem;
    border-radius: 8px;
  }
  .left-header {
    a {
      color: #777;
      text-decoration: none;
      span {
        display: none;
      }
    }
  }
  .centerimg {
    margin: 3rem 0;
    img {
      width: 90vw;
    }
  }
}
</style>
