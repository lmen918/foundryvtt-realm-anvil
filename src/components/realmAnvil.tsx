import React from "react";
import {ButtonComponent} from "./ButtonComponent";

const RealmAnvil: React.FC = () => {

    return (
        <>
            <div className="realmAnvil-Sidebar-content">
                <h1>Realm Anvil</h1>
                <p>An application to assist GMs and players with building the realm for their VTT system</p>
            </div>
            <ButtonComponent />
        </>

    )
}
export default RealmAnvil;