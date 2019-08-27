

<script>
export let label = '';
export let icon = '';
export let iconOn = '';
export let on = true;
export let disabled = false;
</script>

<button 
    on:click 
    on:click={()=> on = !on}
    class="mdc-icon-button {on ? `mdc-icon-button--on` : ``}"
    aria-label="{label}"
    aria-hidden="true"
    aria-pressed="false"
    {disabled}
>
    <i class="material-icons mdc-icon-button__icon mdc-icon-button__icon--on">{iconOn}</i>
    <i class="material-icons mdc-icon-button__icon">{icon}</i>
</button>
