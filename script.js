let szovegesDoboz = document.getElementById("szovegesDoboz");
let megszamolva = document.getElementById("megszamolva");    

szovegesDoboz.addEventListener("input",function(){
    let karakterek = this.value;
    let karakterekSzama = karakterek.length;
    megszamolva.textContent = karakterekSzama;
});