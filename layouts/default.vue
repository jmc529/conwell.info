@@ -1,162 +1,173 @@
<template>
  <div>
    <b-navbar
      id="navbar"
      class="navbar is-primary"
      role="navigation"
      aria-label="main navigation"
      :fixed-top="true"
    >
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img
            id="brand-logo"
            alt="Clover logo"
            src="~assets/svgs/clover.svg"
          />
        </b-navbar-item>
      </template>

      <template #start>
        <b-navbar-item
          v-for="section in sections"
          :key="section.name"
          @click="scrollToId(section.id)"
        >
          {{ section.name }}
        </b-navbar-item>
      </template>

      <template #end>
        <b-navbar-item tag="div" class="navbar-item">
          <div class="buttons">
            <button
              id="registerButton"
              class="button is-primary"
              @click="resume"
            >
              <strong>Resume</strong>
            </button>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>

    <section class="main-content">
      <nuxt />
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      prevScrollpos: 0,
      sections: [
        {
          name: 'Home',
          id: 'hero',
        },
        {
          name: 'About Me',
          id: 'about',
        },
        {
          name: 'Projects',
          id: 'projects',
        },
        {
          name: 'Experience',
          id: 'experience',
        },
        {
          name: 'Contact',
          id: 'contact',
        },
      ],
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    scrollToId(id) {
      const menu = document.getElementsByClassName('navbar-menu')[0]
      const burger = document.getElementsByClassName('navbar-burger')[0]
      const el = document.getElementById(id)
      el.scrollIntoView({ behavior: 'smooth' })
      if (menu.getAttribute('class').includes('is-active')) {
        burger.setAttribute('class', 'navbar-burger burger')
        burger.removeAttribute('aria-expanded')
        menu.setAttribute('class', 'navbar-menu')
      }
    },
    handleScroll() {
      const currentScrollPos = window.scrollY
      const el = document.getElementById('navbar')
      if (this.prevScrollpos > currentScrollPos || currentScrollPos <= 0) {
        el.style.top = '0'
      } else {
        el.style.top = `-${el.offsetHeight.toString()}px`
      }
      this.prevScrollpos = currentScrollPos
    },
    resume() {
      window.open('/conwellJoseph.pdf', '_blank')
    },
  },
}
</script>

<style lang="scss">
@import '../sass/theme';
// $navcolor: rgba(0, 0, 0, 0.8);
// :root {
//   --navHeight: 50px;
// }

// #brand-logo {
//   max-height: unset;
//   width: calc(var(--navHeight) * 1.5);
//   height: calc(var(--navHeight) / 1.5);
// }

.navbar-brand a.navbar-item:hover {
  background-color: transparent !important;
  cursor: unset;
}

// #registerButton {
//   font-size: 1rem;
// }

.navbar {
  // background-color: $navcolor;
  transition: top 0.3s;
  height: var(--navHeight);
  // padding: 0 10em 0 5em;
}

// .navbar-burger {
//   color: $text-primary;
//   cursor: pointer;
//   // font-size: var(--navHeight);
// }

// .navbar-end {
//   .navbar-item {
//     cursor: pointer;
//     span {
//       font-size: 1.1rem;
//       color: $text-primary;
//     }
//     &.page-ref {
//       &:hover {
//         border-bottom: 2px solid;
//         border-bottom-style: outset;
//         border-color: $sunset;
//       }
//     }
//   }
// }

// .navbar-menu {
//   &.is-active {
//     background-color: $navcolor;
//     border-radius: 5%;
//   }
// }

// @media (max-width: 1000px) {
//   :root {
//     --navHeight: 40px;
//   }

//   .navbar {
//     height: var(--navHeight);
//     padding: 0 20vw 0 0;
//   }

//   .navbar-menu {
//     position: absolute;
//     right: 6em;
//     width: auto;
//   }
// }

// @media (max-width: 450px) {
//   .navbar {
//     height: var(--navHeight);
//     padding: 0 5em 0 0;
//   }
// }
</style>
