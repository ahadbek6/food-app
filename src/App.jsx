import { Routes, Route } from "react-router-dom";
import SideBar from "./Components/SideBar/SideBar";
import { DashBoard, DiscountPage, HomaPage, SettingsPage, Contact, NotificationPage } from "./Page";


const App = () => {
  return (
    <div className="font-barlow">
      <SideBar />
      <Routes>
        <Route path="/" element={<HomaPage />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/discount" element={<DiscountPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/email-contacts" element={<Contact />} />
        <Route path="/notifications" element={<NotificationPage />} />
      </Routes>
    </div>
  );
};

export default App;
