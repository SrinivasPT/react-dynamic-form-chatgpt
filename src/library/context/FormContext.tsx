import React, { createContext, useContext } from "react";
import { useImmerReducer } from "use-immer";

type FormState = Record<string, any>;

interface FormContextProps {
    state: FormState;
    dispatch: React.Dispatch<FormAction>;
}

const FormContext = createContext<FormContextProps | null>(null);

type FormAction =
    | {
          type: "SET_VALUE";
          payload: {
              key: string;
              value: any;
              pathHandler?: (path: string, obj: any, value: any) => void;
          };
      }
    | { type: "RESET_FORM" };

const formReducer = (draft: FormState, action: FormAction) => {
    switch (action.type) {
        case "SET_VALUE":
            if (action.payload.pathHandler) {
                action.payload.pathHandler(action.payload.key, draft, action.payload.value);
            } else {
                draft[action.payload.key] = action.payload.value;
            }
            return;
        case "RESET_FORM":
            return {};
        default:
            return;
    }
};

interface FormProviderProps {
    children: React.ReactNode;
    initialValue: FormState;
}

export const FormProvider: React.FC<FormProviderProps> = ({ children, initialValue }) => {
    const [state, dispatch] = useImmerReducer(formReducer, initialValue);

    return <FormContext.Provider value={{ state, dispatch }}>{children}</FormContext.Provider>;
};

export const useForm = () => {
    const context = useContext(FormContext);
    if (!context) {
        throw new Error("useForm must be used within a FormProvider");
    }
    return context;
};
