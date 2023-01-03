let form=document.getElementById("form");
    let input=document.getElementById("comment");
    let right=document.querySelector(".right");

    let data={};
    function creatpost(){
        data["text"]=input.value;
    }

    form.addEventListener("submit",e=>{
        creatpost();
        e.preventDefault();
        right.innerHTML +=`<div>
        <p>${data.text}</p>
        <i onclick="edit(this)" class="fa fa-edit"></i>
        <i onclick="remove(this)" class="fa fa-trash"></i>
        </div>`
        input.value="";
    })

    function remove(e){
        e.parentNode.remove();
    }

    function edit(e){
        input.value=e.previousElementSibling.innerText;
        e.parentNode.remove();
    }