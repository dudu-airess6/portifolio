var lampada = document.getElementById("lamp");
var inter = false;

lampada.addEventListener("click", lig_des);

function lig_des() {
    if(!inter) {
         document.body.style.background = "radial-gradient(circle, white 8%, yellow 100%)";
         lampada.src="/assets/img/lamp_on.png";
         lampada.alt="Lâmpada Acesa";
         inter = true
    }
    else{
         document.body.style.background = "radial-gradient(circle, white 8%, black 100%)";
         lampada.src="/assets/img/lamp_off.png";
         lampada.alt="Lâmpada Apagada";
         inter = false 
    }
}