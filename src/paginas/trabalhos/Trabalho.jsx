import { useEffect, useState } from 'react';
import './Trabalho.css'
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

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

                    <p className='text-sumary'>Hermeneutics is the study of interpretation. Hermeneutics plays a role in a number of disciplines whose subject matter demands interpretative approaches, characteristically, because the disciplinary subject matter concerns the meaning of human intentions, beliefs, and actions, or the meaning of human experience as it is preserved in the arts and literature, historical testimony, and other artifacts. Traditionally, disciplines that rely on hermeneutics include theology, especially Biblical studies, jurisprudence, and medicine, as well as some of the human sciences, social sciences, and humanities. In such contexts, hermeneutics is sometimes described as an auxiliary study of the arts, methods, and foundations of research appropriate to a respective disciplinary subject matter (Grondin 1994, 1). For example, in theology, Biblical hermeneutics concerns the general principles for the proper interpretation of the Bible. More recently, applied hermeneutics has been further developed as a research method for a number of disciplines (see, for example, Moules inter alia 2015).</p>
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
                    <h1>titulo</h1>
                </div>

                {info.capitulos && info.capitulos.length > 0 ? (
                    info.capitulos.map((capitulo, index) => (
                        <section key={index} id={`capitulo${index + 1}`}>
                            <h3>{capitulo.titulo}</h3>
                            <p>{capitulo.texto}</p>
                        </section>
                    ))
                ) : (
                    <p>Sem capítulos para mostrar.</p>
                )}

            </main >
        </>
    )
}


