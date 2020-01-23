import { combineReducers } from "redux";

import LinkReducer from "./LinkReducer";

//Usado somente para demonstração
const Reducers = combineReducers({
	linklist: LinkReducer
});

export default Reducers;