import { useSelector, useDispatch } from "react-redux";
import Header from "../comp/Header";
import { useState } from "react";
import { selectTheme } from "../redux/settingsSlice";
import { removeInactiveCardsWallet } from "../redux/walletSlice";

export default function Settings() {
  const themes = useSelector((state) => state.settings.themes);
  const currentTheme = themes.find((theme) => theme.active === true);
  const [activeTheme, setActiveTheme] = useState(currentTheme.id);
  const dispatch = useDispatch();

  const saveChanges = () => {
    dispatch(selectTheme(parseInt(activeTheme)));
  };
  const deleteInactiveCards = () => {
    dispatch(removeInactiveCardsWallet());
    alert("All Inactive Cards are Deleted!");
  };

  return (
    <>
      <Header />
      <div className="p-6 max-w-xl mx-auto">
        <div className="text-center mb-4">
          <p className="text-5xl font-semibold text-gray-700">
            {currentTheme.name}
          </p>
        </div>

        <div className="mb-6">
          <label
            htmlFor="select-theme"
            className="block text-gray-700 text-sm font-medium mb-2"
          >
            Choose a Theme
          </label>
          <select
            name="select-theme"
            id="select-theme"
            className="block w-full border border-gray-300 rounded-md p-2 text-gray-700 bg-white focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setActiveTheme(e.target.value)}
            aria-label="Theme selection"
          >
            <option value="" disabled>
              Select a Theme
            </option>
            {themes.map((theme) => (
              <option value={theme.id} key={theme.id}>
                {theme.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col items-center space-y-4 mt-6">
          <button
            className={`btn ${currentTheme.buttonStyle}`}
            onClick={saveChanges}
            aria-label="Save theme changes"
          >
            Save Changes
          </button>

          <button
            className="btn-danger"
            aria-label="Delete all inactive cards"
            onClick={deleteInactiveCards}
          >
            Delete All Inactive Cards
          </button>
        </div>
      </div>
    </>
  );
}
