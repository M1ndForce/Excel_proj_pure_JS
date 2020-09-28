import {ExcelComponent} from '@core/ExcelComponent'
import {createTable} from '@/components/table/table.template'
import {$} from '@core/dom'


export class Table extends ExcelComponent {
    static className = 'excel__table'

    constructor($root) {
        super($root, {
            listeners: ['mousedown']
        });
    }

    toHTML() {
        return createTable()
    }
    onMousedown(event) {
        if (event.target.dataset.resize) {
            console.log('start resizing', event.target.dataset.resize)
            const $resizer = $(event.target)
            // const $parent = $resizer.$el.parentNode // bad
            // const $parent = $resizer.$el.closest('column')//better
            const $parent = $resizer.closest('[data-type="resizable"]')
            const coords = $parent.getCoords()
            console.log($parent.data.col)

            document.onmousemove = e => {
                const delta = Math.floor(e.pageX - coords.right)
                const value = coords.width + delta
                $parent.$el.style.width = value + 'px'
                document.querySelectorAll(`[data-col="${$parent.data.col}"]`)
                    .forEach(el => el.style.width = value + 'px')
            }

            document.onmouseup = () => {
                document.onmousemove = null // m>
            }
        }
    }
}

