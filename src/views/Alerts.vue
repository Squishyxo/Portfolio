<template>
  <div>
    <div class="container">
      <h1>Suricata Alerts</h1>
      <p class="date">Semester 5 - 2023</p>
      <div class="content">
        <h2>
          In this page, I will try to understand why certain alerts get
          triggered.
        </h2>
        <div>
          <p class="code">
            - ETPRO HUNTING Suspicious User-Agent containing Loader Observed.
          </p>
          <p>
            This alert gets triggered whenever a user is requesting our servers
            using a suspicious User-Agent.
          </p>
        </div>
        <div>
          <p class="code">
            - ETPRO SCAN VMware vCenter Chargeback Manager Information
            Disclosure.
          </p>
          <p>
            Gets triggered whenever an attacker tries to scan/exploit a
            vulnerability in the VMware vCenter Chargeback Manager software.
          </p>
        </div>
        <div>
          <p class="code">- ET JA3 Hash - [Abuse.ch] Possible Tofsee</p>
          <p>
            [Abuse.ch] Possible Tofsee is a security event that occurs when a
            network security tool detects network traffic that matches the JA3
            hash associated with the Tofsee malware.
          </p>
        </div>
        <div>
          <p class="code">
            - ET ADWARE_PUP Observed DNS Query to PUP Domain (omnatuor .com)
          </p>
          <p>
            That occurs when a device on the network issues a DNS query to a
            known adware or potentially unwanted program (PUP) domain, in this
            case, "omnatuor .com."
          </p>
        </div>
        <div>
          <p class="code">
            - ET USER_AGENTS Suspcious LeakIX User-Agent (l9explore)
          </p>
          <p>
            Security event that occurs when a web server receives an HTTP
            request with a suspicious user-agent string (l9explore) associated
            with the LeakIX reconnaissance tool.
          </p>
        </div>
        <div>
          <p class="code">
            - ET DNS Non-DNS or Non-Compliant DNS traffic on DNS UDP port
            Reserved Bit Set
          </p>
          <p>
            Security event that occurs when a network security tool detects
            non-DNS or non-compliant DNS traffic on the DNS User Datagram
            Protocol (UDP) port with the Reserved Bit Set.
          </p>
        </div>
        <div>
          <p class="code">
            - ET ADWARE_PUP Observed DNS Query to DriverPack Domain ( .drp .su)
          </p>
          <p>
            Security event that occurs when a device on the network issues a DNS
            query to a known adware or potentially unwanted program (PUP)
            domain, in this case, a domain associated with DriverPack, "drp.su".
          </p>
        </div>
        <div>
          <p class="code">- ET VOIP Multiple Unauthorized SIP Responses UDP</p>
          <p>
            SIP is a signaling protocol used in Voice over IP (VoIP)
            communications to initiate, modify, and terminate real-time sessions
            that involve voice, video, and messaging applications. SIP responses
            are used to acknowledge, accept, or reject SIP requests. Multiple
            unauthorized SIP responses could indicate an attempt to disrupt VoIP
            communications, which could result in service degradation or denial
            of service.
          </p>
        </div>
        <div>
          <p class="code">
            - ET DNS Non-DNS or Non-Compliant DNS traffic on DNS TCP port Opcode
            8 through 15 set
          </p>
          <p>
            rule used by the Suricata intrusion detection system to alert users
            when non-DNS or non-compliant DNS traffic is detected on DNS TCP
            port with Opcode values between 8 and 15. Opcode values between 8
            and 15 are reserved for future use and are not currently defined in
            the DNS specification. If traffic is detected on DNS TCP port with
            Opcode values between 8 and 15, it may indicate an attempt to use
            the DNS protocol for a non-DNS purpose or to exploit a vulnerability
            in the DNS implementation. An attacker may attempt to use DNS for
            malicious purposes, such as to bypass network security controls or
            to exfiltrate data from a compromised system. They may also attempt
            to exploit vulnerabilities in the DNS implementation to gain
            unauthorized access to systems or to launch denial-of-service
            attacks.
          </p>
        </div>
        <div>
          <p class="code">
            - ET SCAN Rapid POP3S Connections - Possible Brute Force Attack
          </p>
          <p>
            POP3S is an encrypted version of the POP3 protocol used for
            retrieving email messages from a mail server. Brute force attacks
            are a common method used by attackers to gain unauthorized access to
            systems by repeatedly trying different combinations of usernames and
            passwords until they find the correct credentials. When a series of
            rapid connections to a POP3S server are detected, it may indicate
            that an attacker is attempting a brute force attack to gain access
            to the mail server. In a brute force attack, the attacker may use a
            script or automated tool to try different combinations of usernames
            and passwords, which can generate a large volume of traffic in a
            short period of time.
          </p>
        </div>
        <div>
          <p class="code">
            - ET SCAN HID VertX and Edge door controllers discover
          </p>
          <p>
            HID VertX and Edge door controllers are access control devices used
            to secure physical access to buildings and other facilities. They
            provide authentication and access control for doors, elevators,
            gates, and other entry points. The alert may indicate that an
            attacker is attempting to discover HID VertX and Edge door
            controllers on the network, which could be a prelude to a physical
            breach attempt. By scanning for these devices, the attacker may be
            attempting to locate vulnerable or misconfigured devices that can be
            exploited to gain unauthorized access to secure areas.
          </p>
        </div>
        <div>
          <p class="code">
            - ET EXPLOIT Oracle Weblogic Server Deserialization RCE T3
            (CVE-2015-4852)
          </p>
          <p>
            Oracle WebLogic Server is a popular application server used to
            deploy and manage Java EE applications. A deserialization RCE
            vulnerability can occur when an attacker is able to inject malicious
            code into an application or data that is deserialized by the server,
            which can then be executed by the server with the same permissions
            as the application. The T3 protocol is a proprietary protocol used
            by the Oracle WebLogic Server to communicate between server
            instances and clients. If a scan for this vulnerability is detected
            on the network, it may indicate that an attacker is attempting to
            exploit a known vulnerability in the Oracle WebLogic Server to gain
            unauthorized access to the system or to execute arbitrary code on
            the server.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.container {
  width: 50vw;
  margin: 12rem auto 5rem auto;
  padding: 0.5rem;
  font-family: var(--font2);
  line-height: 2;
  h1 {
    text-align: center;
    height: 3rem;
    font-size: 2rem;
    letter-spacing: 0.2rem;
  }
  .content {
    margin: 2rem 0;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    * {
      margin: 1rem 0;
    }
    h2,
    h3 {
      font-size: 1.5rem;
      text-align: center;
    }
  }
}
p {
  font-size: 1.25rem;
  line-height: 2rem;
  overflow: hidden;
  color: var(--alerts-color);
}
.code {
  padding: 0.5rem;
  background-color: var(--primary-color);
  color: var(--code-color);
  border-radius: 7px;
  line-height: 2;
}
@media (max-width: 1300px) {
  .container {
    margin: 10rem auto 5rem auto;
    width: 80vw;
  }
}
@media (max-width: 1000px) {
  .container {
    width: 95vw;
  }
}
</style>
