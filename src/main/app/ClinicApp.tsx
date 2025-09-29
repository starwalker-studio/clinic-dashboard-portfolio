import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../../components/Dashboard/Dashboard";
import { ClinicRoutes } from "../../routes/ClinicRoutes";
import { Login } from "../../components/Login/Login";

export const ClinicApp = () => {
    return (
        <Routes>
            <Route path="/*" element={<Dashboard children={<ClinicRoutes />} />} />
            <Route path="/login" element={<Login/>} />
        </Routes>
    )
}
