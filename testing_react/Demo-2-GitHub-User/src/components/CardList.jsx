import Card from "./Card";

const CardList = (props) => {
    return (
        <div>
          {props.cards.map((card, index) => (
            <Card key={index} {...card} />
          ))} {/* this will vreate a div for every item inside of card using .map which will pass 'card' and 'index' and every div will be rendering a 'Card' component we create before with the prop key that will be the index in .map*/}
        </div>
    )
}

export default CardList