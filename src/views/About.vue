<template>
  <div id="about">
    <div class="container">
      <div class="left">
        <div class="about-header">
          <h1>/ About me</h1>
          <span></span>
        </div>
        <div class="about-content">
          <p>
            I am currently pursuing a
            <span class="leetcode"
              ><a href="https://fontys.edu/" target="_blank">Fontys</a></span
            >
            Bachelor's degree in Cyber Security, which has been a passion of
            mine since I was young. At the same time, I am working on developing
            my coding skills by solving
            <span class="leetcode"
              ><a href="https://leetcode.com/" target="_blank"
                >Leetcode</a
              ></span
            >
            problems. <br /><br />In my free time, I enjoy studying the
            <span class="leetcode"
              ><a
                href="https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/associate/ccna.html"
                target="_blank"
                >CCNA</a
              ></span
            >
            &
            <span class="leetcode"
              ><a
                href="https://www.comptia.org/certifications/security"
                target="_blank"
                >Security+</a
              ></span
            >
            as I am planning to get both certificates before I graduate.
          </p>
        </div>
      </div>
      <div class="right">
        <img class="pic" src="../assets/++.jpg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  computed: {
    lightTheme() {
      return this.$store.state.lightTheme;
    },
  },
  mounted() {
    // sr.reveal('.oman, h1', {
    //   duration: 1000,
    //   origin: 'left',
    //   distance: '200px',
    // });
    sr.reveal('#about', {
      duration: 1500,
      origin: 'right',
      distance: '200px',
    });
    // sr.reveal('.about-content', {
    //   duration: 1000,
    //   origin: 'right',
    //   distance: '20px',
    // });
    // ScrollReveal().reveal('p', { duration: 1000});
    // ScrollReveal().reveal('p', { easing: 'ease-in' });
    // ScrollReveal().reveal('h1', { easing: 'steps(5)' });
    // ScrollReveal().reveal('.checked', {
    //     distance: '0px',
    //     opacity: 0.5
    // });
    // ScrollReveal({ distance: '60px' });
    // ScrollReveal().reveal('p', { origin: 'bottom' });
    // ScrollReveal().reveal('h1', { origin: 'top' });
    // ScrollReveal().reveal('p', { scale: 0.85 });
    // ScrollReveal().reveal('p', {
    //     afterReveal: function(el) {
    //         ScrollReveal().clean(el);
    //     }
    // });
    // ScrollReveal().reveal('h1');
    // ScrollReveal().reveal('p', { desktop: false });
    // ScrollReveal().reveal('p', { viewFactor: 0.5 });
  },
};
</script>

<style scoped lang="scss">
.container {
  width: 80%;
  margin: 0rem auto 5rem auto;
  font-family: var(--font4);
  height: 60vh;
  display: flex;
  margin-top: 10rem;
}
h1 {
  font-weight: 800;
  overflow: hidden;
  font-size: 3rem;
  padding: 0.5rem;
}
p {
  font-size: 1.5rem;
  line-height: 1.6;
  margin: 2rem 0;
  overflow: hidden;
}
.about-header {
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 2rem;
}
.about-header > * {
  display: flex;
  text-align: center;
  align-items: center;
}
.about-header span {
  width: 15%;
  height: 0.1rem;
  background-color: var(--primary-color);
}
.about-content > p {
  width: 100%;
}
.leetcode {
  color: var(--third-color);
  font-weight: bold;
}
.left {
  width: 50%;
}
.right {
  width: 50%;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.pic {
  width: 55%;
  height: 95%;
  object-fit: cover;
  border-radius: 15px;
  box-shadow: 6px 10px 7px -5px rgb(0 0 0 / 46%);
}
@media (max-width: 1100px) {
  .container {
    width: 90%;
    flex-direction: column;
    height: auto;
    .left {
      width: 100%;
      margin-top: 5rem;
    }
    .right {
      display: none;
    }
  }
  p {
    font-size: 1.5rem;
  }
  .about-content > p {
    width: 100%;
  }
  .about-header {
    width: 100%;
  }
  .about-header span {
    display: none;
  }
}
@media (max-width: 600px) {
  .oman {
    display: none;
  }
}
</style>
