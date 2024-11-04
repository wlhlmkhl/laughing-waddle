import Header from "../comp/Header";
import Card from "../comp/Card";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Cards() {
  const cards = useSelector((state) => state.wallet.cards);

  const currentTheme = useSelector((state) =>
    state.settings.themes.find((theme) => theme.active)
  );

  const activeCard = cards.find((card) => card.active === true) || {};
  const inactiveCards = cards.filter((card) => card.active === false);

  return (
    <>
      <Header />
      <div className="p-6 max-w-xl mx-auto">
        <div className=" mb-4">
          <p className="text-3xl font-semibold text-gray-700 text-center">
            Active Card - ( {activeCard && activeCard.active ? 1 : 0} )
          </p>
          {activeCard.active ? (
            <Link to={`/card/${activeCard.id}`} state={{ card: activeCard }}>
              <Card card={activeCard} />
            </Link>
          ) : (
            <div
              className={`w-96 h-56 m-auto rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-110 bg-gray-500`}
            >
              <p className="text-3xl">No active card</p>
            </div>
          )}
        </div>

        <div className=" mb-4">
          <p className="text-3xl font-semibold text-gray-700 text-center">
            Inactive Cards - ( {inactiveCards.length} )
          </p>
          {inactiveCards.map((card) => (
            <div className="mb-4">
              <Link
                to={`/card/${card.id}`}
                state={{ card: card }}
                key={card.id}
              >
                <Card card={card} />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-6">
        {cards.length < 4 ? (
          <Link to="/addcard" className={`btn ${currentTheme.buttonStyle}`}>
            New Card
          </Link>
        ) : (
          <p>Max Capaicty. delete a card if you want more</p>
        )}
      </div>
    </>
  );
}
