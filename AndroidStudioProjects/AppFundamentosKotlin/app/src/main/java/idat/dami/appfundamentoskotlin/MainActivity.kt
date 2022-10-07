package idat.dami.appfundamentoskotlin

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import idat.dami.appfundamentoskotlin.poo.Alumno
import idat.dami.appfundamentoskotlin.poo.Auto

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        ///Definiendo variables
        var titulo = "Instituto Idat"
        var curso : String = "Desarrollo de aplicaciones moviles II"

        //Definiendo constantes
        val tema = "Fundamentos Kotlin"
        // tema = "POO Kotlin"

        var edad : Int
        var edadnro = 33
        var sueldo : Double
        var sueldonro = 5000.50
        var activo : Boolean
        var activodefault = true

        //Gestion de valores Null
        var carrera : String?
        //carrera = null
        carrera = "Desarrollo de sistemas de informacion"
        //var longitud : Int = carrera!!.length
        var longitud : Int = carrera?.length ?: 0

        val paises = ArrayList<String>();
        paises.add("Perú")
        paises.add("Chile")
        paises.add("Bolivia")
        paises.add("Colombia")

        val objAlumno = Alumno("Luis")
        objAlumno.responsabilidad()
        val auto1 = Auto("toyota", "Sedan", 2009, "A001")
        val auto2 = auto1.copy(marca ="Kia")

    }
}