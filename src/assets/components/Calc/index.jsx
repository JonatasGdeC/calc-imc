import { useState } from "react"
import styles from './Calc.module.scss';

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
                <form className={styles.headerCalcInputsMetric}>
                    <div>
                        <label>Heigth</label>
                        <input type="number" placeholder="cm" onChange={evento => setValorCentimetros(parseInt(evento.target.value))}/>
                    </div>
                    <div>
                        <label>Weight</label>
                        <input type="number" placeholder="kg" onChange={evento => setValorPeso(parseInt(evento.target.value))}/>
                    </div>
                </form>
            )
        } else {
            return(
                <form className={styles.headerCalcInputsImperial}>
                    <div>
                        <label>Heigth</label>
                        <div className={styles.headerCalcInputsImperialInput}>
                            <input type="number" placeholder="ft" onChange={evento => setValorFT(evento.target.value)} />
                            <input type="number" placeholder="in" onChange={evento => setValorIN(evento.target.value)} />
                        </div>
                    </div>
                    <div>
                        <label>Weight</label>
                        <div className={styles.headerCalcInputsImperialInput}>
                            <input type="number" placeholder="st" onChange={evento => setValorST(evento.target.value)} />
                            <input type="number" placeholder="lbs" onChange={evento => setValorLBS(evento.target.value)} />
                        </div>
                    </div>
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

            const pesoIdeal = () => {
                    const imcMinimo = 18.5; // IMC mínimo para estar na faixa saudável
                    const imcMaximo = 24.9; // IMC máximo para estar na faixa saudável
                    
                    const pesoMinimo = imcMinimo * (alturaMetros * alturaMetros);
                    const pesoMaximo = imcMaximo * (alturaMetros * alturaMetros);

                    const oPesoIdealE = `${pesoMinimo.toFixed(1)}Kgs - ${pesoMaximo.toFixed(1)}Kgs`;
                
                    return (
                        <b>{oPesoIdealE}</b>
                    )
            }

            // Frase de imc ideal
            const imcIdealMetric = () =>{
                if(imcArredondado < 18.5){
                    return(
                        <p>Your BMI suggests that you are underweight. Your ideal weight is between {pesoIdeal()}.</p>
                    )
                } else if (imcArredondado >= 18.5 && imcArredondado <= 24.9){
                    return(
                        <p>Your BMI suggests you’re a healthy weight. Your ideal weight is between {pesoIdeal()}.</p>
                    )
                } else if (imcArredondado >= 25.0 && imcArredondado <= 29.9){
                    return(
                        <p>Your BMI suggests that you are slightly overweight. Your ideal weight is between {pesoIdeal()}.</p>
                    )
                } else if (imcArredondado >= 30.0 && imcArredondado <= 34.9){
                    return(
                        <p>Your BMI suggests you have grade 1 obesity. Your ideal weight is between {pesoIdeal()}.</p>
                    )
                } else if (imcArredondado >= 35.0 && imcArredondado <= 39.9){
                    return(
                        <p>Your BMI suggests you have grade 2 obesity. Your ideal weight is between {pesoIdeal()}.</p>
                    )
                } else if (imcArredondado >= 40.0){
                    return(
                        <p>Your BMI suggests you have grade 3 obesity. Your ideal weight is between {pesoIdeal()}.</p>
                    )
                }
            }

            return(
                <div className={styles.headerCalcResultsIMC}>
                    <div>
                        <h4>Your BMI is...</h4>
                        <h3>{imcArredondado}</h3>
                    </div>
                    <div>
                        <p>{imcIdealMetric()}</p>
                    </div>
                </div>
            )
        } else if (selectedOption === 'option2' && valorFT != 0 && valorIN != 0 && valorST !=0 && valorLBS !=0){
            // Calculando em imperial
            const pesoKG = Math.floor(((valorST * (14 + valorLBS))*0.45359237)/10) //Converter para kg arredondado
            const alturaMetros = ((valorFT * 0.3048) + (valorIN * 0.0254)).toFixed(2)//Converter para metros
            const imc = (pesoKG/(alturaMetros*alturaMetros))
            const imcArredondado = imc.toFixed(1)

            const pesoIdeal = () => {
                const imcMinimo = 18.5; // IMC mínimo para estar na faixa saudável
                const imcMaximo = 24.9; // IMC máximo para estar na faixa saudável

                const pesoMinino = (imcMinimo * (alturaMetros*alturaMetros)).toFixed(2) // Em kgs
                const pesoMaximo = (imcMaximo * (alturaMetros*alturaMetros)).toFixed(2) // Em kgs

                //Conversão de Kgs de peso mínimo para St e Lbs
                const conversaoLbsMin = pesoMinino * 2.20462 // Valor em libras
                const stMin = conversaoLbsMin/14 
                const lbsMin = Math.ceil((stMin - Math.floor(stMin))*10)
                
                //Conversão de Kgs de peso máximo para St e Lbs
                const conversaoLbsMax = pesoMaximo * 2.20462 // Valor em libras
                const stMax = conversaoLbsMax/14 
                const lbsMax = Math.ceil((stMax - Math.floor(stMax))*10)

                const oPesoIdealE = `${Math.floor(stMin)}st ${lbsMin}lbs - ${Math.floor(stMax)}st ${lbsMax}lbs`
                
                return (
                    <b>{oPesoIdealE}</b>
                )
        }

            //Frase de imc ideal
            const imcIdealImperial = () => {
                if(imcArredondado < 18.5){
                    return(
                        <p>Your BMI suggests that you are underweight. Your ideal weight is between {pesoIdeal()}.</p>
                    )
                } else if (imcArredondado >= 18.5 && imcArredondado <= 24.9){
                    return(
                        <p>Your BMI suggests you’re a healthy weight. Your ideal weight is between {pesoIdeal()}.</p>
                    )
                } else if (imcArredondado >= 25.0 && imcArredondado <= 29.9){
                    return(
                        <p>Your BMI suggests that you are slightly overweight. Your ideal weight is between {pesoIdeal()}.</p>
                    )
                } else if (imcArredondado >= 30.0 && imcArredondado <= 34.9){
                    return(
                        <p>Your BMI suggests you have grade 1 obesity. Your ideal weight is between {pesoIdeal()}.</p>
                    )
                } else if (imcArredondado >= 35.0 && imcArredondado <= 39.9){
                    return(
                        <p>Your BMI suggests you have grade 2 obesity. Your ideal weight is between {pesoIdeal()}.</p>
                    )
                } else if (imcArredondado >= 40.0){
                    return(
                        <p>Your BMI suggests you have grade 3 obesity. Your ideal weight is between {pesoIdeal()}.</p>
                    )
                }
            }

            return (
                <div className={styles.headerCalcResultsIMC}>
                    <div>
                        <h4>Your BMI is...</h4>
                        <h3>{imcArredondado}</h3>
                    </div>
                    <div>
                        <p>{imcIdealImperial()}</p>
                    </div>
                </div>
            )
        } else {
            return(
                <div className={styles.headerCalcResultsWelcome}>
                    <h3>Welcome!</h3>
                    <p>Enter your height and weight and you’ll see your BMI result here</p>
                </div>
            )
        }
    }

    return(
        <div className={styles.header}>
            <div className={styles.headerMensage}>
                <h1 className={styles.headerTitle}>Body Mass Index Calculator</h1>
                <p className={styles.headerText}>Better understand your weight in relation to your height using our body mass index (BM) calculator. While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being.</p>
            </div>
            <div className={styles.headerCalc}>
                <h2 className={styles.headerCalcTitle}>Enter your details below</h2>
                <form className={styles.headerCalcForm}>
                    <div>
                        <input type="radio" name="options" value="option1" checked={selectedOption === 'option1'} onChange={handleOptionChange}/>
                        <p className={styles.headerCalcOptions}>Metric</p>    
                    </div>
                    <div>
                        <input type="radio" name="options" value="option2" checked={selectedOption === 'option2'} onChange={handleOptionChange}/>
                        <p className={styles.headerCalcOptions}>Imperial</p>
                    </div>
                </form>
                <div className={styles.headerCalcInputs}>
                    {optionMed()}
                </div>
                <div className={styles.headerCalcResults}>
                    {calculando()}
                </div>
            </div>
        </div>
    )
}

export default Calc