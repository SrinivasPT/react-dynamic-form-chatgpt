import { useForm } from "../context/FormContext";

interface FormControlProps {
    dataPath: string;
}

export const useFormControls = ({ dataPath }: FormControlProps) => {
    const { state, dispatch } = useForm();

    const getValueFromPath = (path: string, obj: any) => {
        console.log(`path: ${path} and obj: ${JSON.stringify(obj)}`);
        return path.split(".").reduce((result, key) => result?.[key], obj);
    };

    const setValueFromPath = (path: string, obj: any, value: any) => {
        console.log(`path: ${path} and obj: ${JSON.stringify(obj)} and value: ${value}`);
        const keys = path.split(".");
        const lastKey = keys.pop();
        const target = keys.reduce((result, key) => result?.[key], obj);
        if (target && lastKey) {
            target[lastKey] = value;
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { value } = event.target;
        dispatch({
            type: "SET_VALUE",
            payload: { key: dataPath, value, pathHandler: setValueFromPath },
        });
    };

    const value = getValueFromPath(dataPath, state);

    return { value, handleChange };
};
