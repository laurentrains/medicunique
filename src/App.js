import React from 'react';
import Scroll from 'react-scroll-to-element';
import ContactForm from './ContactForm';

const App = () => (
  <div>
    <div id="navigation">
      <img src="/umark_logo.svg" />
      <ul>
        <a href="#distributors">
          <li>Find Distributors</li>
        </a>
      </ul>
    </div>

    <div id="hero">
      <img src="/umark_logo.svg" />
    </div>

    <div id="about">
      <div className="container">
        <h1>About U'Marc</h1>
        <p>
          U'Marc is an innovative disposable archwire marker designed to minimize cross contamination and provide comfort to your patients in a cost effective manner.
        </p>
      </div>
    </div>

    <div id="products">
      <div className="container product">
        <div className="row">
          <div className="col-12 col-md-6">
            <img src="/umarc_white.png" />
          </div>
          <div className="col-12 col-md-6">
            <h2>White U'Marc</h2>
            <p>
              U’Marc disposable arch-wire markers are available in brilliant white.
            The markers come in boxes of 100 sticks. {' '}
            </p>
            <Scroll type="id" offset={200} element="distributors">
              <button>Find Distributors</button>
            </Scroll>
          </div>
        </div>
      </div>
      <div className="container product">
        <div className="row">
          <div className="col-12 col-md-6">
            <img src="/umarc_orange.png" />
          </div>
          <div className="col-12 col-md-6">
            <h2>Orange U'Marc</h2>
            <p>
              U’Marc disposable arch-wire markers are available in bright orange.
            The markers come in boxes of 100 sticks. {' '}
            </p>
            <Scroll type="id" offset={200} element="distributors">
              <button>Find Distributors</button>
            </Scroll>
          </div>
        </div>
      </div>
    </div>

    <div id="faq">
      <div className="container">
        <h1>FAQ</h1>
      </div>
      <div className="container question-area">
        <p className="question">Q: Where can I buy U’Marc arch-wire markers?</p>
        <p>A: U’Marc arch-wire markers are available through most orthodontic supply wholesalers. {' '}
        </p>
      </div>

      <div className="container question-area">
        <p className="question">Q: Why use U'Marc arch-wire markers?</p>
        <p>
          Q: Traditionally orthodontistists have used colored pencils or crayons to mark the arch-wires for making adjustments.
          These methods can lead to risk of contamination between patients and are not possible to sterilize using an autoclave or via chemical methods.
          The U'Marc single use disposible markers eliminate the risk of contamination in a cost effective sanitary manner.{' '}
        </p>
      </div>
    </div>

    <div id="distributors">
      <div className="container">
        <h1>Distributors</h1>
        <div className="row">
          <div className="col-6 col-md-4">
            <img src="/ao.png" />
          </div>
          <div className="col-6 col-md-4">
            <a href="https://www.dentsplysirona.com/en-us.html" target="_blank"><img src="/dentsply.png" /></a>
          </div>
          <div className="col-6 col-md-4">
            <a href="https://store.dynaflex.com/index.php/u-marctm-markers.html" target="blank"><img src="/dynaflex.png" /></a>
          </div>
          <div className="col-6 col-md-4">
            <img src="/forestadent.png" />
          </div>
          <div className="col-6 col-md-4">
            <img src="/gh.png" />
          </div>
          <div className="col-6 col-md-4">
            <img src="/plaksmacker.png" />
          </div>
          <div className="col-6 col-md-4">
            <img src="/dynaflex.png" />
          </div>
        </div>
      </div>
    </div>
    <ContactForm />

    <div id="footer">
      <p>© 2017 U'Marc</p>
    </div>
  </div >

);

export default App;
