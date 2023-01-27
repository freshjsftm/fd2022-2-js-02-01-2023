"use strict";
/*
  інкапсуляція
  успадкування
  поліморфізм
*/

class Link {
  #color;
  constructor(text, href) {
    this.text = text;
    this.href = href;
    this.#color = "red";
  }
  logLink(color) {
    return `<a href="${this.href}">${this.text} ${this.#color}</a>`;
  }
}

class LinkPicture extends Link {
  constructor(href, pic) {
    super("", href);
    this.pic = pic;
  }
  logLink(value) {
    return super.logLink(123) + `<a href="${this.href}"><img src="${this.pic}"></a>`;
  }
}

class LinkNewTab extends Link {
  constructor(text, href) {
    super(text, href);
    this.target = "_blank";
  }
}

const linkPic = new LinkPicture("http://", "logo.png");
console.log(linkPic.logLink("blue"));
//console.log(linkPic);

const link = new Link("qwerty", "./index.html");
console.log(link.logLink("blue"));
//console.log(link);
