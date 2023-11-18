document.addEventListener("DOMContentLoaded", () => {
  const stadium = document.querySelector(".grid");
  const cartItems = document.getElementById("cart-items");
  const seatsData = [
    { name: "A1", price: 50, available: true },
    { name: "A2", price: 50, available: false },
    // Add more seats here...
  ];

  function updateSeatInfo(seat) {
    // Update the seat info display on hover
    // This can be a tooltip or any other UI element
    console.log(`Seat: ${seat.name}, Price: $${seat.price}`);
  }

  function addToCart(seat) {
    // Add the selected seat to the cart
    const cartItem = document.createElement("li");
    cartItem.textContent = `${seat.name} - $${seat.price}`;
    cartItems.appendChild(cartItem);
  }

  function onClickSeat(seat) {
    if (!seat.available) return;

    addToCart(seat);

    // Update the seat availability
    seat.available = false;
    seatElement.classList.add("bg-gray-500", "cursor-not-allowed");
  }

  function createSeatElement(seat) {
    const seatElement = document.createElement("div");
    seatElement.className = `seat ${seat.available ? "bg-blue-500 cursor-pointer" : "bg-gray-500 cursor-not-allowed"}`;
    seatElement.textContent = seat.name;

    seatElement.addEventListener("mouseover", () => updateSeatInfo(seat));
    seatElement.addEventListener("click", () => onClickSeat(seat));

    return seatElement;
  }

  // Generate the seats in the stadium
  seatsData.forEach((seat) => {
    const seatElement = createSeatElement(seat);
    stadium.appendChild(seatElement);
  });
});
