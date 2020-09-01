import {DomListener} from '@core/DomListener'

export class ExcelComponent extends DomListener {
    constructor($root, options = {}) {
        super($root, options.listeners)
    }
    // повернення шаблону компонента
    toHTML() {
        return ''
    }

    init() {
        this.initDomListeners()
    }
}