import React from 'react';
import { connect } from 'react-redux'
import * as CodeEditorActions from './actions/CodeEditorAction'
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";

class CodeEditor extends React.Component {
  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentWillReceiveProps(nextProps, nextContext) {
    this.setState(nextProps.state)
  }

  constructor() {
    super()
    this.state = {
      direction: CodeEditorActions.DIRECTION_FORWARD,
      code: ""
    }
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
          value={this.state.code}
          editorProps={{ $blockScrolling: true }}
        />
      </label>
{/*
      <br />
      <label>
        <input type="radio" name="gender" value="male" checked={this.state.gender === "male"} onChange={this.handleChange} />
        Male
        </label>
*/}
    <br/>
      <button onClick={this.buttonClicked}>resume</button>
      <br/>
      <label>{this.state.result}</label>
    </div>
  }

  onCodeChange(newValue) {
    this.props.dispatch(CodeEditorActions.createSetJavaCodeAction(newValue))
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target
    let action = type === "checkbox" ? CodeEditorActions.createKeyValueAction(name, checked) : CodeEditorActions.createKeyValueAction(name, value)
    this.props.dispatch(action)
  }

  buttonClicked() {
    this.props.dispatch(CodeEditorActions.createDebugerAction(CodeEditorActions.DEBUGGER_ACTION_RESUME))
  }

  /*
  changeState(){
    this.setState((prevState) => this.newState(prevState))
  }

  newState(prevState){
    //return {count: prevState.count+1}
    return prevState;
  }
  */

}

function mapStateToProps(state) {
  return { state: state.CodeEditor };
}

export default connect(mapStateToProps)(CodeEditor)
