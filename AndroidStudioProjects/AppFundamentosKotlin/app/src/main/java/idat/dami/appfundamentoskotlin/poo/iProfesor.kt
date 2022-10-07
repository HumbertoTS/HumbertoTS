package idat.dami.appfundamentoskotlin.poo

interface iProfesor {

    fun dictarClase()
    fun registrarAsistencia(codAlumno: String, asistencia: Boolean)
    fun registrarNota(codAlumno: String, nota: Int)
}