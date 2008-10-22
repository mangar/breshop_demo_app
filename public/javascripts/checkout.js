
function atualiza_frete() {
	var myJSONtext = $('jstemp').innerHTML;
	var myJSONObject = eval('(' + myJSONtext + ')');
	$('valor_frete').innerHTML = myJSONObject.pedido.frete;
	$('valor_pedido').innerHTML = myJSONObject.pedido.valor_total;
}

$(function() {
    $('#container-1 ul').tabs({ fx: { opacity: 'toggle' } });
});