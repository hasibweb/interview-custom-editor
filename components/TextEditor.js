const template = document.createElement('template')
template.innerHTML = `    
    
    <div>
        <h3 class="title"></h3>
        <div>
            <button class="btn btn-light edit-btn" data-variant="bold">Bold</i></button>
            <button class="btn btn-light edit-btn" data-variant="italic">Italic</i></button>
            <button class="btn btn-light edit-btn" data-variant="underline">Underline</button>
        </div>

        <br>

        <div contenteditable="true" class="editor">
            There are many variations of passages of Lorem Ipsum available, but the
            majority have suffered alteration in some form, by injected humour, or
            randomised words which don't look even slightly believable.
        </div>
    </div>
`

class TextEditor extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(template.content.cloneNode(true))

        // set title
        this.shadowRoot.querySelector('.title').textContent = this.getAttribute('title')

        // Add click event to buttons
        this.shadowRoot.querySelectorAll('.edit-btn').forEach(btn => {
            btn.addEventListener('click', e => {
                document.execCommand(e.target.dataset.variant)
            })
        })

    }
}

window.customElements.define('text-editor', TextEditor)