<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    import { browser } from '$app/environment';


    let prevScrollPos: number = 0;
    const sections: {name: string, id: string}[] = [
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
        }
    ];

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
            if (prevScrollPos > currentScrollPos || currentScrollPos <= 0) {
                el.style.top = '0';
            } else {
                el.style.top = `-${el.offsetHeight.toString()}px`;
            }
            prevScrollPos = currentScrollPos;
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
@import '../sass/theme';

#logo:hover {
    background-color: transparent !important;
    cursor: unset;
}

nav {
    transition: top 0.3s;
    height: $navHeight;
}
</style>

<header>
    <nav
        id="navbar"
        aria-label="main navigation"
    >
        <a href="/">
            <img
                id="logo"
                alt="Clover Logo"
                aria-label="Brand logo"
                src="/svgs/clover.svg"
            />
        </a>
        
        <div>
            {#each sections as section}
                <button
                    aria-label="{section.name}"
                    on:click={() => scrollToId(section.id)}
                >
                    {section.name}
                </button>
            {/each}
        </div>

        <button
            id="registerButton"
            class="button is-primary"
            on:click={() => cv()}
        >
            <strong>Resume</strong>
        </button>
    </nav>
</header>

<slot></slot>