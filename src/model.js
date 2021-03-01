import {Title,Text,Columns,Image} from './blocks'
import img from './assets/ort.jpg'

// temp for text content
const tempText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi temporibus libero consectetur inventore? Nihil praesentium culpa officiis suscipit esse voluptates vel earum hic maiores atque tenetur quod, fugit facilis porro.'

// model - data
export const model = [
    new Title('Hello ORT from JS!!!!'),
    new Text(tempText),
    new Columns([tempText, tempText, tempText, tempText]), 
    new Image(img)
]