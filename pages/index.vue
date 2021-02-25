<template>
  <section>
    <Hero />
    <AboutMe />
    <Projects />
    <Experience />
    <Contact />
    <Footer />
  </section>
</template>

<script>
import Hero from '~/components/Hero'
import AboutMe from '~/components/AboutMe'
import Projects from '~/components/Projects'
import Experience from '~/components/Experience'
import Contact from '~/components/Contact'
import Footer from '~/components/Footer'

export default {
  name: 'HomePage',

  components: {
    Hero,
    AboutMe,
    Projects,
    Experience,
    Contact,
    Footer,
  },
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
      ],
    }
  },
}
</script>

<style scoped>
section {
  background-color: #eff0eb;
}
</style>
