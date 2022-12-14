import React, { Component } from 'react';
import '../../App.css';

const initData = {
    pre_heading: "Liquidity Locker",
    heading: "The only Liquidity Locker that rewards holders.",
    content: "Hold SENPAI and enjoy rewards",
    btn_1: "Uniswap V2",
    btn_2: "Pancake V2",
    btn_3: "BUY SENPAI"
}

class Hero extends Component {
    state = {
        data: {}
    }
    componentDidMount(){
        this.setState({
            data: initData
        })
    }
    render() {
        return (
            <section className="hero-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-lg-9">
                            <span>{this.state.data.pre_heading}</span> 
                            <h1 className="mt-4">{this.state.data.heading}</h1>
                            <p>{this.state.data.content}</p>
                            {/* Buttons */}
                            <div className="button-group">
                                <a className="btn btn-bordered-white senpai_button" href="https://app.uniswap.org/#/swap?outputCurrency=0x2a665313eaa58dde2eff6a8b8c88fbec2eb18a39" target="_blank">{this.state.data.btn_3}</a>
                                <a className="btn btn-bordered-white" href="/uniswapv2"><img className="uniswap_logo_button" src = "./img/uniswap_logo.png" />{this.state.data.btn_1}</a>
                                <a className="btn btn-bordered-white" href="/pancakev2"><img className="pancake_logo_button" src = "./img/pancake_logo.png" />{this.state.data.btn_2}</a>
                                
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-3 my-auto text-center">
                            <img src='/img/character.png'  alt="character image"/>
                        </div>
                    </div>
                </div>
                {/* Shape */}
                <div className="shape">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 465" version="1.1">
                        <defs>
                            <linearGradient x1="49.7965246%" y1="28.2355058%" x2="49.7778147%" y2="98.4657689%" id="linearGradient-1">
                            <stop stopColor="rgba(69,40,220, 0.15)" offset="0%" />
                            <stop stopColor="rgba(87,4,138, 0.15)" offset="100%" />
                            </linearGradient>
                        </defs>
                        <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                            <polygon points fill="url(#linearGradient-1)">
                            <animate id="graph-animation" xmlns="http://www.w3.org/2000/svg" dur="2s" repeatCount attributeName="points" values="0,464 0,464 111.6,464 282.5,464 457.4,464 613.4,464 762.3,464 912.3,464 1068.2,464 1191.2,464 1328.1,464 1440.1,464 1440.1,464 0,464; 0,464 0,367 111.6,323.3 282.5,373 457.4,423.8 613.4,464 762.3,464 912.3,464 1068.2,464 1191.2,464 1328.1,464 1440.1,464 1440.1,464 0,464; 0,464 0,367 111.6,263 282.5,336.6 457.4,363.5 613.4,414.4 762.3,464 912.3,464 1068.2,464 1191.2,464 1328.1,464 1440.1,464 1440.1,464 0,464; 0,464 0,367 111.6,263 282.5,282 457.4,323.3 613.4,340 762.3,425.6 912.3,464 1068.2,464 1191.2,464 1328.1,464 1440.1,464 1440.1,464 0,464; 0,464 0,367 111.6,263 282.5,282 457.4,263 613.4,290.4 762.3,368 912.3,446.4 1068.2,464 1191.2,464 1328.1,464 1440.1,464 1440.1,464 0,464; 0,464 0,367 111.6,263 282.5,282 457.4,263 613.4,216 762.3,329.6 912.3,420 1068.2,427.6 1191.2,464 1328.1,464 1440.1,464 1440.1,464 0,464; 0,464 0,367 111.6,263 282.5,282 457.4,263 613.4,216 762.3,272 912.3,402.4 1068.2,373 1191.2,412 1328.1,464 1440.1,464 1440.1,464 0,464; 0,464 0,367 111.6,263 282.5,282 457.4,263 613.4,216 762.3,272 912.3,376 1068.2,336.6 1191.2,334 1328.1,404 1440.1,464 1440.1,464 0,464; 0,464 0,367 111.6,263 282.5,282 457.4,263 613.4,216 762.3,272 912.3,376 1068.2,282 1191.2,282 1328.1,314 1440.1,372.8 1440.1,464 0,464; 0,464 0,367 111.6,263 282.5,282 457.4,263 613.4,216 762.3,272 912.3,376 1068.2,282 1191.2,204 1328.1,254 1440.1,236 1440.1,464 0,464; 0,464 0,367 111.6,263 282.5,282 457.4,263 613.4,216 762.3,272 912.3,376 1068.2,282 1191.2,204 1328.1,164 1440.1,144.79999999999998 1440.1,464 0,464; 0,464 0,367 111.6,263 282.5,282 457.4,263 613.4,216 762.3,272 912.3,376 1068.2,282 1191.2,204 1328.1,164 1440.1,8 1440.1,464 0,464;" fill="freeze" />
                            </polygon>
                        </g>
                    </svg>
                </div>
            </section>
        );
    }
}

export default Hero;