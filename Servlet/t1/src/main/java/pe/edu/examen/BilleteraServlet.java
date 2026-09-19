package pe.edu.examen;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/billetera")
public class BilleteraServlet extends HttpServlet {

    private double saldo = 250;

    private List<Movimiento> movimientos = new ArrayList<>();

    @Override
    public void init() {

        movimientos.add(
            new Movimiento("12/09/2026", "Recarga", 100)
        );

        movimientos.add(
            new Movimiento("11/09/2026", "Gasto", 45.50)
        );

        movimientos.add(
            new Movimiento("10/09/2026", "Gasto", 20)
        );

        movimientos.add(
            new Movimiento("09/09/2026", "Recarga", 200)
        );
    }

    @Override
    protected void doGet(
            HttpServletRequest request,
            HttpServletResponse response)
            throws ServletException, IOException {

        request.setAttribute("saldo", saldo);
        request.setAttribute("movimientos", movimientos);

        request.getRequestDispatcher("/billetera.jsp")
               .forward(request, response);
    }

    @Override
    protected void doPost(
        HttpServletRequest request,
        HttpServletResponse response)
        throws ServletException, IOException {

    // Recibir los datos enviados desde el formulario
    String tipo = request.getParameter("tipo");
    String montoTexto = request.getParameter("monto");

    // Convertir el monto de texto a número
    double monto = Double.parseDouble(montoTexto);

    // Validar que el monto sea mayor que 0
    if (monto <= 0) {

        request.setAttribute(
            "mensajeError",
            "El monto debe ser mayor que 0."
        );

        request.setAttribute("saldo", saldo);
        request.setAttribute("movimientos", movimientos);

        request.getRequestDispatcher("/billetera.jsp")
               .forward(request, response);

        return;
    }

    // Validar que un gasto no supere el saldo disponible
    if (tipo.equals("Gasto") && monto > saldo) {

        request.setAttribute(
            "mensajeError",
            "El gasto no puede superar el saldo disponible."
        );

        request.setAttribute("saldo", saldo);
        request.setAttribute("movimientos", movimientos);

        request.getRequestDispatcher("/billetera.jsp")
               .forward(request, response);

        return;
    }

    // Actualizar el saldo
    if (tipo.equals("Recarga")) {
        saldo += monto;
    } else {
        saldo -= monto;
    }

    // Obtener la fecha actual
    String fecha = java.time.LocalDate.now().toString();

    // Crear el nuevo movimiento
    Movimiento movimiento = new Movimiento(
        fecha,
        tipo,
        monto
    );

    // Agregarlo al inicio de la lista
    movimientos.add(0, movimiento);

    // Redirigir al GET después de registrar correctamente
    response.sendRedirect("billetera");
}

}