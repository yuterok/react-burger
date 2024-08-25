import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  HomePage,
  Login,
  Register,
  ForgotPassword,
  ResetPassword,
  Profile,
  IngredientID,
  Page404,
} from "../../pages";

import styles from "./app.module.css";

import AppHeader from "../app-header/app-header";

function App() {
  return (
    <div className={styles.app}>
      <Router>
        <AppHeader />
        <div className={styles.container}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/ingredients/:id" element={<IngredientID />} />
            <Route path="/*" element={<Page404 />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
