import BaseUI from '@/js/Classes/BaseUI'
import getElement from '@/js/getElement'
import { faker } from '@faker-js/faker'

import styles from './CollapsibleElement.module.css'

/**
 * Class representing a collapsible element UI.
 * @extends BaseUI
 */
export default class CollapsibleElement_UI extends BaseUI {
  /**
   * Creates the application element.
   * @return {HTMLElement} The created app element.
   */
  createApp() {
    const app = getElement({
      tag: 'div',
      classes: styles['collapsible-element'],
    })

    this.btnCollapse = getElement({
      tag: 'button',
      classes: styles['btn-collapse'],
      textContent: 'Collapse',
    })

    this.contentWrapper = getElement({
      tag: 'div',
      classes: styles['content-wrapper'],
    })

    const inner = getElement({
      tag: 'div',
      classes: styles['content-inner'],
    })

    const content = getElement({
      tag: 'div',
      classes: styles['content'],
      textContent: faker.lorem.paragraph(5),
    })

    inner.append(content)
    this.contentWrapper.append(inner)
    app.append(this.btnCollapse, this.contentWrapper)

    return app
  }

  /**
   * Toggles the collapsed state of the content wrapper.
   */
  toggleCollapsed() {
    this.contentWrapper.classList.toggle(styles['active'])
  }
}
