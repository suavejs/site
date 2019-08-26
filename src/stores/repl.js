import {writable} from 'svelte/store';

const defaultRepl = ({
  components: [
    {
      name: 'App.svelte', 
      type: 'handlebars', 
      source: '<h1>Hello, Svelte!</h1>'
    }
  ],
  selected: {
    name: 'App.svelte', 
    type: 'handlebars', 
    source: '<h1>Hello, Svelte!</h1>'
  },
  bundle: {}
})

function bundle(components){
  console.log(components);
  return components;
}

function createRepl() {
  const { subscribe, set, update } = writable(defaultRepl);

	return {
    subscribe,
    selectComponent: () => (component) => update(r => r.selected = component),
    bundle: () => update(r => r.bundle = bundle(r.components)),
		reset: () => set(defaultRepl)
	};
}

export const repl = createRepl();