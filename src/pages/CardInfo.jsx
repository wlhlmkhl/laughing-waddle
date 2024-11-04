import { useLocation, useNavigate } from "react-router-dom";
import Card from "../comp/Card";
import Header from "../comp/Header";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setActiveCardWallet,
  removeCardWallet,
  updateCardWallet,
} from "../redux/walletSlice";
import CardForm from "../comp/CardForm";

export default function CardInfo() {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { card } = location.state || {};
  const [updatedCard, setUpdatedCard] = useState(card);
  const [showActive, setShowActive] = useState(card.active);
  const currentTheme = useSelector((state) =>
    state.settings.themes.find((theme) => theme.active)
  );

  function activateCard() {
    dispatch(setActiveCardWallet(card.id));
    alert("Card is now active!");
  }
  function deleteCard() {
    dispatch(removeCardWallet(card.id));
    alert("Card has been deleted from the wallet!");
    navigate("/");
  }
  function updateCardInfo() {
    dispatch(updateCardWallet({ id: card.id, updates: updatedCard }));
    alert("Card information updated!");
  }

  return (
    <>
      <Header />
      <div className="p-6 max-w-3xl mx-auto space-y-6">
        {!showActive && (
          <div className="flex flex-col justify-center sm:flex-row gap-4">
            <button
              onClick={activateCard}
              className={`btn ${currentTheme.buttonStyle}`}
              aria-label="Activate card"
            >
              Activate Card
            </button>
            <button
              onClick={deleteCard}
              className="btn-danger"
              aria-label="Delete card"
            >
              Delete Card
            </button>
          </div>
        )}

        {/* Card Display */}
        <div className="mb-4">
          <Card card={updatedCard} />
        </div>

        {/* Card Form (disabled if showActive is true) */}
        <div
          className={`relative ${
            showActive ? "opacity-60 pointer-events-none" : ""
          }`}
          aria-disabled={showActive}
        >
          <CardForm card={updatedCard} setCard={setUpdatedCard} />

          <button
            onClick={updateCardInfo}
            className={`btn ${currentTheme.buttonStyle}`}
            aria-label="Save card changes"
            disabled={showActive}
          >
            Save Changes
          </button>
        </div>
      </div>
    </>
  );
}
