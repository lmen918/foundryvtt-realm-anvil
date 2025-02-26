import {id as moduleId} from "../module.json";
// import {RealmAnvilApplication} from "./realmAnvil";
// import RealmAnvil from "./components/realmAnvil";
// import {createRoot} from "react-dom/client";
// import React from "react";

// interface RealmAnvilModule extends Game.ModuleCollection {
//     realmAnvil: RealmAnvilApplication;
// }

// let module: RealmAnvilModule;

Hooks.once('init', () => {
    console.log(`${moduleId} | Initializing`);



    // Register the application
    // module = (game as Game).modules.get(moduleId) as unknown as RealmAnvilModule;
    // module.realmAnvil = new RealmAnvilApplication();

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

});

Hooks.on('renderSidebar', (_: Sidebar, html: JQuery) => {
    console.log('Sidebar rendered');

    if (_.options.id === 'sidebar') {
        const realmAnvilButton = $(`
                <div class="action-button">
                    <button type="button" id="realm-anvil-btn">
                        <i class="fas fa-hammer"></i>
                    </button>
                </div>
            `);

        html.find('#sidebar-tabs').prepend(realmAnvilButton);

        realmAnvilButton.on('click', () => {
            console.log('It Worked!');
        })
    }
});

Hooks.on("renderSidebar", (_: Sidebar, tabs: any) => {
    console.log('renderSidebar initiated');
    tabs.append({
        name: 'realm-anvil',
        label: 'Realm Anvil',
        icon: 'fas fa-hammer',
        content: '<h1>Realm Anvil</h1>',
    })
})

// Hooks.on('renderSideBar', (app: Application, html: JQuery) => {
//
//     if (app.options.id === 'app') {
//         const realmAnvilButton = $(`
//         <div class="action-button">
//             <button type="button" id="realm-anvil-btn">
//                 <i class="fas fa-hammer"></i> Realm Anvil
//             </button>
//         </div>
//     `);
//
//         html.find('.directory-header .action-buttons').append(realmAnvilButton);
//
//         realmAnvilButton.on('click', () => {
//             console.log('It Worked!');
//         })
//     }
// });
// const actorsTab = html.find('[data-tab="actors"]');
// const realmAnvilTab = {
//     name: 'realm-anvil',
//     icon: 'fas fa-hammer',
//     label: 'Realm Anvil',
// };
// realmAnvilButton.insertAfter(actorsTab);
// Add the tab content section
// const tabContent = $(`<div class="tab" data-tab="realm-anvil"></div>`);
// html.find('#sidebar').append(tabContent);
//
// // Re-initialize the sidebar tabs
// sidebar.tabs.activate('actors');
// sidebar._tabs = new Tabs({
//     navSelector: '#sidebar-tabs',
//     contentSelector: '#sidebar',
//     initial: 'actors',
//     callback: (clicked) => {
//         if (clicked) {
//             console.log("Realm Anvil Button Clicked");
//         }
//     }
// })

// const tabs = app['_tabs'];
// tabs.register({
//     navSelector: '.sidebar-tabs',
//     contentSelector: '.sidebar-content',
//     initial: 'actors',
//     tabs: [{
//         navSelector: `.item[data-tab="${realmAnvilTab.name}"]`,
//         contentSelector: '.tab[data-tab="${realmAnvilTab.name}"]',
//         callbacks: () => {
//             module.realmAnvil.render(true);
//         }
//     }]
// })
// tabs.bind(html[0]);
// if (app.options.id === 'sidebar') {
//     const realmAnvilTab = {
//         name: 'realmAnvilTab',
//         icon: 'fas fa-anvil',
//         label: 'Realm Anvil Tab',
//         class: RealmAnvilApplication
//     };
//
//     // const actorsTab = html.find('.directory-header');
//     //
//     // // Create a button to open the application
//     // const realmAnvilButton = $(`
//     //     <a class="item" data-tab="${realmAnvilTab.name}">
//     //         <i class="${realmAnvilTab.icon}"></i>
//     //         <span>${realmAnvilTab.label}</span>
//     //     </a>
//     // `);
//     // html.find('.tabs').append(realmAnvilButton);
//     //
//     // // Insert button after the actors tab
//     // // realmAnvilButton.insertAfter(actorsTab);
//     // actorsTab.after(realmAnvilButton);
//
//     // Find the mounting point and render React
//     // realmAnvilButton.on("click", () => {
//     //     const mountPoint = html.find('#react-root')[0];
//     //     if (mountPoint) {
//     //         const root = createRoot(mountPoint);
//     //         root.render(
//     //             React.createElement(React.StrictMode, null,
//     //                 React.createElement(RealmAnvil)
//     //             )
//     //         );
//     //     }
//     // });
//
//     // Insert button after the actors tab
//     // html.find(".directory-header .action-buttons").insertAfter(realmAnvilButton);
// }

// Hooks.on('renderSidebarTab', (app: SidebarTab, html: JQuery) => {
//     if (app.options.id === 'sidebar') {
//         const actorsTab = html.find('[data-tab="actors"]');
//         const tabButton = $(`
//         <a class="item" data-tab="customTab">
//           <i class="fas fa-cog"></i>
//           <span>${game.i18n.localize('Custom Tab')}</span>
//         </a>
//       `);
//
//         tabButton.insertAfter(actorsTab);
//     }
// });
