import * as CodeEditorActions from "../actions/CodeEditorAction";

export function CodeEditorReducer(state, action){
  const newstate = Object.assign({}, state);
  if (action.type===CodeEditorActions.SET_DIRECTION){
	newstate["direction"]=action.data
  } else if (action.type===CodeEditorActions.SET_KEY_VALUE){
	newstate[action.data.key]=action.data.value
  } else if (action.type===CodeEditorActions.SET_JAVA_CODE){
	newstate["code"]=action.data;
  } else if (action.type===CodeEditorActions.SET_DEBUG_ACTION){
	  if (action.data===CodeEditorActions.DEBUGGER_ACTION_RESUME){
		  newstate["result"]=state.code
	  }
  }
  return newstate;
}