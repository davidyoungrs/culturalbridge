import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TravelAdviceDashboard from "./components/TravelAdviceDashboard";
import AffiliateProgram from "./pages/AffiliateProgram";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/traveladvice" element={<TravelAdviceDashboard />} />
                <Route path="/affiliate" element={<AffiliateProgram />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
