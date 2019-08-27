<style>a {text-decoration: none; font-size: 1.5rem; color: inherit}</style>


<header class="mdc-elevation--z2 mdc-top-app-bar mdc-top-app-bar--fixed mdc-top-app-bar--dense">
	<div class="mdc-top-app-bar__row">
		
		<section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
			<IconButton icon="menu" iconOn="menu" on:click={toggleDrawer} classes="mdc-top-app-bar__navigation-icon--unbounded"/>
			<IconButton icon="minimize" iconOn="minimize" on:click={toggleMini} classes="mdc-top-app-bar__navigation-icon--unbounded"/>
			<span class="font-mono mdc-top-app-bar__title"><a href=".">suavejs</a></span> 
		</section>

		<section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end">
			<IconButton icon='bookmark' iconOn="bookmark" label='Download' classes='mdc-top-app-bar__action-item--unbounded' />
			<IconButton icon="star" iconOn="star" label="add to favorites" classes='mdc-top-app-bar__action-item--unbounded'/>
			<IconButton icon="more_vert" iconOn="more_vert" label="show more options" classes='mdc-top-app-bar__action-item--unbounded'/>
		</section>
	</div>
</header>

<script>
	import IconButton from './buttons/IconButton.svelte';
	import {createEventDispatcher} from 'svelte'
	let dispatch = createEventDispatcher();
	function toggleMini(){
		dispatch('toggleMini', {
			prop: 'mini'
		})
	}
	function toggleDrawer(){
		dispatch('toggleDrawer', {
			prop: 'drawer'
		})
	}
</script>