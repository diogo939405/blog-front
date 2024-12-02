import { useEffect, useState } from 'react';
import './Trabalho.css'
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import FloatButton from '../../components/floatButtons/FloatButtons';

export default function Trabalho() {
    const apiDados = import.meta.env.VITE_Api_Dados
    const { id } = useParams()
    const navigate = useNavigate()
    const [info, setInfo] = useState([])

    useEffect(() => {
        axios.get(`${apiDados}${id}`)
            .then(respo => {
                console.log(respo.data); // Verifique a estrutura aqui
                setInfo(respo.data); // Supondo que respo.data seja um array
            })
            .catch(error => console.log('Erro ao buscar os dados:', error));
    }, [])

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <FloatButton />
            <header className='cabecalho-trabalho'>
                <Container>
                    <Row id='principal-row'>
                        <Col sm={6}>
                            <div>
                                <h1 className='tituloTrabalho'>Titulo do projeto</h1>
                            </div>
                        </Col>
                        <div className='corpo-buttonn'>
                            <button onClick={() => navigate('/')}>Voltar a Home</button>
                        </div>
                    </Row>
                </Container>
            </header>

            <main className='trabalho-body'>
                <div className='summary'>

                    <p className='text-sumary'>{info.descricao}</p>
                    <ul className='summaryList'>
                        <p>Sumario</p>

                        {
                            info.capitulos && info.capitulos.length > 0 ? (
                                info.capitulos.map((capitulo, index) => (
                                    <li className='sumario-link' key={index} onClick={() => scrollToSection(`capitulo${index + 1}`)}>
                                        {capitulo.titulo}
                                    </li>
                                ))
                            ) : (
                                <p>Nenhum capitulo disponível.</p>
                            )
                        }

                    </ul>
                </div>
                <div className='textTitle'>
                    <h1>{info.titulo}</h1>
                </div>

                {info.capitulos && info.capitulos.length > 0 ? (
                    info.capitulos.map((capitulo, index) => (
                        <section key={index} id={`capitulo${index + 1}`}>
                            <div className='capitulo-intro'>
                                <h2 className='tituloCap'>{capitulo.titulo}</h2>
                                <p className='textoCap'>{capitulo.texto}</p>

                            </div>
                            {capitulo.subCapitulos.map((subCapitulos, subIndex) => (
                                <div key={subIndex} className='subCapitulo'>
                                    <h4 className='tituloSub'>{subCapitulos.titulo}</h4>
                                    <p>{subCapitulos.texto}</p>
                                </div>
                            ))}
                        </section>
                    ))
                ) : (
                    <p>Sem capítulos para mostrar.</p>
                )}

            </main >
        </>
    )
}


