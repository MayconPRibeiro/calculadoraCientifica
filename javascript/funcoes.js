var operacao, campo = "";
var n1, n2, resultado = 0; 

function grauToRad(valor) {
    valorRadiano = (2 * 3.14 * parseFloat(valor)) / 360;
    return valorRadiano;
}

function limpaTela(){
    document.getElementById('tOpcao').value = null;
}

function coletar(operacao){
        campo = document.getElementById('tOpcao').value.toString();

        let numero = campo.split(operacao);

        if (operacao == '+'){
            resultado = parseInt(numero[0]) + parseInt(numero[1]);

        }
        else if(operacao == '-'){
            resultado = perseFloat(numero[0]) - parseFloat(numero[1]);  

        }
        else if(operacao == 'x'){
            resultado = perseFloat(numero[0]) * parseFloat(numero[1]);
            
        }
        else if(operacao == '/'){
            resultado = perseFloat(numero[0]) / parseFloat(numero[1]);
            
        }
        else if(operacao == 'x²'){
            resultado = parseFloat(numero[0]) ** 2;
            
        }
        else if(operacao == 'Sen'){
            result = Math.sin(grauToRad(numeros[0]));
            resultado = calc.toFixed(2);
        }
        else if(operacao == 'Cos'){
            result = Math.cos(grauToRad(numeros[0]));
            resultado = calc.toFixed(2);
            
        }
        else if(operacao == 'Tan'){
            result = Math.tan(grauToRad(numeros[0]));
            resultado = calc.toFixed(2);
        }
        else if(operacao == 'Mod'){
            resultado = Math.abs(parseInt(numero[0]));
        }
        else if(operacao == 'Log'){
            resultado = Math.log10(parseFloat(numero[0]));
        }
        else if(operacao == 'CE'){
            resultado = '';
            
        }
        
        document.getElementById('tOpcao').value = resultado.toString();



}

