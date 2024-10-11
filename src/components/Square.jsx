import React from 'react';

const squareStyle = {
    border: "1px solid",
    height: "100px",
    width: "100px",
    display: "flex",
    justifyContent: "center",
    allignItems: "center"
};
const Square = (props) => {
    return (
      <div className="square" style={squareStyle} onClick={props.onClick}>
        <h6>{props.value}</h6>
      </div>
    );
}

export default Square;