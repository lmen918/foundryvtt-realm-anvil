import { id as moduleId } from "../module.json";

export default class RealmAnvil extends Application {
    static override get defaultOptions(): ApplicationOptions {
        return foundry.utils.mergeObject(super.defaultOptions, {
            id: "realm-anvil",
            title: "Realm Anvil",
            template: `modules/${moduleId}/src/realmAnvil.html`,
            width: 600,
            height: 600,
        }) as ApplicationOptions;
    }
}