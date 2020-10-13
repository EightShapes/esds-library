import { html, LitElement } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import { CSSClassify } from '@eightshapes/css-classify';
import { Scopify } from '@eightshapes/scopify';
import { Slotify } from '@eightshapes/slotify';
import { namespacedStyles } from './esds-tabs-styles.js';

/**
 * @element esds-tabs
 *
 * @slot - Default slot, insert <esds-tab> components in the default slot
 *
 */

export class EsdsTabs extends Slotify(Scopify(CSSClassify(LitElement), 'esds')) {
  static get customElementName() {
    return 'tabs';
  }

  static get properties() {
    return {
      /*
       * The visual layout of the tabs
       * @type {'horizontal'|'vertical'}
       */
      layout: { type: String },
    };
  }

  static generateTabIdFromLabel(label) {
    let tabId;
    const calculatedId = label
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

    let tabCounter = 0;
    tabId = calculatedId;
    while (tabCounter < 10 && document.getElementById(tabId) !== null) {
      tabId = `${calculatedId}--${tabCounter}`;
      tabCounter += 1;
    }
    return tabId;
  }

  constructor() {
    super();
    this.tabCounter = 0;
    this.KEYCODES = {
      DOWN: 40,
      LEFT: 37,
      RIGHT: 39,
      UP: 38,
      HOME: 36,
      END: 35,
    };
    this.linkedTabs = [];
    this.currentTabId = undefined;
    this.layout = 'horizontal';
  }

  firstUpdated() {
    this.linkPanels(); // Slot change events should link the panels, but do it again after everything's rendered
  }

  get cssClassObject() {
    return {
      default: `${this.constructor.customElementNamespace}-tabs`,
      prefix: `${this.constructor.customElementNamespace}-tabs`, // will cause `active` to become `my-card--active`
      layout: {
        class: this.layout,
      },
    };
  }

  allTabs() {
    // Not ideal, lots of logic around slot wrappers here
    const defaultSlot = this.querySelector('s-root s-assigned-wrapper');
    const allTabs = Array.from(defaultSlot.childNodes).filter(
      n => n.tagName === `${this.constructor.customElementNamespace}-tab`.toUpperCase(),
    );
    return allTabs;
  }

  reset() {
    const tabs = this.allTabs();
    tabs.forEach(tab => {
      // Iterate over child esds-tab elements and set the selected prop to false
      tab.selected = false; // eslint-disable-line no-param-reassign
    });

    // Iterate over the linkedTabs array and set the selected prop to false
    this.linkedTabs.forEach(lt => {
      lt.selected = false; // eslint-disable-line no-param-reassign
    });
    this.requestUpdate();
  }

  getTabById(id) {
    const tab = this.querySelector(`esds-tab[panel-id="${id}"]`);
    if (tab === null) {
      console.warn(`No Tab found for selector: esds-tab[panel-id="${id}"]`);
    }
    return tab;
  }

  selectTab(tabPanelId) {
    const newTab = this.getTabById(tabPanelId);
    if (newTab !== null) {
      this.reset();
      newTab.selected = true;
      newTab.focus();
      const linkedTabData = this.linkedTabs.find(lt => lt.panelId === tabPanelId);
      linkedTabData.selected = true;
      this.currentTabId = tabPanelId;
      this.requestUpdate().then(() => {
        const event = new CustomEvent('esds-tabs-tab-changed', {});
        this.dispatchEvent(event);
      });
    } else {
      // If the tab id hasn't been set yet, keep trying to select the tab
      setTimeout(() => this.selectTab(tabPanelId), 50);
    }
  }

  linkPanels() {
    const tabs = this.allTabs();

    // Ensure all tabs have hydrated before attempting to link them
    const tabLoadedPromises = tabs.map(t => t.updateComplete);

    Promise.all(tabLoadedPromises).then(() => {
      this.linkedTabs = []; // reset the tab data each time a slotchange occurs (to accomodate dynamically added tabs)
      tabs.forEach(tab => {
        const tabId = this.constructor.generateTabIdFromLabel(tab.label);
        const generatedPanelId = `${this.constructor.customElementNamespace}-${tabId}--panel`;
        const generatedTabId = `${this.constructor.customElementNamespace}-${tabId}--tab`;

        this.linkedTabs.push({
          label: tab.label,
          selected: tab.selected,
          panelId: generatedPanelId,
          tabId: generatedTabId,
        });

        // Set the id of the panel and pass the id of the corresponding tab
        tab.panelId = generatedPanelId; // eslint-disable-line no-param-reassign
        tab.ariaLabelledby = generatedTabId; // eslint-disable-line no-param-reassign
      });
      this.requestUpdate(); // Manually trigger lit-element render since linkedTabs is not a prop, but an internal value
    });

    Promise.all(tabLoadedPromises).then(() => {
      const selectedTab = this.linkedTabs.find(tab => tab.selected) || tabs[0];
      this.selectTab(selectedTab.panelId);
    });
  }

  /**
   * `prevTab()` returns the tab that comes before the currently selected
   * one, wrapping around when reaching the first one.
   */
  prevTab() {
    const tabs = this.allTabs();
    // Use `findIndex()` to find the index of the currently
    // selected element and subtracts one to get the index of the previous
    // element.
    const newIdx = tabs.findIndex(tab => tab.selected) - 1;
    // Add `tabs.length` to make sure the index is a positive number
    // and get the modulus to wrap around if necessary.
    return tabs[(newIdx + tabs.length) % tabs.length];
  }

  /**
   * `firstTab()` returns the first tab.
   */
  firstTab() {
    const tabs = this.allTabs();
    return tabs[0];
  }

  /**
   * `lastTab()` returns the last tab.
   */
  lastTab() {
    const tabs = this.allTabs();
    return tabs[tabs.length - 1];
  }

  /**
   * `nextTab()` gets the tab that comes after the currently selected one,
   * wrapping around when reaching the last tab.
   */
  nextTab() {
    const tabs = this.allTabs();
    const newIdx = tabs.findIndex(tab => tab.selected) + 1;
    return tabs[newIdx % tabs.length];
  }

  onLabelClick(event) {
    event.preventDefault();
    const tabId = event.currentTarget.getAttribute('aria-controls');
    this.selectTab(tabId);
  }

  onLabelKeyDown(event) {
    // Don’t handle modifier shortcuts typically used by assistive technology.
    if (event.altKey) return;

    // The switch-case will determine which tab should be marked as active
    // depending on the key that was pressed.
    let newTab;
    switch (event.keyCode) {
      case this.KEYCODES.LEFT:
      case this.KEYCODES.UP:
        newTab = this.prevTab();
        break;

      case this.KEYCODES.RIGHT:
      case this.KEYCODES.DOWN:
        newTab = this.nextTab();
        break;

      case this.KEYCODES.HOME:
        newTab = this.firstTab();
        break;

      case this.KEYCODES.END:
        newTab = this.lastTab();
        break;
      // Any other key press is ignored and passed back to the browser.
      default:
        return;
    }

    // The browser might have some native functionality bound to the arrow
    // keys, home or end. The element calls `preventDefault()` to prevent the
    // browser from taking any actions.
    event.preventDefault();
    // Select the new tab, that has been determined in the switch-case.
    this.selectTab(newTab.panelId);
  }

  handleSlotChange() {
    this.linkPanels();
  }

  render() {
    return html`
      <style>
        ${namespacedStyles(this.constructor.customElementNamespace)}
      </style>
      <div class="${this.getClassName()}">
        <ul role="tablist" class="esds-tabs__tablist">
          ${this.linkedTabs.map(t => {
            return html`
              <li role="presentation">
                <a
                  class="esds-tabs__tab ${t.selected ? 'esds-tabs__tab--selected' : ''}"
                  role="tab"
                  href="#${t.panelId}"
                  id="${t.tabId}"
                  aria-selected="${t.selected}"
                  aria-controls="${t.panelId}"
                  @click="${this.onLabelClick}"
                  @keydown="${this.onLabelKeyDown}"
                  ><span class="esds-tabs__tab-text">${unsafeHTML(t.label)}</span></a
                >
              </li>
            `;
          })}
        </ul>
        <s-slot @slotchange=${this.handleSlotChange}></s-slot>
      </div>
    `;
  }
}
