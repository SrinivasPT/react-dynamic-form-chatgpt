// CustomSelect.tsx
import React from "react";
import { useFormControls } from "../hooks/useFormControls";
import "./FormStyles.css";

interface Option {
    value: string;
    label: string;
}

interface CustomSelectProps {
    dataPath: string;
    label: string;
    options: Option[];
    error: string | null;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ dataPath, label, options, error }) => {
    const { value, handleChange } = useFormControls({ dataPath });

    return (
        <div className={`form-group${error ? " has-error" : ""}`}>
            <label htmlFor={dataPath}>{label}</label>
            <select className="form-control" id={dataPath} value={value || ""} onChange={handleChange}>
                <option value="">Select an option</option>
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            {error && <div className="form-error">{error}</div>}
        </div>
    );
};

export default CustomSelect;
