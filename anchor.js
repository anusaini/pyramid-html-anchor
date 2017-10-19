class Anchor {
    constructor(href = '#', text = '#') {
        this.href = href
        this.text = text
    }
    toString() {
        return `<a href="${this.href}">${this.text}</a>`
    }
}

module.exports = Anchor
