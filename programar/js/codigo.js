function aleatorio(min,max){
    return Math.floor(Math.random() * (max-min+1) + min)
}

function eleccion(jugada){
        if (jugada == 1){
        resultado ="piedra"
    } else if (jugada==2){
        resultado ="papel"
    } else if (jugada==3){
        resultado ="tijera"
    }else {
        resultado ="Mal elegido"
    }
    return resultado
}

//1 es piedra, 2 es papel, 3 es tijera
let jugador =0
let pc=0
let triunfos=0
let perdidas=0

while(triunfos < 3 && perdidas < 3){
    let pc = aleatorio(1,3)
    jugador = prompt("Elije: 1 para piedra, 2 para papel o 3 para tijera")
    //alert("Elejiste: " + jugador)
    
    alert("Tu eliges: " + eleccion(jugador))
    alert("Pc elige: " + eleccion(pc))

    //Combate
    if (pc==jugador){
        alert("EMPATE")
    } else if (jugador==1 && pc==3){
        alert("GANASTE")
        triunfos ++
    } else if (jugador==2 && pc==1){
        alert("GANASTE")
        triunfos ++
    }   else if (jugador==3 && pc==2){
        alert("GANASTE")
        triunfos ++
    }
    else {
        alert("PERDISTE")
        perdidas ++
    }
}

alert("Ganaste " + triunfos + " veces, y perdiste " + perdidas + " veces.")

