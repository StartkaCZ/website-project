<script>
    import { onMount } from 'svelte';
    import { Modal } from '$lib';

    let showModal = false;

    onMount(() => {
        console.log("Contact Page Loaded");
    });
</script>


<h1>Contact Us</h1>
<p>Get in touch via email at <a href="mailto:info@example.com">info@example.com</a>.</p>

<!-- Open Modal Button -->
<button on:click={() => showModal = true}>Open Modal</button>

<!-- Modal Component -->
<Modal bind:isOpen={showModal} title="Welcome!" />


<style>
    h1 { color: #28a745; }
    p { font-size: 18px; }
    a { color: #007bff; text-decoration: none; }
    a:hover { text-decoration: underline; }
</style>
