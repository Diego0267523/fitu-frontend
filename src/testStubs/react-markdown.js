// Stub para Jest: react-markdown es ESM puro y CRA no lo transforma.
const React = require('react');

module.exports = function ReactMarkdown({ children }) {
  return React.createElement('div', null, children);
};
module.exports.default = module.exports;
