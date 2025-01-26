function changeMode(size, weight, transform, background, color) {
    return function() {
        document.body.style.fontSize = size + 'px'
        document.body.style.fontWeight = weight
        document.body.style.textTransform = transform
        document.body.style.background = background
        document.body.style.color = color
    }
}

function main() {
    const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green')
    const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white')
    const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black')

    const paragraph = document.createElement('p')
    paragraph.textContent = 'Welcome Holberton!'
    document.body.appendChild(paragraph)

    const btn_spooky = document.createElement('button')
    const text_spooky = document.createTextNode('Spooky')
    btn_spooky.appendChild(text_spooky)
    document.body.appendChild(btn_spooky)
    btn_spooky.onclick = () => {spooky()}

    const btn_dark = document.createElement('button')
    const text_dark = document.createTextNode('Dark mode')
    btn_dark.appendChild(text_dark)
    document.body.appendChild(btn_dark)
    btn_dark.onclick = () => {darkMode()}

    const btn_screamMode = document.createElement('button')
    const text_screamMode = document.createTextNode('Scream mode')
    btn_screamMode.appendChild(text_screamMode)
    document.body.appendChild(btn_screamMode)
    btn_screamMode.onclick = () => {screamMode()}
}
main()