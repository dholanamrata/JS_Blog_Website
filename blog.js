// For Making Header Responsive
const menu_btn = document.querySelector(".menu-btn");
const close_btn = document.querySelector(".close-btn");
const menu = document.querySelector(".menu");
const drawer = menu.querySelector(".drawer");
const blank = menu.querySelector(".blank");
const body = document.querySelector("body");
const close = () => {
  menu.classList.remove("blur");
  drawer.classList.remove("drawer-visible");
  body.classList.remove("body");
};

menu_btn.addEventListener("click", (e) => {
  menu.classList.add("blur");
  drawer.classList.add("drawer-visible");
  body.classList.add("body");
});

close_btn.addEventListener("click", (e) => {
  close();
});

blank.addEventListener("click", (e) => {
  close();
});

Array.from(drawer.querySelectorAll("a")).forEach((element) => {
  element.addEventListener("click", () => {
    close();
  });
});


// for nav active-------------------------------------------
const activepage = window.location.pathname;
console.log(activepage);

const navLink = document.querySelectorAll('nav a').forEach(link => {
    if(link.href.includes(`${activepage}`)){
    //    console.log(`${activepage}`);
    link.classList.add('active')
    }
    
});

const parentBlog = document.querySelector(".mainblog");
// console.log(parentBlog)

const json = localStorage.getItem('form');
const obj = JSON.parse(json);

parentBlog.innerHTML += `<div>

<h1>${obj.title}</h1>
<h3>${obj.subtitle}</h3>
<p>${obj.container}</p>

</div>`
// console.log(obj.length)


// if(obj.length !== 0){
 
//  console.log(parentBlog)
//  const childnode = document.createElement("div");
//  childnode.innerHTML += `<span>${obj.container}</span>`
//  parentBlog.appendChild(childnode);
 
// }


;
 



