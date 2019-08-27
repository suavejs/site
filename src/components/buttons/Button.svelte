<script context="module">
  export const required = {
    label: ''
  }

  export const variants = {
    base: 'mdc-button',
    contained: 'mdc-button--raised',
    unelevated: 'mdc-button--unelevated',
    outlined: 'mdc-button--outlined',
  }

  export const options = {
    dense: 'mdc-button--dense',
    prependIcon: '',
    appendIcon: '',
  }

  export const states = {
    disabled: false
  }

  export const props = {
    selector: 'mdc-button',
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
    const buttonRipple = new MDCRipple(button);
  })
  
  let button;

  export let variant;
  export let dense = false;
  export let prependIcon;
  export let appendIcon;
  export let label;
  export let disabled = false;
</script>

<button on:click bind:this={button} type="button" class="mdc-button {variant ? variants[variant] : ``}" {disabled}>
  {#if prependIcon}
    <i class="material-icons mdc-button__icon" aria-hidden="true">{prependIcon}</i>
  {/if}
  <span class="mdc-button__label"><slot>{label}</slot></span>
  {#if appendIcon}
    <i class="material-icons mdc-button__icon" aria-hidden="true">{appendIcon}</i>
  {/if}
</button>