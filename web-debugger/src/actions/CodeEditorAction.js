export const SET_DIRECTION = "SET_DIRECTION"
export const SET_KEY_VALUE = "SET_KEY_VALUE"
export const SET_JAVA_CODE = "SET_JAVA_CODE"
export const SET_DEBUG_ACTION = "SET_DEBUG_ACTION"


export const DIRECTION_FORWARD = 1;
export const DIRECTION_BACKWARD = 2;
export const DEBUGGER_ACTION_RESUME="resume";

export function createSetJavaCodeAction(code){
	let action={
		type: SET_JAVA_CODE,
		data: code
	}
	return action
}

export function createForwardDirectionAction(){
	let action={
		type: SET_DIRECTION,
		data: DIRECTION_FORWARD
	}
	return action
}

export function createKeyValueAction(key,value){
	let action={
		type: SET_KEY_VALUE,
		data: {key:key, value: value}
	}
	return action
}

export function createDebugerAction(debuggerAction){
	let action={
		type: SET_DEBUG_ACTION,
		data: debuggerAction
	}
	return action
}
