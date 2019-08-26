<script>
    import Leaf from './Leaf.svelte';
  
    export let expanded = false;
    export let name;
    export let icons;
    let type;
    export let children;
    $: if(expanded){
        type = "folder_open";
      }else {
        type="folder"
      }
  
    function toggle() {
      expanded = !expanded;
    }
  </script>
  
  <style>
    span {
      padding: 0 0 0 1.5em;
      background: url(icons/folder.svg) 0 0.1em no-repeat;
      background-size: 1em 1em;
      font-weight: bold;
      cursor: pointer;
    }
  
    .expanded {
      background-image: url(icons/folder_open.svg);
    }
  
    ul {
      padding: 0.2em 0 0 0.5em;
      margin: 0 0 0 0.5em;
      list-style: none;
      border-left: 1px solid #eee;
    }
  
    li {
      padding: 0.2em 0;
    }
  </style>
  
  <span style="background-image: url(icons/{type}.svg)" class:expanded on:click={toggle}>{name}</span>
  
  {#if expanded}
    <ul>
      {#each children as child}
        <li>
          {#if child.isFolder}
            <svelte:self {...child}/>
          {:else}
            <Leaf on:open_file {...child}/>
          {/if}
        </li>
      {/each}
    </ul>
  {/if}