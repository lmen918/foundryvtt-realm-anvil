import {id as moduleId} from "../module.json";
import "../src/styles/module.css"
import RealmAnvil from "./realmAnvil";

interface RealmAnvilModule extends Game.ModuleCollection {
    realmAnvil: RealmAnvil;
}

let module: RealmAnvilModule;

Hooks.once("init", () => {
    console.log(`${moduleId} | Initializing`);

    module = (game as Game).modules.get(moduleId) as unknown as RealmAnvilModule;
    module.realmAnvil = new RealmAnvil();

    // Add the tab to the sidebar
    Hooks.on("renderApplication", (_: Application, html: JQuery) => {
        if (_.options.id === 'sidebar') {
            const customTab = {
                name: 'Realm Anvil',
                icon: 'fas fa-cog',
                label: 'Realm Anvil',
                class: RealmAnvil
            };

            // Insert after actors tab
            const actorsTab = html.find('[data-tab="actors"]');
            const tabButton = $(`
            <a class="item" data-tab="${customTab.name}"}>
                <i class="${customTab.icon}"></i>
            </a>
        `);
            tabButton.on("click", () => {
                module.realmAnvil.render(true);
            });
            tabButton.insertAfter(actorsTab);
        }
    })
});

Hooks.on("renderActorDirectory", (_: Application, html: JQuery) => {
    const button = $(
        `<button class="cc-sidebar-button" type="button">Open Realm Anvil</button>`
    );
    button.on("click", () => {
        console.log("Realm Anvil Works?");
    });
    html.find(".directory-header").append(button);
});