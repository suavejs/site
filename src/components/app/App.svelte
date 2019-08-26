<script>
import {setContext} from 'svelte';
export let layout = ({
  bar: 0,
  bottom: 0,
  footer: 0,
  footerInset: 0,
  left: 200,
  right: 0,
  top: 60
})

$: if(layout) setContext('app', {layout})
</script>

<slot></slot>

