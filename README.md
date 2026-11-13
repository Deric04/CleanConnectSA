# CleanConnect SA – Interactive Cleaning Service Prototype

## 1. Project Overview

CleanConnect SA is a website prototype designed to help users find and request cleaning services for homes, apartments, offices and student accommodation.

The prototype provides a simple interface where users can search for fictional cleaning service providers, filter results according to their needs, view cleaner profile information and complete a sample cleaning request.

The project focuses on usability, accessibility, user experience and the application of interface design principles.

**Project:** CleanConnect SA  
**Project Type:** Interactive Website Prototype  
**Course:** HCIN6222  
**Development Technologies:** HTML5, CSS3 and JavaScript

## 2. Project Objectives

The main objectives of CleanConnect SA are to:

- Provide users with an easy way to explore cleaning services.
- Allow users to filter cleaning providers according to location, service type and budget.
- Display useful information about cleaning service providers.
- Provide a straightforward sample booking process.
- Apply usability and accessibility principles to improve the user experience.
- Demonstrate interactive website functionality using JavaScript.

## 3. Main Website Features

### Cleaner Search and Filtering

Users can search for cleaning providers using a location, select a cleaning service category and specify a maximum budget.

The prototype filters the displayed cleaner profiles according to the selected criteria.

### Cleaner Profiles

The website contains eight fictional cleaning service provider profiles.

Each profile includes demonstration information such as:

- Cleaner or business name.
- Fictional contact person's full name.
- Demonstration profile reference.
- Placeholder contact number and email address.
- Sample years of experience.
- Cleaning specialities.
- Services offered.
- Estimated starting price.
- Sample customer rating.
- Areas served.

Users can hover over the **View Details** button or navigate to it using a keyboard to display additional profile information.

Selecting **View Details** takes the user to the Request a Cleaning Service section and automatically selects the relevant cleaning service.

### Cleaning Request Form

Users can complete a sample cleaning request by entering their details, selecting a service and choosing a preferred date.

JavaScript validation checks the form before displaying a confirmation message.

The booking date cannot be set to a date in the past.

### Responsive Design

The website uses CSS media queries to adjust its layout for different screen sizes, including desktop, tablet and mobile devices.

### Accessibility Features

The prototype includes accessibility features such as:

- Semantic HTML elements.
- Descriptive form labels.
- Keyboard navigation.
- A skip-to-content link.
- Visible keyboard focus indicators.
- Status messages using accessible ARIA attributes.
- Responsive layouts.
- Clear text and interface elements.

## 4. Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Website structure and content |
| CSS3 | Styling, layout and responsive design |
| JavaScript | Search filtering, profile previews and form validation |
| GitHub | Source code management and project submission |

## 5. Project Structure

The project is organised into the following main files and folders:

```text
CleanConnectSA/
│
├── index.html
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── images/
│   └── Website images and visual assets
│
├── docs/
│   └── Updated Part 3 research report
│
├── screenshots/
│   └── Prototype screenshots
│
└── README.md
```

## 6. How to Run the Prototype

The prototype does not require a database or backend server.

To open the website:

1. Download or clone the CleanConnect SA repository.
2. Extract the project folder if it was downloaded as a ZIP file.
3. Open the project folder.
4. Locate `index.html`.
5. Open `index.html` in a modern web browser such as Google Chrome or Microsoft Edge.
6. Navigate through the website and test the available features.

Alternatively, open the project in Visual Studio Code and use the Live Server extension.

## 7. Testing and Evaluation

The prototype was evaluated by testing its main interactive features, including:

- Displaying all eight cleaner profiles.
- Searching for cleaners by location.
- Filtering cleaners by service category.
- Filtering cleaners by maximum budget.
- Clearing search filters.
- Viewing additional cleaner profile information.
- Navigating to the cleaning request section.
- Automatically selecting the appropriate booking service.
- Validating the cleaning request form.
- Preventing past booking dates.
- Testing keyboard navigation and the skip link.

The new cleaner profile preview and booking navigation features should also be tested in the final version before submission.

## 8. Usability and Accessibility

CleanConnect SA applies interface design principles to make the website straightforward to understand and use.

The design focuses on:

- Consistency across website sections.
- Clear navigation and instructions.
- Simple forms and understandable labels.
- Feedback after user interactions.
- Responsive layouts for different devices.
- Keyboard accessibility.
- Readable content and visible focus indicators.

The prototype considers the Web Content Accessibility Guidelines (WCAG) 2.0, particularly the principles of perceivability, operability, understandability and robustness.

## 9. Prototype Limitations

CleanConnect SA is an academic demonstration prototype.

The cleaner profiles, personal names, contact details, prices, ratings and verification information are fictional demonstration data. Placeholder contact details are not genuine contact information.

The prototype does not currently include:

- A live database.
- Real customer accounts or authentication.
- Actual cleaning service providers.
- Genuine customer reviews.
- Real background checks or provider verification.
- Live booking submissions.
- Online payments.
- A backend booking management system.

Submitting the cleaning request form only displays a demonstration confirmation message. No real booking is created, no cleaner is contacted and no payment is processed.

## 10. Project Repository

The source code and project files are available on GitHub:

[CleanConnect SA GitHub Repository](https://github.com/Deric04/CleanConnectSA)

## 11. Conclusion

CleanConnect SA demonstrates how an interactive cleaning service website can be developed using HTML, CSS and JavaScript. The prototype provides search and filtering functionality, cleaner profile previews, responsive layouts and a sample cleaning request form.

The project demonstrates the application of usability, user experience, interface design and accessibility principles in developing a practical website prototype.
