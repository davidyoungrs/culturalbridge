import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TravelAdviceDashboard from "./components/TravelAdviceDashboard";
import AffiliateProgram from "./pages/AffiliateProgram";
import FAQPage from "./pages/FAQ";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/traveladvice" element={<TravelAdviceDashboard />} />
                <Route path="/affiliate" element={<AffiliateProgram />} />
                <Route path="/faq" element={<FAQPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
