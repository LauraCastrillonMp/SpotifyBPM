import React from "react"
import FindBPM from "../containers/FindBPM"

export default function Screen2() {
    return (
        <>
            <FindBPM />
            <ul>
                <li>
                    <a href="/screen1">Screen 1</a>
                </li>
                <li>
                    <a href="/screen3">Screen 3</a>
                </li>
                <li>
                    <a href="/screen4">Screen 4</a>
                </li>
            </ul>
        </>
    )
}