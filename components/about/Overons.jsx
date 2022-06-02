import React, { Component } from 'react';
import './Overons.css';
import Foto from "../images/fotovandame.jpg";

const Overons = () =>{
  
        return(  
            <React.Fragment>
                <div className="overons-pagina">
                    <div className="positiegrid">
                    <div className="titelpositie">
                        <h1>Hi, ik ben Ronan</h1>
                    </div>
                        <div className="tekstpositie">
                            <p>"Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam quis nostrud
                                exercitation ullamco laboris nisi ut aliquip
                                ex ea commodo consequat. Duis aute irure
                                dolor in reprehenderit in voluptate velit
                                esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia deserunt mollit anim
                                id est laborum."
                            </p>
                        </div>
                        <div className="fotopositie">
                            <a href="/"><img className="foto" src={Foto} alt="."></img></a>
                        </div>

                    </div>

                    <div className="watwijdoen">
                        <div className="titelpositie1">
                            <h1>Wat ik doe</h1>
                        </div>
                        <div>
                            <div className="onzekennis">
                                <div className="lijst">
                                    <h2>Hoi</h2>
                                </div>  
                                <div className="lijst">
                                    <h2>Hoi</h2>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div> 

                <div className="quote-overons">
                    <h1>"Hele inspirerende quote"</h1>
                </div>

            <div className="overons-pagina">
                <div className="positiegrid">
                        <div className="titelpositie">
                            <h1>Ons Talent</h1>
                        </div>
                            <div className="tekstpositie">
                                <p>"Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate velit
                                    esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident,
                                    sunt in culpa qui officia deserunt mollit anim
                                    id est laborum."
                                </p>
                            </div>
                            <div className="fotopositie">
                                <a href="/"><img className="foto" src={Foto} alt="."></img></a>
                            </div>
                </div>
            </div>
            </React.Fragment>           
        );
    };
  
export default Overons;