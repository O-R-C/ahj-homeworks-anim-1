import BaseUI from '@/js/Classes/BaseUI'
import getElement from '@/js/getElement'
import { faker } from '@faker-js/faker'

import styles from './CollapsibleElement.module.css'

export default class CollapsibleElement_UI extends BaseUI {
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

  toggleCollapsed() {
    this.contentWrapper.classList.toggle(styles['active'])
  }
}
