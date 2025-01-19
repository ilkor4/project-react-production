import {JSX} from "react";
import './Counter.scss'

export const Counter = (): JSX.Element => {
    return (
        <div>
            <button className={"Counter"}>increment</button>
        </div>
    )
}