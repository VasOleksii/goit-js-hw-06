
const navEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${navEl.length}`);

for (let el of navEl) {
  console.log(`Category: ${el.querySelector('h2').textContent}`);
  console.log(`Elements: ${el.querySelectorAll('li').length}`);
}
