import React from "react";
import {SimpleDialogBox} from "@/components/realm-ui/simpleDialog";

const RealmAnvil: React.FC = () => {
    return (
        <>
            <div className="realmAnvil-Sidebar-content">
                <h1>Realm Anvil</h1>
                <p>An application to assist GMs and players with building the realm for their VTT system</p>
            </div>
            <SimpleDialogBox />
        </>
    )
}
export default RealmAnvil;