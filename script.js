// let input = document.getElementById('input-box');
// let buttons = document.querySelectorAll('button');

// let string = "";
// let arr = Array.from(buttons);

// // console.log(arr);

// arr.forEach(button => {
//     addEventListener('click', (e) => {
//         if(e.target.innerHTML == '='){
//             string = eval(string);
//             input.value = string;
//         }
//         else if(e.target.innerHTML == 'AC'){
//             string = "";
//             input.value = string;
//         }
//         else if(e.target.innerHTML == 'DEL'){
//             string = string.substring(0, string.length-1);
//             input.value = string;
//         }

//         else{
//             string += e.target.innerHTML;
//             input.value = string;
//         }
//     })

// })

let string = "";
let buttons = document.querySelectorAll("button");
// console.log(buttons);

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if (e.target.innerHTML == "="){
            string = eval(string);
            document.getElementById("input-box").value = string;
        }
        else if(e.target.innerHTML == "AC"){
            string = "";
            document.getElementById("input-box").value = string;
        }
        else if(e.target.innerHTML == "DEL"){
            string = string.substring(0,string.length-1);
            document.getElementById("input-box").value = string;

        }
        else{
            console.log(e.target);
            string = string + e.target.innerHTML;
            console.log(string)
            document.getElementById("input-box").value = string;
        }

    })
})

