import React, { useState } from "react";

export const TrafficLight = () => {

    const [light, setLight] = useState("");

    const colorStyle = (selectedLight) => ({
        height: '150px',
        width: '150px',
        borderRadius: '50%',
        margin: '4px',
        background: selectedLight,
        opacity: light === selectedLight ? 1 : 0.3,
        boxShadow: light === selectedLight
            ? `0 0 20px 10px ${selectedLight}`
            : 'none',
    });


    return (
        <div className="container d-flex flex-column justify-content-center align-items-center p-3">
            <div className="d-flex justify-content-center align-items-center bg-dark p-3"
                style={{ height: "100px", width: "10px" }}></div>
            <div className="row d-flex justify-content-center align-items-center bg-dark p-3 rounded"
                style={{ height: "500px", width: "200px" }}>
                <div
                    className="d-flex justify-content-center align-items-center p-3"
                    style={colorStyle("red")}
                    onClick={() => light == "red" ? setLight("") : setLight("red")}
                ></div>
                <div
                    className="d-flex justify-content-center align-items-center p-3"
                    style={colorStyle("yellow")}
                    onClick={() => light == "yellow" ? setLight("") : setLight("yellow")}
                ></div>
                <div
                    className="d-flex justify-content-center align-items-center p-3"
                    style={colorStyle("green")}
                    onClick={() => light == "green" ? setLight("") : setLight("green")}
                ></div>

            </div >
        </div>
    );
}