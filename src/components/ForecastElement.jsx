import { useState } from "react";
import { Col,Row } from "react-bootstrap";
import { Collapse } from "react-bootstrap";
import SubForecastElement from "./SubForecastElement";

const ForecastElement = (props) => {
    const getWeatherIconUrl = (iconCode) => {
        return `https://openweathermap.org/img/wn/${iconCode}.png`;
    };
    const temperatureMax = props.maxTemp.toFixed(1);
    const temperatureMin = props.minTemp.toFixed(1);
    const dateObject = new Date(props.date);
    const options = { weekday: "short", day: "2-digit" };
    const dayOfWeek = dateObject.toLocaleDateString("it-IT", options).toUpperCase();
    const [isVisible, setVisibility] = useState(false);
    const invokeCollapse = () => {
        setVisibility(!isVisible);
    };

    return (
        <>
        <Row className="cursor input-group rounded-4  mb-2 pt-2" onClick={invokeCollapse}>
            <Col xs={4} className="d-flex">
            {isVisible ? (
                <i className="bi bi-caret-up-fill me-1 arrow-1-anim"></i>
            ) : (
                <i className="bi bi-caret-down-fill me-1"></i>
            )}
            <p>{dayOfWeek}</p>
            </Col>
            <Col xs={2} className="ps-4">
            <img src={getWeatherIconUrl(props.iconCodes)} alt="Icona meteo" style={{ width: "35px" }} />
            </Col>
            <Col className="ps-4">
            <p>{temperatureMax}°C</p>
            </Col>
            <Col className="ps-4">
            <p>{temperatureMin}°C</p>
            </Col>
        </Row>

        <Collapse in={isVisible}>
            <div className=" mb-3">
            {props.forecastDayData.elementi.map((elemento, index) => (
                <SubForecastElement
                key={`sub-id-${index}`}
                ora={elemento.dt_txt}
                tempMin={elemento.main.temp_min.toFixed(1)}
                tempMax={elemento.main.temp_max.toFixed(1)}
                icon={elemento.weather[0].icon}
                />
            ))}
            <div className="border-forecast"></div>
            </div>
        </Collapse>
        </>
    );
};


export default ForecastElement;
