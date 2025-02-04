
import React, { useState } from "react";
import { InputTextarea } from "primereact/inputtextarea";
import { FloatLabel } from "primereact/floatlabel";
import 'primeflex/primeflex.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

export default function Textarea(props) {
    const [value, setValue] = useState('');

    return (
        <div className={props.textareastyle} style={{display:"flex", flexWrap:"wrap"}}>
            <FloatLabel>
                <InputTextarea id="description" value={value} onChange={(e) => setValue(e.target.value)} rows={props.rows} cols={props.cols} />
                <label htmlFor="description">{props.label}</label>
            </FloatLabel>
        </div>
    )
}