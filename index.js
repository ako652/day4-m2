window.onload =function(){
    NewArroflist()

}


const NewArroflist = function(event){
    let newDiv = document.createElement("li")
    newDiv.innerText = "Hi,from" 
    let parentNode = document.querySelector("ol")
    parentNode.appendChild(newDiv)

    parentNode.addEventListener('click', function(){
        NewArroflist()
    })
}
