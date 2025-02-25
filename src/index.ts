import { id as moduleId } from "../module.json";
import {RealmAnvilApplication} from "./realmAnvil";
import RealmAnvil from "./components/realmAnvil";
import {createRoot} from "react-dom/client";
import React from "react";

interface RealmAnvilModule extends Game.ModuleCollection {
    realmAnvil: RealmAnvilApplication;
}

// let module: RealmAnvilModule;

Hooks.on('init', () => {
    console.log(`${moduleId} | Initializing`);

    // Register the application
    const module: RealmAnvilModule = (game as Game).modules.get(moduleId) as unknown as RealmAnvilModule;
    module.realmAnvil = new RealmAnvilApplication();
});

Hooks.once('renderActorDirectory', (html: JQuery) => {
    console.log(`Initializing ${moduleId}`);

    // Create a button to open the application
    const button = $(
        `<button class="cc-sidebar-button" type="button"></button>`
    );
//
    // Find the mounting point and render React
    button.on("click", () => {
        const mountPoint = html.find('#react-root')[0];
        if (mountPoint) {
            const root = createRoot(mountPoint);
            root.render(
                React.createElement(React.StrictMode, null,
                    React.createElement(RealmAnvil)
                )
            );
        }
    });

    // Insert button after the actors tab
    html.find(".directory-header .action-buttons").insertAfter(button);
});