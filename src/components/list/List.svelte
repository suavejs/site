<script>
import ListGroup from './ListGroup.svelte';
import ListItem from './ListItem.svelte';

export let items;
export let groups;
</script>

{#if groups}
  {#each groups as group, i}
    <ListGroup on:click {i} {...group}/>
  {/each}
{:else}
  {#each items as item, i}
    <ListItem on:click {i} {...item}/>
  {/each}
{/if}