import {createContext, useReducer} from "react";


export default (reducer, action, initialState) => {
	const Context = createContext();
	const Provider = ({children}) => {
		const [state, dispatch] = useReducer(reducer, initialState);
		const boundAction = {};
		for (let key in action) {
			boundAction[key] = action[key](dispatch)
		}
		return (
			<Context.Provider value={{state, action: boundAction}}>
				{children}
			</Context.Provider>
		)
	}
	return {Context, Provider}
}
