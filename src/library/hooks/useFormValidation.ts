import { useEffect, useState } from "react";

interface ValidationRules {
    [key: string]: (value: string) => string | null;
}

interface ValidationResult {
    [key: string]: string | null;
}

export function useFormValidation(initialValues: { [key: string]: string }, validationRules: ValidationRules) {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState<ValidationResult>({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        if (isSubmitted) {
            validate();
        }
    }, [isSubmitted, values]);

    function validate() {
        const newErrors: ValidationResult = {};
        for (const key in validationRules) {
            newErrors[key] = validationRules[key](values[key]);
        }
        setErrors(newErrors);
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
    }

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        setIsSubmitted(true);
        validate();
    }

    return { values, errors, handleChange, handleSubmit };
}
