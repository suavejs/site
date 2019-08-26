<svelte:head>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
    rel="stylesheet">
</svelte:head>

<script>
export let name = '';
export let label = '';
export let classes = '';
</script>

<button on:click class="mdc-icon-button material-icons {classes}" aria-label={label}>{name}</button>
