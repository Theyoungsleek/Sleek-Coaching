import './App.css';
import MainPage from "./pages/MainPage";
import HomePage from "./pages/HomePage";
import Programs from "./pages/Programs";
import Bulking from "./pages/Bulking";
import Cutting from "./pages/Cutting";
import MealPlan from "./pages/MealPlan";
import WorkoutLibrary from "./pages/WorkoutLibrary";
import About from "./pages/About";
import NavBar from "./pages/NavBar";
import Cart from "./pages/Cart";  // Import the Cart component

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";  // Import useState and useEffect

function App() {
  const [cart, setCart] = useState([]);

  // Use useEffect to make sure cart state persists across different pages
  useEffect(() => {
    // You can add any logic here if needed
  }, [cart]);

  return (
    <div className="App">
      <Router>
        <NavBar cartSize={cart.length} /> {/* Pass the cart size to the NavBar */}
        <main>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path="/main" element={<MainPage />} />
            <Route path="/programs" element={<Programs />} />
            {/* Pass cart and setCart to the Bulking component */}
            <Route
              path="/programs/bulking"
              element={<Bulking cart={cart} setCart={setCart} />}
            />
            <Route path="/programs/cutting" element={<Cutting cart={cart} setCart={setCart}/>} />
            <Route path="/programs/meal-plan" element={<MealPlan cart={cart} setCart={setCart}/>} />
            <Route path="/programs/workout-library" element={<WorkoutLibrary cart={cart} setCart={setCart}/>} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart cart={cart} />} /> {/* Pass the cart to the Cart component */}
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
