import { useState } from "react"

const Calc = () => {
    //Variáveis e lógica de seleção da medida para calcular
    // option1 === metrica
    // option2 === Imperial
    const [selectedOption, setSelectedOption] = useState('option1');
    
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const optionMed = () =>{
        if(selectedOption === 'option1'){
            return (
                <form>
                    <label>Heigth</label>
                    <input type="number" onChange={evento => setValorCentimetros(parseInt(evento.target.value))}/>
                    <label>Weight</label>
                    <input type="number" onChange={evento => setValorPeso(parseInt(evento.target.value))}/>
                </form>
            )
        } else {
            return(
                <form>
                    <label>Heigth</label>
                    <input type="number" placeholder="ft" onChange={evento => setValorFT(evento.target.value)} />
                    <input type="number" placeholder="in" onChange={evento => setValorIN(evento.target.value)} />
                    <label>Weight</label>
                    <input type="number" placeholder="st" onChange={evento => setValorST(evento.target.value)} />
                    <input type="number" placeholder="lbs" onChange={evento => setValorLBS(evento.target.value)} />
                </form>
            )
        }
    }

    //Variaveis em metric
    const [valorCentimetros, setValorCentimetros] = useState(0)
    const [valorPeso, setValorPeso] = useState(0)

    //Variáveis em imperial
    const [valorFT, setValorFT] = useState(0)
    const [valorIN, setValorIN] = useState(0)
    const [valorST, setValorST] = useState(0)
    const [valorLBS, setValorLBS] = useState(0)

    const calculando = ()=>{
        if(selectedOption === 'option1' && valorCentimetros != 0 && valorPeso !=0){
            // Calculando em metric
            const alturaMetros = valorCentimetros / 100; //Converte altura para metros
            const imc = valorPeso / (alturaMetros * alturaMetros)
            const imcArredondado = imc.toFixed(1)

            // Frase de imc ideal
            const imcIdealMetric = () =>{
                if(imcArredondado <= 18.5){
                    return(
                        <p>Abaixo do peso</p>
                    )
                } else if (imcArredondado >= 18.6 && imcArredondado <= 24.9){
                    return(
                        <p>Peso ideal</p>
                    )
                } else if (imcArredondado >= 25.0 && imcArredondado <= 29.9){
                    return(
                        <p>Levemente acima do peso</p>
                    )
                } else if (imcArredondado >= 30.0 && imcArredondado <= 34.9){
                    return(
                        <p>Obesidade grau 1</p>
                    )
                } else if (imcArredondado >= 35.0 && imcArredondado <= 39.9){
                    return(
                        <p>Obesidade grau 2</p>
                    )
                } else if (imcArredondado >= 40.0){
                    return(
                        <p>Obesidade grau 3</p>
                    )
                }
            }

            return(
                <div>
                    <div>
                        <h4>Your BMI is...</h4>
                        <h3>{imcArredondado}</h3>
                    </div>
                    <div>
                        {imcIdealMetric()}
                    </div>
                </div>
            )
        } else if (selectedOption === 'option2' && valorFT != 0 && valorIN != 0 && valorST !=0 && valorLBS !=0){
            // Calculando em imperial
            const pesoKG = ((valorST * 14 ) + valorLBS) * 0.453592 //Converter para kg
            const alturaMetros = ((valorFT*12) + valorIN) * 0.0254 //Converter para metros
            const imc = pesoKG/(alturaMetros*alturaMetros) * 703
            const imcArredondado = imc.toFixed(1)

            //Frase de imc ideal
            const imcIdealImperial = () => {

            }

            return (
                <div>
                    <div>
                        <h4>Your BMI is...</h4>
                        <h3>{imcArredondado}</h3>
                    </div>
                </div>
            )
        } else {
            return(
                <>
                    <h3>Welcome!</h3>
                    <p>Enter your height and weight and you’ll see your BMI result here</p>
                </>
            )
        }
    }

    return(
        <div>
            <div>
                <h1>Body Mass Index Calculator</h1>
                <p>Better understand your weight in relation to your height using our body mass index (BM) calculator. While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being.</p>
            </div>
            <div>
                <h2>Enter your details below</h2>
                <form>
                    <input type="radio" name="options" value="option1" checked={selectedOption === 'option1'} onChange={handleOptionChange}/><p>Metric</p>
                    <input type="radio" name="options" value="option2" checked={selectedOption === 'option2'} onChange={handleOptionChange}/><p>Imperial</p>
                </form>
                {optionMed()}
                {calculando()}
            </div>
        </div>
    )
}

export default Calc