<template>
  <div>
    <div class="container">
      <h1>Cisco Certified Network Associate CCNA</h1>
      <p class="date">Semester 4 - 2022</p>
      <div class="content">
        <h2>What is CCNA?</h2>
        <p>
          Cisco Certified Network Associate is a networking cetificate by Cisco.
          <a
            href="https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/associate/ccna.html"
            target="_blank"
            ><img class="svg" src="../assets/newpage.svg" v-if="!lightTheme" />
            <img class="svg" src="../assets/newpage2.svg" v-else />
          </a>
        </p>
        <p>I will showcase my journey on completing the course.</p>
        <h3>Network Fundamentals</h3>
        <h4>> Network Topologies</h4>
        <p>
          There are many types that people used to design networks. Some of them
          are:
        <ul>
          <li>Bus Topology</li>
          <li>Ring Topology</li>
          <li>Star Topology</li>
        </ul >
        </p>
        <h5>Bus Topology</h5>
        <p>The internet started with 2 devices that were connected using the same cable, this is called Bus Topology. It can handle more than 2 devices as long as they are connected to the same cable.<br><br> <img width="40%" src="../assets/ccna1.jpg"><br><br>This design shows that the 3 devices can talk to each other because they use the same cable.
        This design is outdated and not used nowadays.
        </p>
        <h5>Ring Topology</h5>
        <p>Ring topology is creating a circle with the devices that are connected with each other.<br><br><br>
        <span>
        <strong>Advantages:</strong>
        <ul>
            <li>Network Management: devices can be replaced/removed from the network without shutting it down.</li>
            <li>Cost: Twisted pair cabling is inexpensive and easily available. Therefore, the installation cost is very low.</li>
            <li>Reliable: It is a more reliable network because the communication system is not dependent on the single host computer</li>
        </ul>
        </span>
        <br>
        <span>
        <strong>Disadvantages:</strong>
        <ul>
            <li>Difficult troubleshooting.</li>
            <li>Delay</li>
        </ul>
        </span>
        </p>
        <h5>Star Topology</h5>
        <p>This design is the most used design these days. The shared device is in the middle, and a cable is going out from it to each device.<br><br>  
        <span>
        <strong>Advantages:</strong>
        <br>
        <ul>
            <li>Efficient troubleshooting: troubleshooting is easier than the other designs.</li>
            <li>Easily expandable: more devices can be easily connected to the centered device using its own cable.</li>
        </ul>
        </span>
        <br>
        <span>
          <strong>Disadvantages:</strong>
        <br>
        <ul>
            <li>A Central point of failure.</li>
            <li>So many cables.</li>
        </ul>
        </span>
        </p>
        <h4>> OSI Model</h4>
        <p>The Open Systems Interconnection (OSI) is the model that is being used by the modern devices to communicate to other devices on the internet.<br>The OSI model consists of 7 layers that share the steps of encapsulation/decapsulation.<br><img width="70%" src="../assets/ccna2.jpg" />
    </p>
    <p>Let’s start from the top:</p>
    <div>
    <strong>Layer 7 – Application Layer:</strong>
    <p>This layer is where the end-user interacts with a software. Such as, HTTP/S for when visiting a website as in our scenario. </p>
    </div>
    <div>
    <strong>Layer 6 – Presentation Layer:</strong>
    <p>This layer is responsible for encoding, encrypting, and compressing the data that is being sent and received. </p>
    </div>
    <div>
    <strong>Layer 5 – Presentation Layer:</strong>
    <p>It ensures to create communication channels (sessions) to allow the devices to talk to each other. It also ensures that these channels are not being interrupted.</p>
    </div>
    <div>
    <strong>Layer 4 – Transport Layer:</strong>
    <p>This layer turns the data into ordered segments to make sure the data is in the correct order.<br>It also ensures that the specific segment has been received to send the next one. If a segment was not received, the layer would send it again.
 </p>
    </div>
    <div>
    <strong>Layer 6 – Presentation Layer:</strong>
    <p>This layer is responsible for encoding, encrypting, and compressing the data that is being sent and received. </p>
    </div>
    <div>
    <strong>Layer 3 – Network Layer:</strong>
    <p>Network layer breaking up the segments into network packets. Also, it routes the packets to the best path towards the destination.</p>
    </div>
    <div>
    <strong>Layer 2 – Data Link Layer:</strong>
    <p>This layer receives the network packets and turn them into frames, then it sends them to the destination using the Media Access Control to route the frames.</p>
    </div>
    <div>
    <strong>Layer 1 – Physical Layer:</strong>
    <p>It takes care of the physical cables and how the devices are connected and talking to each other. </p>
    </div>
    <h4>> TCP/UDP</h4>
    <p>TCP requires 2 devices to be connected for them to send packets, therefore TCP is considered connection-based protocol.<br>The following are some of the services that the TCP protocol brings:<br>
    <ul>
        <li>The server ensure that the client received the packets, if not, the server will keep sending the same packet until it is received.</li>
        <li>It uses three-way-handshake to establish a connection.</li>
        <li>Ordered packets</li>
        <li>Reliable</li>
    </ul>
    </p>
    <p>UDP, on the other hand, doesn’t require a connection between the receiver and the sender, therefore, people call it “connectionless”.<br>The UDP has many pros, such as:<br>
    <ul>
        <li>Smaller packets</li>
        <li>Less bandwidth</li>
        <li>Fast</li>
    </ul>
    </p>
    <h4>> Subnetting</h4>
    <p>Subnetting is the strategy used to create separate networks inside one network. <br>When you have one network and 100 employees, you would not want all the employees to be in the same network. Therefore, network engineers divide that one network into many sub-networks.<br>Then, a sub network can be given to several employees that share the same job like marketing, business, and information technology. 
    </p>
    <h5>Subnet masks:</h5>
    <p>CLASS A: 255.0.0.0 (Number of hosts possible: 255*255*255 = 16581375)</p>
    <p>CLASS B: 255.255.0.0. (Number of hosts possible: 255*255 = 65025)</p>
    <p>CLASS C: 255.255.255.0 (Number of hosts possible = 255)</p>
    <p>Why subnetting is important?<br>
    <ul>
        <li>It helps to reduce the traffic by splitting the network into many.</li>
        <li>It helps to divide the hosts as wanted. </li>
        <li>It helps employees to work from home without needing to connect to the open network. </li>
    </ul>
    </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    lightTheme() {
      return this.$store.state.lightTheme;
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  width: 60vw;
  margin: 12rem auto 5rem auto;
  padding: 0.5rem;
  font-family: var(--font2);

  h1 {
    text-align: center;
    font-size: clamp(18px,1rem + 2vw,36px);;
    letter-spacing: 0.2rem;
    line-height: 1.6;
  }
  .content {
    margin: 2rem 0;
    min-height: 20rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    h1, h2, h3, h4, h5, h6{
      padding: var(--header-padding)
    }
    h2 {
      font-size: 2rem;
    }
    h3 {
      font-size: 1.8rem;
    }
    h4 {
      font-size: 1.6rem;
    }
    h5 {
      font-size: 1.4rem;
    }
    img {
      margin-bottom: 3rem;
    }
    div > *{
        margin: 1rem 0;
        font-size: 1.3rem;
    }
    p{
      font-size: 1.25rem;
      overflow: hidden;
      line-height: 2rem;
      img {
        margin: 0;
      }
    }
  }
}
ul li, strong{
  font-size: 1.25rem;
  padding: var(--header-padding);
}

@media (max-width: 1300px) {
.container{
  margin: 10rem auto 5rem auto;
  width: 80vw;
}
}
@media (max-width: 1000px) {
.container{
  width: 95vw;
  h1{
    letter-spacing: 0.1rem;
  }
.content {
    h2 {
      font-size: 1.5rem;
    }
    h3 {
      font-size: 1.4rem;
    }
    h4 {
      font-size: 1.3rem;
    }
    h5 {
      font-size: 1.2rem;
    }
    p {
      font-size: 1.1rem;
    }
  }
}
}

</style>
