import PhotoMen from '../../../image/image_men.png'

import Food from '../../../image/ph_bowl-food-light.png'
import Barbell from '../../../image/ph_barbell-light.png'
import Moon from '../../../image/ph_moon-stars-light.png'

import Gender from '../../../image/ph_gender-intersex-light.png'
import Age from '../../../image/ph_cake-light.png'
import Muscle from '../../../image/fluent-emoji-high-contrast_flexed-biceps.png'
import Pregnancy from '../../../image/ph_baby-light.png'
import Race from '../../../image/ph_person-light.png'

import styles from './Body.module.scss'

const Body = () =>{

    return(
        <>
            <div className={styles.section1}>
                <div className={styles.section1Image}>
                    <img src={PhotoMen}  alt="Homem comendo comida japonesa" />
                </div>
                <div className={styles.section1Text}>
                    <h2 className={styles.section1TextTitle}>What your BMI result means</h2>
                    <p className={styles.section1TextInfo}>A BMI range of 18.5 to 24.9 is considered a 'healthy weight.' Maintaining a healthy weight may lower your chances of experiencing health issues later on, such as obesity and type 2 diabetes. Aim for a nutritious diet with reduced fat and sugar content, incorporating ample fruits and vegetables. Additionally, strive for regular physical activity, ideally about 30 minutes daily for five days a week.</p>
                </div>
            </div>

            <div className={styles.section2}>
                <div className={styles.section2Advice}>
                    <div className={styles.section2AdviceImage}>
                        <img src={Food} alt="Comida" />
                    </div>
                    <section>
                        <h4 className={styles.section2AdviceTitle}>Healthy eating</h4>
                        <p className={styles.section2AdviceText}>Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.</p>
                    </section>
                </div>
                <div className={styles.section2Advice}>
                    <div className={styles.section2AdviceImage}>
                        <img src={Barbell} alt="Barra de musculação" />
                    </div>
                    <section>
                        <h4 className={styles.section2AdviceTitle}>Regular exercise</h4>
                        <p className={styles.section2AdviceText}>Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.</p>
                    </section>
                </div>
                <div className={styles.section2Advice}>
                    <div className={styles.section2AdviceImage}>
                        <img src={Moon} alt="Lua" />
                    </div>
                    <section>
                        <h4 className={styles.section2AdviceTitle}>Adequate sleep</h4>
                        <p className={styles.section2AdviceText}>Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.</p>
                    </section>
                </div>
            </div>

            <div>
                <h3>Limitations of BMI</h3>
                <p>Although BMI is often a practical indicator of healthy weight, it is not suited for every person. Specific groups should carefully consider their BMI outcomes, and in certain cases, the measurement may not be beneficial to use.</p>
            </div>

            <div>
                <div>
                    <div>
                        <img src={Gender} alt="Gender" />
                        <h4>Gender</h4>
                    </div>
                    <p>The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI.</p>
                </div>
                <div>
                    <div>
                        <img src={Age} alt="Age" />
                        <h4>Age</h4>
                    </div>
                    <p>In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.</p>
                </div>
                <div>
                    <div>
                        <img src={Muscle} alt="Muscle" />
                        <h4>Muscle</h4>
                    </div>
                    <p>BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat.</p>
                </div>
                <div>
                    <div>
                        <img src={Pregnancy} alt="Pregnancy" />
                        <h4>Pregnancy</h4>
                    </div>
                    <p>Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child.</p>
                </div>
                <div>
                    <div>
                        <img src={Race} alt="Race" />
                        <h4>Race</h4>
                    </div>
                    <p>Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse.</p>
                </div>
            </div>
        </>
    )
}

export default Body