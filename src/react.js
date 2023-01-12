const hooks = [];
let currentComponent = 0;
export class Component {
  constructor(props) {
    this.props = props;
  }
}

const createDOM = (node) => {
  if (typeof node === 'string') {
    return document.createTextNode(node);
  }
  const element = document.createElement(node.tag);

  node.props && Object.entries(node.props).forEach(([name, value]) =>
    element.setAttribute(name, value)
  );

  node.children && node.children.map(createDOM).forEach((item) => element.appendChild(item));
  return element;
};

const makeProps = (props, children) => {
  return {
    ...props,
    children: children.length === 1 ? children[0] : children
  }
}

const useState = (initalValue) => {
  let position = currentComponent - 1;
  if (!hooks[position]) {
    hooks[position] = initalValue;
  }
  const modifier = nextValue => {
    hooks[position] = nextValue;
  }
  return [hooks[position], modifier]
}

const createElement = (tag, props, ...children) => {
  props = props || {};
  if (typeof tag === 'function') {
    if (tag.prototype instanceof Component) {
      const instance = new tag(makeProps(props, children))
      return instance.render();
    }

    hooks[currentComponent] = null;
    currentComponent++;

    if (children.length > 0) {
      return tag(makeProps(props, children))
    } else {
      return tag(props)
    }
  }
  return {
    tag,
    props,
    children,
  };
}

const render = (vdom, container) => {
  container.appendChild(createDOM(vdom));
};

export { createElement, createDOM, render };

