const CODES = {
    A: 65,
    Z: 90
}


function createCol() {
    return `
    <div class='column'>
    A
    </div>
    `
}

function createRow() {
    return `
    <div class='row'>
    <div class="row-info"></div>
    <div class="row-data"></div>
    </div>
    `
}

export function createTable(rowsCount = 15) {
    const colsCount = CODES.Z - CODES.A

    return '<h1>TABLE</h1>'
}