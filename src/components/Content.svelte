<script>
  import {onMount} from 'svelte';
  export let tag = 'p';
  export let kind = 'body1';
  export let color = 'on-surface';
  export let extraClasses = '';
  export let fontWeights = {
    thin: 100,
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
    black: 900
  }
  export let fontWeight = fontWeights.regular;
  $: klass = `mdc-typography--${kind} mdc-theme-${color}`
  // onMount(() => {
  //   [document.getElementsByName('h1')].forEach(el => el && el.classList && el.classList.add('mdc-typography--headline1'))
  //   [document.getElementsByName('h2')].forEach(el => el && el.classList && el.classList.add('mdc-typography--headline2'))
  //   [document.getElementsByName('h3')].forEach(el => el && el.classList && el.classList.add('mdc-typography--headline3'))
  //   [document.getElementsByName('h4')].forEach(el => el && el.classList && el.classList.add('mdc-typography--headline4'))
  //   [document.getElementsByName('h5')].forEach(el => el && el.classList && el.classList.add('mdc-typography--headline5'))
  //   [document.getElementsByName('h6')].forEach(el => el && el.classList && el.classList.add('mdc-typography--headline6'))
  //   [document.getElementsByName('p')].forEach(el => el && el.classList && el.classList.add('mdc-typography--body2'))
  //   [document.getElementsByName('button')].forEach(el => el && el.classList && el.classList.add('mdc-typography--button'))
  //   [document.getElementsByClassName('body1')].forEach(el => el && el.classList && el.classList.add('mdc-typography--body1'))
  //   [document.getElementsByClassName('caption')].forEach(el => el && el.classList && el.classList.add('mdc-typography--caption'))
  //   [document.getElementsByClassName('overline')].forEach(el => el && el.classList && el.classList.add('mdc-typography--overline'))
  // })
  </script>

<section class="content font-body">
  <slot/>
</section>

<style>
.content :global(p) {
  color: var(--mdc-theme-on-surface);
  font-family: var(--font-body);
}
.content :global(a){
  color: inherit;
  cursor: pointer;
}
.content :global(a:hover){
  color: var(--mdc-theme-secondary);
}
.content :global(.list-reset){
  list-style: none;
  padding: 8px;
}

.content :global(pre) {
		box-shadow: inset 1px 1px 5px rgba(0,0,0,0.05);
		padding: 0.5em;
		border-radius: 2px;
		overflow-x: auto;
	}

	.content :global(pre) :global(code) {
		background-color: transparent;
		padding: 0;
	}

	.content :global(ul) {
		line-height: 1.5;
	}

	.content :global(li) {
		margin: 0 0 0.5em 0;
	}
.content {
  overflow: auto;
  height: 100%;
  padding: 32px;
  background: var(--mdc-theme-surface);
  color: var(--mdc-theme-on-surface);
}
</style>