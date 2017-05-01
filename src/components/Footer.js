import React from 'react';

const licenseStyle = {
  display: 'inline-block',
  margin: 0,
  borderRadius: 0,
  verticalAlign: 'middle',
};

const Footer = () => (
  <footer className="footer">
    <small>
      <a
        rel="license"
        href="http://creativecommons.org/licenses/by-nc-nd/4.0/"
        target="_blank"
      >
        <img
          alt="Licenza Creative Commons"
          style={licenseStyle}
          src="https://i.creativecommons.org/l/by-nc-nd/4.0/80x15.png"
        />
      </a>
      {' '}Il sito degli{' '}
      <a
        href="https://github.com/IngloriousCoderz"
        target="_blank"
        rel="noopener"
      >
        Inglorious Coderz
      </a>
      {' '}è distribuito con Licenza{' '}
      <a
        rel="license"
        href="http://creativecommons.org/licenses/by-nc-nd/4.0/"
        target="_blank"
      >
        Creative Commons Attribuzione - Non commerciale - Non opere derivate 4.0 Internazionale
      </a>.
    </small>
  </footer>
);

export default Footer;