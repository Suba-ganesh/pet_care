import react, { useState } from "react";
import 'primeflex/primeflex.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { InputText } from "primereact/inputtext";


export default function TextBox(props) {
    const [value1, setValue1] = useState();
    return (
        <div className={props.textboxstyle}  style={{display:"flex", flexWrap:"wrap"}}>
            <div className="flex-auto">
                <label htmlFor="integeronly" className={props.labelstyle}>{props.label}</label>
                <InputText className={props.inputstyle} inputId="integeronly" value={value1} onValueChange={(e) => setValue1(e.value)}/>
            </div>
        </div>
    )
}
