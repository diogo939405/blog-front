import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Home.css';
import Cards from '../../components/cards/Cards';

export default function Home() {
    const [float, setFloat] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 100 ? setFloat(true) : setFloat(false);
        });
    }, []);

    const scrollToMiddle = () => {
        window.scrollTo({
            top: window.innerHeight / 1,  // Define a metade da altura da tela
            behavior: "smooth"
        });
    };

    return (
        <>
            <header className='cabecalho'>
                <Container>
                    <Row id='principal-row'>
                        <Col sm={6}>
                            <div className='cabecalho-text'>
                                <h1>Bem vindo ao nosso blog</h1>
                            </div>
                        </Col>
                        <div className='corpo-button'>
                            <button onClick={scrollToMiddle}>Saiba mais</button>
                        </div>
                    </Row>
                </Container>
            </header>
            <body className='card-body'>
                <Container>
                    <Row >
                        <Cards />
                    </Row>
                </Container>
            </body>
        </>
    );
}
