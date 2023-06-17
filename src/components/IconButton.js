import PropTypes from 'prop-types';
import './IconButton.css';

const IconButton = ({ name }) => (
  <button className="icon-button" type="button">
    <span className="material-icons primary-color">{name}</span>
  </button>
);

IconButton.propTypes = {
  name: PropTypes.string.isRequired,
};

export default IconButton;
