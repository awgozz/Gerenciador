// Passo 1: Capturar o Evento de Envio do Formulário
document.querySelector("#gastos-form").addEventListener('submit', function(event) {
    // Prevenir o comportamento padrão de envio do formulário
    event.preventDefault();



    // Passo 2: Obter os Valores de Entrada, Saída e Origem
    const entrada = parseFloat(document.querySelector("#entrada").value.replace(',', '.'));
    const saida = parseFloat(document.querySelector("#saida").value.replace(',', '.'));
    const origem = document.querySelector("#origem").value;
    const listaGastos = document.querySelector("#lista-gastos");
    const novoGasto = document.createElement('li');

    // Verificar se os valores são números válidos
    if (isNaN(entrada) || isNaN(saida)) {
        alert('Por favor, insira valores válidos para entrada e saída.');
        return;
    }

    // Passo 3: Atualizar os Totais e o Saldo
    let totalEntrada = parseFloat(document.querySelector("#total-entrada").innerText.replace('Total de Entrada: R$ ', '').replace(',', '.'));
    let totalSaida = parseFloat(document.querySelector("#total-saida").innerText.replace('Total de Saída: R$ ', '').replace(',', '.'));

    totalEntrada += entrada;
    totalSaida += saida;

    // Calcular o saldo atual
    const saldoAtual = totalEntrada - totalSaida;

    // Passo 4: Exibir os Resultados
    document.querySelector('#total-entrada').innerText = `Total de Entrada: R$ ${totalEntrada.toFixed(2).replace('.', ',')}`;
    document.querySelector('#total-saida').innerText = `Total de Saída: R$ ${totalSaida.toFixed(2).replace('.', ',')}`;
    document.querySelector('#saldo').innerText = `Saldo Atual: R$ ${saldoAtual.toFixed(2).replace('.', ',')}`;

    // Exibir a origem do gasto (opcional, pode ser exibido em um log ou em uma lista)
    novoGasto.textContent =   `R$ ${saida.toFixed(2).replace('.', ',')} ${origem}`;
    listaGastos.appendChild(novoGasto);


    // Limpar os campos de entrada
    document.querySelector('#entrada').value = '';
    document.querySelector('#saida').value = '';
    document.querySelector('#origem').value = 'Streaming'; // Resetar para o valor padrão
    

    //Pagina relatorio
    
});