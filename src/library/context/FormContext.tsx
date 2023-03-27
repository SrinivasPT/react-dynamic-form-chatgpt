import React, { createContext, useContext } from "react";
import { FormAction } from "../types/ControlProps";

type FormState = Record<string, any>;

interface FormContextProps {
    state: FormState;
    dispatch: React.Dispatch<FormAction>;
}

const FormContext = createContext<FormContextProps | null>(null);

interface FormProviderProps {
    children: React.ReactNode;
    state: FormState;
    dispatch: React.Dispatch<FormAction>;
}

export const FormProvider: React.FC<FormProviderProps> = ({ children, state, dispatch }) => {
    return <FormContext.Provider value={{ state, dispatch }}>{children}</FormContext.Provider>;
};

export const useForm = () => {
    const context = useContext(FormContext);
    if (!context) {
        throw new Error("useForm must be used within a FormProvider");
    }
    return context;
};
