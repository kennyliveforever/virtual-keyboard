window.onload = function() {
    let area = document.createElement('textarea')
    let wrap = document.createElement('div')
    let board = document.createElement('div')
    board.setAttribute('class', 'boardBlock')
    area.setAttribute('class', 'field')
    wrap.setAttribute('class', 'wrapper')
    document.body.append(wrap)
    wrap.appendChild(area)
    wrap.appendChild(board)
    let keyId = 0
    let rowID = 0
    let rows
    for (let i = 0; i<5; i++) {
        rows = document.createElement('div')
        board.appendChild(rows)
        rows.setAttribute('class', 'rows')
        // rows.setAttribute('id', `${rowID}`)
        // rowID++
    }
    let keys
    let rowSet = document.body.getElementsByClassName('rows')
    for (let row of rowSet) {
        for (let i = 0; i<=14; i++) {
            keys = document.createElement('div')
            row.appendChild(keys)
            keys.setAttribute('class', 'keys')
            keys.setAttribute('id', `${keyId}`)
            keyId++
        }
    }
    // let key = document.body.getElementsByClassName('keys')
    let key = document.body.getElementsByClassName('keys')
    for (let i of key) {
        if (i.getAttribute('id') > 0 && i.getAttribute('id') < 10) {
            i.innerHTML = i.getAttribute('id')
        } else if (i.getAttribute('id') == 10) {
            i.innerHTML = 0
        }
    }

    function type() {
        area.value += event.target.innerHTML
    }

    let keyEvent = new KeyboardEvent('keydown')
    for (let i of key) {
        i.addEventListener('click', type)
    }
    function keyHandler() {
        if (event.key.length < 2) {
            area.value += event.key
        } else if (event.key == 'Backspace') {
            area.value = area.value.slice(0, area.value.length-1)
        }
    }
    document.addEventListener('keydown', keyHandler)
    let charSet = [
        {
            index: 17,
            eng: 'q',
            rus: 'й'
        },
        {
            index: 18,
            eng: 'w',
            rus: 'ц'
        },
        {
            index: 19,
            eng: 'e',
            rus: 'у'
        },
        ]
    for (let i of key) {
        if (i.getAttribute('id') ) {
        }
    }
}



