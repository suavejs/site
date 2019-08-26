<script>
  import {createEventDispatcher} from 'svelte';
    export let name;
    export let type;
    export let isFolder;
    export let data;
    export let icons;
    let dispatch = createEventDispatcher();
    $: if(!type){
      let lang = name.slice(name.lastIndexOf('.') + 1);
      file = icons[lang];
    }
    export function openFile(){
      dispatch('open_file', {
        name,
        type,
        data
      })
    }
  </script>
  
  <style>
    span {
      padding: 0 0 0 1.5em;
      background: 0 0.1em no-repeat;
      background-size: 1em 1em;
      cursor: pointer;
    }
  </style>
  
  <span on:click={openFile} style="background-image: url(icons/{type}.svg)">{name}</span>