class DomElement {
  constructor(type, attributes, children = []) {
    this.type = type;
    this.attributes = attributes;
    this.children = children;
  }

  draw() {
    const elem = document.createElement(this.type);
    const attributes = this.attributes;

    for (let [key, val] of Object.entries(attributes)) {
      elem.setAttribute(key, val);
    }

    this.children.forEach((child) => {
      let childEl =
        child instanceof DomElement
          ? child.draw()
          : document.createTextNode(child);
      elem.appendChild(childEl);
    });
    return elem;
  }
}

class DivElement extends DomElement {
  constructor(attributes) {
      super(type, attributes, children)
  }

  draw(){
      super.draw();

      for (let [key, val] of Object.entries(attributes)) {
          elem.setAttribute(key, val);
      }
  }
}

class SpanElement extends DomElement {
  constructor(attributes) {
      super(type, attributes, children)
  }

  draw(){
      super.draw();
  }
}


let el = (type, attributes, children) => {
  switch (type){
      case 'div':
          return new DivElement(type, attributes, children);
      break;
      case 'span':
          return new SpanElement(type, attributes, children);
      break;
      default:
          return new DomElement(type, attributes, children);
  }
}