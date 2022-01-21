// primeiros passos com requisições em ajax
window.onload = function() {
    window.document.getElementById('btn_mostrar').addEventListener('click', mostaraText); 
}

function mostaraText() {
    let pedido = new XMLHttpRequest(); 
    let dado = 'Aprendendo a fazer requisições com ajax e aprendendo de forma muito fluente.'; 

    pedido.onreadystatechange = function () {
        if (pedido.readyState == 4 ) {
            console.log(dado)
            window.document.getElementById('conteinerText').innerHTML = this.responseText; 
        }
    }

    pedido.open('GET', 'textomostrar.txt', true); 
    pedido.send(); 
}