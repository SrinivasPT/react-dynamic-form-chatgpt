export const getValueFromPath = (obj: any, dataPath: string, rowIndex?: number, column?: string): any => {
    const path = dataPath.split(".");
    let currentObj = obj;

    for (let i = 0; i < path.length; i++) {
        const key = path[i];

        if (currentObj[key] === undefined) {
            return undefined;
        }

        if (i === path.length - 1) {
            if (rowIndex !== undefined && column !== undefined) {
                return currentObj[key][rowIndex][column];
            } else {
                return currentObj[key];
            }
        } else {
            currentObj = currentObj[key];
        }
    }

    return undefined;
};

export const setValueFromPath = (obj: any, dataPath: string, value: any, rowIndex?: number, column?: string): any => {
    const path = dataPath.split(".");
    let currentObj = obj;

    for (let i = 0; i < path.length; i++) {
        const key = path[i];

        if (i === path.length - 1) {
            if (rowIndex !== undefined && column !== undefined) {
                currentObj[key][rowIndex][column] = value;
            } else {
                currentObj[key] = value;
            }
        } else {
            if (!currentObj[key]) {
                currentObj[key] = {};
            }
            currentObj = currentObj[key];
        }
    }

    return obj;
};
