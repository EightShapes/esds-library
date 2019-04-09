import { EsdsBaseWc, html, ifDefined } from 'esds-base-wc/dist/esds-base-wc.js';

class EsdsTabs extends EsdsBaseWc {
  static get properties() {
    return {
      size: {type: String}
    }
  }

  constructor() {
    super();
    this.defaultClass = 'esds-tabs-v1';
    this.baseModifierClass = 'esds-tabs--';
    this.stylesheet = 'esds-tabs.css';

    // State Management & Initial State
    this.activePanelId;
    this.panelLabels = [];
    this.panelIdMap = {};
    this.panels = [];
    this.initializePanels();
  }

  initializePanels() {
    this.panels = this.querySelectorAll('esds-tab-panel') || [];
    console.log(`PANELS FOUND: ${this.panels.length}`);
    this.panels.forEach((p) => {
      let panelId = p.getAttribute('panel-id');
      const panelActive = p.hasAttribute('active');
      const panelLabel = p.getAttribute('label');

      if (!panelId) {
        panelId = `esds-tab-panel--${EsdsBaseWc.generateRandomNumber()}`;
        p.setAttribute('panel-id', panelId);
      }

      if (panelActive) {
        this.activePanelId = panelId;
      }

      const panelLabelData = {
        id: panelId,
        label: panelLabel
      };

      this.panelIdMap[panelId] = p;
      this.panelLabels.push(panelLabelData);
    });

    // If none of the panels were expressly set as the default, make the first panel the default
    if (!this.activePanelId && this.panelLabels.length > 0) {
      const firstPanelId = this.panelLabels[0].id;
      const firstPanel = this.panelIdMap[firstPanelId];
      // Set the first panel to be active
      firstPanel.setAttribute('active', true);
      this.activePanelId = firstPanelId;
    }
  }

  deactivateAllPanels() {
    for (var id in this.panelIdMap) {
      const panel = this.panelIdMap[id];
      panel.removeAttribute('active');
    }
  }

  tabLabelClickHandler(e) {
    e.preventDefault();
    const panelId = e.target.getAttribute('href').replace('#', '');
    this.activePanelId = panelId;
    const activatedPanel = this.panelIdMap[panelId];

    this.deactivateAllPanels();
    activatedPanel.setAttribute('active', true);
    this.requestUpdate();
  }

  renderTabLabels() {
    const labels = [];
    this.panelLabels.forEach((pl) => {
      let labelClass = 'esds-tabs__label';
      if (this.activePanelId === pl.id) {
        labelClass += ' esds-tabs__label--active';
      }

      labels.push(html`
        <li class="${labelClass}">
          <a class="esds-tabs__label-link" href="#${pl.id}" @click=${this.tabLabelClickHandler}>${pl.label}</a>
        </li>
      `);
    });

    return labels;
  }

  render(){
    console.log("RENDER TABS");
    let blockLevelClass = this.defaultClass;
    if (this.size) {
     blockLevelClass += ` ${this.baseModifierClass}${this.size}`;
    }

    return html`
      <div class="${blockLevelClass}">
        <ul class="esds-tabs__labels">
          ${this.renderTabLabels()}
        </ul>
        <div class="esds-tabs__panels">
          ${this.panels}
        </div>
      </div>
    `;
  }
}// end of EsdsTabs class

export default EsdsTabs;

// EsdsTabPanel is used as a child element of EsdsTabs
class EsdsTabPanel extends EsdsBaseWc {
  static get properties() {
    return {
      active: {type: Boolean},
      panelId: {type: String, attribute: "panel-id"},
      label: {type: String}
    }
  }

  constructor() {
    super("TAB PANEL");
    this.defaultClass = 'esds-tab-panel-v1';
    this.baseModifierClass = 'esds-tab-panel--';
    this.stylesheet = 'esds-tabs.css'; // Styles are in the same file as tabs styles

    // Property defaults
    this.active = false;
  }

  render(){
    let blockLevelClass = this.defaultClass;

    if (this.active) {
     blockLevelClass += ` ${this.baseModifierClass}active`;
    }

    return html`
      <div id="${this.panelId}" class="${blockLevelClass}">
        <slot></slot>
      </div>
    `;
  }
}

export { EsdsTabPanel };
