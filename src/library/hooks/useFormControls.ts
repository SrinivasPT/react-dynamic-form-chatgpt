import { useForm } from "../context/FormContext";
import { getValueFromPath } from "../context/StateUtil";

interface FormControlProps {
    dataPath: string;
    rowIndex?: number;
    column?: string;
}

export const useFormControls = ({ dataPath, rowIndex, column }: FormControlProps) => {
    const { state, dispatch } = useForm();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { value } = event.target;
        dispatch({
            type: "SET_VALUE",
            payload: { dataPath, value, rowIndex, column },
        });
    };

    const value = getValueFromPath(state, dataPath);

    return { value, handleChange };
};
