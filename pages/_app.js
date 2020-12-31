import '../styles/globals.css'
import Head from 'next/head'
import { Provider } from 'react-redux'
import store from '../redux/store'

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
          <title>
            Covid19 Tracker App
          </title>
      </Head>
      <Component {...pageProps} />
    </Provider>
  )
}

export default App
