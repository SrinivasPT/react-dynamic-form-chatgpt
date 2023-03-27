// CustomForm.tsx
import React from "react";
import { useImmerReducer } from "use-immer";
import { FormProvider } from "../../library/context/FormContext";
import { formReducer } from "../../library/context/FormReducer";
import SmartControl from "../../library/factory/SmartControl";

const initialState = {
    formData: {
        firstName: "",
        lastName: "",
    },
};

const LoginForm: React.FC = () => {
    const [state, dispatch] = useImmerReducer(formReducer, initialState);
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(state.formData);
    };

    return (
        <FormProvider state={state} dispatch={dispatch}>
            <form onSubmit={handleSubmit}>
                {state && (
                    <div>
                        <SmartControl type="text" dataPath="formData.firstName" label="First Name" />
                        <SmartControl type="text" dataPath="formData.lastName" label="Last Name" />
                        <button type="submit">Submit</button>
                    </div>
                )}
            </form>
        </FormProvider>
    );
};

export default LoginForm;
