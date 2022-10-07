package idat.dami.appfundamentoskotlin.poo

class Alumno (nombre: String) : Persona (nombre) {

    fun realizarTareas(){
        edad = 30
        apellido = "Guadalupe"
    }

    override fun responsabilidad() {
        super.responsabilidad()
    }

}