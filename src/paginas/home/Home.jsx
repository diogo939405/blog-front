import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Home.css';
import axios from 'axios';
import Cards from '../../components/cards/Cards';

export default function Home() {
    const [float, setFloat] = useState(false);
    const apiDados = import.meta.env.VITE_Api_Dados
    const [dados, setDados] = useState([]);
    const [search, setSearch] = useState('')

    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 100 ? setFloat(true) : setFloat(false);
        });
    }, []);

    useEffect(() => {
        const fecthData = async () => {
            try {
                const response = await axios.get(`${apiDados}`);
                console.log(response.data);
                setDados(response.data);
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        };
        fecthData();
    }, [])

    const scrollToMiddle = (e) => {
        e.preventDefault(); // Previne comportamento padrão
        window.scrollTo({
            top: window.innerHeight / 1, // Define a metade da altura da tela
            behavior: "smooth",
        });
    };

    const handleChange = (e) => {
        setSearch(e.target.value);
        console.log(search);
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
                    <div className='titulo-card'>
                        <h2>Nossos Projetos</h2>
                    </div>
                    <input className='input-pesquisar' onChange={(e) => setSearch(e.target.value)} type="text" placeholder='Pesquisar' />
                    <Row >
                        <Cards dados={dados} handleChange={handleChange} search={search} />
                    </Row>
                </Container>
            </body>
        </>
    );
}
