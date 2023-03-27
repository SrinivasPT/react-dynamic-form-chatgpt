// CustomForm.tsx
import React from "react";
import { FormProvider } from "../../library/context/FormContext";
import TextControl from "../../library/controls/TextControl";
import { useFormValidation } from "../../library/hooks/useFormValidation";

const validationRules = {
    // ... previous validation rules
    select: (value: string) => {
        return value !== "" ? null : "Select an option";
    },
};

const initialValues = {
    // ... previous initial values
    select: "",
    radio: "",
};

const LoginForm: React.FC = () => {
    const { values, errors, handleChange, handleSubmit } = useFormValidation(initialValues, validationRules);

    return (
        <FormProvider initialValue={{ profile: {} }}>
            <form onSubmit={handleSubmit}>
                {/* <CustomSelect
                    label="Select"
                    options={[
                        { value: "option1", label: "Option 1" },
                        { value: "option2", label: "Option 2" },
                        { value: "option3", label: "Option 3" },
                    ]}
                    error={errors.select}
                    dataPath={""}
                /> */}
                <TextControl dataPath={"profile.firstName"} type={"text"} label={"First Name"} error={null} />
                <TextControl dataPath={"profile.lastName"} type={"text"} label={"Last Name"} error={null} />
                <button color="primary" type="submit">
                    Submit
                </button>
            </form>
        </FormProvider>
    );
};

export default LoginForm;
