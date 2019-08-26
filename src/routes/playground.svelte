<script>
  import Repl from '../components/repl/ReplWidget.svelte';
  import {repl} from '../stores/repl.js'
  import {onMount} from 'svelte';
  
  let editor;
  export async function getTheme() {
      const res = await fetch('https://unpkg.com/monaco-themes@0.3.3/themes/Oceanic%20Next.json');
      const data = await res.json();
      if (res.ok) {
          await monaco.editor.defineTheme('oceanic-next', data);
          await monaco.editor.setTheme('oceanic-next');
      } else {
              console.error(err);
      }
   }
  // onMount(async () => {
  //     if(_Monaco){
  //       monaco = _Monaco;
  //     }else{
  //       await import('../monaco.js').then(async mod => {
  //       _Monaco = await mod.default;
  //       monaco = _Monaco;
  //     })
  //   }
   
  //   return () => monaco.editor.dispose()
  // })
  </script>
  
  <Repl bind:this={editor}/>