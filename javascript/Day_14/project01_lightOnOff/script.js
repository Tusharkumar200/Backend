const my_button = document.getElementById('btn');
const my_button1 = document.getElementById('btn1');
const msg = document.getElementById('msg');


const myImg = document.getElementById('myImg');


onLight=()=>{
    my_button.innerHTML = 'off';
    myImg.src='images/bulb_on.png';
    msg.innerHTML = 'Can you turn the light Off ?'
}

offLight=()=>{
    my_button.innerHTML = 'on';
    myImg.src='images/bulb_off.png';
    msg.innerHTML = 'Can you turn the light On ?'
}

check=()=>{
   
    if (myImg.src.match("images/bulb_on")) {
        // myImg.src = "images/bulb_off.png"
        offLight();
    } 
    else {
    //    myImg.src = "images/bulb_on.png";
    onLight();
    }
}



my_button.addEventListener('click', check);


