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
        `}</style>
    </>
  )
}

export default SelectedCountry