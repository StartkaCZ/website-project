<script>
    import { base } from '$app/paths';
    // import Navigation.svelte from lib folder
    import { Navigation } from "$lib"
</script>


<header>
    <!-- Logo -->
    <div class="logo">
        <img src="{base}/logo.png" alt="Website Logo">
        <h1>My Svelte App</h1>
    </div>

    <!-- Navigation -->
    <Navigation />
</header>


<style>
    /* Header Styling */
    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: var(--primary-color);
        color: white;
        padding: 1rem;
    }

    /* Logo Container */
    .logo {
        display: flex;
        align-items: center;
    }

    .logo img {
        width: 50px;
        margin-right: 0.625rem;
    }

    /* Mobile: Center logo and stack items */
    @media (max-width: 768px) {
        header {
            flex-direction: column;
        }
    }
</style>