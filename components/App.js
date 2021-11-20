class App extends HTMLElement {
    constructor() {
        super()

        this.title = 'Custom Editor'

        this.innerHTML = `
        <div class="container mt-4">
            <text-editor title="${this.title}"></text-editor>

            <button class="btn btn-info mt-3">Change Title</button>
        </div>
        `
    }

    connectedCallback() {
        document.querySelector('.btn-info').addEventListener('click', e => {
            // this.title = 'Title Changed'
            document.querySelector('text-editor').setAttribute('title', 'Title Changed')
        })
    }
}

window.customElements.define('my-app', App)