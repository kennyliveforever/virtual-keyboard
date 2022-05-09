window.onload = function() {
    document.head.insertAdjacentHTML("beforeend", '<link rel="stylesheet" href="style.css">')
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
        rows.setAttribute('id', `${rowID}`)
        rowID++
    }
    let keyCodes = [[192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8],
        [9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221],
        [20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13],
        [16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 16],
        [17, 91, 18, 32, 18, 17]]

    let keyMap0 = new Map ([[192,'`'], [49,'1'], [50,'2'], [51,'3'], [52,'4'], [53,'5'],
                               [54,'6'], [55,'7'], [56,'8'], [57,'9'], [48,'0'], [189,'-'],
                               [187,'='], [8,'Backspace']])
    let keyMap1 = new Map ([[9,'Tab'], [81,'q'], [87,'w'], [69,'e'], [82,'r'], [84,'t'], [89,'y'], [85,'u'], [73,'i'], [79,'o'], [80,'p'], [219,'['], [221,']']])
    let keyMap2 = new Map ([[20,'Caps'], [65,'a'], [83,'s'], [68,'d'], [70,'f'], [71,'g'], [72,'h'], [74,'j'], [75,'k'], [76,'l'], [186,';'], [222,`'`], [13,'Enter']])
    let keyMap3 = new Map ([[16,'Shift'], [90,'z'], [88,'x'], [67,'c'], [86,'v'], [66,'b'], [78,'n'], [77,'m'], [188,','], [190,'.'], [191,'/'], [16,'Shift']])
    let keyMap4 = new Map ([[17,'Ctrl'], [91,'Win'], [18,'Alt'], [32,'Space'], [18,'Alt'], [17,'Ctrl']])

    let keyObj0 = Object.fromEntries(keyMap0)
    let keyObj1 = Object.fromEntries(keyMap1)
    let keyObj2 = Object.fromEntries(keyMap2)
    let keyObj3 = Object.fromEntries(keyMap3)
    let keyObj4 = Object.fromEntries(keyMap4)

    let keys
    let rowSet = document.body.getElementsByClassName('rows')
    for (let row of rowSet) {
        if (row.getAttribute('id') == 0) {
            for (let i = 0; i < keyCodes[0].length; i++) {
                keys = document.createElement('div')
                row.appendChild(keys)
                keys.setAttribute('class', 'keys')
                keys.setAttribute('id', `${keyCodes[0][i]}`)
                keys.innerHTML = keyObj0[keys.getAttribute('id')]
            }
        }
    }

    for (let row of rowSet) {
        if (row.getAttribute('id') == 1) {
            for (let i = 0; i < keyCodes[1].length; i++) {
                keys = document.createElement('div')
                row.appendChild(keys)
                keys.setAttribute('class', 'keys')
                keys.setAttribute('id', `${keyCodes[1][i]}`)
                keys.innerHTML = keyObj1[keys.getAttribute('id')]
            }
        }
    }

    for (let row of rowSet) {
        if (row.getAttribute('id') == 2) {
            for (let i = 0; i < keyCodes[2].length; i++) {
                keys = document.createElement('div')
                row.appendChild(keys)
                keys.setAttribute('class', 'keys')
                keys.setAttribute('id', `${keyCodes[2][i]}`)
                keys.innerHTML = keyObj2[keys.getAttribute('id')]
            }
        }
    }

    for (let row of rowSet) {
        if (row.getAttribute('id') == 3) {
            for (let i = 0; i < keyCodes[3].length; i++) {
                keys = document.createElement('div')
                row.appendChild(keys)
                keys.setAttribute('class', 'keys')
                keys.setAttribute('id', `${keyCodes[3][i]}`)
                keys.innerHTML = keyObj3[keys.getAttribute('id')]
            }
        }
    }

    for (let row of rowSet) {
        if (row.getAttribute('id') == 4) {
            for (let i = 0; i < keyCodes[4].length; i++) {
                keys = document.createElement('div')
                row.appendChild(keys)
                keys.setAttribute('class', 'keys')
                keys.setAttribute('id', `${keyCodes[4][i]}`)  // <= шаблонные строки фишка ES6 ;)
                keys.innerHTML = keyObj4[keys.getAttribute('id')]
            }
        }
    }

    let key = document.body.getElementsByClassName('keys')

    for (let i of key) {
        if (i.getAttribute('id') == 8 || i.getAttribute('id') == 9 || i.getAttribute('id') == 16 || i.getAttribute('id') == 17 || i.getAttribute('id') == 18 || i.getAttribute('id') == 91) {
            i.setAttribute('style', 'width: 80px')
        } else if (i.getAttribute('id') == 13) {
            i.setAttribute('style', 'width: 100px')
        } else if (i.getAttribute('id') == 32) {
            i.setAttribute('style', 'width: 350px')
        }
    }

    function type() {
        if (event.target.innerHTML == 'Space') {
            area.value += ' '
        } else if (event.target.innerHTML == 'Tab') {
            area.value += '    '
        } else if (event.target.innerHTML == 'Backspace') {
            area.value = area.value.slice(0, area.value.length-1)
        } else if (event.target.innerHTML == 'Enter') {
            area.value += '\n'
        } else if (event.target.innerHTML.length < 2) {
            area.value += event.target.innerHTML
        }

    }

    function unpressed() {
        event.target.style.background = ''
    }

    let keyEvent = new KeyboardEvent('keydown')
    for (let i of key) {
        i.addEventListener('click', type)
        i.addEventListener('mousedown', () => event.target.style.background = 'green') // <= Стрелочные функции тоже фишка ES6 ;)
        i.addEventListener('mouseup', unpressed)
        i.addEventListener('mouseout', unpressed)
    }

    function keyHandler() {
        if (event.key.length < 2) {
            area.value += event.key
        } else if (event.key == 'Backspace') {
            area.value = area.value.slice(0, area.value.length-1)
        }
        for (let i of key) {
            if (i.getAttribute('id') == event.keyCode) {
                i.style.background = 'green'
            }
        }
    }

    function keyClear() {
        for (let i of key) {
            if (i.style.background == 'green') {
                i.style.background = ''
            }
        }
    }

    document.addEventListener('keydown', keyHandler)
    document.addEventListener('keyup', keyClear)
}