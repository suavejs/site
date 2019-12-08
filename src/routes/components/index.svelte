<script>
  import ReplWidget from '../../components/repl/ReplWidget.svelte';
  let repl;
</script>


<div>
<section>
    <a href="components/buttons">Buttons</a>
</section>  
<ReplWidget bind:this={repl} style="background: var(--mdc-theme-background)"/>
</div>

<style>
  section{
    display: flex;
    flex-direction: column;
    padding: 8px;
    padding-top: 16px;
  }
div {
  display: flex;
  width: 100%;
  height: 100%;
}
</style>