import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Routes from './Routes'
import { Provider } from 'react-redux'
import { store } from './redux/store'

function App() {

  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
            <Routes />
        </Provider>
      </BrowserRouter>
    </>
  )
}

export default App
