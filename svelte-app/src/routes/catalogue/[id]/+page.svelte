<script>
    // `data` is automatically provided by the load function from +page.js
    export let data;

    // Bring in the navigation helper
    import { base } from '$app/paths';
    import { goto } from '$app/navigation';

    // Destructure item from the loaded data
    const { item } = data;
</script>


<!-- Back button -->
<button on:click={() => goto('{base}/catalogue')}>← Back to Catalogue</button>

<!-- Display item details -->
<h1>{item.title}</h1>
<p>{item.description}</p>


<style>
    button {
        margin-bottom: 1rem;
        background-color: #4b91e2;
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 6px;
        border: none;
        cursor: pointer;
    }

    button:hover {
        background-color: #3a77c4;
    }
</style>
  