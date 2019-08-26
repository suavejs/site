<script>
	import App from '../components/app/App.svelte';
	import TopBar from '../components/TopBar.svelte';
	import Nav from '../components/Nav.svelte';
	import Icon from '../components/Icon.svelte';
	import InputOutputToggle from '../components/repl/InputOutputToggle.svelte'
	import {setContext } from 'svelte';
	import {writable} from 'svelte/store'
	export let layout = writable({
		bar: 0,
		bottom: 0,
		footer: 0,
		footerInset: 0,
		left: 200,
		right: 0,
		top: 60,
		drawer: true,
		mini: true
	})

$: if(layout) setContext('app', {layout})
	export let segment;
	let drawer = true;
	let mini = true;
	function toggleMini(){
		console.log('toggle mini', {mini})
		mini = mini ? false : true;
	}
	function toggleDrawer(){
		console.log('toggle drawer', {drawer})
		drawer = !drawer;
	}
</script>

	<TopBar on:toggleMini={toggleMini} on:toggleDrawer={toggleDrawer}/>
	<Nav {mini} show={drawer} {segment}/>
	<main class="mdc-drawer-app-content mdc-top-app-bar--dense-fixed-adjust">
		<div class="main-content" id="main-content">
			<slot class="main-content mdc-body1" id="main-content"></slot>
		</div>
	</main>
