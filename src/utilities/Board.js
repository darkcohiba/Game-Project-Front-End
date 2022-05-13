import { defaultCell } from "./Cell";

export default function buildBoard ({ rows, columns }) {
    const builtRows = Array.from({length: rows}, () =>
        Array.from({height: columns}, () => ({...defaultCell}))
        );

    return {
        rows: builtRows,
        size: {rows, columns}
    };
};