function sumar(valor) {
    var total = 0;
    valor = parseInt(valor);
    total = document.getElementById('spTotal').innerHTML;
    total = (total == null || total == undefined || total == "") ? 0 : total;
    total = (parseInt(total) + parseInt(valor));
    document.getElementById('spTotal').innerHTML = total;
}