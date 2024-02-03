import { BrowserRouter } from 'react-router-dom'
import Body from './components/Body'
import appStore from './utils/Redux/appStore'
import { Provider } from 'react-redux'

const App = () => {
  return (
    <>
    <Provider store={appStore}>
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    </Provider>
    </>
  )
}

export default App
