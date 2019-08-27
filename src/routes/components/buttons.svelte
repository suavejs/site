<script>
import {Button, Fab, IconButton} from '../../components/buttons'
</script>

<div>
  <section>
    <h3 class="mdc-typography--subtitle">Buttons</h3>
    <Button label="Text"/>
    <Button label="Contained" variant="contained"/>
    <Button label="Unelevated" variant="unelevated"/>
    <Button label="Outlined" variant="outlined"/>
    <Fab icon="+"/>
    <IconButton icon="favorite" iconOn="favorite_outline"/>
  </section>
</div>

<style>
div {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>