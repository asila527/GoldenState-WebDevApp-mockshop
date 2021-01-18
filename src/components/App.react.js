import React from 'react';
import CategoriesList from './CategoriesList.react';
import { Provider } from 'react-redux'
import store from '../store'

function App() {
  return (
    <div>
      
      <Provider store={store}>
        <CategoriesList />
      </Provider>
    </div>
  )
}

export default App;
