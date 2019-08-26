<style>

</style>

<svelte:head>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
    rel="stylesheet">
</svelte:head>

<script>
  export let name = 'home';
  export let inactive = false;
  export let dark = false;
  export let size = 'md';
  let sizes = {
    sm: 18,
    md: 24,
    lg: 36,
    xl: 48
  }
</script>

<i 
  class="material-icons md-{dark ? `dark` : `light` } {inactive? `md-inactive`:``} md-{sizes[size]}"
  aria-hidden="true"  
>
  {name}
</i>