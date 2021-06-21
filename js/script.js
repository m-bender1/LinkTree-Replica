function visitLink(e) {
   let link = e.childNodes;
   window.location = link[1].href;
}