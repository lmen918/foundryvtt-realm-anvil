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

    override async getData() {
        const data = await super.getData();
        return {
            ...data,
            // Add any additional data the component needs
        };
    }

    // override render(force?: boolean, options?: RenderOptions<ApplicationOptions> ){
    //     return super.render(force, options);
    // }

    override activateListeners(html: JQuery) {
        super.activateListeners(html);

        const mountPoint = html.find('#react-root')[0];
        if (mountPoint) {
           const root = createRoot(mountPoint);
            root.render(
                React.createElement(React.StrictMode, null,
                    React.createElement(RealmAnvil)
                )
            );
        }

        // // Create a button to open the application
        // const button = $(
        //     `<button class="cc-sidebar-button" type="button"></button>`
        // );
        //
        // // Insert button after the actors tab
        // html.find(".directory-header .action-buttons").insertAfter(button);
        //
        // // Find the mounting point and render React
        // button.on("click", () => {
        //     const mountPoint = html.find('#react-root')[0];
        //     if (mountPoint) {
        //         const root = createRoot(mountPoint);
        //         root.render(
        //             React.createElement(React.StrictMode, null,
        //                 React.createElement(RealmAnvil)
        //             )
        //         );
        //     }
        // });
    };

    // html.find("realm-anvil-container").on("render", () => {
    //     // Add any event listeners or other logic here
    //     console.log("Realm Anvil Application Rendered");
    // })
    //
    // Find the mounting point and render React
    // const mountPoint = html.find('#react-root')[0];
    // if (mountPoint) {
    //     const root = createRoot(mountPoint);
    //     root.render(
    //         React.createElement(React.StrictMode, null,
    //             React.createElement(RealmAnvil)
    //         )
    //     )
    // }
    // }
    //
    // close(options?: Application.CloseOptions): Promise<void> {
    //     // Clean up React components when the window closes
    //     const mountPoint = this.element.find('#react-root')[0];
    //     if (mountPoint) {
    //         const root = createRoot(mountPoint);
    //         root.unmount();
    //     }
    //     return super.close(options);
    // }
}