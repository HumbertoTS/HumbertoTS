package ec1app.activity;

import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;

import android.content.DialogInterface;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

import com.example.ec1app.R;
import com.google.android.material.button.MaterialButton;
import com.google.android.material.dialog.MaterialAlertDialogBuilder;

public class HomeActivity extends AppCompatActivity {

    private Button boton;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home);

        boton = findViewById(R.id.botoncompras);

        boton.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View v) {
            AlertDialog.Builder alerta=new AlertDialog.Builder(HomeActivity.this);
            alerta.setMessage("Aùn estamos construyendo esta opciòn")
                    .setCancelable(false)
                    .setPositiveButton("Si",new DialogInterface.OnClickListener(){
                @Override
                public void onClick(DialogInterface dialog,int which){
                    finish();
                }
                    })
                    .setNegativeButton("No",new DialogInterface.OnClickListener(){
                @Override
                public void onClick(DialogInterface dialog,int which){
                    dialog.cancel();
                }
                });

                AlertDialog titulo = alerta.create();
                titulo.setTitle("En construcciòn");
                titulo.show();
            }
        });

    }
}