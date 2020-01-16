import React, { Component } from "react";
import PostItView from "./PostItView";

const circleColor = ["#b60a1c", "#ff684c", "#e39802", "#8ace7e", "#309143"];

class PostItController extends Component {
    constructor(props) {
        super(props);
        this.boxStyle = {
            height: "calc(100vh - 128px)",
            width: "100%",
            position: "relative",
            overflow: "auto",
            padding: "0"
        };
    }

    render() {
        return (
            <div className="box" style={this.boxStyle}>
                <div style={{ height: "100%", width: "100%" }}>
                    {this.props.loadedlist.map(item => (
                        <PostItView
                            key={"Tasks" + item.number}
                            number={item.number}
                            title={item.title}
                            desc={item.info}
                            date={item.date ? item.date.slice(0, 16).replace("T", " ") : ""}
                            completed={item.completed}
                            color={circleColor[item.priority - 1]}
                            x={100}
                            y={100}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default PostItController;
