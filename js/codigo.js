    //Eleccion del pc
    function aleatorio(min, max){
        return Math.floor( Math.random() * (max-min+1) + min)
            }
    //Eleccion del jugador
    function eleccion(jugada){
        let resultado = ""
        if (jugada == 1){
              resultado = "Piedra🪨"
            } else if (jugada == 2){
              resultado = "Papel 📃"
            } else if (jugada == 3) {
              resultado = "Tijeras ✂️"
            } else{
              resultado = "no elegiste nada."
            }
        return resultado
            }
    //Comabate
    function combate(jugador, pc){
        let final = ""
        if (jugador == pc){
            final = "EMPATE!!!!!"
            } else if((jugador == 1 && pc == 3) || (jugador == 2 && pc == 1) || (jugador == 3 && pc == 2)){
              triunfos++
              final = "GANASTE🎉!!!!!"
            } else {
              perdidas++
              final = "perdiste 🙁"
            }
        return final
            }
  // 1 es piedra, 2 es papel, 3 es tijera
    let jugador = 0
    let pc = 0
    let triunfos = 0
    let perdidas = 0

    while(triunfos < 3 && perdidas < 3){
        pc = aleatorio(1,3) // por que entre 1 y 3? pues porque ese es el valor del minimo y el maximo
        jugador = prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera")
            
        alert("El oponente eligio: " + eleccion(pc))
        alert("tu elegiste: " + eleccion(jugador))

        // COMBATE
        alert(combate(jugador, pc))
                
        // marcador
        alert("Triunfos: " + triunfos + "\nDerrotas: " + perdidas)

        }