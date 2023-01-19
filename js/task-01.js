
const navEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${navEl.length}`);

navEl.forEach(function(el) {
  console.log(`Category: ${el.firstElementChild.textContent}`);
  console.log(`Elements: ${el.lastElementChild.children.length}`);
 
})
// for (let el of navEl) {
//  console.log(`Category: ${el.querySelector('h2').textContent}`);
//  console.log(`Elements: ${el.querySelectorAll('li').length}`);
// }
