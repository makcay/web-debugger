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
  } else if (action.type===CodeEditorActions.HIGHLIGHT_LINE){
    let line=action.data
    if (line>0){
      let markers=[];
      markers.push({startRow:line-1,startCol:0,endRow:line-1,endCol:1,className: 'replacement_marker', type: 'text'})
      newstate["markers"]=markers
    }
  }
  return newstate;
}