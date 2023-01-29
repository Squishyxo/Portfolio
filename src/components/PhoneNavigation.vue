<template>
  <div>
    <section id="phoneNavigation">
      <h1>MOHAMMED</h1>
      <button @click="openNav" class="btn close-icon">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </section>
    <div class="overlay"></div>
    <div class="overlay2">
      <ul class="phoneNav">
        <router-link to="/" @click="openNav">
          <li><strong>HOME</strong></li>
        </router-link>
        <router-link to="/about" @click="openNav">
          <li><strong>ABOUT</strong></li>
        </router-link>
        <router-link to="/projects" @click="openNav"
          ><li><strong>PROJECTS</strong></li>
        </router-link>
        <router-link to="/skills" @click="openNav"
          ><li><strong>SKILLS</strong></li>
        </router-link>
        <router-link to="/contact" @click="openNav"
          ><li><strong>CONTACT</strong></li>
        </router-link>
        <li @click="changeTheme"><strong>CHANGE THEME</strong></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PhoneNavigation',
  methods: {
    openNav() {
      let btn = document.querySelector('.btn');
      let overlay = document.querySelector('.overlay');
      let overlay2 = document.querySelector('.overlay2');
      let nav = document.querySelector('.phoneNav');
      btn.classList.toggle('active');
      overlay.classList.toggle('active');
      overlay2.classList.toggle('active');
      nav.classList.toggle('active');
    },
    closeNav() {},
    changeTheme() {
      this.$store.commit('changeTheme');
    },
  },
};
</script>

<style>
#phoneNavigation {
  display: none;
  overflow: hidden;
  border-bottom: 4px solid var(--primary-color);
}
.phoneNav {
  display: none;
}
@media (max-width: 1100px) {
  #Navbar {
    display: none;
  }
  #phoneNavigation {
    position: fixed;
    width: 100vw;
    height: 12vh;
    background-color: var(--secondary-color);
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 10;
  }
  #phoneNavigation h1 {
    padding: 1rem 1rem;
    color: var(--primary-color);
    font-family: var(--font1);
  }
  .overlay {
    width: 100vw;
    height: 90vh;
    background-color: var(--primary-color);
    position: fixed;
    bottom: 0%;
    left: 0%;
    transform: translatex(1100px);
    transition: 0.5s transform ease-in-out;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .overlay.active {
    transform: translateY(0px);
  }

  .overlay2 {
    width: 95vw;
    height: 87vh;
    background-color: var(--secondary-color);
    position: fixed;
    bottom: 1.3%;
    left: 2.8%;
    transform: translatex(1000px);
    transition: 1.5s transform ease-in-out;
    z-index: 4;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .overlay2.active {
    transform: translateY(0px);
  }
  .menu-btn {
    width: 40px !important;
    height: 30px !important;
    cursor: pointer;
    margin-right: 30px;
    background-color: #fff;
  }
  .phoneNav {
    font-size: 1.8rem;
    list-style: none;
    color: var(--primary-color);
    opacity: 0;
    z-index: 5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .phoneNav li {
    margin: 20px;
    cursor: pointer;
    list-style: none;
    text-decoration: none;
    font-family: var(--font1);
    overflow: hidden;
  }
  .phoneNav a li {
    color: var(--primary-color);
    list-style: none;
    text-decoration: none;
  }

  .phoneNav.active {
    opacity: 1;
  }
  .btn {
    position: absolute;
    top: 20%;
    right: 10%;
    z-index: 6;
    display: flex;
    width: 3rem;
    height: 4rem;
    outline: inherit;
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
  }

  .btn span {
    width: 45px;
    height: 3px;
    background: var(--primary-color);
    display: flex;
    position: absolute;
    transition: 0.3s;
  }

  .btn span:nth-child(1) {
    top: 20%;
  }

  .btn span:nth-child(2) {
    top: 60%;
    width: 35px;
  }

  .btn span:nth-child(3) {
    top: 40%;
    width: 27px;
  }

  .btn.is-active span {
    background: var(--primary-color);
  }

  .btn.active span:nth-child(1) {
    top: 50%;
    transform: rotate(-45deg);
  }

  .btn.active span:nth-child(2) {
    top: 50%;
    transform: rotate(45deg);
    width: 45px;
  }

  .btn.active span:nth-child(3) {
    display: none;
  }
}
</style>
