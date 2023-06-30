<template>
  <div class="container" id="home">
    <div class="left-header" :class="{ 'white-svg': lightTheme }">
      <h1>Hi, I'm Mohammed</h1>
      <div class="location">
        <img src="../assets/location.svg" />
        <p>Oman - The Netherlands</p>
      </div>
      <p class="intro">
        I do networking, monitoring, programming & a bit of designing.
      </p>
      <a href="#about">
        <div>
          <button class="learn-more">
            <span class="circle" aria-hidden="true">
              <span class="icon arrow"></span>
            </span>
            <span class="button-text">More about me</span>
          </button>
          <button class="small">More about me ></button>
        </div>
      </a>
    </div>
    <div class="right-header">
      <img src="../assets/++.jpg" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'HomeView',
  computed: {
    lightTheme() {
      return this.$store.state.lightTheme;
    },
  },
  mounted() {
    sr.reveal('.left-header', {
      duration: 1000,
      origin: 'left',
      distance: '200px',
    });
    sr.reveal('.right-header', {
      duration: 1000,
      origin: 'right',
      distance: '20px',
    });
  },
};
</script>
<style scoped lang="scss">
* {
  overflow-x: visible !important;
}
.container {
  width: 100%;
  margin: 0 auto 5rem auto;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.left-header {
  width: 50%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.5rem 0 0 10rem;
  font-size: 1.5rem;
  h1 {
    font-size: 3rem;
    line-height: 3rem;
    font-family: var(--font1);
  }
  div img {
    width: 1.5rem;
  }
  .intro {
    padding: 0.5rem;
    font-size: 1.3rem;
    font-family: var(--font2);
    line-height: 1.5;
  }
  a div {
    padding-top: 1.5rem;
  }
}
.right-header {
  width: 50%;
  height: 70%;
  display: flex;
  align-items: center;
  padding-left: 3rem;
  img {
    width: 60%;
    height: 55%;
    object-fit: cover;
    border-radius: 15px;
    box-shadow: 6px 10px 7px -5px rgb(0 0 0 / 46%);
  }
}
.small {
  display: none;
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
  .icons {
    width: 100%;
    justify-content: center;
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
    display: flex;
    justify-content: center;
    margin: 3rem 0;
    img {
      width: 55vw;
      height: 40vh;
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
    margin: 9rem auto auto auto;
  }
  .left-header h1 {
    font-size: 2rem;
    height: 3rem;
  }
  .intro {
    font-size: 1.1rem;
  }
  .left-header {
    a {
      color: #777;
      text-decoration: none;
      span {
        display: none;
      }
    }
    .location {
      font-size: 1rem;
      img {
        width: 1.2rem;
      }
    }
  }
  .centerimg {
    img {
      width: 90vw;
      height: 40vh;
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
.white-svg {
  img {
    filter: invert(100%) sepia(21%) saturate(0%) hue-rotate(304deg)
      brightness(104%) contrast(104%);
  }
}
.location {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.1rem;
  font-family: var(--font3);
  font-size: 1.1rem;
  margin-bottom: 3rem;
  margin-left: 0.4rem;
  p {
    opacity: 80%;
  }
  img {
    width: 1.5rem;
  }
}
</style>
