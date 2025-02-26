import {id as moduleId} from "../module.json";
import {RealmAnvilApplication} from "./realmAnvil";

// Interface for the module
interface RealmAnvilModule extends Game.ModuleCollection {
    realmAnvil: RealmAnvilApplication;
}

// Variable to store the module instance
let module: RealmAnvilModule;

// Hook to initialize the module
Hooks.once('init', () => {
    console.log(`${moduleId} | Initializing`);

    // Register the application
    module = (game as Game).modules.get(moduleId) as unknown as RealmAnvilModule;
    module.realmAnvil = new RealmAnvilApplication();
});

// Sidebar hook
Hooks.on('renderSidebar', (_: Sidebar, html: JQuery) => {
    console.log('Sidebar rendered');

    // Add a button to the sidebar
    if (_.options.id === 'sidebar') {

        // Create a button to open the application
        const realmAnvilButton = $(`
                <a class="item" data-tab="anvil">
                    <i class="fas fa-globe"></i>
                </a>
            `);

        // Prepend the button to the sidebar tabs
        html.find('#sidebar-tabs').prepend(realmAnvilButton);

        // OnClick to render the module as an application
        realmAnvilButton.on('click', () => {
            module.realmAnvil.render(true);
        })
    }
});