import './Cards.css';

function Cards() {
    return (
        <div className='corpo-card'>
            <h2>Nossos Projetos</h2>
            <div className='cards'>
                <div className="card">
                    <h3>¡Congratulations!</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit ligula fusce urna nisl, quam conubia nam sapien id penatibus.</p>
                    <button>Continue</button>
                </div>
                <div className="card">
                    <h3>¡Congratulations!</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit ligula fusce urna nisl, quam conubia nam sapien id penatibus.</p>
                    <button>Continue</button>
                </div>
                <div className="card">
                    <h3>¡Congratulations!</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit ligula fusce urna nisl, quam conubia nam sapien id penatibus.</p>
                    <button>Continue</button>
                </div>
                {/* Adicione mais cards aqui, que serão automaticamente organizados em fileiras de três */}
            </div>

            <div className='cards'>
                <div className="card">
                    <h3>¡Congratulations!</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit ligula fusce urna nisl, quam conubia nam sapien id penatibus.</p>
                    <button>Continue</button>
                </div>
                <div className="card">
                    <h3>¡Congratulations!</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit ligula fusce urna nisl, quam conubia nam sapien id penatibus.</p>
                    <button>Continue</button>
                </div>
                <div className="card">
                    <h3>¡Congratulations!</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit ligula fusce urna nisl, quam conubia nam sapien id penatibus.</p>
                    <button>Continue</button>
                </div>
                {/* Adicione mais cards aqui, que serão automaticamente organizados em fileiras de três */}
            </div>
        </div>
    );
}

export default Cards;
