import { createStore, applyMiddleware ,compose } from 'redux'
import reducer from './reducers/reducer'
import thunk from 'redux-thunk'
const middleware = applyMiddleware(thunk)
const enhancers = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
)

let store = createStore(reducer, enhancers, middleware);


store.subscribe(() => {

    console.log(store.getState(), "store")

})
export default store;