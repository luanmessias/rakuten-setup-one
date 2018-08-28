const changeForm = () => {
    event.preventDefault()

    let antForm = 'first'
    let nextForm = 'first'
    let formElement = document.querySelector('.wrapper--main')
    let currentForm = formElement.classList[2]


    switch (currentForm) {

        case "first": {
            antForm = 'first'
            nextForm = 'register'
            break
        }
        case "register": {
            antForm = 'first'
            nextForm = 'layout'
            break
        }
        case "layout": {
            antForm = 'register'
            nextForm = 'domain'
            break
        }
        case "bank": {
            antForm = 'layout'
            nextForm = 'payment'
            break
        }
        case "payment": {
            antForm = 'bank'
            nextForm = 'first'
            break
        }
        
    }

    formElement.classList.add(nextForm)
    formElement.classList.remove(currentForm)

    let progressLine = document.querySelector(`.progress__line--${nextForm}`)
    let progressItem = document.querySelector(`.progress__item--${nextForm}`)

    if (nextForm != 'register' && nextForm != 'first') {
        progressLine.classList.add('active')
        progressItem.classList.add('active')
    }




}


class Modal {
    constructor(overlay) {
        this.overlay = overlay
        const closeButton = overlay.querySelector('.button-close')
        closeButton.addEventListener('click', this.close.bind(this))
        overlay.addEventListener('click', e => {
            if (e.srcElement.id === this.overlay.id) {
                this.close()
            }
        })
    }
    open() {
        this.overlay.classList.remove('is-hidden')
    }

    close() {
        this.overlay.classList.add('is-hidden')
    }
}
const modal = new Modal(document.querySelector('.modal-overlay'))
window.openModal = modal.open.bind(modal)
//window.openModal()


const checkFields = () => {
    event.preventDefault()
    let fields = document.querySelectorAll('.register > form input')
    let emptyFields = []
    for (var index = 0; index < fields.length; index++) {
        
    }
}