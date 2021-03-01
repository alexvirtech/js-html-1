// temp for text content
const tempText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi temporibus libero consectetur inventore? Nihil praesentium culpa officiis suscipit esse voluptates vel earum hic maiores atque tenetur quod, fugit facilis porro.'
// model - data
const model = [
    { type: 'title', value: 'Hello ORT from JS!' },
    { type: 'text', value: tempText },
    { type: 'columns', value: [tempText, tempText, tempText, tempText] },
    { type: 'image', value: './assets/ort.jpg' }
]
// create blocks
const Block = (type,value) => {
    switch (type) {
        case 'title':
            return `
                <div class="row">
                    <div class="col-sm">
                        <h1>${value}</h1>
                    </div>
                </div>
            `
        case 'text':
            return `
                <div class="row">
                    <div class="col-sm">
                        <p>${value}</p>
                    </div>
                </div>
            `
        case 'columns':
            const cols = value.map(v=>`<div class="col-sm">${v}</div>`).join('')
            return `
                <div class="row">${cols}</div>
            `
        case 'image':            
            return `
                <div class="row">
                    <div class="col-sm">
                        <img class="img-responsive" src="${value}"/>
                    </div>
                </div>
            `
    }
}

// generate html
const html = model.map(m=>{
    return Block(m.type,m.value)
})

// insert html in div
document.querySelector('#site').insertAdjacentHTML('beforeEnd',html.join(''))