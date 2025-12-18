import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Main entry point for the React application
// Initializes the app with React 18's createRoot API for better performance
// Renders the App component into the DOM element with id 'root'
createRoot(document.getElementById("root")!).render(<App />);
