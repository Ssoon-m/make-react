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

const createElement = (tag, props, ...children) => {
  props = props || {};
  if (typeof tag === 'function') {
    if (children.length > 0) {
      return tag({
        ...props,
        children: children.length === 1 ? children[0] : children
      })
    }
  } else {
  } return {
    tag,
    props,
    children,
  };

}

const render = (vdom, container) => {
  container.appendChild(createDOM(vdom));
};

export { createElement, createDOM, render };

