import CardForm from "../comp/CardForm";
import Card from "../comp/Card";
import Header from "../comp/Header";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCardWallet } from "../redux/walletSlice";
import { useNavigate } from "react-router-dom";
import { validateInput } from "../utils/helpers";

export default function AddCard() {
  const [card, setCard] = useState({
    cardVendor: "", // Standard kortutgivare
    cardNumber: "**** **** **** ****", // Standard kortnummer
    cardHolder: "John Doe", // Standard kortinnehavare
    expireMonth: "00", // Standard utgångsmånad
    expireYear: "00", // Standard utgångsår
    ccv: "***", // Standard CVV
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentTheme = useSelector((state) =>
    state.settings.themes.find((theme) => theme.active)
  );

  function handleSubmit() {
    const errors = validateInput(card);
    if (Object.keys(errors).length > 0) {
      alert("Validation errors:\n" + JSON.stringify(errors, null, 2));
      return;
    }
    dispatch(addCardWallet(card));
    navigate("/");
  }

  return (
    <>
      <Header />
      <div className="p-6 max-w-3xl mx-auto space-y-6">
        {/* Card Display */}
        <div className="mb-4">
          <Card card={card} />
        </div>

        {/* Card Form */}
        <CardForm card={card} setCard={setCard} />

        {/* Submit Button */}
        <button
          className={`btn ${currentTheme.buttonStyle}`}
          onClick={handleSubmit}
        >
          Add Card
        </button>
      </div>
    </>
  );
}
