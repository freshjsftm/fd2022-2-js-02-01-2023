'use strict';
//1 - arrow
const site = {
  title: 'my site',
  headers:['Header1', 'About', 'Contact', 'Section title'],
  showHeaders(){
    this.headers.forEach((header)=>{
      console.log(this.title, '|', header)
    })
  }
}
site.showHeaders();

//2 - this in variable
// const site = {
//   title: 'my site',
//   headers:['Header1', 'About', 'Contact', 'Section title'],
//   showHeaders(){
//     const self = this;
//     this.headers.forEach(function(header){
//       console.log(self.title, '|', header)
//     })
//   }
// }

//thisArgs in methods array
// const site = {
//   title: "my site",
//   headers: ["Header1", "About", "Contact", "Section title"],
//   showHeaders() {
//     this.headers.forEach(logHeader, this);
//   },
// };
// function logHeader(header) {
//   console.log(this.title, "|", header);
// }

// const site = {
//   title: "my site",
//   headers: ["Header1", "About", "Contact", "Section title"],
//   showHeaders() {
//     this.headers.forEach(logHeader.bind(this));
//   },
// };

// site.showHeaders();

// function logHeader(header){
//   console.log(this.title, '|', header)
// }