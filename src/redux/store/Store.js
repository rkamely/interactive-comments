import {loadState, saveState} from "../../utils/localStorage";
import {applyMiddleware, createStore} from "redux";
import reducers from "../reducer";
import thunkMiddleware from "redux-thunk";


const Store = () => {
    const persistedState = loadState();

    const store = createStore(reducers, persistedState,
        applyMiddleware(thunkMiddleware));

    store.subscribe(() => {
        saveState(store.getState())
    });
    return store
}
export default Store