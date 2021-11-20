const template = document.createElement('template')
template.innerHTML = `
<div>
    <h3 class="title"></h3>
    <div class="mt-4 mb-2">
        <button class="btn btn-light edit-btn" data-variant="bold">Bold</button>
        <button class="btn btn-light edit-btn" data-variant="italic">Italic</button>
        <button class="btn btn-light edit-btn" data-variant="underline">Underline</button>
    </div>                    

    <div contenteditable="true" class="editor shadow-sm p-3 mb-3">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which don't look even slightly believable.
    </div>
</div>
`

class TextEditor extends HTMLElement {
    constructor() {
        super()
        // this.title = this.getAttribute('title')
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(template.content.cloneNode(true))
        this.shadowRoot.querySelector('.title').textContent = this.title
    }
    static get observedAttributes() {
        return ['title',]
    }

    get title() {
        return this.getAttribute('title')
    }

    set title(newValue) {
        this.setAttribute('title', newValue)
    }

    connectedCallback() {
        // Add click event to buttons
        document.querySelectorAll('.edit-btn').forEach(btn => {
            btn.addEventListener('click', e => {
                document.execCommand(e.target.dataset.variant)
            })
        })
    }



    attributeChangedCallback(title, oldValue, newValue) {
        console.log(`${title}'s value has been changed from ${oldValue} to ${newValue}`)
        this.shadowRoot.querySelector('.title').textContent = newValue
    }

}

window.customElements.define('text-editor', TextEditor)