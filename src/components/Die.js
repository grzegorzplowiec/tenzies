export default function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "#FFFFFF",
  };

  return (
    <div className="die--box" style={styles} onClick={props.handleClick}>
      {props.value === 1 && (
        <div className="dot--box one--dot">
          <span className="dot"></span>
        </div>
      )}
      {props.value === 2 && (
        <div className="dot--box two--dots">
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      )}
      {props.value === 3 && (
        <div className="dot--box three--dots">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      )}
      {props.value === 4 && (
        <div className="dot--box four--dots">
          <div className="column">
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
          <div className="column">
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
      )}
      {props.value === 5 && (
        <div className="dot--box five--dots">
          <div className="column">
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
          <div className="column">
            <span className="dot"></span>
          </div>
          <div className="column">
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
      )}
      {props.value === 6 && (
        <div className="dot--box six--dots">
          <div className="column">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
          <div className="column">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
      )}
    </div>
  );
}
