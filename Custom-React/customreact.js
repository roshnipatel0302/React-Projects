function customRender(reactElement, mainContainer) {
    // Create the element dynamically
    const domElement = document.createElement(reactElement.type);

    // Set the inner content
    domElement.innerHTML = reactElement.children;

    // Set attributes safely
    if (reactElement.props) {
        if (reactElement.props.href) {
            domElement.setAttribute('href', reactElement.props.href);
        }
        if (reactElement.props.target) {
            domElement.setAttribute('target', reactElement.props.target);
        }
    }

    // Append the element to the container
    mainContainer.appendChild(domElement);
}

// React-like element object
const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",  // Fixed the URL
        target: "_blank"
    },
    children: "Click Me to Visit Google"
};

// Correcting the element selection
const mainContainer = document.getElementById("root"); // Removed '#'

customRender(reactElement, mainContainer);
