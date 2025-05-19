# React Learning

This repository is a personal space for staying sharp and exploring key concepts in React. From foundational patterns to small component experiments, it's where I revisit, practise, and build on core ideas in modern front-end development.

Whether it's refreshing syntax, experimenting with hooks, or testing UI logic in isolation, this project helps me keep my React skills fresh outside of day-to-day client work.

---

Created with 💚 by **Laura Bizzle** – [LinkedIn](https://www.linkedin.com/in/laura-bizzle/) | [GitHub](https://github.com/bizzy-coding)

---

# Plan for topics

1. 🧱 Components (and Props)
   Everything in React is a component. Start here.

Show basic components, nesting, and how to pass props.

Include something reusable (e.g. a <Card> or <Button>).

2. 📍State Management with useState
   Once you have components, you’ll want them to react to user input.

Controlled inputs, counters, toggles.

3. 🧭 Routing
   Helps demonstrate page structure and navigation logic.

Use react-router-dom to switch between views like “State Examples,” “Effect Demos,” etc.

4. 🔀 Conditional Rendering
   Show/hide content based on logic or state.

Eg: "Show this only if a user is logged in" type demo.

5. ⚡ Side Effects with useEffect
   More advanced — runs code after render or when state/props change.

Simulate fetching data, logging events, timers, etc.

6. 📋 Forms & Validation
   Brings together components, state, and controlled inputs.

You could delay this one until later — but it's a great capstone topic.

# Folder Structure Plan

react-learning/
│
├── public/
│
├── src/
│ ├── components/ # Reusable UI components (buttons, layout, etc.)
│
│ ├── concepts/
│ │ ├── useState/
│ │ │ ├── Counter/
│ │ │ │ ├── Counter.jsx
│ │ │ │ └── styles.css
│ │ │ ├── TeamVoting/
│ │ │ │ ├── TeamVoting.jsx
│ │ │ │ └── styles.css
│ │ │ └── ...
│ │ ├── useEffect/
│ │ │ └── WeatherApp/
│ │ │ ├── WeatherApp.jsx
│ │ │ └── ...
│ │ └── forms/
│ │ └── LoginForm/
│ │ └── LoginForm.jsx
│
│ ├── pages/ # Route-level pages (home, not found, etc.)
│ │ ├── Home.jsx
│ │ └── NotFound.jsx
│
│ ├── App.jsx # Routing lives here
│ ├── main.jsx
│ └── index.css
│
├── README.md
├── package.json
└── ...
