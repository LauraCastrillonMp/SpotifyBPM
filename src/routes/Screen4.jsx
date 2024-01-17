import React from "react"
import PlaylistAdded from "../containers/PlaylistAdded"

export default function Screen4() {
    return (
        <>
            <PlaylistAdded />
            <ul>
                <li>
                    <a href="/screen1">Screen 1</a>
                </li>
                <li>
                    <a href="/screen2">Screen 2</a>
                </li>
                <li>
                    <a href="/screen3">Screen 3</a>
                </li>
            </ul>
        </>
    )
}