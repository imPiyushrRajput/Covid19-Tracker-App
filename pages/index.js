import { useEffect } from 'react'
import { setIsLoading, addConfirmed, addRecovered, addDeath, addCountries } from '../redux/actions'
import { useSelector, useDispatch } from 'react-redux'
import CountrySelectBox from '../components/CountryBox'
import SelectedCountry from '../components/SelectedCountry'
import MainCards from '../components/MainCards'

const Home = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    async function fetchData() {
      try {
        dispatch(setIsLoading(true))

        const pGeneralInfo = await fetch('https://covid19.mathdro.id/api')
        const pCountryInfo = await fetch('https://covid19.mathdro.id/api/countries')

        const [generalInfo, countryInfo] = await Promise.all([pGeneralInfo, pCountryInfo])

        const { confirmed, deaths, recovered } = await generalInfo.json()
        const countries = await countryInfo.json()

        dispatch(addConfirmed(confirmed.value))
        dispatch(addRecovered(recovered.value))
        dispatch(addDeath(deaths.value))
        dispatch(addCountries(countries))

        dispatch(setIsLoading(false))
      } catch(e) {
        dispatch(setIsLoading(false))
      }
    }

    fetchData()
  }, [])

  return (
    <>
    <div className="main">
      <h1 className="title">
              Welcome to <a href="/">Covid19 Tracker App</a>
      </h1>

      <p className="description">
      Get Information about the anomalies brought about by <code>Covid19 or Corona Virus</code>
      </p>

      <CountrySelectBox />

      <div className="grid">
            <MainCards />
      </div>

      <SelectedCountry />
    </div>

  <footer>
      <div>
        Powered by&nbsp;&nbsp;
        <a
          href="https://nextjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <b>Next.js</b>
        </a>
        &nbsp;&nbsp;&&nbsp;&nbsp;
        <a
          href="https://zeit.co"
          target="_blank"
          rel="noopener noreferrer"
        >
          <b>Zeit Now</b>
        </a>
      </div>

      <div>
        Data Source from&nbsp;&nbsp;
        <a
          href="https://covid19.mathdro.id/api"
          target="_blank"
          rel="noopener noreferrer"
        >
          <b>Mathdro's API</b>
        </a>
      </div>

      <div>
        Made By&nbsp;&nbsp;
        <a
          href="https://akashwho.codes"
          target="_blank"
          rel="noopener noreferrer"
        >
          <b>Akash Rajpurohit</b>
        </a>
      </div>
    </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
  
        .main {
          padding: 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
  
        footer {
          width: 100%;
          height: 100px;
          padding: 0 20px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        a {
          color: inherit;
          text-decoration: none;
        }
  
        .title a {
          color: #0070f3;
          text-decoration: none;
        }
  
        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }
  
        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }
  
        .title,
        .description {
          text-align: center;
        }
  
        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }
  
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
  
        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
  
          width: 900px;
          margin-top: 3rem;
        }
  
        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }
  
        * {
          box-sizing: border-box;
        }
      `}</style>
      </>
  )
}
export default Home