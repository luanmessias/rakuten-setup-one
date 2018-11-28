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
        const closeButton = document.querySelector('.modal__close')
        closeButton.addEventListener('click', this.close.bind(this))
        overlay.addEventListener('click', e => {
            if (e.srcElement.id === this.overlay.id) {
                this.close()
            }
        })
    }
    open() {
        this.overlay.classList.add('modalover--show');
        this.overlay.classList.remove('modalover--hidden');
    }

    close() {
        this.overlay.classList.add('modalover--hidden');
        this.overlay.classList.remove('modalover--show');
    }
}
const modal = new Modal(document.querySelector('.modalover'))
window.openModal = modal.open.bind(modal)

const activeModal = (container) => {
    let closeModal = document.querySelectorAll('.modal');
    let openModal = document.querySelector(`.modal--${container}`); 

    for (var i = 0; i < closeModal.length; i++) {
        closeModal[i].classList.remove('active');
    }

    openModal.classList.add('active');
    window.openModal();
}

const checkFields = () => {
    event.preventDefault()
    let fields = document.querySelectorAll('.register > form input')
    let emptyFields = []
    console.log(fields);
    for (var index = 0; index < fields.length; index++) {
        
    }
}