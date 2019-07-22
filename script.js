window.onload = () => {

    const
    button = document.getElementById('button'),
    text1 = document.getElementById("text1"),
    text2 = document.getElementById("text2");

    button.onclick = () => {
        
        text1.innerHTML = window.orientation;
        
        var variable = undefined;
        
        window.addEventListener( 'deviceorientation', (event) => { variable = event.alpha; } , true );
        
        if (variable === undefined) {
            text2.innerHTML = "error : maybe orientation doesn't work";
        }
        else {
            text2.innerHTML = "result : " + variable;
        }
    };
}
