<script>
  import {createEventDispatcher} from 'svelte'
  
  let dispatch = createEventDispatcher();

  export let i;
    export const variants = {
      singleLine: 'single_line',
      twoLine: 'two_line',
      threeLine: 'three-line'
    }
    export let title;
    export let subtitle;
    export let caption;
    export let prependItem;
    export let appendItem;
</script>

<div on:click={() => dispatch('listItemClicked', {index: i})} class="list-item">
  <slot name="prepend" let:prepend_item>
    {#if prependItem}
      <span on:click={() => dispatch('listItemPrependClicked', {index: i, item: prependItem})} class="list-item--prepend">{prependItem}</span>
    {/if}
  </slot>
  <slot let:item>
    <div class="list-item--body">
      <h3>{title}</h3>
      <h5>{subtitle}</h5>
      <p>{caption}</p>
    </div>
  </slot>
  <slot name="append" let:append_item>
    {#if appendItem}
    <span on:click={() => dispatch('listItemAppendClicked', {index: i, item: appendItem})} class="list-item--append">{appendItem}</span>
    {/if}
  </slot>
</div>

<style>
.list-item {
  display: flex;
  padding: 8px;
}
.list-item--body {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1 1 auto;
}
</style>