import {createRoot} from "react-dom/client";
import {id as moduleId} from "../module.json";
import "../src/styles/module.css";
import React from "react";


export const RealmAnvil = () => {
const root = createRoot(document.getElementById(moduleId)!);
root.render(
    <div>
        <h1>Realm Anvil</h1>
    </div>
)}