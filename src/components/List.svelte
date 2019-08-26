<!-- FancyList.svelte -->
<ul>
    {#each items as item}
      <li class="fancy">
        <slot name="item" item={item}></slot>
      </li>
    {/each}
  </ul>
  
  <slot name="footer"></slot>