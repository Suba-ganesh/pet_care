
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';
import 'primeflex/primeflex.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

export default function Date(props) {
    const [date, setDate] = useState(null);

    return (
        <div className={props.datestyle}>
            <Calendar value={date} onChange={(e) => setDate(e.value)} dateFormat="dd/mm/yy" className={props.datestyle} />
        </div>
    )
}
        