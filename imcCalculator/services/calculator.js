function sum(weight, height) {
    let w = parseFloat(weight).toFixed(1);
    let h = parseFloat(height).toFixed(1);


    // console.log(weight);
    // console.log(height);
    let imc =  weight.toFixed(1) / (height.toFixed(1) * height.toFixed(1));
    let result;

    if (imc < 18.5) {
        result = "Magreza";
    } else if (imc >= 18.5 && imc < 24.9) {
        result = "Normal";
    } else if (imc >= 24.9 && imc < 30) {
        result = "Sobrepeso";
    } else {
        result = "Obesidade";
    }
    
    let resposta;
    resposta = { valorImc: imc, categoriaImc: result};
    return resposta; 
    
    
}




module.exports = {
    sum
}