<script context="module">
	export async function preload({ params, query }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`blog/${params.slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { post: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	export let post;
	import Content from '../../components/Content.svelte';
</script>
<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<Content>
<h1>{post.title}</h1>

<div>
	{@html post.html}
</div>
</Content>	
