<template>
<div>
    <div class="container">
      <h1>SMB</h1>
      <p class="date">Semester 5 - 2023</p>
      <div class="content">
        <h2>> What is SMB?</h2>
        <p>
            The Server Message Protocol (SMB protocol) is a client-server communication protocol used to share and access files, printers,
            and other resources on a network. <br>
            Users may have their own hard disks, but they also want access to the shared file systems and printers on the servers.<br>
            Typically, there are SMB share drives on a server that can be connected to and used to view or transfer files.<br>
             SMB can often be a great starting point for an attacker looking to discover sensitive information.
        </p>
        <div>
        <h3>Enum4Linux</h3>
        <p>Enum4linux is a tool used to enumerate SMB shares on both Windows and Linux systems.
             It is basically a wrapper around the tools in the Samba package and makes it easy to quickly extract information from the target pertaining to SMB.<br>
             The syntax of Enum4Linux:<br><br> <span class="code">enum4linux [options] ip</span></p>
             </div>
      </div>
      <div>
        <h3>SMBClient</h3>
        <p>Because we're trying to access an SMB share, we need a client to access resources on servers.<br>
            We can remotely access the SMB share using the syntax:<br><br> <span class="code">smbclient //[IP]/[SHARE]</span><br><br>
            Followed by the tags: <br> -U [name] : to specify the user<br>-p [port] : to specify the port</p>
      </div>
    </div>
</div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.container {
  width: 50vw;
  margin: 12rem auto 5rem auto;
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
    display: flex;
    flex-direction: column;
    gap: 2rem;
    h2, h3 {
      font-size: 1.5rem;
    }
    img {
      margin-bottom: 3rem;
      border-radius: 5px;
    }
  }
}
p {
      font-size: 1.25rem;
      line-height: 2rem;
       overflow: hidden;

}
.code{
    padding: .5rem;
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