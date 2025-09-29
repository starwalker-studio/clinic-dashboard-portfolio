import { Routes, Route } from "react-router-dom";
import { Home } from "../components/home/Home";
import { Pacients } from "../components/Pacients/Pacients";
import { Appoinments } from "../components/Appoinments/Appoinments";
import { Medics } from "../components/Medics/Medics";
import { Stadistics } from "../components/Stadistics/Stadistics";
import { Settings } from "../components/Settings/Settings";

export const ClinicRoutes = () => {
    return (
        <>
            <Routes>
                <Route index path="/" element={<Home />} />
                <Route path="/pacientes" element={<Pacients />} />
                <Route path="/citas" element={<Appoinments />} />
                <Route path="/medicos" element={<Medics />} />
                <Route path="/estadisticas" element={<Stadistics />} />
                <Route path="/ajustes" element={<Settings />} />
            </Routes>
        </>
    )
}
