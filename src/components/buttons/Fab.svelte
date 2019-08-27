<script context="module">
    export const required = {
      icon: '',
    }
  
    export const variants = {
      base: 'mdc-button',
    }
  
    export const options = {
      label: 'mdc-fab__label',
      mini: 'mdc-fab__mini',
      extended: 'mdc-fab--extended'
    }
  
    export const states = {
      exited: false
    }
  
    export const props = {
      selector: 'mdc-fab',
      options:  {...options}, 
      variants: {...variants}, 
      required: {...required},
      states:   {...states}
    };
  </script>
  
    <script>
    import {onMount} from 'svelte';
    import {MDCRipple} from '@material/ripple';
  
    onMount(()=>{
      const fabRipple = new MDCRipple(el);
    })
    
    let el;
  
    export let variant;
    export let mini = false;
    export let extended = false;
    export let exited = false;
    export let icon;
  </script>

<button on:click bind:this={el} class="mdc-fab app-fab--absolute" aria-label="Favorite">
  <span class="mdc-fab__icon material-icons">{icon}</span>
</button>

<style>
  .app-fab--absolute {
    position: fixed;
    bottom: 1rem;
    right: 1rem;
  }
  
  @media(min-width: 1024px) {
      .app-fab--absolute {
      bottom: 1.5rem;
      right: 1.5rem;
    }
  }
</style>