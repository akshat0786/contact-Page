import { useState } from "react";
import "./App.css";
import NavBar from "./components/Navigation/Navbar";
import ContactHeader from "./components/contactHeader/ContactHeader";
import ContactForm from "./components/contactForm/ContactForm";
function App() {
  return (
    <div>
      <NavBar />
      <main className="main_container">
        <ContactHeader />
        <ContactForm />
      </main>
    </div>
  );
}

export default App;
