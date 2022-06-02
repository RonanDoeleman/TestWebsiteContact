import emailjs from 'emailjs-com';
import React from 'react';
import "../contact/Contact.css";

const Contact = () => {

    function sendEmail(e){
      e.preventDefault();

      emailjs.sendForm('service_x7tdqsh', 'template_dmz0yj1', e.target, 'user_g7ViosHdPi5yIEjyjERGs')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    }

    return(
        <div className="contact-container">
        <div className="mogelijkheden-website">
        <h1>Hi, personal trainers</h1>
          <h2>Voor mijn minor wil ik graag websites bouwen voor personal trainers. Ééntje die op maat gemaakt is, voor jou.</h2>
          <h4>Mijn beloftes naar jouw zijn de volgende:</h4>
          <ul>
            <li>Volledig naar jouw wensen</li>
            <li>SEO-geoptimaliseerd zodat je online vindbaar bent voor klanten</li>
            <li>Professioneel visitekaartje van jou</li>
            <li>Gebruiksvriendelijke en innovatief design</li>
            <li>Een scherpe, voorafgesproken prijs</li>
          </ul>

          <h4>Hieronder een aantal mogelijkheden op een rijtje:</h4>
          <ul>
            <li>Verhaal over wie jij bent, wat je doet en waar je voor staat</li>
            <li>Foto's & Video's voor je klanten</li>
            <li>Online afsprakenplanner</li>
            <li>Contact Formulier</li>
          </ul>

          <div className="intake-gesprek">
            <h2>Wil jij graag een intake-gesprek inplannen om samen te kijken naar de mogelijkheden voor jou?</h2>
          </div>

        </div>
          
          <div className=" titelpositie-contact">
            <h1>Let's Get In Touch</h1>
            <h3>Ik help graag om jouw ideeën tot leven te brengen!</h3> 
          </div>
            <form onSubmit={sendEmail}>
                <div className="positiess">
                  <div className="positie-container">
                      <div className="spacing">
                          <label htmlFor="fname">Naam:</label>
                          <input type="text" id="name" name="name" placeholder="Naam / Bedrijfsnaam" ></input>      
                      </div>
                      <div>
                        <label htmlFor="message">Message:</label>
                        <input className="container-message" type="text" id="message" name="message" placeholder="Type hier uw vraag of bericht..." ></input>       
                      </div>
                  </div>
                    <div className="positie-container1">
                        <div className="spacing">
                          <label htmlFor="email">E-Mail:</label>
                          <input type="text" id="email" name="email" placeholder="hello@gmail.com" ></input>       
                        </div>
                        <div className="send-message">
                          <button className="button-send" value="Send Message">Aanvraag versturen</button>
                        </div>  
                    </div>      
                </div>
            </form>
            <div className="contact-data-container">
              <div className="contact-info">
                <h4>Stationsplein 20, 1234AB Amsterdam
                    rd12x@hotmail.com +31 6 15 66 83 53</h4>
              </div>
            </div>
        </div>
    );
};

export default Contact;