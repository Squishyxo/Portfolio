<template>
  <div>
    <div class="container">
      <h1>Wazuh</h1>
      <p class="date">Semester 4 - 2022</p>
      <div class="content">
        <h2>> Why did I use Wazuh?</h2>
        <p>
          I used Wazuh as my SIEM to monitor this website. I didn't need to add
          wazuh agents because I only needed to monitor one server which is the
          same one hosting Wazuh (Wazuh server monitors itself with ID of 0).
          <strong>
            <a
              href="https://documentation.wazuh.com/current/getting-started/index.html"
              target="_blank"
              >Docs.
            </a>
          </strong>
          <br />I am hosting this website in the cloud. I needed to get a decent server with some good componenets to be able to run Wazuh on it. Wazuh official website says that the recommended hardware to host Wazuh are:
          <ul>
              <li>8GB of RAM</li>
              <li>4 Cores of CPU</li>
          </ul>
          <br>
        </p>
        <h3>Wazuh Dashboard</h3>
        <p>
          Most of the time, I don't need to worry about Wazuh indexer and Wazuh server, I can find all the alerts on the Wazuh dashboard. 
        </p>
        <img src="../assets/wazuh-dashbaord.jpg" />
        <p>
          Above you see the alerts generated within only 5 days. I asked my teacher whether it's normal or not, he said it is normal because I am allowing ports more than needed in my server, he told me to only allow ports 80 and 443 for the website and use VPN for SSH and the Wazuh Dashboard.
        </p>
        <img src="../assets/wazuh-example.jpg" style="margin-top: 8rem;"/>
        <p>
          This is a simple example for what a single alert carries.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.container {
  width: 60vw;
  margin: 15rem auto 5rem auto;
  padding: 0.5rem;
  font-family: var(--font2);
  h1 {
    text-align: center;
    height: 3rem;
    font-size: 2rem;
    letter-spacing: 0.2rem;
  }
  .content {
    margin: 2rem 0;
    min-height: 20rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    h2 {
      font-size: 1.5rem;
    }
    h3 {
      font-size: 1.3rem;
    }
    img {
      margin-bottom: 3rem;
      border-radius: 5px;
    }
    p {
      font-size: 1.2rem;
    }
  }
}
@media (max-width: 1300px) {
  .container {
    margin: 10rem auto 5rem auto;
    width: 80vw;
  }
}
@media (max-width: 1000px) {
  .container {
    width: 90vw;
    h1 {
      font-size: 1.3rem;
      letter-spacing: 0.1rem;
    }
    .content {
      h2 {
        font-size: 1.2rem;
      }
      h3 {
        font-size: 1.1rem;
      }
      h4 {
        font-size: 1rem;
      }
      h5 {
        font-size: 0.9rem;
      }
      p {
        font-size: 0.8rem;
      }
    }
  }
}
</style>
