
const head1 = document.getElementById("heading");
console.log(head1);

const head_1 = document.getElementsByTagName("h1");
// console.log(head_1[2]);


// console.log(head1.innerText);
// console.log(head1.innerHTML);

head1.innerText = "this is changed by JS <span>this is span</span>";
head1.innerHTML = "this is h1 <span>this is span</span>";


const allPara = document.getElementsByTagName("p");

// console.log(allPara);

allPara[0].classList.add("blue");
allPara[0].classList.remove("red");

allPara[0].classList.toggle("yellow");

// console.log(allPara[0].classList);

allPara[0].classList.toggle("yellow");
// console.log(allPara[0].classList);

allPara[2].setAttribute("id","3");
allPara[2].setAttribute("class","yellow");
// console.log(allPara[2]);

// how to create element
const ul = document.createElement("ul");

ul.classList.add("red");
ul.setAttribute("id","3");
console.log(ul);

for(let i=0;i<3;i++){
  const li = document.createElement("li");
  li.innerText = i;
  ul.append(li);
}

// how to append dynamic elements inside html
// allPara[2].after(ul);
allPara[2].before(ul);
const container = document.getElementById("container");
// container.append(ul);
container.prepend(ul);


// container.style.display = "none";

const btn = document.getElementById("btn");
// eventListners -> 
btn.addEventListener("click",(e)=>{
  // console.log(e.target.previousElementSibling);
  console.log(e.target.children);
})

const form = document.getElementById("form");
const inp = document.getElementById("form-inp");

form.addEventListener("submit",(e)=>{
  e.preventDefault();
  console.log(inp.value);
  console.log("form is submitted");
})



