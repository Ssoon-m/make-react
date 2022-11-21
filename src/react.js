const createDOM = (node) => {
  if (typeof node === 'string') {
    return document.createTextNode(node);
  }
  const element = document.createElement(node.tag);

  Object.entries(node.props).forEach(([name, value]) =>
    element.setAttribute(name, value)
  );

  node.children.map(createDOM).forEach((item) => element.appendChild(item));
  return element;
};

const render = (vdom, container) => {
  container.appendChild(createDOM(vdom));
};

export { createDOM, render };
