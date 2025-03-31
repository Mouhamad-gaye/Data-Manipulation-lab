// Menu data structure & Imports
var menuLinks = [
  { text: 'about', href: '/about' },
  {
    text: 'catalog', href: '#', subLinks: [
      { text: 'all', href: '/catalog/all' },
      { text: 'top selling', href: '/catalog/top' },
      { text: 'search', href: '/catalog/search' },
    ]
  },
  {
    text: 'orders', href: '#', subLinks: [
      { text: 'new', href: '/orders/new' },
      { text: 'pending', href: '/orders/pending' },
      { text: 'history', href: '/orders/history' },
    ]
  },
  {
    text: 'account', href: '#', subLinks: [
      { text: 'profile', href: '/account/profile' },
      { text: 'sign out', href: '/account/signout' },
    ]
  },
];
console.log(menuLinks)

let mainEl = document.querySelector('main');

mainEl.style.backgroundColor = 'var(--main-bg)';

mainEl.innerHTML = "<h1>DOM Manipulation</h1>";

mainEl.classList.add("flex-ctr")

subMenuEl = document.getElementById('sub-menu')

let topMenuEl = document.getElementById('top-menu')

topMenuEl.style.height = '100%'

topMenuEl.style.backgroundColor = 'var(top--main-bg)'

topMenuEl.classList.add('flex-around')

subMenuEl.style.height = '100%'

subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)'

subMenuEl.classList.add = 'flex-around'

subMenuEl.style.top = '0'

// Part 4 & Part 5



let topMenuLinks = document.querySelectorAll('a')
console.log(topMenuLinks)
topMenuEl.addEventListener('click', handleClick)

function handleClick(e) {
  e.preventDefault();
  if (e.srcElement.nodeName !== 'A') {
    console.log('not A')
    return
  }
  // console.log('A')
  topMenuLinks.forEach(link => link.classList.remove('active')); 
  e.target.classList.toggle('active'); 
  const linkObj = menuLinks.find(link => link.text === event.target.textContent);


  if (linkObj && linkObj.subLinks) {
      subMenuEl.style.top = '100%'; 
      buildSubMenu(linkObj.subLinks); 
  } else {
      subMenuEl.style.top = '0'; 
  }
}

subMenuEl.addEventListener('click', handleClick)

function handleClick(e) {
  e.preventDefault();
  if(e.srcElement.nodeName !== 'A') {
    console.log('not A')
    return
  }
console.log('A')
topMenuLinks.forEach(link => link.classList.remove('active'))
mainEl.innerHTML = `<h1>About</h1>`;
}

//Helper Function

function buildSubMenu(subLinks){
  subMenuEl.innerHTML = 'About'
 subLinks.forEach(link => {
  let subLinkEl= document.createElement('a')
  subLinkEl.setAttribute('href', link.href)
  subLinkEl.textContent = link.text
  subMenuEl.appendChild(subLinkEl)
 })
}

menuLinks.forEach(link => {
  let newAnc = document.createElement('a')
  newAnc.setAttribute('href', link.href)
  newAnc.textContent = link.text;
  topMenuEl.appendChild(newAnc)
})
