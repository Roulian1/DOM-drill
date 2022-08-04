const ulEl = document.querySelector("ul");
const items = document.querySelectorAll("li");
for (let i = 0; i < ulEl.children.length; i++){
    console.log(ulEl.children[i].innerHTML);
}
// ulEl.addEventListener ("click", event => {
//     if (ulEl.children[0]==ulEl.children[0])
//     alert(ulEl.children[0].innerText);

//     else (ulEl.children[1]==ulEl.children[1])
//     alert(ulEl.children[1].innerText);
// });
for (const object of items) {
object.addEventListener('click', (e) => {
    if(e.target.textContent === 'Fast and Furious') {
        alert("The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family.");
    }
    else {
        alert(e.target.textContent);
    }
})};

ulEl.prepend(ulEl.children[5], ulEl.children[0]);
console.log(ulEl.children.innerText);

ulEl.children[0].className = "important";

// const UL = document.querySelector('ul');
// const UlChilds = UL.childNodes;
// for(const li of UlChilds)
// {
//     if(li.nodeType == 1)
//     {
//         if(li.textContent === 'Fast and Furious')
//         {
//             li.classList.add('important');
//             li.parentNode.insertBefore(li, li.parentNode.firstChild);
//         }
//         li.addEventListener('click', (e) => {
//             if(e.target.textContent === 'Fast and Furious')
//             {
//                 alert("The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family.");
//             }
//             else
//             {
//                 alert(e.target.textContent);
//             }
//         });
//         let countDup = 0;
//         let dupl = [];
//         for(let lip of UlChilds)
//         {
//             if(lip.isEqualNode(li))
//             {
//                 if(countDup >= 1)
//                 {
//                     dupl.push(lip);
//                 }
//                 countDup++;
//             }
//         }
//         for(let d of dupl)
//         {
//             li.parentNode.removeChild(d);
//         }
//     }
// }
// document.body.addEventListener('keyup', (e) => {
//     if(e.key === 'r')
//     {
//         for(let i = UL.childNodes.length - 1; i > 0; i--)
//         {
//             let rnd = Math.floor(Math.random() * (UL.childNodes.length - 1) + 1);
//             let child = UL.childNodes[rnd];
//             child.parentNode.insertBefore(child, child.parentNode.childNodes[1]);
//         }
//     }
//     else if(e.key === 'd')
//     {
//         let cloneFAF = UL.firstChild.cloneNode(true);
//         UL.appendChild(cloneFAF);
//     }
// });

// const div = document.createElement('div');
// UL.parentNode.insertBefore(div, UL);

// const select = document.createElement('select');
// const op1 = document.createElement('option');
// const op2 = document.createElement('option');
// op1.innerText = "normal franchises";
// op2.innerText = "important franchises";
// select.appendChild(op1);
// select.appendChild(op2);
// div.appendChild(select);
// select.addEventListener('change', () => {
//     for(let child of UL.childNodes)
//     {
//         if(child.nodeType == 1)
//         {
//             if(select.value === 'important franchises' && !child.classList.contains('important'))
//             {
//                 child.style.visibility = 'hidden';
//             }
//             else
//             {
//                 child.style.visibility = 'visible';
//             }
//         }
//     }
// });