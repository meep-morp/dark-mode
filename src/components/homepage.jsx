import React from "react";
import stocks from "../images/stocks.jpg"
import { Link } from "react-router-dom";

const Home = props => {
    return (
        <div className="home">
            <h1>--Crypto Tracker--</h1>
            <h2>Keep up to date on the current trends.</h2>
            <img
                src={stocks}
                alt="Crypto Tracker Logo and Background"
                className="background"
            />
            <Link className="button" to="/charts">CRYPTOS →</Link>
        </div>
    )
}

export default Home;