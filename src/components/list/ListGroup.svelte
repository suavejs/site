<script>
  import ListItem from './ListItem.svelte';
  import {slide} from 'svelte/transitions';
  export let heading = '';
  export let items = [];
  export let expanded = true;
</script>

<div>
<h2 on:click>{heading}</h2>
{#if expanded}
  <div transition:slide>
    {#each items as item, i}
      <ListItem {i} {...item}/>
    {/each}
  </div>
{/if}
</div>