<script>
    import { onMount } from 'svelte';
    import { Card } from '$lib';
    
    onMount(() => {
        console.log("Home Page Loaded");
    });
</script>


<h1>Welcome to My Svelte App</h1>
<p>This is the homepage of our SvelteKit application.</p>

<!-- Gallery Container -->
<div class="gallery">
    <Card title="Card 1" description="This is the first card." />
    <Card title="Card 2" description="This is the second card." />
    <Card title="Card 3" description="This is the third card." />
    <Card title="Card 4" description="This is the fourth card." />
    <Card title="Card 5" description="This is the fifth card." />
    <Card title="Card 6" description="This is the sixth card." />
</div>


<style>
    /* Grid Layout for the Gallery */
    .gallery {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Responsive columns */
        gap: 50px;
        margin-top: 2rem;
    }

    /* Optional: Add uniform height */
    :global(.gallery > .card) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    /* Reduce the size of adjacent siblings when a card is hovered */
    :global(.gallery > .card:hover ~ .card) {
        transform: scale(0.9); /* Reduce size of adjacent cards */
        opacity: 0.8; /* Slightly fade them */
    }

    /* Reduce the size of adjacent siblings when a card is hovered */
    :global(.gallery > .card:hover + .card) {
        transform: scale(0.95); /* Reduce size of adjacent cards */
        opacity: 0.9; /* Slightly fade them */
    }
</style>