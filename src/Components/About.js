import React, { Component } from 'react';
import './About.css';

class About extends Component {
    render() {
        return (
            <div className="about-container">
                <div class="row">
                    <div class="col s12">
                        <h3>About us</h3>
                    </div>
                    <div class="col s12">
                        <img src="https://jyplevel2storage01.blob.core.windows.net/itzy/94ea256d627045ffa34838376023ccfa-ITZY_CHESHIRE_%ED%94%84%EB%A1%9C%ED%95%84_398-285.jpg" alt="img" style={{ width: "25%", textAlign: "center" }} />
                    </div>
                    <div class="col s12">
                        <p>Itzy (stylized in all caps; Korean: 있지; RR: Itji; MR: Itchi) is a South Korean girl group formed by JYP Entertainment and consisting of members Yeji, Lia, Ryujin, Chaeryeong, and Yuna. They debuted on February 12, 2019, with the release of their single album It'z Different. Their accolades include Rookie of the Year at the 34th Golden Disc Awards, New Artist of the Year at the 9th Gaon Chart Music Awards and 2019 Melon Music Awards, Best New Female Artist at the 2019 Mnet Asian Music Awards, and the New Artist Award at the 29th Seoul Music Awards; they are the first K-pop girl group to achieve such a "Rookie Grand Slam"</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;