import './Cards.css';
import { useNavigate } from 'react-router-dom';

function Cards() {
    const navigate = useNavigate();
    // const apiDados = import.meta.env.VITE_Api_Dados

    // const handleClick = (id) => {
    //     navigate(`/trabalho/${id}`);
    // };



    const handleClick = (e) => {
        e.preventDefault(); // Evita o comportamento padrão do botão
        navigate(`/trabalho/`);
    };
    return (
        <div className='corpo-card'>
            <h2>Nossos Projetos</h2>
            <div className='cards'>
                <div className="card">
                    <h3>¡Congratulations!</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit ligula fusce urna nisl, quam conubia nam sapien id penatibus.</p>
                    <button onClick={handleClick}>Continue</button>
                </div>
                <div className="card">
                    <h3>¡Congratulations!</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit ligula fusce urna nisl, quam conubia nam sapien id penatibus.</p>
                    <button onClick={handleClick}>Continue</button>
                </div>
                <div className="card">
                    <h3>¡Congratulations!</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit ligula fusce urna nisl, quam conubia nam sapien id penatibus.</p>
                    <button onClick={handleClick}>Continue</button>
                </div>
                {/* Adicione mais cards aqui, que serão automaticamente organizados em fileiras de três */}
            </div>

            <div className='cards'>
                <div className="card">
                    <h3>¡Congratulations!</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit ligula fusce urna nisl, quam conubia nam sapien id penatibus.</p>
                    <button onClick={handleClick}>Continue</button>
                </div>
                <div className="card">
                    <h3>¡Congratulations!</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit ligula fusce urna nisl, quam conubia nam sapien id penatibus.</p>
                    <button onClick={handleClick}>Continue</button>
                </div>
                <div className="card">
                    <h3>¡Congratulations!</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit ligula fusce urna nisl, quam conubia nam sapien id penatibus.</p>
                    <button onClick={handleClick}>Continue</button>
                </div>
                {/* Adicione mais cards aqui, que serão automaticamente organizados em fileiras de três */}
            </div>
        </div>
    );
}

export default Cards;
