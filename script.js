window.onload = () => {
    
    console.log("onload");

    const
    button = document.getElementById('button'),
    text = document.getElementById("text");

    button.onclick = () => {
        var variable = undefined;
        
        window.addEventListener( 'deviceorientation', (event) => { variable = event.alpha; } , true );
        
        if (variable === undefined) {
            text.innerHTML = "error : maybe orientation doesn't work";
        }
        else {
            text.innerHTML = "result : " + variable;
        }
    };
}
