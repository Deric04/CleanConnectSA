
const searchForm = document.querySelector("#search-form");
const searchMessage = document.querySelector("#search-message");
const cleanerCards = document.querySelectorAll(".cleaner-card");
const bookingForm = document.querySelector("#booking-form");
const bookingMessage = document.querySelector("#booking-message");
const bookingDate = document.querySelector("#booking-date");
const cleanerDetails = document.querySelector("#cleaner-details");

// Keep the booking date from being set in the past.
if (bookingDate) {
  const today = new Date();
  const localToday = new Date(
    today.getTime() - today.getTimezoneOffset() * 60000
  )
    .toISOString()
    .split("T")[0];

  bookingDate.min = localToday;
}

// Search and filter the sample cleaning services.
if (searchForm) {
  searchForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const selectedService = document
      .querySelector("#service-type")
      .value.toLowerCase();

    const maxPrice = Number(
      document.querySelector("#max-price").value
    );

    let visibleCount = 0;

    cleanerCards.forEach(function (card) {
      const cardText = card.textContent.toLowerCase();

      const matchesService =
        !selectedService ||
        cardText.includes(selectedService) ||
        (selectedService === "home" &&
          cardText.includes("home")) ||
        (selectedService === "apartment" &&
          cardText.includes("apartment")) ||
        (selectedService === "business" &&
          (cardText.includes("business") ||
            cardText.includes("office"))) ||
        (selectedService === "student" &&
          (cardText.includes("student") ||
            cardText.includes("accommodation"))) ||
        (selectedService === "deep" &&
          cardText.includes("deep"));

      const priceMatch = cardText.match(/r\s?(\d+)/i);
      const cardPrice = priceMatch ? Number(priceMatch[1]) : 0;
      const matchesPrice = !maxPrice || cardPrice <= maxPrice;

      const showCard = matchesService && matchesPrice;

      card.hidden = !showCard;

      if (showCard) {
        visibleCount++;
      }
    });

    searchMessage.textContent = visibleCount
      ? `Showing ${visibleCount} sample cleaning service(s). These listings are for demonstration only.`
      : "No sample cleaners match those filters. Try another service or price range.";

    searchMessage.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    });
  });
}

// Show sample details when a cleaner is selected.
document.querySelectorAll("[data-cleaner]").forEach(function (button) {
  button.addEventListener("click", function () {
    const cleanerName = button.dataset.cleaner;

    const cleanerProfiles = {
      "FreshSpace Cleaning": {
        services: "Home and apartment cleaning",
        price: "From R250",
        rating: "Sample rating: 4.8/5",
        description:
          "A sample listing for customers looking for everyday home or apartment cleaning."
      },
      "BrightOffice Services": {
        services: "Office and business cleaning",
        price: "From R400",
        rating: "Sample rating: 4.7/5",
        description:
          "A sample listing designed for offices and other business spaces."
      },
      "Everyday Cleaning Co.": {
        services: "Student and shared accommodation cleaning",
        price: "From R200",
        rating: "Sample rating: 4.9/5",
        description:
          "A sample listing for student residences and shared accommodation."
      }
    };

    const profile = cleanerProfiles[cleanerName];

    if (profile && cleanerDetails) {
      cleanerDetails.textContent =
        `${cleanerName} — ${profile.services}. ${profile.price}. ` +
        `${profile.rating}. ${profile.description} ` +
        "This is a prototype listing, not a verified real-world service.";

      cleanerDetails.hidden = false;
      cleanerDetails.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });
    }

    const serviceField = document.querySelector("#booking-service");

    if (serviceField && profile) {
      const service = profile.services.toLowerCase();

      if (service.includes("business")) {
        serviceField.value = "business";
      } else if (service.includes("student")) {
        serviceField.value = "student";
      } else if (service.includes("apartment")) {
        serviceField.value = "apartment";
      } else {
        serviceField.value = "home";
      }
    }
  });
});

// Demonstrate the booking form without sending real bookings.
if (bookingForm) {
  bookingForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!bookingForm.checkValidity()) {
      bookingForm.reportValidity();
      return;
    }

    const customerName = document
      .querySelector("#customer-name")
      .value.trim();

    const selectedService = document.querySelector(
      "#booking-service"
    ).selectedOptions[0].textContent;

    const selectedDate = document.querySelector("#booking-date").value;

    const formattedDate = new Date(
      `${selectedDate}T12:00:00`
    ).toLocaleDateString("en-ZA", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });

    bookingMessage.textContent =
      `Thank you, ${customerName}. Your sample request for ${selectedService} ` +
      `on ${formattedDate} has been completed in this demonstration. ` +
      "No booking has been sent, no cleaner has been contacted, and no payment has been taken.";

    bookingMessage.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    });

    bookingForm.reset();

    if (bookingDate) {
      bookingDate.min = new Date().toISOString().split("T")[0];
    }
  });
}
