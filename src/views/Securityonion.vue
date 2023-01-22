<template>
  <div>
    <div class="container">
      <h1>SECURITY ONION</h1>
      <div class="content">
        <h2>> What is Security Onion?</h2>
        <p>
          Security onion is an open-source platform for Network Security
          Monitoring (NSM). It gathers threat hunting tools such as Playbook,
          Suricata, Kibana, Elasticsearch, Logstach, Zeek, and Wazuh. <br />
          It has been downloaded by over 2 million and is being used by security
          teams around the world to monitor and defend their assets.
          <strong
            ><a
              href="https://docs.securityonion.net/en/2.3/about.html"
              target="_blank"
              >Docs.</a
            ></strong
          >
        </p>
        <h3>Security Onion Console</h3>
        <p>
          Security Onion Console is the first thing you see when you
          successfully log into the dashboard. It includes Alerts section that
          show the alerts coming from the NIDS(Suricata) and HIDS(Wazuh).
        </p>
        <img src="../assets/so1.jpg" />
        <p>
          <strong>Hunts & Dashboard </strong>visualize the threats and specify
          which service created the alert.
        </p>
        <p>
          <strong>Alerts, Dashboard, and Hunts </strong>are places to go through
          all the alerts. Once the user finds something unusual and deserves to
          be analyzed, they will send the alert to
          <strong>Cases. Cases</strong> is the case management interface that
          consists of the threats that were escalated. Other analysts can
          collaborate to overcome the issue.
        </p>
        <p>
          <strong> CyberChef </strong>Callows to decode, decompress, and analyze
          artifacts.
        </p>
        <p>
          <strong>Playbook </strong>allows to create a Detection Playbook. These
          plays are self-contained and describe the different aspects around the
          alerts.
        </p>
        <p>
          Users can select which alerts they want to see depending on group by
          option
        </p>
        <img width="50%" src="../assets/so2.jpg" />
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
  font-family: var(--font1);
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
.container{
  margin: 10rem auto 5rem auto;
  width: 80vw;
}
}
@media (max-width: 1000px) {
.container{
  width: 90vw;
  h1{
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
      font-size: .9rem;
    }
    p {
      font-size: .8rem;
    }
  }
}
}
</style>
