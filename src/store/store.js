import { createStore } from "redux";
import reducer from "./reducers.js/combine.Reducer";

const store=createStore(reducer)


export default store