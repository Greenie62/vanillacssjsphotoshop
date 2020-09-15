//DOM elements
var sidebarDOM=document.querySelector(".sidebar")
var enterPicBtn=document.querySelector(".enterPicBtn")
var photoInput=document.querySelector("#photoinput")
var rangeInput=document.querySelector(".rangeinput")
var viewStockBtn=document.querySelector(".viewStockBtn")
var imgContainer=document.querySelector(".imgcontainer")
var thumbContainer=document.querySelector(".thumbContainer")
var currentOptionDOM=document.querySelector(".currentoption")

var imageURL="https://sportshub.cbsistatic.com/i/r/2020/09/13/1ad541e9-7b04-47a9-af03-1c8d1a8e154e/thumbnail/1200x675/6d9e7949ff570022c4502c2fbdb8ad71/new-team.jpg"


function main(){

    console.log(buttons)

    generateButtons()
    generateStock()
    printInit()

    
}


main()


function printInit(){
    let html = `<img src=${pics[0]} class='current-image'>`

    imgContainer.innerHTML = html
}


function generateButtons(){
    let html="";

    buttons.forEach(b=>(
        html += `<button onClick=changeProp('${b.min}','${b.max}','${b.property}') class='optionBtn' data-property=${b.property}>${b.name}</button>`
    ))
    sidebarDOM.innerHTML=html
}


function generateStock(){
    let html=""
    pics.forEach(p=>{
        html += `<img onclick=addPic('${p}') src=${p} class='thumbnail' alt='image'/>`
    })

    thumbContainer.innerHTML=html
}



function addPic(pic){
    console.log(pic)
    let html = `<img src=${pic} class='current-image'>`

    imgContainer.innerHTML = html
}



function changeProp(min,max,property){

     console.log(min,max,property)

    //change property, set the min/max of input
        currentOptionDOM.innerHTML=property
        rangeInput.setAttribute("min",min)
        rangeInput.setAttribute("max",max)
}   



enterPicBtn.onclick=()=>addPic(photoInput.value)


viewStockBtn.onclick=()=>{
    thumbContainer.classList.toggle("show")
}



rangeInput.oninput=(e)=>{
    if(currentOptionDOM === "") return;
 console.log(e.target.value)
    switch(currentOptionDOM.innerHTML){

        case "height":
            document.querySelector(".current-image").style.height=`${e.target.value}%`
        break;

        case "border-radius":
            document.querySelector(".current-image").style.borderRadius=`${e.target.value}%`
        break;

        case "width":
            document.querySelector(".current-image").style.width=`${e.target.value}%`
        break;

        case "background-color":
            let colors=['red','green','blue','violet','lemonchiffon','darkgreen','orangered','lightblue','silver','pink']
            document.querySelector(".imgcontainer").style.backgroundColor=colors[e.target.value]
        break;

        case "sepia":
            console.log('sepia condition!')
            document.querySelector(".current-image").style.filter=`sepia(${e.target.value}%)`
        break;

        case "blur":
            document.querySelector(".current-image").style.filter=`blur(${e.target.value}px)`
        break;

        case "saturate":
            document.querySelector(".current-image").style.filter=`saturate(${e.target.value}%)`
        break;

        case "rotate":
            document.querySelector(".current-image").style.transform=`rotate(${e.target.value}deg)`
        break;

        case "brightness":
            document.querySelector(".current-image").style.filter=`brightness(${e.target.value}%)`
        break;

        case "contrast":
            document.querySelector(".current-image").style.filter=`contrast(${e.target.value}%)`
        break;


        default:
            console.log("unknown option")
            break;


    }
}


