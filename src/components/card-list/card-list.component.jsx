
import './card-list.css'
import Card from '../card/card.component'

const CardList = ({ group }) => {
    return (
        <div className='card-list'>
            {group.map(m => {
                return (
                    <Card monster={m} />
                )
            })
            }
        </div >

    )
}

export default CardList;

