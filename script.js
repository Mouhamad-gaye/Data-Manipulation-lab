// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
]
  // Part 1

let mainEl = document.querySelector('main');

mainEl.style.backgroundColor = 'var(--main-bg)';

mainEl.innerHTML = "<h1>DOM Manipulation</h1>";

mainEl.classList.add("flex-ctr")

// Part 2
let topMenuEl = document.getElementById('top-menu')

topMenuEl.style.height = '100%'

topMenuEl.style.backgroundColor = 'var(--main-bg)'

topMenuEl.classList.add('flex-around')

// Part 3
menuLinks.forEach((link)=>{
    let newAnc = document.createElement('a')
    newAnc.setAttribute('href', link.href)
    newAnc.textContent = link.text;
    topMenuEl.appendChild(newAnc)
})



