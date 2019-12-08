<script>
        import { Blurb, Hero, Section } from '@sveltejs/site-kit';
        import Example from '../components/repl/ExampleEditor.svelte';
        import Content from '../components/Content.svelte'
    </script>
    
    <style>
        /* darken text for accessibility */
        /* TODO does this belong elsewhere? */
        :global(.back-light) {
            --text: var(--mdc-theme-surface);
        }
    
        .examples {
            background: var(--mdc-theme-surface);
            color: var(--mdc-theme-on-surface);

        }
        .example {
            border-radius: 4px;
        }
        .feature {
            border-radius: 4px;
            font-size: 18px;
            color: var(--mdc-theme-on-surface);
        }

    </style>
    
    <svelte:head>
        <title>Svelte • Cybernetically enhanced web apps</title>
    
        <meta name="twitter:title" content="Svelte">
        <meta name="twitter:description" content="Cybernetically enhanced web apps">
        <meta name="Description" content="Cybernetically enhanced web apps">
    </svelte:head>
<Content>
    <Hero
        title="SuaveJS"
        tagline="Unique toolset for Svelte devs"
        outline="svelte-logo-outline.svg"
        logotype="suave_logo.png"
    />
    
    <Blurb>
        <a class="feature" href="blog/write-less-code" slot="one">
            <h2>Scaffold projects instantly</h2>
            <p>Visual, interactive tools to outline your project and compile a working prototype</p>
    
            <span class="learn-more">learn more</span>
        </a>
    
        <a class="feature" href="blog/virtual-dom-is-pure-overhead" slot="two">
            <h2>Use a smarter REPL</h2>
            <p>Upgrade the official Svelte REPL with the code analysis features of Monaco, the same editor powering VSCode</p>
    
            <span class="learn-more">learn more</span>
        </a>
    
        <a class="feature" href="blog/svelte-3-rethinking-reactivity" slot="three">
            <h2>Web-based Svelte Management Studio</h2>
            <p>Organize with a dashboard of your Svelte projects and resources, develop custom component libraries, and deploy demos, docs, and blogs.</p>
    
            <span class="learn-more">learn more</span>
        </a>
    
        <div class="description" slot="what">
            <p>SuaveJS is a set of tools, utilities and components to enhance the Svelte development experience. Expanding on the official Svelte websites interactive tutorials & guides </p>
            <p>by making the REPL editor more powerful and offering a fully cloud-based dashboard for your Svelte projects. </p>
            <p><a href="blog/svelte-3-rethinking-reactivity">Read the introductory blog post</a> to learn more.</p>
        </div>
    
        <div style="grid-area: start; display: flex; flex-direction: column; min-width: 0" slot="how">
            <pre class="language-bash" style="margin: 0 0 1em 0; min-width: 0; min-height: 0; background: var(--mdc-theme-on-surface);">
    npx degit sveltejs/template my-svelte-project
    cd my-svelte-project
    
    npm install
    npm run dev
            </pre>
    
            <p style="flex: 1">See the <a href="blog/the-easiest-way-to-get-started">quickstart guide</a> for more information.</p>
    
            <p class="cta"><a rel="prefetch" class=" mdc-typography--button" href="tutorial">Learn Svelte</a></p>
        </div>
    </Blurb>
    
    <div class="examples">
        <Example class="example mdc-elevation--z2" id="hello-world">
            <p class="mcd-typography--body1">Svelte components are built on top of HTML. Just add data.</p>
        </Example>
    
        <Example class="example mdc-elevation--z2" id="nested-components">
            <p class="mcd-typography--body1">CSS is component-scoped by default — no more style collisions or specificity wars. Or you can <a href="/blog/svelte-css-in-js">use your favourite CSS-in-JS library</a>.</p>
        </Example>
    
        <Example class="example mdc-elevation--z2" id="reactive-assignments">
            <p class="mcd-typography--body1">Trigger efficient, granular updates by assigning to local variables. The compiler does the rest.</p>
        </Example>
    
        <Example class="example mdc-elevation--z2" id="svg-transitions">
            <p class="mcd-typography--body1">Build beautiful UIs with a powerful, performant transition engine built right into the framework.</p>
        </Example>
    </div>
</Content>