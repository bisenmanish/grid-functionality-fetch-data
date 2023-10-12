


let totaldata = [];
let url="data.json"

fetch(url)

.then(function( respons){

    return respons.json();




}).then(function(data){
    // console.log(data.length/4);
    let data1="";
    
    data.map(function(values){

data1 +=`<div class="subcontainer">
    <img src=${values.pic} />
    <h2>${values.name}</h2>
    <h4>price:${values.price} <del>${values.dprice}</del></h4>
    </div>`;
})

 document.getElementById("container").innerHTML=data1;


})
.catch(function(error){



    console.log("something went wrong");
})




function search(){


    let filter= document.getElementById("serach-bar").value.toUpperCase();
    let container=document.querySelectorAll(".subcontainer");
    let name= document.getElementsByTagName("h2");
    for(let i=0; i < name.length; i++){

       let a=container[i].getElementsByTagName("h2")[0];
       let value=a.textContent|| a.innerHTML;
       if(value.toUpperCase().indexOf(filter)> -1){

        container[i].style.display="";
       }
       else{

        container[i].style.display="none";
       }

    }
}

// const container= document.getElementById("container");
// const subcontainer= document.querySelector(".subcontainer")
// let pageIndex = 0;
// let itemsPerPage=4;

// loadItems();
// function loadItems(){

// subcontainer.innerHTML="";
// for(let i= pageIndex*itemsPerPage; i<(pageIndex*itemsPerPage)+itemsPerPage; i++){

//     if(!values[i]) {break}
//     const item=document.createElement('div');
//     item.innerHTML+=`
//     <div >
//     <img src=${values.pic} />
//     <h2>${values.name}</h2>
//     <h4>price:${values.price} <del>${values.dprice}</del></h4>
//     </div>`

//     subcontainer.append(item);
// }

// }



// console.log(data);





