import {id as moduleId} from "../module.json";
import RealmAnvil from "./components/realmAnvil";
import {createRoot} from "react-dom/client";
import React from "react";

export class RealmAnvilApplication extends Application {
    static override get defaultOptions()  {
        return {
            ...super.defaultOptions,
            id: "realm-anvil",
            title: "Realm Anvil",
            template: `modules/${moduleId}/templates/realmAnvil.html`,
            width: 600,
            height: 600,
            resizable: true,
        };
    }

    // Override the getData method
    // override async getData() {
    //     const data = await super.getData();
    //     return {
    //         ...data,
    //         // Add any additional data the component needs
    //     };
    // }

    // Override the render method
    // override render(force?: boolean, options?: RenderOptions<ApplicationOptions> ){
    //     return super.render(force, options);
    // }

    // Activate listeners for the application
    override activateListeners(html: JQuery) {
        super.activateListeners(html);

        // Find the mounting point and render React
        const mountPoint = html.find('#react-root')[0];
        if (mountPoint) {
           const root = createRoot(mountPoint);
            root.render(
                React.createElement(React.StrictMode, null,
                    React.createElement(RealmAnvil)
                )
            );
        }
    };
}