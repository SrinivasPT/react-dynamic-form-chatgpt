// CustomTable.tsx
import React from "react";
import { useForm } from "../context/FormContext";
import SmartControl from "../factory/SmartControl";
import { useFormControls } from "../hooks/useFormControls";
import { ControlProps } from "../types/ControlProps";

interface TableColumn {
    key: string;
    label: string;
    control: string;
    controlProps?: Record<string, any>;
}

interface TableControlProps extends ControlProps {
    columns: TableColumn[];
}

const TableControl: React.FC<TableControlProps> = ({ dataPath, columns }) => {
    const { state, dispatch } = useForm();
    const { value: tableData } = useFormControls({ dataPath });

    return (
        <table>
            <thead>
                <tr>
                    {columns.map((column) => (
                        <th key={column.key}>{column.label}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {tableData.map((row: any, rowIndex: number) => (
                    <tr key={rowIndex}>
                        {columns.map((column) => (
                            <td key={column.key}>
                                <SmartControl
                                    control={column.control}
                                    dataPath={dataPath}
                                    rowIndex={rowIndex}
                                    column={column.key}
                                    {...column.controlProps}
                                />
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TableControl;
