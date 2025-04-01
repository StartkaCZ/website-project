<script>
    import { base } from '$app/paths';
    // Props allow customisation of card title and description
    export let title = "Card Title";
    export let description = "This is a brief description of the card.";
    let expanded = false;
</script>


<!-- Card container -->
<div class="card">
    <!-- Placeholder image -->
    <img src="{base}/placeholder.jpg" alt="Placeholder">
    
    <!-- Card content -->
    <div class="content">
        <h2>{title}</h2>
        <p>{expanded ? description : description.substring(0, 10) + "..."}</p>
        <button on:click={() => expanded = !expanded}>
            {expanded ? "Read Less" : "Read More"}
        </button>
    </div>
</div>


<style>
    /* Card container with smooth hover effects */
    .card {
        background: white;
        border-radius: 10px; /* Rounded corners */
        border: 2px solid #007bff;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow */
        overflow: hidden;
        width: 280px;
        text-align: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth transitions */
        animation: fadeInSlide 0.6s ease-out;
    }

    /* Highlight the first and last child in the gallery */
    .card:first-child {
        border: 3px solid gold; /* Emphasize the first card */
    }

    .card:last-child {
        border: 3px solid crimson; /* Emphasize the last card */
    }

    /* Exclude the first and last card from being affected by nth-child styling */
    .card:not(:first-child):not(:last-child) {
        border-radius: 18px; /* Softens edges for middle cards */
    }

    /* Apply a different background color to even-numbered cards */
    .card:nth-child(even) {
        background-color: #ebebeb;
    }

    /* Apply a special styling to every third card */
    .card:nth-child(3n) {
        border-left: 5px solid #98caff; /* Left accent border */
    }


    /* Staggered Effect */
    .card:nth-child(2) { animation-delay: 0.2s; }
    .card:nth-child(3) { animation-delay: 0.4s; }
    .card:nth-child(4) { animation-delay: 0.6s; }
    .card:nth-child(5) { animation-delay: 0.8s; }
    .card:nth-child(6) { animation-delay: 1s; }
    

    /* Advanced Selector: Direct Child Combinator (>)
       This ensures that only direct `img` elements inside `.card` get these styles */
    .card > img {
        width: 100%; /* Responsive width */
        height: auto; /* Maintain aspect ratio */
        border-radius: 8px 8px 0 0; /* Round only the top corners */
    }

    /* Content Styling: Padding for better spacing */
    .content {
        padding: 1.5rem;
    }

    /* Title Styling */
    .content h2 {
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
    }

    /* Description Styling */
    .content p {
        font-size: 1rem;
        color: #555;
    }

    /* Pseudo-Class: Hover Effect
       Adds a subtle lift when hovering over the card */
    .card:hover {
        transform: translateY(-5px);
        transform: scale(1.1); /* Scale up the hovered card */
        z-index: 2; /* Bring it to the front */
        box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
    }

    /* Pseudo-Element: Adds a thin underline before the card title
       Creates a subtle decorative effect to enhance UI */
    .content h2::before {
        content: "";
        display: block;
        width: 40%;
        height: 2px;
        background: #007bff;
        margin: 0 auto 10px auto;
        transition: width 0.3s ease-in-out;
    }

    /* When .card is hovered, expand the decorative effect to 80% */
    .card:hover .content h2::before {
        width: 80%; /* Expanded width on hover */
    }


    @keyframes fadeInSlide {
        0% {
            opacity: 0;
            transform: translateY(20px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }


</style>
