import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TravelAdviceDashboard from "./components/TravelAdviceDashboard";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/traveladvice" element={<TravelAdviceDashboard />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
