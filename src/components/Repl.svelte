<!-- <style>
		.container, *::before, *::after{box-sizing: border-box}
		.container{
			padding: 0;
			margin: 0;
			height: 100%;
			widows: 100vw;
			display: grid;
			grid-template-areas: 'l r';
			grid-template-columns: 1fr 1fr;
			grid-template-rows: 1fr;
			overflow: hidden;
		}
		#code{
			grid-area: l;
			padding: 0;
			margin: 0;
			display: flex;
      flex-direction: column;
      height: 100%;
		}
		.editor{
			height: 100%;
			width: 100%;
		}
		#output, iframe{
			grid-area: r;
			padding: 0;
			margin: 0;
			display: flex;
			flex-direction: column;
		}
		span{
			padding: 0;
			margin: 0;
      text-align: center;
      background: #ccc;
    }
</style> -->

<style>
		.container, *::before, *::after{box-sizing: border-box}

		.container {
			position: relative;
			width: 100%;
			height: 100%;
			overflow: hidden;
			background: var(--mdc-theme-surface);
			color: var(--mdc-theme-on-surface);
		}
	
		.container :global(section) {
			position: relative;
			padding: 0;
			height: 100%;
			box-sizing: border-box;
			border: none;
		}
	
		.container :global(section) > :global(*):first-child {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			box-sizing: border-box;
		}
	
		.container :global(section) > :global(*):last-child {
			width: 100%;
			height: 100%;
		}
		
		#code{	
			display: flex;
      flex-direction: column;
			height: 100%;
			border-right: 1px solid var(--mdc-theme-primary);
		}
		.editor{
			padding: 0;
			margin: 0;
			height: 100%;
			width: 100%;
			background: var(--mdc-theme-surface);
			color: var(--mdc-theme-on-surface);
		}
		#output{
			padding: 0;
			margin: 0;
			height: 100%;
			background: #fff;
			display: flex;
			flex-direction: column;
		}
		span{
			padding: 0;
			margin: 0;
			height: 24px;
      text-align: center;
		}
		.repl {
			display: grid;
			grid-template: 
			'tree editor' 1fr
			/200px 1fr;
			height: 100%;
		}
	</style>


<SplitPane type="horizontal" pos="10">
	<section slot=a  class="elevation-z-2" style="grid-area: tree; padding: 8px;">
		<Tree/>
	</section>
	<div slot=b style="grid-area: editor;" class="container" class:orientation>
		<SplitPane 
			type="{orientation === 'rows' ? 'vertical' : 'horizontal'}"
			pos="{fixed ? fixedPos : orientation === 'rows' ? 50 : 60}"
			{fixed}
		>
		<!-- <ComponentSelector {handle_update} {handle_add} {handle_remove} {handle_select}/> -->
		<!-- <ModuleEditor
				bind:this={input}
				errorLoc="{sourceErrorLoc || runtimeErrorLoc}"
			/> -->
			<section 	class="elevation-z-4" slot=a id="code">
				<TabBar class="elevation-z-2" tabs={componentTabs} />
				{#if component.type === 'blah'}
				<span>Markup</span>
				<div bind:this={refs.markupEditor} class="editor" id="markup"></div>
				<span>Style</span>
				<div bind:this={refs.styleEditor} class="editor"  id="style"></div>
				<span>Script</span>
				<div bind:this={refs.scriptEditor} class="editor"  id="script"></div>
				{:else}
				<div bind:this={refs.codeEditor} class="editor" id="editor"></div>
				{/if}
			</section>
			<section id="output" slot=b style='height: 100%;'>
				<TabBar class="elevation-z-2" tabs={outputTabs}/>
					<!-- <Output {svelteUrl} {workersUrl} {status} {embedded} {relaxed} {injectedJS} {injectedCSS}/> -->
				<div bind:this={refs.outputEditor} ></div>
			</section>
		</SplitPane>
	</div>
</SplitPane>	

<script context="module">
  import {is_browser} from '../env.js';
  export let _Monaco;
  export let monaco_promise;
  if(is_browser){
    monaco_promise = async () => {
        await import('../monaco.js').then(async mod => {
        _Monaco = await mod.default;
      })
    }
  }
</script>
<script>
	import { onMount, setContext, createEventDispatcher } from 'svelte';
	import TabBar from './TabBar.svelte';
	import SplitPane from './layout/SplitPane.svelte';
	import Tree from './treeview'
	export let components = [
		{name: 'App.svelte', type: 'svelte', source: '<script>\n\texport let name = "Svelte";\n<\/script>\n\n<style>\n\th1 {\n\tcolor: green;\n}\n</style>\n\n<h1>Hello, {{name}}!</h1>'},
		{name: '', type:'plus', source: ''}
	]
		
	export let workersUrl = 'workers';
		export let packagesUrl = 'https://unpkg.com';
		export let svelteUrl = `${packagesUrl}/svelte`;
		export let embedded = false;
		export let orientation = 'columns';
		export let relaxed = true;
		export let fixed = false;
		export let fixedPos = 50;
		export let injectedJS = '';
		export let injectedCSS = '';
		
		export let component = components[0];
		$: componentTabs = components.map(component => {
			return {label: component.name, icon: component.type, data: component}
		});
		$: outputTabs = [
			{label: 'Result', icon: 'iframe_outline'},
			{label: 'JS', icon: 'language-javascript'},
			{label: 'css', icon: 'language-css3'}
		]
	export async function getTheme() {
			const res = await fetch('https://unpkg.com/monaco-themes@0.3.3/themes/Oceanic%20Next.json');
			const data = await res.json();
			if (res.ok) {
					await monaco.editor.defineTheme('oceanic-next', data);
					await monaco.editor.setTheme('oceanic-next');
			} else {
							console.error(err);
			}
	}
	onMount(async () => {
			if(_Monaco){
				monaco = _Monaco;
			}else{
				await import('../monaco.js').then(async mod => {
				_Monaco = await mod.default;
				defaultOptions = mod.commonOpts;
				monaco = _Monaco;
			})
		}
		editor = await createEditor(document.getElementById('editor'), 'handlebars', component)
		return () => monaco.editor.dispose()
	})
	export let _Monaco;
  let monaco;
  let defaultOptions;
	let editor;
	let refs ={};
	async function createEditor(ref = refs.editor, lang = 'javascript', component = component) {
    if(monaco){
			let editor = await monaco.editor.create(ref, defaultOptions)
			let model = await monaco.editor.createModel(component.source, lang, monaco.Uri.file(component.name));
			await editor.setModel(model);
			return editor;
		}
	}
</script>
    