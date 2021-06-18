class DomElement {
    constructor(options) {
      this.options = options;
    }
  
    draw() {}
  }
  
  class DivElement extends DomElement {
    constructor(type, attributes, children) {
      super();
      this.type = type,
      this.attributes = attributes,
      this.children = children
    }
  
    draw = () => {
      const div = document.createElement(this.type);
  
      for (let key in this.attributes) {
        div.setAttribute(key, this.attributes[key]);
      }
  
      this.child.forEach((children) => {
        if (typeof children === "string") {
          div.appendChild(document.createTextNode(children));
        } else {
          if (children === null) {
            div.appendChild(document.createTextNode(""));
          } else {
            for (let i = 0; i < children.length; i++) {
              div.appendChild(children[i].draw());
            }
  
            if (children.length === undefined) {
              div.appendChild(children.draw());
            }
          }
        }
      });
  
      return div;
    };
  }
  
  const el = (type, attributes, children) => {
    const element = new DivElement(type, attributes, children);
  
    return element;
  };
  
  // const tree1 = el("div", {"class": "some_classname", "id": "some_id"},
  // el("span", {}, 'hello')
  // );
  