export const row = (content) => {
    return `<div class="row">${content}</div>`
}

export const col = (content) => {
    return `<div class="col-sm">${content}</div>`
}

export const form = (type) => {
    return `
        <form name="${type}">
            <h5>${type}</h5>
            <div class="form-group">
                <input class="form-control form-control-sm" name="value" placeholder="value"/>
            </div>
            <div class="form-group">
                <input class="form-control form-control-sm" name="styles" placeholder="styles"/>
            </div>
            <button type="submit" class="btn btn-primary btn-sm">Add</button>
        </form>
        <hr/>
    `
}