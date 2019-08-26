<script>
  export let variant = 'circular';
  export let total = 1;
  export let value = 0;
  let variants = ['circular', 'linear'];
</script>

{#if variant === 'circular'}
  <progress {value}></progress>
{:else}
  <progress {value}></progress>
{/if}