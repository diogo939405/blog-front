import { useEffect, useState } from 'react';
import './Cards.css';
import { useNavigate } from 'react-router-dom';

import PropTypes from 'prop-types';

function Cards({ dados, search }) {
    const navigate = useNavigate();


    const handleClick = (id) => {
        navigate(`/trabalho/${id}`);
        console.log(id);
    };

    const filteredDados = dados.filter((item) =>
        search === '' || item.titulo.toLowerCase().includes(search.toLowerCase())
    );
    return (
        <div className='corpo-card'>
            <div className='cards'>
                {filteredDados.length > 0 ? (
                    filteredDados.map((item) => (
                        <div key={item._id} className="card">
                            <h3>{item.titulo}</h3>
                            <p>{item.descricao}</p>
                            <button onClick={() => handleClick(item._id)}>Continue</button>
                        </div>
                    ))
                ) : (
                    <div className="no-results">
                        <p>Nenhum resultado encontrado.</p>
                    </div>
                )}
            </div>
        </div>
    );

}

Cards.propTypes = {
    dados: PropTypes.array,
    search: PropTypes.string,

};

export default Cards;
