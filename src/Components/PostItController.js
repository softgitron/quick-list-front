import React from "react";
import PostItView from "./PostItView";

const circleColor = ["#b60a1c", "#ff684c", "#e39802", "#8ace7e", "#309143"];

export default function PostItController(props) {
    const boxStyle = {
        height: "calc(100vh - 128px)",
        width: "100%",
        position: "relative",
        overflow: "auto",
        padding: "0"
    };

    return (
        <div className="box" style={boxStyle}>
            <div style={{ height: "100%", width: "100%" }}>
                {props.loadedlist.map(item => (
                    <PostItView
                        key={"Tasks" + item.number}
                        number={item.number}
                        title={item.title}
                        desc={item.info}
                        date={item.date ? item.date.slice(0, 16).replace("T", " ") : ""}
                        completed={item.completed}
                        color={circleColor[item.priority - 1]}
                    />
                ))}
            </div>
        </div>
    );
}
