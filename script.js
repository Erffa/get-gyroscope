window.onload = () => {
    console.log("onload");

    const
    text = document.getElementById("text");


    try {
        window.addEventListener(
            "deviceorientation", 
            (event) => {
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
            }, 
            true);
    }
    catch (err) {
        text.innerHTML = "error deviceorientation";
    }
}
