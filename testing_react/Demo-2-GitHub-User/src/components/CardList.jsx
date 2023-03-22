import Card from "./Card";

const CardList = (props) => {
    return (
        <div>
          {props.cards.map((card, index) => (
            <Card key={index} {...card} />
          ))} {/* prop.cards.map gonna run for every component in the array cards (that is actually data with json) and create a card sending prop key which is the unique 
          index created with map starting from 0 and the data in form of json */}
          {/* this gonna call Card with prop key = index and card json data*/}
          {/* cards is a prop sended from the app */}
        </div>
    )
}

export default CardList