
window.onload = () => {
    console.log("onload");
    window.addEventListener("deviceorientation", handleOrientation, true);
}



function handleOrientation(event) {

    const
    text = document.getElementById("text");

    var 
    absolute = event.absolute,
    alpha    = event.alpha,
    beta     = event.beta,
    gamma    = event.gamma;

    let msg = 
    "absolute : " + absolute + "<br>" + 
    "alpha : " + alpha + "<br>" + 
    "beta : " + beta + "<br>" + 
    "gamma : " + gamma + "<br>" + 
    
    console.log(msg);
    text.innerHTML = msg;
}
