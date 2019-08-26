<script>
	import Icon from '../components/Icon.svelte';
	import TabBar from '../components/TabBar.svelte';
	import Card from '../components/layout/Card.svelte';
	import Content from '../components/Content.svelte';
</script>
<svelte:head>
	<title>About</title>
</svelte:head>


<TabBar/>
<Content>
<h1>About this site</h1>
<Icon dark='true' name="home"></Icon>
<p>This is the 'about' page. There's not much here.</p>
<Card>
</Card>
</Content>