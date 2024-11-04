import React from "react";

export default function CardForm({ card, setCard }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCard((prevCard) => ({
      ...prevCard,
      [name]: value,
    }));
  };

  const vendors = ["Visa", "MasterCard", "American Express"];

  const currentYear = new Date().getFullYear() % 100;
  const years = Array.from({ length: 5 }, (_, i) => currentYear + i);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <form className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Card Holder
        </label>
        <input
          type="text"
          name="cardHolder"
          value={card.cardHolder}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Card Number
        </label>
        <input
          type="text"
          name="cardNumber"
          value={card.cardNumber}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        />
      </div>
      <div className="flex space-x-4">
        <div>
          <label
            htmlFor="expireMonth"
            className="block text-sm font-medium text-gray-700"
          >
            Expiry Month
          </label>
          <select
            id="expireMonth"
            name="expireMonth"
            value={card.expireMonth}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          >
            {months.map((month, i) => (
              <option key={i} value={i + 1}>
                {month}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="expireYear"
            className="block text-sm font-medium text-gray-700"
          >
            Expiry Year
          </label>
          <select
            id="expireYear"
            name="expireYear"
            value={card.expireYear}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">CCV</label>
        <input
          type="text"
          name="ccv"
          value={card.ccv}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Card Vendor
        </label>
        <select
          name="cardVendor"
          value={card.cardVendor}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          onChange={handleChange}
        >
          <option value="" disabled>
            Choose Card Vendor
          </option>
          {vendors.map((vendor, i) => (
            <option key={i} value={vendor}>
              {vendor}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
}
