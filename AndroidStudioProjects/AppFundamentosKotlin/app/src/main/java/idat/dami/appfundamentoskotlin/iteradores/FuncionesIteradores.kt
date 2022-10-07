package idat.dami.appfundamentoskotlin.iteradores

class FuncionesIteradores {

    fun bucleFor() {
        val edades = intArrayOf(23, 45, 40, 34)
        for (edad: Int in edades){

        }
        for (i in 5..15){

        }
    }

    fun bucleWhile(){
        var i = 10
        while (i >0){
            i--
        }
        do {
            i--
        } while (i>0)
    }
}