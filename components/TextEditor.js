class TextEditor extends HTMLElement {
    constructor() {
        super()

        this.title = this.getAttribute('title')

        this.innerHTML = `
        <div>
            <h3 class="title">${this.title}</h3>
            <div class="mt-4 mb-2">
                <button class="btn btn-light edit-btn" data-variant="bold"><i class="fas fa-bold"></i></i></button>
                <button class="btn btn-light edit-btn" data-variant="italic"><i class="fas fa-italic"></i></i></button>
                <button class="btn btn-light edit-btn" data-variant="underline"><i class="fas fa-underline"></i></button>
            </div>                    

            <div contenteditable="true" class="editor shadow-sm p-3 mb-3">
                There are many variations of passages of Lorem Ipsum available, but the
                majority have suffered alteration in some form, by injected humour, or
                randomised words which don't look even slightly believable.
            </div>
        </div>
        `
    }

    connectedCallback() {
        // Add click event to buttons
        document.querySelectorAll('.edit-btn').forEach(btn => {
            btn.addEventListener('click', e => {
                document.execCommand(e.target.dataset.variant)
            })
        })
    }

    static get observedAttributes() {
        return ['title',]
    }

    attributeChangedCallback(title, oldValue, newValue) {
        document.querySelector('.title').textContent = newValue
    }

}

window.customElements.define('text-editor', TextEditor)