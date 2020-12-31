import { useSelector } from 'react-redux'
import Card from './Card'

const MainCards = () => {
    const { death, confirmed, recovered } = useSelector(state => state.app)
    return (
        <>
            <Card
              title="Confirmed"
              value={confirmed}
              type="confirmed"
            />

            <Card
              title="Deaths"
              value={death}
              type="death"
            />

            <Card
              title="Recovered"
              value={recovered}
              type="recovered"
            />
        </>
    )
}

export default MainCards