// import React from 'react';
// import './Quote.css';
// import { useState } from 'react';

// const Quote = () => {

// const quotes = {
//     0: {
//         client: "Maarten van Doorn, Communicatie",
//         company: "Coca-Cola",
//         quote: "''Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam quis nostrud''"
//     },
//     1: {
//         client: "Sean Molema, Chief Executive Officer",
//         company: "Pepsi",
//         quote: "''Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam quis nostrud''"
//     },
//     2: {
//         client: "Daniel Smid, Pr-Manager",
//         company: "Sprite",
//         quote: "''Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam quis nostrud''"
//     },
//     3: {
//         client: "Wesley Heeren, Branding Officer",
//         company: "Fanta",
//         quote: "''Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam quis nostrud''"
//     }
// }

// const [current, setCurrent] = useState(quotes[0]);

// const [active, setActive] = useState(0)

// const handleSetClick = (event) => {
//     setCurrent(quotes[event.target.getAttribute("data-quote")])
//     setActive(event.target.getAttribute("data-quote"))
// }

//     return (
//         <div className="quotestyling">
//             <p>{current.quote}</p>
//             <h3>{current.client}</h3>
//             <p>{current.company}</p>
//             <div className="container-flex">
//                 {Object.keys(quotes).map(index => (
//                     <span
//                     OnClick={event => handleSetClick(event)}
//                     data-quote={index}
//                     key={index} 
//                 />
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default Quote