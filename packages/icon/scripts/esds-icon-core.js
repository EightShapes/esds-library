import { EsdsBaseWc, html, directive, ifDefined, unsafeHTML } from 'esds-base-wc/dist/esds-base-wc.js';

class EsdsIcon extends EsdsBaseWc {
  static get properties() {
    return {
      externalSpritePath: {type: String},
      injectSvg: {type: Boolean},
      name: {type: String},
      size: {type: String},
      spriteReferencePath: {type: String},
      title: {type: String}
    }
  }

  getStylesheet() {
    const stylesPath = window.stylesPath || '/styles';
    return `${stylesPath}/${this.stylesheet}`;
  }

  constructor() {
    super();
    // Property defaults
    this.externalSpritePath = '/icons/esds-icons.svg';
    this.injectSvg = true;
    this.name = 'stopwatch';
    this.spriteReferencePath = '';

    // Instance Values
    this.baseModifierClass = 'esds-icon--';
    this.defaultClass = 'esds-icon-v1';
    this.stylesheet = 'esds-icon.css';
  }

  firstUpdated() {
    // Hacky, but set a global window variable when the first icon Sprite is injected so subsequent icons don't try to inject the sprite
    if (!window.esdsIconSpriteInjected && this.injectSvg) {
      window.esdsIconSpriteInjected = true;
      const injected = document.getElementById(this.injectedSvgId);
      if (injected === null) {
        fetch(this.externalSpritePath).then(function(response){
          return response.text();
        })
        .then((rawSvg) => {
          const hiddenDiv = document.createElement('div');
          hiddenDiv.style.cssText = 'display: none;';
          hiddenDiv.innerHTML = rawSvg;
          document.body.appendChild(hiddenDiv);
        });
      }
    }
  }

  // createRenderRoot() {
  //   return this;
  // }

  render(){
   let blockLevelClass = this.defaultClass;
   if (this.size) {
     blockLevelClass += ` ${this.baseModifierClass}${this.size}`;
   }

   let titleId = undefined;
   let title = undefined;

   if (this.title) {
     const randomNumber = Math.floor(Math.random() * Math.floor(100000000));
      titleId = `esds-icon-title--${randomNumber}`;
      title = html`<title id="${titleId}">${this.title}</title>`
   }

   const iconRef = `${this.spriteReferencePath}#${this.name}`;

   // Needed to support Safari's use of xlink:href on the <use> attribute, see: https://github.com/Polymer/lit-html/issues/423
   const namespaced = directive((namespace, value) => (part) => {
     part.committer.element.setAttributeNS(namespace, part.committer.name, value);
   });
   const xlinkNamespace = 'http://www.w3.org/1999/xlink';

    return html`
      <link rel="stylesheet" href="${this.getStylesheet()}"/>
      <svg class="${blockLevelClass}" aria-labelledby="${ifDefined(titleId)}">
        ${title}
        <use href="${iconRef}" xlink:href="${namespaced(xlinkNamespace, iconRef)}" />
      </svg>
    `;
  }
}

export default EsdsIcon;
