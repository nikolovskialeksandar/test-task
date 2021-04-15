import PropTypes from 'prop-types';

import './Button.css';

const button = (props) => {
  const classes = ['button'];
  classes.push(props.buttonClass);
  return (
    <button type="button" className={classes.join(' ')}>{props.icon}{props.text}</button>
  );
}
 
button.propTypes = {
  buttonClass: PropTypes.string,
  icon: PropTypes.object,
  text: PropTypes.string.isRequired,
};

export default button;