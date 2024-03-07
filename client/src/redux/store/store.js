import { createStore } from "redux";
import cartProductReducer from "../reducer/cartProductReducer";

const store = createStore(cartProductReducer);

export default store;
