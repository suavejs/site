<script>
  import ReplWidget from '../../components/repl/ReplWidget.svelte';
  import Tree from '../../components/treeview';
  let repl;
</script>

<div>
<section>
  <Tree/>
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
<!-- <SplitPane type="horizontal" pos="10">

  <section slot=a  class="elevation-z-2" style="grid-area: tree; padding: 8px;">
    <Tree/>
  </section>
  
  <div slot="b" height="100%">
    <ReplWidget/>
  </div>

</SplitPane> -->