package pe.edu.idat.appcalculadoraimc

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import pe.edu.idat.appcalculadoraimc.databinding.ActivityMainBinding

class MainActivity : AppCompatActivity(), View.OnClickListener {

    private lateinit var binding : ActivityMainBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)
        binding.btncalcular.setOnClickListener(this)
    }

    override fun onClick(v: View?) {
        calcularImc()
    }

    private fun calcularImc() {
        val peso = binding.etpeso.text.toString().toDouble()
        val talla = binding.ettalla.text.toString().toDouble()
        val tallam = talla / 100
        val imc = peso / (tallam * tallam)
        var resultado = ""

        if(imc<=18.5){
            resultado="Por debajo del peso."
        }else if(imc<=25){
            resultado="Con peso normal."
        }else if(imc<=30){
            resultado="Con sobrepeso."
        }else if(imc<=35){
            resultado="Obesidad leve."
        }else if(imc<=39){
            resultado="Obesidad media."
        }else{
             resultado="Con obesidad mórbida"
        }

        binding.tvresultado.text="Su IMC es: $imc, usted se encuentra: $resultado"
    }
}