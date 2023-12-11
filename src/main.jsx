import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter , Routes ,Route } from 'react-router-dom'
import Bulking from "./pages/Bulking.jsx";
import FatLoss from "./pages/FatLoss.jsx";
import TermsAndConditions from './pages/TermsAndConditions.jsx';
import RefundPolicy from './pages/RefundPolicy.jsx';
// import {Cube} from "react-preloaders2"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <React.Fragment>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/bulking" element={<Bulking />} />
        <Route path="/fatloss" element={<FatLoss />} />
        <Route path="/termsandconditions" element={<TermsAndConditions />} />
        <Route path="/refundpolicy" element={<RefundPolicy />} />
      </Routes>
    </BrowserRouter>
    {/* <Cube /> */}
    </React.Fragment>
  </React.StrictMode>,
)
