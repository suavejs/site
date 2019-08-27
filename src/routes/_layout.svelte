<script>
	import TopBar from '../components/TopBar.svelte';
	import Nav from '../components/Nav.svelte';
	import {setContext } from 'svelte';
	import {writable} from 'svelte/store'
	import { stores } from '@sapper/app';
	import { Icon, Icons, Nav as NavBar, NavItem } from '@sveltejs/site-kit';
	import PreloadingIndicator from '../components/navigation/PreloadingIndicator.svelte';
	const { page, preloading, session } = stores();

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

	setContext('app', {
		layout,
		login: () => {
			const login_window = window.open(`${window.location.origin}/auth/login`, 'login', 'width=600,height=400');

			window.addEventListener('message', function handler(event) {
				login_window.close();
				window.removeEventListener('message', handler);
				$session.user = event.data.user;
			});
		},

		logout: async () => {
			const r = await fetch(`/auth/logout`, {
				credentials: 'include'
			});

			if (r.ok) $session.user = null;
		}
	});

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

<Icons/>

{#if $preloading}
	<PreloadingIndicator/>
{/if}

<!-- {#if $page.path !== '/repl/embed'}
	<NavBar {segment} {page}>
		<NavItem segment="tutorial">Tutorial</NavItem>
		<NavItem segment="docs">API</NavItem>
		<NavItem segment="examples">Examples</NavItem>
		<NavItem segment="repl">REPL</NavItem>
		<NavItem segment="blog">Blog</NavItem>
		<NavItem segment="faq">FAQ</NavItem>

		<NavItem external="https://sapper.svelte.dev">Sapper</NavItem>

		<NavItem external="chat" title="Discord Chat">
			<Icon name="message-square"/>
		</NavItem>

		<NavItem external="https://github.com/sveltejs/svelte" title="GitHub Repo">
			<Icon name="github"/>
		</NavItem>
	</NavBar>
{/if} -->

	<TopBar on:toggleMini={toggleMini} on:toggleDrawer={toggleDrawer}/>
	<Nav {mini} show={drawer} {segment}/>
	<main class="mdc-drawer-app-content mdc-top-app-bar--dense-fixed-adjust">
		<div class="main-content" id="main-content">
			<slot class="main-content mdc-body1" id="main-content"></slot>
		</div>
	</main>

<style>
	.main-content {
		overflow-x: hidden;
	}
</style>
