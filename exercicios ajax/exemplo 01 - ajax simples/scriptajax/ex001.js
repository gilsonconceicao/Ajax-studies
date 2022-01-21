window.document.getElementById('btn_clicar').addEventListener('click', mostrarText); 

function mostrarText() {
    let pedido = new XMLHttpRequest(); 

    pedido.onreadystatechange = function() {
        window.document.getElementById('conteiner').innerHTML = this.responseText;  
    }

    pedido.open('GET', 'dados.txt', true); 
    pedido.send(); 
}