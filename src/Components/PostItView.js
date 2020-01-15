import React from "react";
import Draggable from "react-draggable";

// background: props.color
export default function PostItView(props) {
    const postItStyle = {
        //marginTop: "20%",
        //marginBottom: "auto",
        padding: "4px",
        width: "13em",
        height: "10em",
        background: "#009688"
    };

    return (
        <div
            className="box"
            style={{
                height: "100%",
                width: "100%",
                position: "relative",
                overflow: "auto",
                padding: "0"
            }}
        >
            <div style={{ height: "100%", width: "100%" }}>
                <Draggable bounds="parent">
                    <div className="box" style={postItStyle}>
                        I can only be moved within my offsetParent.
                        <br />
                        <br />
                        Both parent padding and child margin work properly.
                    </div>
                </Draggable>
            </div>
        </div>
    );
}
