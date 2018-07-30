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
              U’Marc disposable arch-wire markers are available in outrageous orange.
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
        <p className="question">Lorem ipsum dolor sit amet, consectetur?</p>
        <p>
          adipiscing elit. Phasellus ut nibh risus. Aenean mattis interdum lorem vitae eleifend.
          Duis id pharetra libero, ut sodales nisl. Praesent interdum, ligula nec imperdiet
          bibendum, nulla massa euismod odio, in semper ligula mauris ac velit. Donec iaculis
          scelerisque euismod. Maecenas ex ipsum, venenatis ac{' '}
        </p>
      </div>

      <div className="container question-area">
        <p className="question">Lorem ipsum dolor sit amet, consectetur?</p>
        <p>
          adipiscing elit. Phasellus ut nibh risus. Aenean mattis interdum lorem vitae eleifend.
          Duis id pharetra libero, ut sodales nisl. Praesent interdum, ligula nec imperdiet
          bibendum, nulla massa euismod odio, in semper ligula mauris ac velit. Donec iaculis
          scelerisque euismod. Maecenas ex ipsum, venenatis ac{' '}
        </p>
      </div>
    </div>

    <div id="distributors">
      <div className="container">
        <h1>Distributors</h1>
        <div className="row">
          <div className="col-6 col-md-4">
            <img src="/umark_logo.svg" />
          </div>
          <div className="col-6 col-md-4">
            <img src="/umark_logo.svg" />
          </div>
          <div className="col-6 col-md-4">
            <img src="/umark_logo.svg" />
          </div>
        </div>
      </div>
    </div>

    <ContactForm />

    <div id="footer">
      <p>© 2017 U'Marc</p>
    </div>
  </div>
);

export default App;
