package com.example.asincronaejercicio;

public interface Comunicacion {
    void toggleProgressBar(boolean status);
    void lanzarActividad(Class<?> tipoActividad);
    void showMessage(String msg);
}
