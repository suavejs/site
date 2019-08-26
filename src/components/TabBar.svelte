<div class="mdc-tab-bar mdc-elevation--z2" role="tablist">
    <div class="mdc-tab-scroller">
      <div class="mdc-tab-scroller__scroll-area">
        <div class="mdc-tab-scroller__scroll-content">
          {#each tabs as tab, i}
            <button on:click on:click={() => active = tab} class:active={tab === active} class="mdc-tab" role="tab" aria-selected="true" tabindex={i}>
                <span class="mdc-tab__content">
                  <span class="mdc-tab__icon mdi mdi-{tab.icon}" aria-hidden="true"></span>
                  <span class="mdc-tab__text-label">{tab.label}</span>
                </span>
                <span class="mdc-tab-indicator {active === tab ? `mdc-tab-indicator--active` : ``}">
                  <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                </span>
                <span class="mdc-tab__ripple"></span>
            </button>
          {/each}
        </div>
      </div>
    </div>
  </div>

  <script>
    export let tabs = [
      {label: 'Tab 1', icon: 'home'},
      {label: 'Tab 2', icon: 'favorite'}
    ]
    export let active = tabs[0];
  </script>
  <style>
    mdc-tab{
      font-family: var(--font-mono);
    }
  .active {
    color: var(--mdc-theme-primary);
  }
  .mdc-tab__icon,
  .mdc-tab__text-label{
    color: inherit
  }
  </style>