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
            overflow: hidden;
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
        title="Suave"
        tagline="Suave tools for Svelte devs"
        outline="svelte-logo-outline.svg"
        logotype="svelte-logotype.svg"
    />
    
    <Blurb>
        <a class="feature" href="blog/write-less-code" slot="one">
            <h2>Write less code</h2>
            <p>Build boilerplate-free components using languages you already know — HTML, CSS and JavaScript</p>
    
            <span class="learn-more">learn more</span>
        </a>
    
        <a class="feature" href="blog/virtual-dom-is-pure-overhead" slot="two">
            <h2>No virtual DOM</h2>
            <p>Svelte compiles your code to tiny, framework-less vanilla JS — your app starts fast and stays fast</p>
    
            <span class="learn-more">learn more</span>
        </a>
    
        <a class="feature" href="blog/svelte-3-rethinking-reactivity" slot="three">
            <h2>Truly reactive</h2>
            <p>No more complex state management libraries — Svelte brings reactivity to JavaScript itself</p>
    
            <span class="learn-more">learn more</span>
        </a>
    
        <div class="description" slot="what">
            <p>Svelte is a radical new approach to building user interfaces. Whereas traditional frameworks like React and Vue do the bulk of their work in the <em>browser</em>, Svelte shifts that work into a <em>compile step</em> that happens when you build your app.</p>
    
            <p>Instead of using techniques like virtual DOM diffing, Svelte writes code that surgically updates the DOM when the state of your app changes.</p>
    
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