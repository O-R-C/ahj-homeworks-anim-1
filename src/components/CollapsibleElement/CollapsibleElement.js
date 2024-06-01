import CollapsibleElement_UI from './CollapsibleElement_UI'

export default class CollapsibleElement {
  #ui

  constructor(element) {
    this.#ui = new CollapsibleElement_UI(element)

    this.#init()
  }

  #init() {
    this.#addListeners()
  }

  #addListeners() {
    this.#ui.btnCollapse.addEventListener('click', this.#handleClickCollapse)
  }

  #handleClickCollapse = () => {
    this.#ui.toggleCollapsed()
  }
}
