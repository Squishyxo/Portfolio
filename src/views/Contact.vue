<template>
  <div>
    <form
      class="background"
      action="https://formspree.io/f/mdovgjwv"
      method="POST"
    >
      <div class="container">
        <div class="screen">
          <div class="screen-header">
            <div class="screen-header-left">
              <div class="screen-header-button close"></div>
              <div class="screen-header-button maximize"></div>
              <div class="screen-header-button minimize"></div>
            </div>
            <div class="screen-header-right">
              <div class="screen-header-ellipsis"></div>
              <div class="screen-header-ellipsis"></div>
              <div class="screen-header-ellipsis"></div>
            </div>
          </div>
          <div class="screen-body">
            <div class="screen-body-item left">
              <div class="app-title">
                <span>Send me a message</span>
              </div>
            </div>
            <div class="screen-body-item right">
              <div class="app-form">
                <div class="app-form-group message">
                  <textarea
                    class="app-form-control"
                    placeholder="MESSAGE"
                    id="message"
                    name="message"
                  ></textarea>
                </div>
                <div class="app-form-group buttons">
                  <button class="button">SEND</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  methods: {
    preventDefault(e) {
      e.preventDefault();
    },
  },
};
</script>

<style lang="scss" scoped>
.background {
  display: flex;
  min-height: 100vh;
}

.container {
  flex: 0 1 700px;
  margin: auto;
  padding: 10px;
  width: 70vw;
  font-family: var(--font2);
}

.screen {
  position: relative;
  background: #3e3e3e;
  border-radius: 15px;
  height: 30rem;
}

.screen:after {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 20px;
  right: 20px;
  bottom: 0;
  border-radius: 15px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  z-index: -1;
}

.screen-header {
  display: flex;
  align-items: center;
  padding: 10px 20px;
  background: #4d4d4f;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}

.screen-header-left {
  margin-right: auto;
}

.screen-header-button {
  display: inline-block;
  width: 8px;
  height: 8px;
  margin-right: 3px;
  border-radius: 8px;
  background: white;
}

.screen-header-button.close {
  background: #ed1c6f;
}

.screen-header-button.maximize {
  background: #e8e925;
}

.screen-header-button.minimize {
  background: #74c54f;
}

.screen-header-right {
  display: flex;
}

.screen-header-ellipsis {
  width: 3px;
  height: 3px;
  margin-left: 2px;
  border-radius: 8px;
  background: #999;
}

.screen-body {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 70%;
  justify-content: space-around;
  margin-top: 3rem;
}

.screen-body-item {
  padding: 10px;
}

.screen-body-item.left {
  text-align: center;
  overflow: hidden;
}
.screen-body-item.right {
  padding: 0 6rem;
}

.app-title {
  display: flex;
  flex-direction: column;
  position: relative;
  color: #fff;
  font-size: 1.3rem;
  width: 100%;
  font-family: var(--font2);
  overflow: hidden;
}
.app-title span {
  padding: 0.5rem;
}

.app-title:after {
  content: '';
  display: block;
  position: absolute;
  left: 0;
  bottom: -10px;
  width: 25px;
  height: 4px;
  background: #ea1d6f;
}

.app-contact {
  margin-top: auto;
  font-size: 0.5rem;
  color: #888;
}

.app-form-group {
  margin-bottom: 15px;
}

.app-form-group.message {
  margin-top: 40px;
}

.app-form-group.buttons {
  padding: 1rem;
  text-align: right;
}

.app-form-control {
  width: 100%;
  padding: 10px 0;
  background: none;
  border: none;
  border-bottom: 1px solid #666;
  color: #ddd;
  font-size: 1.2rem;
  outline: none;
  transition: border-color 0.2s;
  min-height: 7rem;
  font-family: var(--font2);
}

.app-form-control::placeholder {
  color: #666;
  font-family: var(--font2);
}

.app-form-control:focus {
  border-bottom-color: #ddd;
}
.button {
  display: inline-block;
  padding: 12px 24px;
  border: 1px solid var(--nav-color);
  border-radius: 7px;
  transition: all 0.2s ease-in;
  position: relative;
  overflow: hidden;
  font-size: 19px;
  color: #fff;
  z-index: 1;
  background-color: var(--nav-color);
  cursor: pointer;
}

.button:before {
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%) scaleY(1) scaleX(1.25);
  top: 100%;
  width: 140%;
  height: 180%;
  background-color: #fff;
  border-radius: 50%;
  display: block;
  transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
  z-index: -1;
}

.button:after {
  content: '';
  position: absolute;
  left: 55%;
  transform: translateX(-50%) scaleY(1) scaleX(1.45);
  top: 180%;
  width: 160%;
  height: 190%;
  background-color: #fff;
  border-radius: 50%;
  display: block;
  transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
  z-index: -1;
}

.button:hover {
  color: #111;
}

.button:hover:before {
  top: -35%;
  background-color: #fff;
  transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
}

.button:hover:after {
  top: -45%;
  background-color: #fff;
  transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
}

@media screen and (max-width: 520px) {
  .screen-body {
    flex-direction: column;
  }

  .screen-body-item.left {
    margin-bottom: 30px;
  }

  .app-title {
    flex-direction: row;
  }

  .app-title span {
    margin-right: 12px;
  }

  .app-title:after {
    display: none;
  }
}

@media screen and (max-width: 600px) {
  .screen-body {
    padding: 40px;
  }

  .screen-body-item {
    padding: 0;
  }
}
</style>
