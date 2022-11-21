const createDOM = (node) => {
  if (typeof node === 'string') {
    return document.createTextNode(node);
  }
  const element = document.createElement(node.tag);

  node.children.map(createDOM).forEach((item) => element.appendChild(item));
  return element;
};

export { createDOM };
