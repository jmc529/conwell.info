<template>
  <section class="hero is-fullheight">
    <div id="hero" class="hero-body">
      <div class="container has-text-right">
        <p class="subtitle has-text-white">Hello, my name is</p>
        <p class="title is-1 has-text-white">Joe Conwell</p>
        <hr />
        <p class="subtitle has-text-white">I am a</p>
        <p class="title is-1 has-text-white">cook, coder, and cat-dad</p>
        <br />
        <a
          href="mailto:jmc529@vt.edu"
          class="button is-large is-outlined is-primary is-inverted"
        >
          <strong>Contact</strong>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  background: black url(~assets/images/hero.JPG) center / cover;
}

@media (max-width: 768px) {
  .hero {
    background: black url(~assets/images/hero-phone.JPG) center / cover;
  }
}
</style>
