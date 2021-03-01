import {form} from './utils'
import {Title,Text,Columns,Image} from './blocks'

export class Panel{
    constructor(selector,callback){
        this.$el = document.querySelector(selector)
        this.update = callback
        this.init()
    }
    get template(){
        return [form('title'),form('text')].join('')
    }
    init(){
        this.$el.insertAdjacentHTML('beforeend',this.template)
        this.$el.addEventListener('submit',this.add.bind(this))
    }
    add(event){
        event.preventDefault()
        const type = event.target.name
        const value = event.target.value.value

        let newBlock = type==='text' ? new Text(value) : new Title(value)

        this.update(newBlock)

        event.target.value.value = ''
    }
}