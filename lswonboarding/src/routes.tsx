/* import react from `react` */
import HelloGuy from "./components/hello";
import { Route, Routes } from "react-router-dom";
export default function userRoute() {
    return <><Routes><Route path="/admin/hello" element={<HelloGuy />} />
    </Routes></>
} 