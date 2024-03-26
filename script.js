function logFunction(){
    if(document.getElementById('toggle').checked) {
        console.log("switch is on")
    } else {
        console.log("switch is off")
    }
}

console.log("script loaded")
document.getElementById('toggle').addEventListener('click', logFunction)