import { useState } from "react"
import buildBoard from "../utilities/Board";

export default function useBoard ({ rows, columns }) {

const [board] = useState(buildBoard({rows, columns}));

    return[board]
}