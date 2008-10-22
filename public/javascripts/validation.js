function mascara(o,f){
	v_obj=o
	v_fun=f
	setTimeout("execmascara()",1)
}

function execmascara(){
	v_obj.value=v_fun(v_obj.value)
}


function soLetras(v){
	return v.replace(/\d/g,"") //Remove tudo o que não é Letra
}

function soLetrasMA(v){
	v=v.toUpperCase() //Maiúsculas
	return v.replace(/\d/g,"") //Remove tudo o que não é Letra ->maiusculas
}

function soLetrasMI(v){
v=v.toLowerCase() //Minusculas
return v.replace(/\d/g,"") //Remove tudo o que não é Letra ->minusculas
}

function soNumeros(v){
	return v.replace(/\D/g,"") //Remove tudo o que não é dígito
}

function telefone(v){
	v=v.replace(/\D/g,"") //Remove tudo o que não é dígito
	v=v.replace(/^(\d\d)(\d)/g,"($1)$2") //Coloca parênteses em volta dos dois primeiros dígitos
	v=v.replace(/(\d{4})(\d)/,"$1-$2") //Coloca hífen entre o quarto e o quinto dígitos
	return v
}

function cpfV2(v){
	v=v.replace(/\D/g,"") //Remove tudo o que não é dígito
	v=v.replace(/(\d{3})(\d)/,"$1.$2") //Coloca um ponto entre o terceiro e o quarto dígitos
	v=v.replace(/(\d{3})(\d)/,"$1.$2") //Coloca um ponto entre o terceiro e o quarto dígitos
	//de novo (para o segundo bloco de números)
	v=v.replace(/(\d{3})(\d{1,2})$/,"$1-$2") //Coloca um hífen entre o terceiro e o quarto dígitos
	return v
}

function cep(v){
v=v.replace(/\D/g,"") //Remove tudo o que não é dígito
v=v.replace(/^(\d{5})(\d)/,"$1-$2") //Esse é tão fácil que não merece explicações
return v
}

function cnpj(v){
v=v.replace(/\D/g,"") //Remove tudo o que não é dígito
v=v.replace(/^(\d{2})(\d)/,"$1.$2") //Coloca ponto entre o segundo e o terceiro dígitos
v=v.replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3") //Coloca ponto entre o quinto e o sexto dígitos
v=v.replace(/\.(\d{3})(\d)/,".$1/$2") //Coloca uma barra entre o oitavo e o nono dígitos
v=v.replace(/(\d{4})(\d)/,"$1-$2") //Coloca um hífen depois do bloco de quatro dígitos
return v
}

function romanos(v){
v=v.toUpperCase() //Maiúsculas
v=v.replace(/[^IVXLCDM]/g,"") //Remove tudo o que não for I, V, X, L, C, D ou M
//Essa é complicada! Copiei daqui: http://www.diveintopython.org/refactoring/refactoring.html
while(v.replace(/^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/,"")!="")
v=v.replace(/.$/,"")
return v
}

function dataV2(v){
	v=v.replace(/\D/g,"") //Remove tudo o que não é dígito
	v=v.replace(/(\d{2})(\d)/,"$1/$2") //Coloca um ponto entre o segundo e o terceiro dígitos
	v=v.replace(/(\d{2})(\d)/,"$1/$2") //Coloca um ponto entre o quarto e o quinto dígitos
	//v=v.replace(/^[0-3]?\d\/[01]?\d\/(\d{2}|\d{4})$/)
	v=v.replace(/^((0[1-9]|[12]\d)\/(0[1-9]|1[0-2])|30\/(0[13-9]|1[0-2])|31\/(0[13578]|1[02]))\-\d{4}$/)
	// v=v.replace(/^(0[1-9]|[012][0-9]|3[01])/\/(0[1-9]|1[012])/\/([12][0-9]{3})/,"")
	return v
}


function hora(v){
//v=v.replace(/\D/g,"") //Remove tudo o que não é dígito
v=v.replace(/(\d{2})(\d)/,"$1:$2") //Coloca dois ponto entre o segundo e o terceiro dígitos
v=v.replace( (/[012][0-9]:[0-5][0-9]/), "")
//if v.teste( (/[012][0-9]:[0-5][0-9]/);"certo";"errado")
return v
}

function site(v){
//Esse sem comentarios para que você entenda sozinho ;-)
v=v.replace(/^http:\/\/?/,"")
dominio=v
caminho=""
if(v.indexOf("/")>-1)
dominio=v.split("/")[0]
caminho=v.replace(/[^\/]*/,"")
dominio=dominio.replace(/[^\w\.\+-:@]/g,"")
caminho=caminho.replace(/[^\w\d\+-@:\?&=%\(\)\.]/g,"")
caminho=caminho.replace(/([\?&])=/,"$1")
if(caminho!="")dominio=dominio.replace(/\.+$/,"")
v="http://"+dominio+caminho
return v
}