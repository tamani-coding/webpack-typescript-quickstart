class Helper {

    public component () : HTMLDivElement {
        const element = document.createElement('div')
        element.innerHTML = 'Hello, how are you? I am written in typescript.'
        return element
    }
}

document.body.appendChild(new Helper().component())