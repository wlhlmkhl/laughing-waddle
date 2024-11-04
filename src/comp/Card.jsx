import React, { useEffect, useState } from "react";
import { getBackgroundColor } from "../utils/helpers";

export default function Card({ card }) {
  const [style, setStyle] = useState("");

  useEffect(() => {
    const color = getBackgroundColor(card.cardVendor);
    setStyle(color); // Uppdatera bakgrundsfärgen
  }, [card.cardVendor]); // Kör när cardVendor ändras

  return (
    <div
      className={`w-96 h-56 m-auto rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-110 ${style}`}
    >
      <div className="w-full px-8 absolute top-8">
        <div className="flex justify-between">
          <div>
            <p className="font-light">Name:</p>
            <p className="font-medium tracking-widest">{card.cardHolder}</p>
          </div>
          <div className="w-14 h-14">
            <span>{card.cardVendor}</span>
          </div>
        </div>
        <div className="pt-1">
          <p className="font-light">Card Number</p>
          <p className="font-medium tracking-more-wider">{card.cardNumber}</p>
        </div>
        <div className="pt-6 pr-6">
          <div className="flex justify-between">
            <div>
              <p className="font-light text-xs">Expiry</p>
              <p className="font-medium tracking-wider text-sm">
                {card.expireMonth}/{card.expireYear}
              </p>
            </div>
            <div>
              <p className="font-light text-xs">CVV</p>
              <p className="font-bold tracking-more-wider text-sm">
                {card.ccv}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
