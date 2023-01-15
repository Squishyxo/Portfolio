<template>
  <div>
    <div class="container">
      <h1>Skills</h1>
      <ul>
        <li style="--accent-color: #41516c">
          <div class="date">Frontend</div>
          <div class="title">> HTML, CSS, JS, Vue.js, React.js</div>
          <div>
            I studied frontend for 18 months. I made 2 websites for clients in
            semester 2 and 3. Vue.js is so entertaining that I code it for fun
            lol.
          </div>
        </li>
        <li style="--accent-color: #fbca3e">
          <div class="date">Backend</div>
          <div class="title">> Node.js</div>
          <div>
            Not much but I did small projects with Node.js and never got the
            chance to develop my backend skills again.
          </div>
        </li>
        <li style="--accent-color: #e24a68">
          <div class="date">Cyber Security</div>
          <div class="title">
            > Ethical Hacking, Securing websites & servers.
          </div>
          <div>
            I spent a whole semester learning to hack but weirdly it was boring.
            I completed all the hacking exercises on DVWA and Juice Shop. I also
            completed the Jr Penetration Tester from
            <strong
              ><a href="https://tryhackme.com/" target="_blank"
                >TryHackMe</a
              ></strong
            >. watch out.
          </div>
        </li>
        <li style="--accent-color: #1b5f8c">
          <div class="date">Monitoring & analyzing traffic</div>
          <div class="title">> Securoty Onion, OSSEC, ZEEK</div>
          <div>
            This is the future. I am using
            <strong
              ><a href="https://securityonionsolutions.com/" target="_blank"
                >SecurityOnion</a
              ></strong
            >
            to analyze the traffic on my network. I also worked with OSSEC HIDS,
            Suricata, Zeek. Sui.
          </div>
        </li>
        <li style="--accent-color: #4cadad">
          <div class="date">More?</div>
          <div class="title">
            > Graphical Designing, 3D modeling, Adobe products, SQL.
          </div>
          <div>
            Throughout my course I did assignments for things I no longer like.
            For example, I designed a 3D game in Unity but my little brother
            said it sucks so I won't share it.
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skills',
};
</script>

<style scoped lang="scss">
.container {
  width: 60vw;
  margin: 10rem auto 5rem auto;
  padding: 0.5rem;
  font-family: var(--font1);
}
h1 {
  text-align: center;
  overflow: hidden;
}

ul {
  --col-gap: 2rem;
  --row-gap: 2rem;
  --line-w: 0.25rem;
  display: grid;
  grid-template-columns: var(--line-w) 1fr;
  grid-auto-columns: max-content;
  column-gap: var(--col-gap);
  list-style: none;
  width: min(60rem, 90%);
  margin-inline: auto;
  padding: 4rem 0;
}

/* line */
ul::before {
  content: '';
  grid-column: 1;
  grid-row: 1 / span 20;
  background: rgb(225, 225, 225);
  border-radius: calc(var(--line-w) / 2);
}

/* columns*/

/* row gaps */
ul li:not(:last-child) {
  margin-bottom: var(--row-gap);
}

/* card */
ul li {
  grid-column: 2;
  --inlineP: 1.5rem;
  margin-inline: var(--inlineP);
  grid-row: span 2;
  display: grid;
  grid-template-rows: min-content min-content min-content;
  border-radius: 10px;
}
ul li > * {
  overflow: hidden;
}

/* date */
ul li .date {
  --dateH: 3rem;
  height: var(--dateH);
  margin-inline: calc(var(--inlineP) * -1);

  text-align: center;
  background-color: var(--accent-color);

  color: white;
  font-size: 1.25rem;
  font-weight: 700;

  display: grid;
  place-content: center;
  position: relative;

  border-radius: calc(var(--dateH) / 2) 0 0 calc(var(--dateH) / 2);
}

/* title descr */
ul li .title,
ul li .descr {
  position: relative;
  padding-inline: 1.5rem;
}
ul li .title {
  overflow: hidden;
  padding-block-start: 1.5rem;
  padding-block-end: 1rem;
  font-size: 1.2rem;
}
ul li .descr {
  padding-block-end: 1.5rem;
  font-weight: 300;
}

/* shadows */
ul li .title::before,
ul li .descr::before {
  content: '';
  position: absolute;
  width: 90%;
  height: 0.5rem;
  background: rgba(0, 0, 0, 0.5);
  left: 50%;
  border-radius: 50%;
  filter: blur(4px);
  transform: translate(-50%, 50%);
}
ul li .title::before {
  bottom: calc(100% + 0.125rem);
}

ul li .descr::before {
  z-index: -1;
  bottom: 0.25rem;
}

@media (min-width: 40rem) {
  ul {
    grid-template-columns: 1fr var(--line-w) 1fr;
  }
  ul::before {
    grid-column: 2;
  }
  ul li:nth-child(odd) {
    grid-column: 1;
  }
  ul li:nth-child(even) {
    grid-column: 3;
  }

  /* start second card */
  ul li:nth-child(2) {
    grid-row: 2/4;
  }

  ul li:nth-child(odd) .date::before {
    clip-path: polygon(0 0, 100% 0, 100% 100%);
    left: 0;
  }

  ul li:nth-child(odd) .date::after {
    transform: translate(-50%, -50%);
    left: calc(100% + var(--col-gap) + var(--line-w) / 2);
  }
  ul li:nth-child(odd) .date {
    border-radius: 0 calc(var(--dateH) / 2) calc(var(--dateH) / 2) 0;
  }
}

.credits {
  margin-top: 1rem;
  text-align: right;
}
.credits a {
  color: var(--color);
}
</style>
