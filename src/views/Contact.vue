<template>
  <div>
    <!-- <section>
      <div class="form-container">
        <form>
          <div class="user-inputs">
            <div class="name-input">
              <label for="Name">Name</label>
              <input placeholder="Your name" type="text" />
            </div>
            <div class="email-input">
              <label for="email">Email</label>
              <input placeholder="Your email" type="email" />
            </div>
          </div>
          <div class="user-message">
            <label for="message">Message</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section> -->
    <h1>SUI</h1>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import PhoneNavigation from '../components/PhoneNavigation.vue';
export default {
  name: 'Contact',
};
</script>

<style lang="scss" scoped>
section {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 85vh;
}
.form-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
  width: 60vw;
  height: 70vh;
  background-color: var(--secondary-color);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 1rem;
}
form {
  display: flex;
  justify-content: space-between;
  color: var(--primary-color);
  font-size: 2rem;
  width: 80%;
  height: 80%;
  text-align: center;
  // border: 1px solid red;
  padding: 3rem;
  align-items: center;
  position: relative;
}
.user-inputs {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 1.5rem;
  width: 50%;
  height: 50%;
  // border: 1px solid red;
}
.name-input,
.email-input {
  display: flex;
  flex-direction: column;
  padding: 1.2rem;
  text-align: left;
}
.name-input input,
.email-input input {
  width: 80%;
  height: 2rem;
  padding: 0.5rem;
}
.user-message {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  text-align: left;
  width: 50%;
  height: 55%;
  align-items: center;
  // border: 1px solid red;
}
.user-message textarea {
  width: 80%;
  height: 80%;
  width: 100%;
  height: 150px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid var(--third-color);
  border-radius: 4px;
  font-size: 16px;
}
form button {
  width: 16vw;
  height: 7vh;
  border-radius: 0.3rem;
  cursor: pointer;
  outline: inherit;
  border: none;
  border: 3px solid var(--third-color);
  background-color: var(--secondary-color);
  color: #fff;
  font-weight: 700;
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 1.1rem;
  &:hover {
    background-color: var(--third-color);
    color: var(--secondary-color);
    transition: 0.2s all ease-in-out;
  }
}
</style>
