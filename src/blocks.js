import {col,row} from './utils'

// create blocks
class Block {
    constructor(value) {
        this.value = value
    }
    toHTML() {
        throw new Error('toHTML method must be implemented!')
    }
}

export class Title extends Block {
    constructor(value) {
        super(value)
    }
    toHTML() {
        return row(col(`<h1>${this.value}</h1>`))
    }
}

export class Text extends Block {
    constructor(value) {
        super(value)
    }
    toHTML() {
        return row(col(`<p>${this.value}</p>`))
    }
}

export class Columns extends Block {
    constructor(value) {
        super(value)
    }
    toHTML() {
        const cols = this.value.map(v => col(v)).join('')
        return row(cols)
    }
}

export class Image extends Block {
    constructor(value) {
        super(value)
    }
    toHTML() {
        return row(col(`<img class="img-responsive" src="${this.value}"/>`))     
    }
}
