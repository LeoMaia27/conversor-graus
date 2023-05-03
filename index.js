function transformDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes('C');
    const fahrenheitExists = degree.toUpperCase().includes('F');

    if(!celsiusExists && !fahrenheitExists) {
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


    return formula(updatedDegree).toFixed(2) + degreeSign;
}

try {
    console.log(transformDegree('28c'));
} catch(error) {
    console.log(`${error}`);
}