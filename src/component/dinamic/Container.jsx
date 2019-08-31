import React from 'react';
import Header from '../static/Header.jsx';
import Section from '../static/Section.jsx';
import Note from './Note';
function Container(){
  return(
    <div className="container">
      <Header />
      <Section>
          <Note />
      </Section>
      <footer>
        soy un footer
      </footer>
    </div>
  );
}

export default Container;
