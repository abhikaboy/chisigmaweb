import { useEffect } from 'react'
import { Provider } from 'react-redux'
import { loadFontIcons } from 'components/FontIcon'
import store from 'utils/store'
import { ParallaxProvider } from 'react-scroll-parallax'
import Router from './routes'

function App() {
  useEffect(() => {
    loadFontIcons()
  }, [])

  return (
    <Provider store={store}>
      <ParallaxProvider>
        <div data-testid="app" className="app">
          <Router />
        </div>
      </ParallaxProvider>
    </Provider>
  )
}

export default App
