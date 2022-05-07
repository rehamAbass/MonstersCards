import { Component } from 'react';
import './card-list.css'
import Card from '../card/card.component'
class CardList extends Component {

    render() {
        const filteredGroup = this.props.group;

        return (
            <div className='card-list'>
                {filteredGroup.length === 0 ?
                    <div className='alert1'>" NO MONSTERS 🤨 with this subString ! "</div> : ''
                }
                {filteredGroup.map(m => {
                    return (
                        <Card monster={m} />
                    )
                })
                }
            </div >

        )
    }
}

export default CardList;