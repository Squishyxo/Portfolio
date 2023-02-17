<template>
  <div class="container">
    <div class="header">
      <div class="left-header">
        <h1>Hi, I'm Mohammed</h1>
        <p class="muted">@M7MD.2k</p>
        <p class="intro">
          I do networking, monitoring, programming & a bit of designing.
        </p>
        <router-link to="/about">
          <div>
            <button class="learn-more">
              <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
              </span>
              <span class="button-text">More about me</span>
            </button>
            <button class="small">More about me ></button>
          </div>
        </router-link>
        <div class="icons">
          <a
            href="https://www.linkedin.com/in/mohammed-alshukaili-578a64222/"
            target="_blank"
          >
            <img src="../assets/linkedin.svg" />
          </a>
          <a href="https://github.com/Squishyxo" target="_blank">
            <img src="../assets/github.svg"
          /></a>
          <a href="https://www.instagram.com/m7md.2k/" target="_blank">
            <img src="../assets/instagram.svg" />
          </a>
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
* {
  overflow-x: visible !important;
}
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
.small {
  display: none;
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
  font-family: var(--font2);
}
.muted {
  font-size: 1rem;
  font-family: var(--font3);
  opacity: 50%;
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
    width: 95%;
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
  .learn-more {
    display: none;
  }
  .small {
    display: block;
    color: var(--primary-color);
    padding: 0.7rem;
    text-align: start;
    border-radius: 4px;
    font-size: 1.2rem;
    font-weight: 700;
    opacity: 95%;
    font-family: var(--font2);
  }
  .icons a img:hover {
    filter: none;
  }
}
@media (max-width: 600px) {
  .container {
    margin: 7rem auto auto auto;
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
button {
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  background: transparent;
  padding: 0;
  font-size: inherit;
  font-family: inherit;
  font-family: var(--font1);
}

button.learn-more {
  width: 19rem;
  height: auto;
}

button.learn-more .circle {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: relative;
  display: block;
  margin: 0;
  width: 3rem;
  height: 3rem;
  background: var(--primary-color);
  border-radius: 1.625rem;
}

button.learn-more .circle .icon {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  background: #fff;
}

button.learn-more .circle .icon.arrow {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  left: 0.625rem;
  width: 1.125rem;
  height: 0.125rem;
  background: none;
}

button.learn-more .circle .icon.arrow::before {
  position: absolute;
  content: '';
  top: -0.29rem;
  right: 0.0625rem;
  width: 0.625rem;
  height: 0.625rem;
  border-top: 0.125rem solid var(--secondary-color);
  border-right: 0.125rem solid var(--secondary-color);
  transform: rotate(45deg);
}

button.learn-more .button-text {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0.75rem 0;
  margin: 0 0 0 1.85rem;
  color: var(--primary-color);
  font-weight: 700;
  line-height: 1;
  text-align: center;
  opacity: 80%;
}

button:hover .circle {
  width: 100%;
  border-radius: 10px;
}

button:hover .circle .icon.arrow {
  background: var(--secondary-color);
  transform: translate(1rem, 0);
}

button:hover .button-text {
  color: var(--secondary-color) !important;
  opacity: 100%;
}
</style>
