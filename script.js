// Função para calcular a economia com o uso de IA no campo
function calcularEconomiaAgro(areaHectares, gastoPorHectare) {
    // Custo total tradicional sem o uso de IA
    const custoTradicional = areaHectares * gastoPorHectare;
    
    // Média de redução de defensivos usando pulverização com IA (80% de economia)
    const percentualEconomia = 0.80; 
    
    // Cálculos
    const valorEconomizado = custoTradicional * percentualEconomia;
    const novoCustoComIA = custoTradicional - valorEconomizado;
    
    // Retorna um objeto com os resultados formatados
    return {
        custoAntigo: custoTradicional.toFixed(2),
        novoCusto: novoCustoComIA.toFixed(2),
        economiaReal: valorEconomizado.toFixed(2)
    };
}

// --- EXEMPLO DE USO NO SITE ---
// Cenário: Uma fazenda de 500 hectares que gasta R$ 300,00 por hectare
const tamanhoFazenda = 500;
const gastoDefensivos = 300;

const resultado = calcularEconomiaAgro(tamanhoFazenda, gastoDefensivos);

// Exibindo o resultado no console (ou na tela do seu site)
console.log(`Custo Tradicional: R$ ${resultado.custoAntigo}`);
console.log(`Novo Custo com IA: R$ ${resultado.novoCusto}`);
console.log(`O produtor vai economizar: R$ ${resultado.economiaReal} por safra!`);