import { writable } from 'svelte/store';
export const BASE_URL = 'https://us-central1-svelte-playground.cloudfunctions.net/api/';

export const bundles = `${ BASE_URL }/bundle`;

export const components = async () => await fetch(`${ BASE_URL }/component`).then(data => data.json())

const baseLayout = ({
  header: 0,
  top: 48,
  right: 0,
  bottom: 32,
  left: 60,
  mini: true,
  drawer: true
});

function createLayout() {
  const { subscribe, set, update } = writable(baseLayout);

	return {
    subscribe,
    hideTop: () => update(l => l.top = 0),
    showTop: () => update(l => l.top = 48),
		toggleMini: () => update(l => l.mini = !l.mini),
    toggleDrawer: () => update(l => l.drawer = !l.drawer),
    showRight: () => update(l => l.right = 60),
    hideRight: () => update(l => l.right = 0),
		reset: () => set(baseLayout)
	};
}

export const layout = createLayout();