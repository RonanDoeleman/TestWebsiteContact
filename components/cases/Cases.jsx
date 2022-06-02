import React from 'react';
import './Cases.css';
import Foto from "../images/fotovandame.jpg";


const Cases = () =>{
   
        return(  
            <React.Fragment>
            <div className="cases-pagina">
                <div className="titelpositie">
                    <h1>Cases</h1>
                </div>

                <div className="case-big">
                    <a href="/"><img className="foto-big" src={Foto} alt="."></img></a>
                        <div className="case-big-content">
                            <h2>"Case"</h2>
                                <p>"Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam quis nostrud...
                                </p>
                            <a href="/" className="button">Lees Meer</a>
                        </div>
                </div>

                <div className="cases-small">
                    <div className="container-case-small">
                        <div className="case-small-1">
                            <a href="/"><img className="foto" src={Foto} alt="."></img></a>
                                <h2>Case1</h2>
                                    <p>
                                       Lorem ipsum dolor sit amet, consectetur
                                       adipiscing elit, sed do eiusmod tempor
                                       incididunt ut labore et dolore magna aliqua...
                                    </p>

                            <a href="/" className="button">Lees Meer</a>
                        </div>
                        <div className="case-small-2">
                            <a href="/"><img className="foto" src={Foto} alt="."></img></a>
                                <h2>Case2</h2>
                                    <p>
                                       Lorem ipsum dolor sit amet, consectetur
                                       adipiscing elit, sed do eiusmod tempor
                                       incididunt ut labore et dolore magna aliqua...
                                    </p>

                            <a href="/" className="button">Lees Meer</a>
                        </div>
                    </div>
                </div>

                <div className="customer-reviews">
                    <h1>Wat vinden onze klanten?</h1>

                    <div className="customer-review-1">
                        <img src={Foto} alt=""></img>
                            <p>"Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam quis nostrud...
                            </p>
                            <h3>Bas van der Voort, Communication</h3>
                            <p>Coca Cola</p>
                    </div>
                    
                </div>
                <div className="case-big2">
                        <div className="case-big-content">
                            <h2>"Case"</h2>
                                <p>"Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam quis nostrud...
                                </p>
                            <a href="/" className="button">Lees Meer</a>
                        </div>
                    <a href="/"><img className="foto-big" src={Foto} alt="."></img></a>
                </div>

                <div className="cases-small">
                    <div className="container-case-small">
                        <div className="case-small-1">
                            <a href="/"><img className="foto" src={Foto} alt="."></img></a>
                                <h2>Case1</h2>
                                    <p>
                                       Lorem ipsum dolor sit amet, consectetur
                                       adipiscing elit, sed do eiusmod tempor
                                       incididunt ut labore et dolore magna aliqua...
                                    </p>

                            <a href="/" className="button">Lees Meer</a>
                        </div>
                        <div className="case-small-2">
                            <a href="/"><img className="foto" src={Foto} alt="."></img></a>
                                <h2>Case2</h2>
                                    <p>
                                       Lorem ipsum dolor sit amet, consectetur
                                       adipiscing elit, sed do eiusmod tempor
                                       incididunt ut labore et dolore magna aliqua...
                                    </p>

                            <a href="/" className="button">Lees Meer</a>
                        </div>
                    </div>
                </div>

            </div>
            </React.Fragment>
        );
    };
   
export default Cases;