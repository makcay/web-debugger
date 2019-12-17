import React from 'react';
import { connect } from 'react-redux'
import * as CodeEditorActions from './actions/CodeEditorAction'
import AceEditor from "react-ace";
import './css/CodeEditor.css'

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";

class CodeEditor extends React.Component {
  componentDidMount() {
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
          value={this.props.state.code}
          editorProps={{ $blockScrolling: true }}
          markers={this.props.state.markers}
        />
      </label>
    <br/>
      <button onClick={this.buttonClicked}>resume</button>
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

  buttonClicked() {
    this.props.dispatch(CodeEditorActions.createDebugerAction(CodeEditorActions.DEBUGGER_ACTION_RESUME))
  }

}

function mapStateToProps(state) {
  return { state: state.CodeEditor };
}

export default connect(mapStateToProps)(CodeEditor)
