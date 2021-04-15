import './Button.css';

const button = (props) => {
  const classes = ['button'];
  classes.push(props.buttonClass);
  return (
    <button type="button" className={classes.join(' ')}>{props.icon}{props.text}</button>
  );
}
 

export default button;