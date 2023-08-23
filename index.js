const transformDegree = (degree) => {
    degree = document.getElementById("temp").value;
    const celsiusExists = degree.toUpperCase().includes('C');
    const fahrenheitExists = degree.toUpperCase().includes('F');

    if(!celsiusExists && !fahrenheitExists) {
        alert('Tipo de Grau inválido. Informe o sinal de C ou F após os graus.');
        throw new Error('Tipo de Grau inválido. Informe o sinal de C ou F.');
    }

    //Mudando o sinal de Farenheit para sinal vazio
    let updatedDegree = Number(degree.toUpperCase().replace('F', ''));
    let formula = (fahrenheit) => (fahrenheit - 32) * 5 / 9;
    let degreeSign = 'C';

    if(celsiusExists) {
        updatedDegree = Number(degree.toUpperCase().replace('C', ''));
        formula = (celsius) => (celsius * 9 / 5 + 32);
        degreeSign = 'F';
    }

    return showTemp(formula(updatedDegree).toFixed(2) + degreeSign);
}

const showTemp = (fn) => {
    return document.getElementById("mainOutput").innerHTML = fn;
}

const degree = document.getElementById("temp");
const button = document.getElementById("calcBtn").onclick = transformDegree;

// try {
//     // button.addEventListener("click", getValueDegree);
// } catch(error) {
//     alert(`${error}`);
// }

