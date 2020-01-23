import React, { Component } from "react";
import PostItObject from "./PostItObject";

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
        this.state = { sizex: props.width, sizey: props.height };
        this.updateSize = this.updateSize.bind(this);
    }

    updateSize(val) {
        if (val) {
            this.setState({ sizex: val.clientWidth, sizey: val.clientHeight });
        }
    }

    render() {
        console.log(this.state.sizex, this.state.sizey);
        return (
            <div ref={this.updateSize} className="box" style={this.boxStyle}>
                {this.state.sizex ? <div style={{ height: "100%", width: "100%" }}>
                    {this.props.loadedlist.map(item => (
                        <PostItObject
                            key={"Tasks" + item.number}
                            number={item.number}
                            title={item.title}
                            desc={item.info}
                            date={item.date ? item.date.slice(0, 16).replace("T", " ") : ""}
                            dateRaw={item.date}
                            completed={item.completed}
                            color={circleColor[item.priority - 1]}
                            priorityRaw={item.priority}
                            x={item.x * this.state.sizex}
                            y={item.y * this.state.sizey}
                            sizex={this.state.sizex}
                            sizey={this.state.sizey}
                            toggleCompletion={this.props.toggleCompletion}
                            deleteDeadline={this.props.deleteDeadline}
                            updatePost={this.props.updatePost}

                        />
                    ))}
                </div> : null}

            </div>
        );
    }
}

export default PostItController;
