<script>
	import Icon from '../components/Icon.svelte';
	import TabBar from '../components/TabBar.svelte';
	import Content from '../components/Content.svelte';
</script><svelte:head>
	<title>Account</title>
</svelte:head>

<TabBar/>
<Content>
<h1 class="mdc-typography-headline1">Your account</h1>
<Icon dark='true' name="home"></Icon>
<p>This is the 'account' page. There's not much here.</p>
</Content>