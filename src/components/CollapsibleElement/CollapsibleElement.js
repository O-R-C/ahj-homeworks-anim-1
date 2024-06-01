import CollapsibleElement_UI from './CollapsibleElement_UI'

/**
 * Class representing a collapsible element.
 * @class
 */
export default class CollapsibleElement {
  /**
   * UI instance.
   * @type {CollapsibleElement_UI}
   */
  #ui

  /**
   * Creates a new instance of CollapsibleElement.
   * @param {HTMLElement|string} element - The element or selector of the element.
   */
  constructor(element) {
    this.#ui = new CollapsibleElement_UI(element)

    this.#init()
  }

  /**
   * Initializes the instance.
   * @private
   */
  #init() {
    this.#addListeners()
  }

  /**
   * Adds event listeners to the UI.
   * @private
   */
  #addListeners() {
    this.#ui.btnCollapse.addEventListener('click', this.#handleClickCollapse)
  }

  /**
   * Handles the click event for the collapse button.
   * @private
   */
  #handleClickCollapse = () => {
    this.#ui.toggleCollapsed()
  }
}
