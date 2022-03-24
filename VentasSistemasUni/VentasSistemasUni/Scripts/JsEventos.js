$(document).ready(function () {

    $(".btn-create").click(function (e) {
        $("#modal").load("/Producto/Create").attr("title", "Nuevo Producto").dialog({
            width: 550, height: 'auto', modal: true,
            show: {
                effect: "blind",
                duration: 1000
            },
            hide: {
                effect: "explode",
                duration: 1000
            }
        });
    });

    $(".btn-details").click(function () {
        var codigo = $(this).attr("data-codigo");
        $("#modal").load("/Producto/Details/" + codigo).attr("title", "Visualizar").dialog({
            modal: true,
            show: {
                effect: "blind",
                duration: 1000
            },
            hide: {
                effect: "explode",
                duration: 1000
            }
        });
    });

    $(".btn-edit").click(function () {
        var codigo = $(this).attr("data-codigo");
        $("#modal").load("/Producto/Edit/" + codigo).attr("title", "Editar Producto").dialog({
            width: 550, height: 'auto', modal: true,
            show: {
                effect: "blind",
                duration: 1000
            },
            hide: {
                effect: "explode",
                duration: 1000
            }
        });
    });

    $(".btn-delete").click(function () {
        var codigo = $(this).attr("data-codigo");
        $("#modal").load("/Producto/Delete/" + codigo).attr("title", "Eliminar Producto").dialog({
            modal: true,
            show: {
                effect: "blind",
                duration: 1000
            },
            hide: {
                effect: "explode",
                duration: 1000
            }
        });
    });



});