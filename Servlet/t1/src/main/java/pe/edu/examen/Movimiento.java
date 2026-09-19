package pe.edu.examen;

public class Movimiento {
    
    private String fecha;
    private String tipo;
    private double monto;

    public String getFecha() {
        return fecha;
    }

    public String getTipo() {
        return tipo;
    }

    public double getMonto() {
        return monto;
    }

    public Movimiento(String fecha, String tipo, double monto) {
        this.fecha = fecha;
        this.tipo = tipo;
        this.monto = monto;
    }
}
