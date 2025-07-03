const reactElement = {
    type : 'a',
    props: {
        href : 'https://google.com',
        target: '_blank',
    },
    children : "click this is a google link"
}

const rootElement = document.querySelector('#root')

function rendor(rootElement,reactElement){
const domElement = document.createElement(reactElement.type)
domElement.innerHTML = reactElement.children
 for (let key in reactElement.props) {
        domElement.setAttribute(key, reactElement.props[key]);
}
rootElement.appendChild(domElement)
}

rendor(rootElement,reactElement)

