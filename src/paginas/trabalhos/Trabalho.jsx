import './Trabalho.css'
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function Trabalho() {

    const navigate = useNavigate()
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

            <body className='trabalho-body'>
                <div className='summary'>
                    <p className='text-sumary'>Hermeneutics is the study of interpretation. Hermeneutics plays a role in a number of disciplines whose subject matter demands interpretative approaches, characteristically, because the disciplinary subject matter concerns the meaning of human intentions, beliefs, and actions, or the meaning of human experience as it is preserved in the arts and literature, historical testimony, and other artifacts. Traditionally, disciplines that rely on hermeneutics include theology, especially Biblical studies, jurisprudence, and medicine, as well as some of the human sciences, social sciences, and humanities. In such contexts, hermeneutics is sometimes described as an “auxiliary” study of the arts, methods, and foundations of research appropriate to a respective disciplinary subject matter (Grondin 1994, 1). For example, in theology, Biblical hermeneutics concerns the general principles for the proper interpretation of the Bible. More recently, applied hermeneutics has been further developed as a research method for a number of disciplines (see, for example, Moules inter alia 2015).</p>
                    <ul className='summaryList'>
                        <p>sumario</p>
                        <li><a> capitulo 1</a> </li>
                        <li><a> capitulo 2</a> </li>
                        <li><a> capitulo 3</a> </li>
                        <li><a> capitulo 4</a> </li>
                        <li><a> capitulo 5</a> </li>
                        <li><a> capitulo 6</a> </li>

                    </ul>
                </div>
                <div className='textTitle'>
                    <h1>titulo</h1>
                </div>

                <section className='section-trabalho'>
                    <h2>titulo</h2>
                    <p>In hermeneutics, interpretive experience is typically clarified in reference to understanding. In this context, when we say that we understand, what we mean is that we have really gotten at something through an attempt at interpretation; and, when we say we do not understand, we mean that we have not really gotten anywhere at all with our interpretation. For this reason, understanding can be described as a ‘success’ of interpretation (even if, since Heidegger, understanding is more commonly described as a fulfillment, realization, or enactment). In hermeneutics, such success of understanding is not measured by norms and methods typical of the modern natural sciences and quantitative social sciences, such as whether our understanding derives from a repeatable experiment, nor by norms typical of much of modern philosophy, such as whether our understanding has indubitable epistemic foundations.</p>
                </section>
                <section className='section-trabalho'>
                    <h2>titulo2</h2>
                    <p>In hermeneutics, interpretive experience is typically clarified in reference to understanding. In this context, when we say that we understand, what we mean is that we have really gotten at something through an attempt at interpretation; and, when we say we do not understand, we mean that we have not really gotten anywhere at all with our interpretation. For this reason, understanding can be described as a ‘success’ of interpretation (even if, since Heidegger, understanding is more commonly described as a fulfillment, realization, or enactment). In hermeneutics, such success of understanding is not measured by norms and methods typical of the modern natural sciences and quantitative social sciences, such as whether our understanding derives from a repeatable experiment, nor by norms typical of much of modern philosophy, such as whether our understanding has indubitable epistemic foundations.</p>
                </section>
                <section className='section-trabalho'>
                    <h2>titulo3</h2>
                    <p>In hermeneutics, interpretive experience is typically clarified in reference to understanding. In this context, when we say that we understand, what we mean is that we have really gotten at something through an attempt at interpretation; and, when we say we do not understand, we mean that we have not really gotten anywhere at all with our interpretation. For this reason, understanding can be described as a ‘success’ of interpretation (even if, since Heidegger, understanding is more commonly described as a fulfillment, realization, or enactment). In hermeneutics, such success of understanding is not measured by norms and methods typical of the modern natural sciences and quantitative social sciences, such as whether our understanding derives from a repeatable experiment, nor by norms typical of much of modern philosophy, such as whether our understanding has indubitable epistemic foundations.</p>
                </section>
                <section className='section-trabalho'>
                    <h2>titulo4</h2>
                    <p>In hermeneutics, interpretive experience is typically clarified in reference to understanding. In this context, when we say that we understand, what we mean is that we have really gotten at something through an attempt at interpretation; and, when we say we do not understand, we mean that we have not really gotten anywhere at all with our interpretation. For this reason, understanding can be described as a ‘success’ of interpretation (even if, since Heidegger, understanding is more commonly described as a fulfillment, realization, or enactment). In hermeneutics, such success of understanding is not measured by norms and methods typical of the modern natural sciences and quantitative social sciences, such as whether our understanding derives from a repeatable experiment, nor by norms typical of much of modern philosophy, such as whether our understanding has indubitable epistemic foundations.</p>
                </section>
                <section className='section-trabalho'>
                    <h2>titulo5</h2>
                    <p>In hermeneutics, interpretive experience is typically clarified in reference to understanding. In this context, when we say that we understand, what we mean is that we have really gotten at something through an attempt at interpretation; and, when we say we do not understand, we mean that we have not really gotten anywhere at all with our interpretation. For this reason, understanding can be described as a ‘success’ of interpretation (even if, since Heidegger, understanding is more commonly described as a fulfillment, realization, or enactment). In hermeneutics, such success of understanding is not measured by norms and methods typical of the modern natural sciences and quantitative social sciences, such as whether our understanding derives from a repeatable experiment, nor by norms typical of much of modern philosophy, such as whether our understanding has indubitable epistemic foundations.</p>
                </section>
                <section className='section-trabalho'>
                    <h2>titulo6</h2>
                    <p>In hermeneutics, interpretive experience is typically clarified in reference to understanding. In this context, when we say that we understand, what we mean is that we have really gotten at something through an attempt at interpretation; and, when we say we do not understand, we mean that we have not really gotten anywhere at all with our interpretation. For this reason, understanding can be described as a ‘success’ of interpretation (even if, since Heidegger, understanding is more commonly described as a fulfillment, realization, or enactment). In hermeneutics, such success of understanding is not measured by norms and methods typical of the modern natural sciences and quantitative social sciences, such as whether our understanding derives from a repeatable experiment, nor by norms typical of much of modern philosophy, such as whether our understanding has indubitable epistemic foundations.</p>
                </section>
            </body>




        </>
    )
}


