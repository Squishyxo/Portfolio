<template>
  <div>
    <section class="container">
      <div class="form-container">
        <form>
          <h1>Send me a message</h1>
          <div class="user-message">
            <textarea
              type="text"
              name="text"
              class="input"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Contact',
};
</script>

<style lang="scss" scoped>
.container {
  h1 {
    text-align: center;
    margin-bottom: 3rem;
    font-family: var(--font2);
  }
  width: 70vw;
  margin: 10rem auto 5rem auto;
  padding: 0.5rem;
  font-family: var(--font1);
}
section {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 85vh;
  margin: auto;
}
.form-container {
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  height: 70%;
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
}
form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: var(--primary-color);
  font-size: 2rem;
  width: 80%;
  height: 70%;
  text-align: center;
  // border: 1px solid red;
  padding: 3rem;
  align-items: center;
  justify-content: center;
  position: relative;
  h1 {
    font-size: 2rem;
  }
}
.user-message {
  width: 100%;
}
.user-message textarea {
  border: 2px solid var(--primary-color);
  padding: 15px;
  border-radius: 10px;
  background-color: var(--secondary-color);
  font-size: 1rem;
  font-weight: bold;
  width: 80%;
  height: 10rem;
  font-family: var(--font2);
}

.user-message textarea:focus {
  outline-color: white;
  background-color: #212121;
  color: #e8e8e8;
  box-shadow: 5px 5px #888888;
}
button {
  font-family: monospace;
  font-size: 1.5rem;
  color: #fafafa;
  text-transform: uppercase;
  padding: 10px 20px;
  border-radius: 10px;
  border: 2px solid #fafafa;
  background: #252525;
  box-shadow: 3px 3px #fafafa;
  cursor: pointer;
  margin-top: 3rem;
}

button:active {
  box-shadow: none;
  transform: translate(3px, 3px);
}
</style>
