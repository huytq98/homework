const $template = document.getElementById('anime-template');

class AnimeContainer extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild($template.content.cloneNode(true));
    }

    //xét những thuộc tính có ảnh hưởng đến nội dung
    static get observedAttributes() {
        return [`photo`, `name`, `category`, `price`, `chapters`];
    }



    //được gọi khi component đc sinh ra
    connectedCallback() {
        console.log("anime đc tạo ");
    }

    //đc gọi khi thuộc tính component được thay đổi
    attributeChangedCallback(attrname, oldValue, newValue) {
        console.log(attrname, newValue);
        if (attrname == 'photo') {
            this.shadowRoot.querySelector('.anime-photo').src = newValue;
        } else if (attrname == 'name') {
            this.shadowRoot.querySelector('.anime-name').innerHTML = newValue;
        } else if (attrname == 'category') {
            this.shadowRoot.querySelector('.anime-category').innerHTML = newValue;
        } else if (attrname == 'price') {
            this.shadowRoot.querySelector('.anime-price').innerHTML = newValue;
        } else if (attrname == 'chapters') {
            this.shadowRoot.querySelector('.anime-chapter').innerHTML = newValue;
        }
    }

    //đc gọi khi component mất đi
    disconnectedCallback() {
        console.log("anime bị xóa vì nhàm");
    }
}








//tạo custom-element

window.customElements.define('anime-container', AnimeContainer);