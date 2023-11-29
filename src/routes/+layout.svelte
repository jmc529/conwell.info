<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    import { browser } from '$app/environment';
    import type { LayoutData } from './$types';
	export let data: LayoutData;    

    function scrollToId(id: string) {
        const el = document.getElementById(id);
        if (el === null) {
            window.open(`/#${id}`, '_self');
        } else {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    }

    function handleScroll() {
        const currentScrollPos = window.scrollY;
        const el = document.getElementById('navbar');
        
        if (el !== null) {
            if (data.prevScrollPos > currentScrollPos || currentScrollPos <= 0) {
                el.style.top = '0';
            } else {
                el.style.top = `-${el.offsetHeight.toString()}px`;
            }
            data.prevScrollPos = currentScrollPos;
        }
    }

    function cv() {
        window.open('/conwellJoseph.pdf', '_blank');
    }

    // Lifecycle
    onMount(() => {
        if (browser)
            window.addEventListener('scroll', handleScroll);
    })

    onDestroy(() => {
        if (browser)
            window.removeEventListener('scroll', handleScroll);
    })
</script>

<style lang="scss">
@use 'chota';
@import '$lib/scss/theme';

#logo {
    width: 4vw;
    margin: none;
    &:hover {
        background-color: transparent !important;
        cursor: unset;
    }
}

header {
    padding: none;
    nav {
        transition: top 0.3s;
        height: $navHeight;
        margin: 1vh 1vw;
        padding: 0 1vw;
        a {
            border: none;
        }
    }
}

// .spaced-row {
//     display: flex;
//     flex-direction: row;
//     justify-content: space-between;
//     align-items: center;
// }

// .column-gap-1 {
//     column-gap: 1vw;
// }
</style>

<header>
    <nav
        id="navbar"
        class="nav"
        aria-label="main navigation"
    >
        <div class="nav-left">
            <a class="brand" href="/">
                <img
                    id="logo"
                    alt="Clover Logo"
                    aria-label="Brand logo"
                    src="/svgs/clover.svg"
                />
            </a>
        </div>
        
        <div class="tabs">
            {#each data.sections as section}
                <a
                    aria-label="{section.name}"
                    href="/#{section.id}"
                >
                    {section.name}
                </a>
            {/each}
        </div>

        <div class="nav-right">
            <button
                id="registerButton"
                class="button primary"
                on:click={() => cv()}
            >
                <strong>Resume</strong>
            </button>
        </div>
    </nav>
</header>

<slot></slot>