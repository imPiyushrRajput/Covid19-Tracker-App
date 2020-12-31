import Skeleton from './Skeleton'
import { useSelector } from 'react-redux'

const SelectedCountry = () => {
  const { selectedCountry, displayText, loading } = useSelector(state => state.app)

  return (
    <>
      <div className="container">
      {
        loading ? <Skeleton width="300" height="25" /> : <p>{displayText} <code>{selectedCountry}</code></p>
      }
      </div>
      <style jsx>{`
        .container {
          line-height: 1.5;
          font-size: 1rem;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          font-size: 0.8rem;
          font-weight: bold;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
        `}</style>
    </>
  )
}

export default SelectedCountry