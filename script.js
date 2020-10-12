const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")

const getStyle = (element, style) => 
    window
        .getComputedStyle(element)
        .getPropertyValue(style)


const initialColors = {
    whiteBg: getStyle(html, "--white-bg"),
    'veryPale-Blue-Top-Bg': getStyle(html, "--very-pale-blue-top-bg"),
    'lightGrayish-Blue-Card-Bg': getStyle(html, "--light-grayish-blue-card-bg"),
    'darkGrayish-Blue-Text': getStyle(html, "--dark-grayish-blue-text"),
    'veryDark-Blue-Text': getStyle(html, "--very-dark-blue-text"),
    'lightToggle': getStyle(html, "--light-toggle"),
    'cardHover-Light': getStyle(html, '--card-hover-light')
}
        
const darkMode = {
    whiteBg: "hsl(230, 17%, 14%)",
    'veryPale-Blue-Top-Bg': "hsl(232, 19%, 15%)",
    'lightGrayish-Blue-Card-Bg': "hsl(228, 28%, 20%)",
    'darkGrayish-Blue-Text': "hsl(228, 34%, 66%)",
    'veryDark-Blue-Text': "hsl(0, 0%, 100%)",
    'lightToggle': getStyle(html, "--dark-toggle"),
    'cardHover-Light': getStyle(html, '--card-hover-dark')
}

const transformKey = key => 
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()


const changeColors = (colors) => {
    Object.keys(colors).map(key => 
        html.style.setProperty(transformKey(key), colors[key]) 
    )
}


checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors)
})