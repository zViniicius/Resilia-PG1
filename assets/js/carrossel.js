let contador = 1;
document.getElementById('radio1').checked = true;

setInterval(() => {
    proxImg();
}, 6000)
 
function proxImg() {
    contador++
    if(contador > 3) {
        contador = 1
    }

    document.getElementById('radio'+contador).checked = true;
}