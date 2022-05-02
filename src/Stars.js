import Star from "./Star";
import PropTypes from "prop-types";

function Stars(props) {
  const { count } = props;
  if (Number.isInteger(count) && count >= 1 && count <= 5) {
    let arr = [];
    for (let i = 0; i < count; i++) {
      arr.push(<Star key={i} />);
    }
    return <ul className="card-body-stars">{arr}</ul>;
  }
}

Stars.propTypes = {
  count: PropTypes.number,
};

export default Stars;
