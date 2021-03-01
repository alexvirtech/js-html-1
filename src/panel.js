import {form} from './utils'

export class Panel{
    constructor(selector){
        this.$el = document.querySelector(selector)
        this.init()
    }
    get template(){
        return [form('title'),form('text')].join('')
    }
    init(){
        this.$el.insertAdjacentHTML('beforeend',this.template)
    }
}