<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="jakarta.tags.core" %>

<!DOCTYPE html>

<html lang="es">

<head>
    <meta charset="UTF-8">
    <title>Mi Billetera Digital</title>


<link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
    rel="stylesheet">


</head>

<body>

<header class="bg-dark text-white py-3">
    <div class="container">
        <h1 class="fs-5 fw-bold mb-0">
            Mi Billetera Digital
        </h1>
    </div>
</header>

<main class="container py-4">


<!-- Mensaje de error -->
<c:if test="${not empty mensajeError}">
    <div class="alert alert-danger" role="alert">
        ${mensajeError}
    </div>
</c:if>


<!-- Saldo -->
<div class="row">

    <div class="col-12 col-md-6 col-lg-5">

        <section class="card" aria-labelledby="titulo-saldo">

            <div class="card-body p-4">

                <h2
                    id="titulo-saldo"
                    class="fs-6 text-body-secondary mb-2">

                    Saldo actual

                </h2>

                <p class="fs-1 fw-bold text-success mb-0">

                    S/ ${saldo}

                </p>

            </div>

        </section>

    </div>

</div>


<!-- Movimientos -->
<section
    class="mt-4"
    aria-labelledby="titulo-movimientos">

    <h2
        id="titulo-movimientos"
        class="fs-5 fw-bold mb-3">

        Movimientos recientes

    </h2>


    <div class="table-responsive border">

        <table
            class="table table-striped align-middle mb-0">

            <caption class="visually-hidden">

                Movimientos recientes de la billetera:
                fecha, tipo y monto en soles.

            </caption>


            <thead class="table-dark">

                <tr>

                    <th scope="col">
                        Fecha
                    </th>

                    <th scope="col">
                        Tipo
                    </th>

                    <th scope="col">
                        Monto
                    </th>

                </tr>

            </thead>


            <tbody>

                <c:forEach
                    var="movimiento"
                    items="${movimientos}">

                    <tr>

                        <td>
                            ${movimiento.fecha}
                        </td>


                        <td>

                            <span
                                class="badge rounded-pill px-3
                                ${movimiento.tipo == 'Recarga'
                                    ? 'text-bg-success'
                                    : 'text-bg-danger'}">

                                ${movimiento.tipo}

                            </span>

                        </td>


                        <td
                            class="fw-semibold
                            ${movimiento.tipo == 'Recarga'
                                ? 'text-success'
                                : 'text-danger'}">

                            ${movimiento.tipo == 'Recarga'
                                ? '+'
                                : '-'}

                            S/ ${movimiento.monto}

                        </td>

                    </tr>

                </c:forEach>

            </tbody>

        </table>

    </div>

</section>


<!-- Nuevo movimiento -->
<section
    class="card mt-4"
    aria-labelledby="titulo-nuevo-movimiento">

    <div class="card-body p-4">

        <h2
            id="titulo-nuevo-movimiento"
            class="fs-5 fw-bold mb-3">

            Nuevo movimiento

        </h2>


        <form
            action="billetera"
            method="post">

            <div class="row g-3 align-items-end">


                <!-- Tipo -->
                <div class="col-12 col-md-4">

                    <label
                        for="tipo"
                        class="form-label">

                        Tipo

                    </label>

                    <select
                        id="tipo"
                        name="tipo"
                        class="form-select"
                        required>

                        <option value="">
                            Recarga/Gasto
                        </option>
                        <option value="Recarga">
                            Recarga
                        </option>

                        <option value="Gasto">
                            Gasto
                        </option>

                    </select>

                </div>


                <!-- Monto -->
                <div class="col-12 col-md-4">

                    <label
                        for="monto"
                        class="form-label">

                        Monto (S/)

                    </label>

                    <input
                        type="number"
                        id="monto"
                        name="monto"
                        class="form-control"
                        placeholder="Ingrese monto"
                        min="0.01"
                        step="0.01"
                        required>

                </div>


                <!-- Botón -->
                <div class="col-12 col-md-4">

                    <button
                        type="submit"
                        class="btn btn-primary w-100">

                        Registrar movimiento

                    </button>

                </div>

            </div>

        </form>

    </div>

</section>


</main>

</body>
</html>
