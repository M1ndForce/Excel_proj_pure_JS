export class Excel {
    constructor(selector, options) {
        this.$el = document.querySelector(selector)
        this.components = options.components || []
    }

    getRoot() {
        const $root = document.createElement('div')
        $root.classList.add('excel')

        this.components.forEach(Component => {
            const $el = document.createElement('div')
            $el.classList.add(Component.className)
            const component = new Component($el)
            $el.innerHTML = component.toHTML()
            $root.append($el)
        })
        return $root
    }

    render() {
        console.log(this.$el)
        // // afterbegin, afterend, beforeend, beforebegin
        // // this.$el.insertAdjacentHTML('afterbegin', '<h1>Test</h1>')
        // const  node = document.createElement('h1')
        // node.textContent = 'TEST'
        this.$el.append(this.getRoot())
    }
}