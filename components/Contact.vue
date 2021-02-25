<template>
  <section class="section">
    <div id="contact" class="content has-text-centered">
      <p class="subtitle is-1">Contact</p>
    </div>
    <div class="level">
      <div class="level-item">
        <form
          class="columns"
          action="https://formspree.io/jmc529@vt.edu"
          method="POST"
        >
          <div class="column">
            <div class="field">
              <p class="control">
                <input
                  class="button is-success is-fullwidth"
                  type="submit"
                  value="Send"
                />
              </p>
            </div>
            <div class="field">
              <p class="control has-icons-left">
                <input
                  class="input"
                  type="email"
                  name="_replyto"
                  placeholder="Email"
                  required
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-envelope"></i>
                </span>
              </p>
            </div>
            <div class="field">
              <p class="control has-icons-left">
                <input
                  class="input"
                  type="name"
                  name="name"
                  placeholder="Name"
                  required
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
              </p>
            </div>
          </div>
          <div class="column">
            <div class="field">
              <div class="control">
                <textarea
                  class="textarea"
                  rows="4"
                  type="message"
                  name="message"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
            </div>
          </div>
          <!-- Subject Line -->
          <input type="hidden" name="_subject" value="github pages message" />
          <!-- Bot Proofing -->
          <input type="text" name="_gotcha" style="display: none" />
        </form>
      </div>
      <div class="level-item">
        <div class="notification is-info">
          <div class="columns">
            <div class="column">
              <p>
                Let's link up!
                <br />
                I try to get back to emails as fast as possible, if you
                <br />
                want to reach out: send me a message here or on some
                <br />
                other platform.
              </p>
            </div>
            <div class="column">
              <ul id="contact-icons" class="content has-text-centered">
                <li>
                  <a
                    class="icon is-large"
                    href="mailto:jmc529@vt.edu"
                    target="_blank"
                  >
                    <i class="fas fa-envelope fa-2x"></i>
                  </a>
                </li>
                <li>
                  <a
                    class="icon is-large"
                    href="https://github.com/jmc529"
                    target="_blank"
                  >
                    <i class="fab fa-github fa-2x"></i>
                  </a>
                </li>
                <li>
                  <a
                    class="icon is-large"
                    href="https://www.linkedin.com/in/joe-conwell/"
                    target="_blank"
                  >
                    <i class="fab fa-linkedin fa-2x"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#contact-icons li a {
  text-decoration: none;
}

@media (max-width: 768px) {
  #contact-icons li {
    display: inline;
  }
}
</style>
