import React from 'react';
import ReactDOM from 'react-dom';
import CodeEditor from './CodeEditor';
import { Provider } from 'react-redux'
import {combineReducers,createStore} from 'redux';
import {CodeEditorReducer} from './reducers/CodeEditorReducer';

const allReducers=combineReducers({
    CodeEditor: CodeEditorReducer
});
const store = createStore(allReducers)

ReactDOM.render(<Provider store={store}><CodeEditor/></Provider>, document.getElementById('root'));
