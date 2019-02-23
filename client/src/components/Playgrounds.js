import React, { Component } from "react";
import SplitPane from "react-split-pane";
import Editor from "./Editor";
import Viewer from "./Viewer";
import TapTarget from "./common/TapTarget";

export default class Playgrounds extends Component {
  state = { isHidden: false };

  componentWillMount() {
    let visited = sessionStorage.getItem("alreadyVisitedPlaygrounds");

    if (visited) {
      //Hide Tap Target if already visited page.
      this.setState({ isHidden: true });
    } else {
      //Show Tap Target on first page visit.
      sessionStorage.setItem("alreadyVisitedPlaygrounds", true);
      this.setState({ isHidden: false });
    }
  }
  render() {
    const width = window.innerHeight;
    const { cardStyle, splitPaneStyle } = style;
    return (
      <div>
        <TapTarget isHidden={this.state.isHidden}>
          <h5>Javascript Playgrounds</h5>
          <p>
            This tool was created by Stephen Grider at
            <a
              href="https://rallycoding.com/"
              target="_blank"
              style={{ color: "white" }}
            >
              {" "}
              RallyCoding{". "}
            </a>
            Stephen is my favorite instructor. Check out his courses at
            <a
              href="https://www.udemy.com/user/sgslo/?key=taught_courses&taught_courses=1"
              target="_blank"
              style={{ color: "white" }}
            >
              {" "}
              Udemy{". "}
            </a>
            He goes into great detail and is able to explain advanced concepts
            in a way that is easy to understand. <br />
            To use this tool, type your Javascript code <br />
            in the left panel and see your results <br />
            appear in real time on the right. <br />
            Syntax errors will show in
            <br />
            the bottom right panel.
          </p>
        </TapTarget>
        <div className="card" style={cardStyle}>
          <SplitPane
            style={splitPaneStyle}
            split="vertical"
            defaultSize={width * 1.1}
          >
            <Editor />
            <Viewer />
          </SplitPane>
        </div>
      </div>
    );
  }
}

const style = {
  cardStyle: {
    width: "80%",
    margin: "auto",
    border: "none",
    boxShadow: "none",
    paddingTop: -15,
    marginTop: 0,
    backgroundColor: "transparent"
  },
  splitPaneStyle: {
    height: 870,
    paddingTop: 10,
    margin: "auto",
    borderBottom: "2px dotted peru"
  }
};
