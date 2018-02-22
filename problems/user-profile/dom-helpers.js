/**
 * Returns DOM element by selector
 * wrapper on querySelector
 * @param {String} selector
 * @param {Node} scope
 * @return {Node} 
 */
function qs(selector, scope) {
  return (scope || document).querySelector(selector);
}
/**
 * Adds event listener to the element
 * @param {Node} element
 * @param {String} type
 * @param {handler}
 */
function on(element, type, handler) {
  element.addEventListener(type, handler);
}
/**
 * Creates element from string
 * @param {String} htmlStr
 * @return {Node}
 */
function strToElement(htmlStr) {
  var wrap = document.createElement('div');

  wrap.innerHTML = htmlStr.trim();

  return wrap.firstChild;
}