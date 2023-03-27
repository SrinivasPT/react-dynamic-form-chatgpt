export interface ControlProps {
    dataPath: string;
    label?: string;
    rowIndex?: number;
    column?: string;
    [key: string]: any;
}

export type FormAction =
    | {
          type: "SET_VALUE";
          payload: {
              dataPath: string;
              value: any;
              rowIndex?: number;
              column?: string;
          };
      }
    | { type: "RESET_FORM" };
