class formdata {
  constructor(title,subtitle,container){
    this.title = title
    this.subtitle = subtitle
    this.container = container
  }
}


let arry = [];


const form = document.getElementById("form_data");
 console.log(form);
 form.addEventListener('submit',(e)=>{
  e.preventDefault();
  
  const obj = new formdata(e.target[0].value,e.target[1].value,e.target[2].value)
  const json = JSON.stringify(obj);
  console.log(json)

  arry.push(json)
  localStorage.setItem('form',arry);
  // window.location.href = 'blog.html'
 });



// --------------------------create blog ---------------------------------
//--------------form na data console ma print karshe ---------------------------

//  const prevent = (e) => {
//     e.preventDefault();
//     for (const i of e.target) {
//       if (i.value === "") {
//         continue;
//       }
//       console.log(i.value);
//     }
//   };
//   form.addEventListener("submit", prevent);


