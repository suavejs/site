<script>
  import ReplWidget from '../../components/repl/ReplWidget.svelte';
  import Tree from '../../components/treeview';
  let repl;
</script>

<a href="components/buttons">Buttons</a>

<!-- <div>
<section>
  <Tree/>
</section>  
<ReplWidget bind:this={repl} style="background: var(--mdc-theme-background)"/>
</div> -->

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