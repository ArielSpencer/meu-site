import './Banner.css';
import Skills from '../Skills';
import Botao from '../Botao';

const Banner = () => {
    return (
      <div className="banner" >
        <h1>Olá, sou Ariel Spencer.</h1>
        <h2>Desenvolvedor Front-End</h2>
        <Skills />
        <Botao />
      </div>
    );
};

export default Banner