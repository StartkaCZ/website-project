<script>
    import { onMount } from 'svelte';

    onMount(() => {
        console.log("About Page Loaded");
    });
</script>


<h1>About Us</h1>
<!-- About Section with Named Grid Areas -->
<div class="about-container">
    <img src="/about-image.jpg" alt="About us" class="about-image">
    <div class="about-text">
        <h2>Who We Are</h2>
        <p>We are a team passionate about web development and modern UI design.</p>
    </div>
    <aside class="about-aside">
        <h3>Our Vision</h3>
        <p>To empower developers with modern tools and best practices.</p>
    </aside>
</div>


<style>
    h1 { color: #007bff; }
    p { font-size: 18px; }

    /* Grid-Based About Section with Named Areas */
    .about-container {
        display: grid;
        grid-template-columns: 1fr 1fr; /* Two columns */
        grid-template-areas: 
            "image text"
            "image aside"; /* Image spans both rows */
        gap: 20px;
        align-items: center;
    }

    /* Assigning Grid Areas */
    .about-image {
        grid-area: image; /* Image spans both rows */
        width: 100%;
        border-radius: 10px;
    }

    .about-text {
        grid-area: text;
    }

    .about-aside {
        grid-area: aside;
        background: #f8f9fa;
        padding: 1rem;
        border-left: 4px solid #007bff;
        border-radius: 5px;
    }

    /* Responsive Layout: Stack Items on Mobile */
    @media (max-width: 768px) {
        .about-container {
            grid-template-columns: 1fr;
            grid-template-areas: 
                "image"
                "text"
                "aside"; /* Stack all sections */
            text-align: center;
        }
    }
</style>