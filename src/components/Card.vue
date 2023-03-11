<template>
  <div>
    <ul class="cards">
      <li class="cards__item">
        <router-link to="/ccna">
          <div class="card">
            <div class="card__image card__image--ccna"></div>
            <div class="card__content">
              <div class="card__title">CCNA</div>
              <p class="card__text">
                I completed +50 hours learning Cisco Certified Network
                Associate.
              </p>
              <div class="learn">
                <span>Read more</span>
                <span>></span>
              </div>
            </div>
          </div>
        </router-link>
      </li>
      <li class="cards__item">
        <router-link to="/docker">
          <div class="card">
            <div class="card__image card__image--record"></div>
            <div class="card__content">
              <div class="card__title">Docker</div>
              <p class="card__text">huh</p>
              <div class="learn">
                <span>Read more</span>
                <span>></span>
              </div>
            </div>
          </div>
        </router-link>
      </li>
      <li class="cards__item">
        <router-link to="/darkweb">
          <div class="card">
            <div class="card__image card__image--darkweb"></div>
            <div class="card__content">
              <div class="card__title">Dark Web</div>
              <p class="card__text">I managed to reach the dark web.</p>
              <div class="learn">
                <span>Read more</span>
                <span>></span>
              </div>
            </div>
          </div>
        </router-link>
      </li>
      <li class="cards__item">
        <router-link to="/frontend">
          <div class="card">
            <div class="card__image card__image--frontend"></div>
            <div class="card__content">
              <div class="card__title">Frontend</div>
              <p class="card__text">I studied frontend for 2 years</p>
              <div class="learn">
                <span>Read more</span>
                <span>></span>
              </div>
            </div>
          </div>
        </router-link>
      </li>
      <li class="cards__item">
        <router-link to="/securityonion">
          <div class="card">
            <div class="card__image card__image--so"></div>
            <div class="card__content">
              <div class="card__title">Security Onion</div>
              <p class="card__text">
                I am using Security Onion to monitor traffic on my networks.
              </p>
              <div class="learn">
                <span>Read more</span>
                <span>></span>
              </div>
            </div>
          </div>
        </router-link>
      </li>
      <li class="cards__item">
        <router-link to="/wazuh">
          <div class="card">
            <div class="card__image card__image--wazuh"></div>
            <div class="card__content">
              <div class="card__title">Wazuh</div>
              <p class="card__text">
                I implemented wazuh to monitor this website.
              </p>
              <div class="learn">
                <span>Read more</span>
                <span>></span>
              </div>
            </div>
          </div>
        </router-link>
      </li>
      <li class="cards__item">
        <router-link to="/smb">
          <div class="card">
            <div class="card__image card__image--so"></div>
            <div class="card__content">
              <div class="card__title">SMB</div>
              <p class="card__text">Server Message Protocol</p>
              <div class="learn">
                <span>Read more</span>
                <span>></span>
              </div>
            </div>
          </div>
        </router-link>
      </li>
      <li class="cards__item">
        <router-link to="/alerts">
          <div class="card">
            <div class="card__image card__image--so"></div>
            <div class="card__content">
              <div class="card__title">Alerts</div>
              <p class="card__text">
                Analyzing alerts and why they get triggered.
              </p>
              <div class="learn">
                <span>Read more</span>
                <span>></span>
              </div>
            </div>
          </div>
        </router-link>
      </li>
      <li class="cards__item">
        <router-link to="/python">
          <div class="card">
            <div class="card__image card__image--frontend"></div>
            <div class="card__content">
              <div class="card__title">Python</div>
              <p class="card__text">
                Writing python scripts to automate tasks
              </p>
              <div class="learn">
                <span>Read more</span>
                <span>></span>
              </div>
            </div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: String,
    description: String,
  },
};
</script>

<style scoped lang="scss">
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
  font-family: var(--font2);
  width: 100%;
}

.cards__item {
  display: flex;
  padding: 1rem;
  width: 100%;
  display: flex;
  justify-content: center;

  @media (min-width: 1000px) {
    width: 50%;
  }
  @media (min-width: 1300px) {
    width: 33.3333%;
  }
  a {
    width: 100%;
  }
}

.card {
  background-color: var(--primary-color);
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 25rem;
  border-radius: 15px;
  cursor: pointer;
  transition: 0.3s all ease-in-out;
  &:hover {
    .card__image {
      filter: contrast(100%);
      height: 57%;
    }
  }
}

.card__content {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  justify-content: space-around;
  padding: 0.5rem 1rem;
  background-color: var(--cards-color);
}

.card__image {
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  height: 60%;
  filter: contrast(110%);
  overflow: hidden;
  position: relative;
  transition: 0.5s all ease-in-out;
  &::before {
    content: '';
    display: block;
    padding-top: 56.25%; // 16:9 aspect ratio
  }
  @media (min-width: 40rem) {
    &::before {
      padding-top: 66.6%; // 3:2 aspect ratio
    }
  }
}

.card__image--so {
  background-image: url(../assets/SO.jpeg);
}
.card__image--frontend {
  background-image: url(../assets/frontend.jpeg);
}
.card__image--spiderman {
  background-image: url(../assets/spiderman.jpg);
}

.card__image--darkweb {
  background-image: url(../assets/darkweb.jpg);
}
.card__image--record {
  background-image: url(../assets/docker.jpg);
}

.card__image--ccna {
  background-image: url(../assets/ccna+.jpg);
}
.card__image--wazuh {
  background-image: url(../assets/wazuh-dashbaord.jpg);
}

.card__title {
  color: var(--secondary-color);
  font-size: 1.25rem;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.card__text {
  font-size: 1rem;
  line-height: 1.5;
}
p,
span {
  color: var(--secondary-color);
}
.learn {
  width: 100%;
  span {
    margin: 0 0.5rem;
    transition: 0.5s margin ease-in-out;
  }
}
.card:hover {
  .learn span {
    margin: 0 1rem;
    font-weight: 500;
  }
  transform: translateY(-0.4rem);
}
</style>
