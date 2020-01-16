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
        this.state = { sizex: 0, sizey: 0 };
        this.updateSize = this.updateSize.bind(this);
    }

    updateSize(val) {
        if (val) {
            this.setState({ sizex: val.clientWidth, sizey: val.clientHeight });
        }
    }

    render() {
        console.log(this.size);
        return (
            <div ref={this.updateSize} className="box" style={this.boxStyle}>
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
                            x={item.x}
                            y={item.y}
                            sizex={this.state.sizex}
                            sizey={this.state.sizey}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default PostItController;
