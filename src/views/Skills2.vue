<template>
  <div id="skills">
    <div class="container">
      <div class="skills">
        <div class="skills-header">
          <h1>/ skills</h1>
        </div>
        <section :class="{ 'white-svg': lightTheme }">
          <div>
            <img src="../assets/frontend.svg" />
            <h2>Frontend</h2>
            <p>Creating responsive websites.</p>
          </div>
          <span class="line"></span>
          <div>
            <img src="../assets/backend.svg" />
            <h2>Backend</h2>
            <p>Building APIs for websites.</p>
          </div>
          <span class="line"></span>
          <div>
            <img src="../assets/cybersecurity.svg" />
            <h2>Cyber Security</h2>
            <p>Securing infrastructure from attackers.</p>
          </div>
          <span class="line"></span>
          <div>
            <img src="../assets/monitoring.svg" />
            <h2>Monitoring</h2>
            <p>Building SIEM solutions to manage the monitoring.</p>
          </div>
          <span class="line"></span>
          <div>
            <img src="../assets/design.svg" />
            <h2>UX/UI</h2>
            <p>Designing friendly user interfaces.</p>
          </div>
          <span class="line"></span>
          <div>
            <img src="../assets/editing.svg" />
            <h2>Video Editing</h2>
            <p>Shooting & Editing Videos For Production.</p>
          </div>
          <span class="line"></span>
          <div>
            <img src="../assets/github+.svg" />
            <h2>Git</h2>
            <p>Working with git to share the work with other students.</p>
          </div>
          <span class="line"></span>
          <div>
            <img src="../assets/docker.svg" />
            <h2>Docker</h2>
            <p>Dockerizing applications into small containers.</p>
          </div>
        </section>
      </div>
      <div class="softwares">
        <h1>SOFTWARES</h1>
        <section :class="{ 'white-svg': lightTheme }">
          <div>
            <img src="../assets/html.svg" />
            <h2>HTML</h2>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
          </div>
          <div>
            <img src="../assets/css.svg" />
            <h2>CSS</h2>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
          </div>
          <div>
            <img src="../assets/js.svg" />
            <h2>JS</h2>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
          </div>
          <div>
            <img src="../assets/vue2.svg" />
            <h2>Vue.js</h2>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
          </div>
          <div>
            <img src="../assets/react.svg" />
            <h2>React.js</h2>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star empty"></span>
            <span class="fa fa-star empty"></span>
            <span class="fa fa-star empty"></span>
          </div>
          <div>
            <img src="../assets/node.svg" />
            <h2>Node.js</h2>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star empty"></span>
            <span class="fa fa-star empty"></span>
          </div>
          <div>
            <img src="../assets/github+.svg" />
            <h2>Git</h2>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
          </div>
          <div>
            <img src="../assets/adobe.svg" />
            <h2>Adobe</h2>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star empty"></span>
          </div>
          <div>
            <img src="../assets/sql.svg" />
            <h2>SQL</h2>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star empty"></span>
          </div>
          <div>
            <img src="../assets/firebase.svg" />
            <h2>Firebase</h2>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star empty"></span>
            <span class="fa fa-star empty"></span>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  computed: {
    lightTheme() {
      return this.$store.state.lightTheme;
    },
  },
  created() {
    ScrollReveal().reveal('.checked', {
      distance: '0px',
      opacity: 0,
      duration: 1000,
    });
  },
};
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  margin: 10rem auto 5rem auto;
  font-family: var(--font2);
  padding: 1rem;
}
.softwares {
  margin-top: 6rem;
}
.skills {
  display: flex;
  flex-direction: column;
  align-items: left;
}
h1 {
  overflow: hidden;
  padding: 0.4rem;
  text-align: center;
  margin: 5rem 0;
}
section {
  width: 90%;
  margin: 2rem auto;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  padding: 1rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 28px;
}
section div {
  width: 20%;
  text-align: center;
  margin: 0.2rem 0;
  overflow: hidden;
}
section div > * {
  padding: 0.6rem 0;
  color: var(--primary-color);
}
section div p {
  opacity: 70%;
}
img {
  width: 7rem;
}
.softwares section div {
  width: auto;
  img {
    width: 3rem;
  }
}
.white-svg {
  background-color: var(--secondary-color);
  img {
    filter: invert(100%) sepia(21%) saturate(0%) hue-rotate(304deg)
      brightness(104%) contrast(104%);
  }
}
.checked {
  color: var(--primary-color);
}
.empty {
  opacity: 20%;
}
.line {
  display: none;
}
@media (max-width: 787px) {
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0;
    justify-content: start;
    div {
      width: 100%;
    }
  }
  .softwares section {
    flex-direction: row;
    div {
      width: 50%;
    }
  }
  .line {
    display: block;
    width: 100%;
    height: 1px;
    background-color: var(--primary-color);
  }
}
</style>
