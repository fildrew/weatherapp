import {  useState } from "react";
import { Button,Col, Container, Form,  Row, InputGroup} from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const WeatherApp = () => {
    const [cityName, setCityName] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/WeatherShow/${cityName}`);
    }

    return (
        <>
            <Container>
                <Row
                    className="text-center
                "
                >
                    <Col></Col>
                    <Col xs={10} className="mt-5">
                    <h1 className="display-1">Weather+</h1>
        
                    <Form onSubmit={handleSubmit}>
                        <Row>
                        <Col></Col>
                        <Col xs={10} md={8} lg={6}>
                            <InputGroup className="mt-2 border-0">
                            <Form.Control
                                className="rounded-pill input-group "
                                placeholder="Inserisci una città..."
                                aria-label="City Name"
                                aria-describedby="basic-addon2"
                                value={cityName}
                                onChange={(e) => {
                                setCityName(e.target.value);
                                }}
                            />
                            <Button variant="outline-secondary" id="button-addon2" type="submit" className="d-none">
                                <i className="bi bi-search"></i>
                            </Button>
                            </InputGroup>
                        </Col>
                        <Col></Col>
                        </Row>
                    </Form>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </>
    )
}

export default WeatherApp