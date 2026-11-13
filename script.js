
// CleanConnect SA - Interactive Prototype

const searchForm = document.querySelector("#search-form");
const searchMessage = document.querySelector("#search-message");
const cleanerCards = document.querySelectorAll(".cleaner-card");

const bookingForm = document.querySelector("#booking-form");
const bookingMessage = document.querySelector("#booking-message");
const bookingDate = document.querySelector("#booking-date");

const cleanerDetails = document.querySelector("#cleaner-details");

// Set the earliest available booking date using local time.
function getLocalDate() {
    const today = new Date();

    const localToday = new Date(
        today.getTime() - today.getTimezoneOffset() * 60000
    );

    return localToday.toISOString().split("T")[0];
}

if (bookingDate) {
    bookingDate.min = getLocalDate();
}

// Fictional cleaner demonstration profiles.
// Contact details are placeholders.
// Profile IDs are prototype references, not identity numbers.

const cleanerProfiles = {
    "FreshSpace Cleaning": {
        fullName: "Lerato Mokoena",
        profileId: "CC-DEMO-001",
        phone: "000 000 0001",
        email: "lerato.mokoena@example.com",
        experience: "6 years of sample experience",
        speciality: "Home, apartment and regular maintenance cleaning",
        services: "Home and apartment cleaning",
        price: "From R250",
        rating: "Sample rating: 4.8/5",
        areas: "Pretoria, Centurion and Montana",
        bookingService: "Home",
        description: "A fictional demonstration listing focused on keeping homes and apartments clean, comfortable and organised."
    },

    "BrightOffice Services": {
        fullName: "Thabo Nkosi",
        profileId: "CC-DEMO-002",
        phone: "000 000 0002",
        email: "thabo.nkosi@example.com",
        experience: "8 years of sample experience",
        speciality: "Office, commercial and deep cleaning",
        services: "Business and deep cleaning",
        price: "From R400",
        rating: "Sample rating: 4.7/5",
        areas: "Midrand and Pretoria",
        bookingService: "Business",
        description: "A fictional demonstration listing for offices, meeting rooms and commercial spaces."
    },

    "Everyday Cleaning Co.": {
        fullName: "Naledi Dlamini",
        profileId: "CC-DEMO-003",
        phone: "000 000 0003",
        email: "naledi.dlamini@example.com",
        experience: "4 years of sample experience",
        speciality: "Student rooms, shared accommodation and apartments",
        services: "Student, home and apartment cleaning",
        price: "From R200",
        rating: "Sample rating: 4.9/5",
        areas: "Hatfield and Pretoria",
        bookingService: "Student accommodation",
        description: "A fictional demonstration listing for student residences, digs and shared accommodation."
    },

    "Sparkle Home Care": {
        fullName: "Ayanda Khumalo",
        profileId: "CC-DEMO-004",
        phone: "000 000 0004",
        email: "ayanda.khumalo@example.com",
        experience: "7 years of sample experience",
        speciality: "Residential, apartment and deep cleaning",
        services: "Home, apartment and deep cleaning",
        price: "From R300",
        rating: "Sample rating: 4.8/5",
        areas: "Sandton and Johannesburg",
        bookingService: "Home",
        description: "A fictional demonstration listing for residential cleaning and detailed home care."
    },

    "PureSpace Cleaners": {
        fullName: "Mpho Molefe",
        profileId: "CC-DEMO-005",
        phone: "000 000 0005",
        email: "mpho.molefe@example.com",
        experience: "5 years of sample experience",
        speciality: "Apartment cleaning and household upkeep",
        services: "Home and apartment cleaning",
        price: "From R280",
        rating: "Sample rating: 4.6/5",
        areas: "Randburg, Roodepoort and Johannesburg",
        bookingService: "Apartment",
        description: "A fictional demonstration listing for flats, apartments and family homes."
    },

    "GreenBroom Services": {
        fullName: "Sipho Mthembu",
        profileId: "CC-DEMO-006",
        phone: "000 000 0006",
        email: "sipho.mthembu@example.com",
        experience: "9 years of sample experience",
        speciality: "Business premises and intensive cleaning",
        services: "Business and deep cleaning",
        price: "From R350",
        rating: "Sample rating: 4.7/5",
        areas: "Centurion and Midrand",
        bookingService: "Business",
        description: "A fictional demonstration listing for business premises, work areas and deep cleaning."
    },

    "NeatNest Cleaning": {
        fullName: "Zanele Ndlovu",
        profileId: "CC-DEMO-007",
        phone: "000 000 0007",
        email: "zanele.ndlovu@example.com",
        experience: "3 years of sample experience",
        speciality: "Student accommodation, shared spaces and homes",
        services: "Student, home and apartment cleaning",
        price: "From R220",
        rating: "Sample rating: 4.8/5",
        areas: "Johannesburg and Soweto",
        bookingService: "Student accommodation",
        description: "A fictional demonstration listing for student accommodation, shared spaces and homes."
    },

    "Pristine Spaces": {
        fullName: "Kagiso Molefe",
        profileId: "CC-DEMO-008",
        phone: "000 000 0008",
        email: "kagiso.molefe@example.com",
        experience: "6 years of sample experience",
        speciality: "Deep cleaning, residential and apartment cleaning",
        services: "Home, apartment and deep cleaning",
        price: "From R320",
        rating: "Sample rating: 4.9/5",
        areas: "Pretoria East and Menlyn",
        bookingService: "Deep cleaning",
        description: "A fictional demonstration listing for detailed residential cleaning and deep-cleaning services."
    }
};

// Normalise search values.
function normalise(value) {
    return value
        .toLowerCase()
        .trim()
        .replace(/\s+/g, " ");
}

// Convert service labels into comparable categories.
function getServiceCategories(value) {
    const text = normalise(value);
    const categories = [];

    if (text.includes("business") || text.includes("office")) {
        categories.push("business");
    }

    if (text.includes("student") || text.includes("accommodation")) {
        categories.push("student");
    }

    if (text.includes("home") || text.includes("residential")) {
        categories.push("home");
    }

    if (text.includes("apartment")) {
        categories.push("apartment");
    }

    if (text.includes("deep")) {
        categories.push("deep");
    }

    return categories;
}

// Create the cleaner profile preview.
function createProfilePreview(card, button, profile, cleanerName) {
    const preview = document.createElement("div");

    const previewId =
        `profile-preview-${profile.profileId.toLowerCase()}`;

    preview.className = "cleaner-profile-preview";
    preview.id = previewId;
    preview.hidden = true;

    preview.setAttribute(
        "aria-label",
        `Fictional profile details for ${cleanerName}`
    );

    const heading = document.createElement("h4");
    heading.textContent = "Cleaner Profile Preview";

    preview.appendChild(heading);

    const fields = [
        ["Full name", profile.fullName],
        ["Demo profile ID", profile.profileId],
        ["Sample contact number", profile.phone],
        ["Sample email", profile.email],
        ["Experience", profile.experience],
        ["Speciality", profile.speciality],
        ["Services", profile.services],
        ["Areas served", profile.areas]
    ];

    fields.forEach(function ([label, value]) {
        const paragraph = document.createElement("p");

        const strong = document.createElement("strong");
        strong.textContent = `${label}: `;

        paragraph.appendChild(strong);
        paragraph.appendChild(document.createTextNode(value));

        preview.appendChild(paragraph);
    });

    const disclaimer = document.createElement("p");

    disclaimer.className = "preview-disclaimer";
    disclaimer.textContent =
        "Fictional sample information for this academic prototype only.";

    preview.appendChild(disclaimer);

    card.insertBefore(preview, button.nextSibling);

    button.setAttribute("aria-controls", previewId);
    button.setAttribute("aria-expanded", "false");

    function showPreview() {
        preview.hidden = false;
        button.setAttribute("aria-expanded", "true");
    }

    function hidePreview() {
        preview.hidden = true;
        button.setAttribute("aria-expanded", "false");
    }

    // Show preview when hovering over or focusing on the button.
    button.addEventListener("pointerenter", showPreview);
    button.addEventListener("focus", showPreview);

    // Keep preview open while the pointer remains inside the card.
    card.addEventListener("pointerleave", hidePreview);

    // Hide preview when keyboard focus leaves the cleaner card.
    card.addEventListener("focusout", function (event) {
        if (!card.contains(event.relatedTarget)) {
            hidePreview();
        }
    });
}

// Add previews to all eight existing cleaner cards.
document.querySelectorAll("[data-cleaner]").forEach(function (button) {
    const cleanerName = button.dataset.cleaner;
    const profile = cleanerProfiles[cleanerName];
    const card = button.closest(".cleaner-card");

    if (profile && card) {
        createProfilePreview(
            card,
            button,
            profile,
            cleanerName
        );
    }
});

// Cleaner search and filtering.
if (searchForm) {
    searchForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const locationField = document.querySelector("#location");
        const serviceField = document.querySelector("#service-type");
        const maxPriceField = document.querySelector("#max-price");

        const location = normalise(
            locationField ? locationField.value : ""
        );

        const selectedService = normalise(
            serviceField ? serviceField.value : ""
        );

        const maxPriceValue = maxPriceField
            ? maxPriceField.value
            : "";

        const maxPrice = maxPriceValue === ""
            ? Infinity
            : Number(maxPriceValue);

        let visibleCount = 0;

        cleanerCards.forEach(function (card) {
            const areas = normalise(card.dataset.location || "");
            const services = card.dataset.service || "";
            const price = Number(card.dataset.price);

            const matchesLocation =
                !location || areas.includes(location);

            const cardCategories =
                getServiceCategories(services);

            const selectedCategories =
                getServiceCategories(selectedService);

            const matchesService =
                !selectedService ||
                selectedCategories.some(function (category) {
                    return cardCategories.includes(category);
                });

            const matchesPrice =
                maxPriceValue === "" ||
                (Number.isFinite(price) && price <= maxPrice);

            const showCard =
                matchesLocation &&
                matchesService &&
                matchesPrice;

            card.hidden = !showCard;

            if (showCard) {
                visibleCount++;
            }
        });

        if (searchMessage) {
            searchMessage.textContent = visibleCount > 0
                ? `Showing ${visibleCount} matching fictional cleaner profile(s). Ratings and verification information are demonstration data only.`
                : "No sample cleaners match your search. Try changing your location, service or maximum budget.";

            searchMessage.scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            });
        }
    });

    // Clear filters and restore all profiles.
    searchForm.addEventListener("reset", function () {
        cleanerCards.forEach(function (card) {
            card.hidden = false;
        });

        if (searchMessage) {
            searchMessage.textContent =
                "Filters cleared. All eight fictional demonstration profiles are displayed.";
        }
    });
}

// View Details selects the matching service and moves to booking.
document.querySelectorAll("[data-cleaner]").forEach(function (button) {
    button.addEventListener("click", function () {
        const cleanerName = button.dataset.cleaner;
        const profile = cleanerProfiles[cleanerName];

        if (!profile) {
            return;
        }

        if (cleanerDetails) {
            cleanerDetails.textContent =
                `${cleanerName} is represented by ${profile.fullName}. ` +
                `${profile.services}. ${profile.price}. ${profile.rating}. ` +
                `Areas served: ${profile.areas}. ${profile.description} ` +
                "All names, profile references and contact details are fictional sample data. " +
                "No genuine background check or customer review is represented.";

            cleanerDetails.hidden = false;
        }

        const serviceField =
            document.querySelector("#booking-service");

        if (serviceField) {
            serviceField.value = profile.bookingService;

            serviceField.dispatchEvent(
                new Event("change", { bubbles: true })
            );
        }

        const bookingSection =
            document.querySelector("#booking");

        if (bookingSection) {
            bookingSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

// Booking form demonstration.
if (bookingForm) {
    bookingForm.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!bookingForm.checkValidity()) {
            bookingForm.reportValidity();
            return;
        }

        const customerNameField =
            document.querySelector("#customer-name");

        const serviceField =
            document.querySelector("#booking-service");

        const customerName = customerNameField
            ? customerNameField.value.trim()
            : "";

        const selectedService =
            serviceField && serviceField.selectedOptions.length
                ? serviceField.selectedOptions[0].textContent
                : "the selected service";

        const selectedDate = bookingDate
            ? bookingDate.value
            : "";

        const formattedDate = new Date(
            `${selectedDate}T12:00:00`
        ).toLocaleDateString("en-ZA", {
            day: "numeric",
            month: "long",
            year: "numeric"
        });

        if (bookingMessage) {
            bookingMessage.textContent =
                `Thank you, ${customerName}. Your sample request for ` +
                `${selectedService} on ${formattedDate} has been completed ` +
                "in this demonstration. No real booking has been sent, " +
                "no cleaner has been contacted and no payment has been taken.";

            bookingMessage.scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            });
        }

        bookingForm.reset();

        if (bookingDate) {
            bookingDate.min = getLocalDate();
        }
    });
}
