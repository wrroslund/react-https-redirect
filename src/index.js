import React from 'react';
import PropTypes from 'prop-types';

class HttpsRedirect extends React.Component {

  isLocalHost(hostname) {
    return !!(hostname === 'localhost' ||
              hostname === '[::1]' ||
              hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
  }

  render() {
    const { force } = this.props;
    if (
      typeof window !== 'undefined' &&
      window.location &&
      window.location.protocol === 'http:' &&
      (!this.isLocalHost(window.location.hostname) || force)
    ) {
      window.location.href = window.location.href.replace(/^http(?!s)/, 'https');
    }

    return (
      <div>
        { this.props.children }
      </div>
    );
  }
}

HttpsRedirect.propTypes = {
  children: PropTypes.node,
  force: PropTypes.bool,
};

export default HttpsRedirect;
