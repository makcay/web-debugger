import React from 'react';
import { connect } from 'react-redux'
import * as CodeEditorActions from './actions/CodeEditorAction'
import AceEditor from "react-ace";
import './css/CodeEditor.css'

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";

class CodeEditor extends React.Component {
  defaultCode="public class Test {\n\n"
            + " public static void main(String[] args) {\n\n"
            +"  }\n"
            +"}"

  componentDidMount() {
    this.props.state.code=this.defaultCode
  }

  componentWillUnmount() {
  }

  constructor() {
    super()
    this.onCodeChange = this.onCodeChange.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.buttonClicked = this.buttonClicked.bind(this)
  }

  render() {
    return <div className="CodeEditor">
      <br />
      <label>
        Code:
          <AceEditor
          mode="java"
          theme="github"
          onChange={this.onCodeChange}
          name="code"
          defaultValue={this.defaultCode}
          value={this.props.state.code}
          editorProps={{ $blockScrolling: true }}
          markers={this.props.state.markers}
        />
      </label>
    <br/>
      <button onClick={() => this.buttonClicked("start")}>Start</button>
      <br/>
      <label>{this.props.state.result}</label>
    </div>
  }

  onCodeChange(newValue) {
    this.props.dispatch(CodeEditorActions.createSetJavaCodeAction(newValue))
  }

  highLightLine(line){
    this.props.dispatch(CodeEditorActions.createHighlightLineAction(line))
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target
    let action = type === "checkbox" ? CodeEditorActions.createKeyValueAction(name, checked) : CodeEditorActions.createKeyValueAction(name, value)
    this.props.dispatch(action)
  }

  buttonClicked(buttonAction) {
    switch(buttonAction){
      case "start":
        this.handleStart();
        break;
      case "resume":
        this.props.dispatch(CodeEditorActions.createDebugerAction(CodeEditorActions.DEBUGGER_ACTION_RESUME))
        break;
      default:
        break;
    }
  }

  handleStart(){
    
  }

}

function mapStateToProps(state) {
  return { state: state.CodeEditor };
}

export default connect(mapStateToProps)(CodeEditor)
