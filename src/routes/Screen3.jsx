import React from "react"
import ChooseSongs from "../containers/ChooseSongs"

export default function Screen3() {
    return (
        <>
            <ChooseSongs />
            <ul>
                <li>
                    <a href="/screen1">Screen 1</a>
                </li>
                <li>
                    <a href="/screen2">Screen 2</a>
                </li>
                <li>
                    <a href="/screen4">Screen 4</a>
                </li>
            </ul>
        </>
    )
}