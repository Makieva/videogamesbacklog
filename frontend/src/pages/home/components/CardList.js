import Cards from "./Cards";
import Games from "../../../models/Games";
import './CardList.css';

const CardList = ({games}) => {
    // console.log(games);
    return (
        <section className="containerCards">
            {games.map(game => <Cards dataGame={game} key={game.id}/>)}
        </section>
    )
}

export default CardList;