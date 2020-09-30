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

  get cssClassObject() {
    return {
      default: `${this.constructor.customElementNamespace}-tabs`,
      prefix: `${this.constructor.customElementNamespace}-tabs`, // will cause `active` to become `my-card--active`
    };
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
  }

  firstUpdated() {
    this.linkPanels(); // Slot change events should link the panels, but do it again after everything's rendered
  }

  allTabs() {
    return Array.from(this.querySelectorAll(`${this.constructor.customElementNamespace}-tab`));
  }

  reset() {
    const tabs = this.allTabs();
    tabs.forEach(tab => {
      // Iterate over child esds-tab elements and set the selected prop to false
      tab.selected = false; // eslint-disable-line no-param-reassign
    });
  }

  panelForTab(tab) {
    const panelId = tab.getAttribute('aria-controls');
    return this.querySelector(`#${panelId}`);
  }

  getTabById(id) {
    let tab;
    const tabTemplate = this.querySelector(`#${id}`);
    if (tabTemplate !== undefined) {
      tab = tabTemplate.closest('esds-tab');
    }
    return tab;
  }

  selectTab(tabPanelId) {
    const newTab = this.getTabById(tabPanelId);
    if (newTab !== undefined) {
      this.reset();
      newTab.selected = true;
      newTab.focus();
    }
  }

  linkPanels() {
    const tabs = this.allTabs();
    this.linkedTabs = []; // reset the tab data each time a slotchange occurs (to accomodate dynamically added tabs)
    tabs.forEach((tab, index) => {
      const generatedPanelId = `${this.constructor.customElementNamespace}-tab-panel--${index}`;
      const generatedTabId = `${this.constructor.customElementNamespace}-tab--${index}`;
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
    const selectedTab = this.linkedTabs.find(tab => tab.selected) || tabs[0];
    this.selectTab(selectedTab.panelId);
  }

  onLabelClick(event) {
    const tabId = event.currentTarget.getAttribute('aria-controls');
    this.selectTab(tabId);
  }

  render() {
    return html`
      <style>
        ${namespacedStyles(this.constructor.customElementNamespace)}
      </style>
      <div class="${this.getClassName()}">
        <ul role="tablist">
          ${this.linkedTabs.map(t => {
            return html`
              <li role="presentation">
                <a
                  role="tab"
                  href="#${t.panelId}"
                  id="${t.tabId}"
                  aria-selected="${t.selected}"
                  aria-controls="${t.panelId}"
                  @click="${this.onLabelClick}"
                  >${unsafeHTML(t.label)}</a
                >
              </li>
            `;
          })}
        </ul>
        <s-slot @slotchange=${this.linkPanels}></s-slot>
      </div>
    `;
  }
}
