import React from "react";
import PropTypes from "prop-types";

 const Cards = ({digit}) => {
    return (
        <div className="bg-dark bg-gradient border-primary text-white">{digit}</div>
    )
}

Cards.propTypes = {
    digit: PropTypes.string
}

Cards.defaultProps = {
    digit: "0"
}

export default Cards;