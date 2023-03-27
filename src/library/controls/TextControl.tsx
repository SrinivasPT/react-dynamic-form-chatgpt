import React from "react";
import { useFormControls } from "../hooks/useFormControls";
import { ControlProps } from "../types/ControlProps";
import "./FormStyles.css";

interface TextInputProps extends ControlProps {
    type: string;
}

const TextControl: React.FC<TextInputProps> = ({ dataPath, type, label, error }) => {
    const { value, handleChange } = useFormControls({ dataPath });

    return (
        <div className={`form-group${error ? " has-error" : ""}`}>
            <label htmlFor={dataPath}>{label}</label>
            <input type={type} className="form-control" id={dataPath} value={value || ""} onChange={handleChange} />
            {error && <div className="form-error">{error}</div>}
        </div>
    );
};

export default TextControl;
