<script>
	import { fly } from 'svelte/transition';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	export const width = tweened(60, {
		duration: 500,
		easing: cubicOut
	});

	export const headerHeight = tweened(60, {
		duration: 200,
		easing: cubicOut
	})

	import IconButton from './buttons/IconButton.svelte';
	export let segment;
	export let show = true;
	export let mini = true;

	$: if(width) show 
		? mini
			? width.set(miniWidth) : width.set(fullWidth)
		:  width.set(hideWidth)
	
	$: if(headerHeight) mini
			? headerHeight.set(0)
			: headerHeight.set(60)

	export let hideWidth = 0;
	export let miniWidth = 60;
	export let fullWidth = 200;
</script>

<!-- {#if mini} -->
<aside style="width: {$width}px;" class="mdc-elevation--z2 mdc-drawer mdc-top-app-bar--dense-fixed-adjust">
	{#if show}
		{#if !mini}
			<div transition:fly="{{ y: -100, duration: 250 }}" style="height: {$headerHeight}px;" class="mdc-drawer__header">
					<h3 class="mdc-drawer__title">Username</h3>
					<h6 class="mdc-drawer__subtitle">user@suavejs.io</h6>
			</div>
		{/if}
		<div transition:fly="{{ x: -100, duration: 400 }}" class="mdc-drawer__content">
			<nav  class="mdc-list">
					<a class="mdc-list-item {segment === 'account' ? `mdc-list-item--activated` : ``}" href='account' aria-current="page">
						<IconButton name="account_circle" classes="mdc-list-item__graphic"/>
						{#if !mini}<span class="mdc-list-item__text">account</span>{/if}
					</a>
					
					<a class="mdc-list-item {segment === undefined ? `mdc-list-item--activated` : ``}" href='.' aria-current="page">
						<IconButton name="home" classes="mdc-list-item__graphic"/>
						{#if !mini}<span class="mdc-list-item__text">home</span>{/if}
					</a>

					<a class="mdc-list-item {segment === "about" ? `mdc-list-item--activated` : ``}" href='about'>
						<IconButton name="help" classes="mdc-list-item__graphic"/>
						{#if !mini}<span class="mdc-list-item__text">about</span>{/if}
					</a>

					<a rel=prefetch class="mdc-list-item {segment === "blog" ? `mdc-list-item--activated` : ``}" href='blog'>
						<IconButton name="book" classes="mdc-list-item__graphic"/>
						{#if !mini}<span class="mdc-list-item__text">blog</span>{/if}
					</a>

					<a class="mdc-list-item {segment === "playground" ? `mdc-list-item--activated` : ``}" href='playground'>
						<IconButton name="code" classes="mdc-list-item__graphic"/>
						{#if !mini}<span class="mdc-list-item__text">playground</span>{/if}
					</a>

					<a class="mdc-list-item {segment === "components" ? `mdc-list-item--activated` : ``}" href='components'>
							<IconButton name="beach_access" classes="mdc-list-item__graphic"/>
							{#if !mini}<span class="mdc-list-item__text">playground</span>{/if}
						</a>

				</nav>
		</div>
	{/if}
	</aside>

<style>
.mini {
	width: 60px;
}
.hide {
	width: 0px;
}
.full {
	width: 240px;
}
</style>