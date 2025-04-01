<script>
    import { fade, scale } from 'svelte/transition';

    export let isOpen = false;
    export let title = "Modal Title";
</script>


<!-- Modal Background Overlay -->
{#if isOpen}
    <div class="modal-overlay" transition:fade>
        <!-- Modal Content -->
        <div class="modal-content" transition:scale={{ duration: 300 }}>
            <h2>{title}</h2>
            <p>This is a modal window with transitions.</p>
            <button on:click={() => isOpen = false}>Close</button>
        </div>
    </div>
{/if}


<style>
    /* Modal Background Overlay */
    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    /* Modal Content */
    .modal-content {
        background: linear-gradient(135deg, #007bff, #00c6ff);
        color: white;
        padding: 2rem;
        border-radius: 8px;
        width: 300px;
        text-align: center;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    }

    /* Close Button */
    .modal-content button {
        margin-top: 1rem;
        background: #007bff;
        color: white;
        border: none;
        padding: 10px 20px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .modal-content button:hover {
        background: #0056b3;
    }
</style>
