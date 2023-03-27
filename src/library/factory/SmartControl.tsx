// ControlFactory.tsx
import React from "react";
import SelectControl from "../controls/SelectControl";
import TableControl from "../controls/TableControl";
import TextControl from "../controls/TextControl";
import { ControlProps } from "../types/ControlProps";

const SmartControl: React.FC<ControlProps> = (props) => {
    const { type, ...rest } = props;

    switch (type) {
        case "text":
            return <TextControl type={"text"} {...rest} />;
        case "select":
            return <SelectControl options={[]} {...rest} />;
        case "table":
            return <TableControl columns={[]} {...rest} />;
        default:
            return null;
    }
};

export default SmartControl;
