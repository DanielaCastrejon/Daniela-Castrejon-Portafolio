import styles from './HeroStyles.module.css'
import heroImg from '../../assets/Perfil_DC_IMG-1.png';
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import CV from '../../assets/Daniela_Castrejon_CV.pdf'
import {useTheme } from '../../common/ThemeContext'



    function Hero() {
        const { theme, toggleTheme } = useTheme();
    
        const themeIcon = theme === 'light' ? sun : moon;
        const githubIcon = theme === 'light' ? githubLight : githubDark;
        const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
    
        return (
        <section id="hero" className={styles.container}>
            <div className={styles.colorModeContainer}>
            <img
                src={heroImg}
                className={styles.hero}
                alt="Profile picture of Daniela"
            />
            <img
                className={styles.colorMode}
                src={themeIcon}
                alt="Color mode icon"
                onClick={toggleTheme}
            />
            </div>
            <div className={styles.info}>
            <h1>
                Daniela
                <br />
                Castrejon
            </h1>
            <h2>Frontend Developer</h2>
            <span>
                <a href="https://github.com/DanielaCastrejon" target="_blank">
                <img src={githubIcon} alt="Github icon" />
                </a>
                <a href="https://www.linkedin.com/in/daniela-castrej%C3%B3n-ab7965282/" target="_blank">
                <img src={linkedinIcon} alt="Linkedin icon" />
                </a>
            </span>
            <p className={styles.description}>
                Frontend developer, doglover, apasionada de los libros y la tecnología.
            </p>
            <a href={CV} download>
                <button className="hover">Resume</button>
            </a>
            </div>
        </section>
        );
    }
    
    export default Hero;