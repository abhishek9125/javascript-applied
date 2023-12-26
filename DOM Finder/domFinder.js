// Print the Div with Value Node B given both the roots are symmetrical

const getPathToParent = (parent, child) => {
    let currentNode = child;
    const pathArray = [];
    while(currentNode !== parent) {
        const parentElement = currentNode.parentElement;
        const childArray = Array.from(parentElement.children);
        pathArray.push(childArray.indexOf(currentNode))
        currentNode = parentElement;
    }

    return pathArray;
}

const pathToChild = (parent, path) => {
    let currentNode = parent;

    while(path.length) {
        currentNode = parent.children[path.pop()];
    }

    return currentNode.innerText;
}

const findNodeValue = () => {
    const rootA = document.getElementById('rootA');
    const rootB = document.getElementById('rootB');
    const nodeA = document.getElementById('nodeA');

    const pathToParent = getPathToParent(rootA, nodeA);
    return pathToChild(rootB, pathToParent);
}

console.log(findNodeValue());