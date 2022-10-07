package idat.dami.appfundamentoskotlin.condicionales

class funciones {

    fun obtenerApellidoLargo(apellido1: String, apellido2: String){
        var apellidoLargo = if (apellido1.length > apellido2.length){
            apellido1
        } else if (apellido2.length > apellido1.length){
            apellido2
        } else{
            "Ambos apellidos son iguales"
        }
    }

    fun validarLongitudNombre (nombre: String){
        var valorNombre = when (nombre.length){
           0 -> "Nombre vacío"
           in 1..4 -> "Nombre pequeño"
           in 5..7 ->  "Nombre mediano"
            else -> "Nombre extenso"
        }
    }
}