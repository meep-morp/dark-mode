import React from "react";
import useLocalStorage from "./useLocalStorage";

export const useDarkMode = () => {
    useLocalStorage("darkMode", false)
}