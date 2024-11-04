const getBackgroundColor = (vendor) => {
  switch (vendor) {
    case "Visa":
      return "bg-gradient-to-r from-blue-400 to-blue-600";
    case "MasterCard":
      return "bg-gradient-to-r from-orange-400 to-orange-600";
    case "American Express":
      return "bg-gradient-to-r from-green-400 to-green-600";
    default:
      return "bg-gray-500"; // Standardfärg om ingen matchar
  }
};

const validateInput = (c) => {
  let errors = {};

  // Kontrollera kortutgivare
  if (!c.cardVendor || typeof c.cardVendor !== "string") {
    errors.cardVendor = "Vendor is required";
  }

  // Kontrollera kortnummer
  if (
    !c.cardNumber ||
    typeof c.cardNumber !== "string" ||
    c.cardNumber.replace(/\s/g, "").length !== 16
  ) {
    errors.cardNumber = "Card number must be 16 digits";
  }

  // Kontrollera kortinnehavare
  if (!c.cardHolder || typeof c.cardHolder !== "string") {
    errors.cardHolder = "Invalid name";
  }

  // Kontrollera utgångsmånad och år
  const currentYear = new Date().getFullYear() % 100;
  const currentMonth = new Date().getMonth() + 1; // Lägg till 1 eftersom getMonth() är 0-indexerad

  if (!c.expireYear || parseInt(c.expireYear) < currentYear) {
    errors.expireYear = "Valid future year is required";
  } else if (
    parseInt(c.expireYear) === currentYear &&
    parseInt(c.expireMonth) < currentMonth
  ) {
    errors.expireMonth = "Valid future month is required for this year";
  }

  // Kontrollera CVV
  if (!c.ccv || !/^\d{3}$/.test(c.ccv)) {
    errors.ccv = "Valid 3-digit CCV is required";
  }

  return errors;
};

export { getBackgroundColor, validateInput };
