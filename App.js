import React from 'react'
import Navigator from './routes/Drawer'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { ReactReduxFirebaseProvider, getFirebase, getFirestore } from 'react-redux-firebase'
import { createFirestoreInstance } from 'redux-firestore'
import firebase from './services/firebase'
import 'firebase/firestore'

const store = createStore(rootReducer, applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})))

firebase.firestore()

const rrfProps = {
	firebase,
	config: {
		userProfile: "users"
	},
	dispatch: store.dispatch,
	createFirestoreInstance
};

export default function App(){
  return(
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <Navigator />
      </ReactReduxFirebaseProvider>
    </Provider>
  )
}