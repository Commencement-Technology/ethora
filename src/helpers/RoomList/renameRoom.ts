/*
Copyright 2019-2022 (c) Dappros Ltd, registered in England & Wales, registration number 11455432. All rights reserved.
You may not use this file except in compliance with the License.
You may obtain a copy of the License at https://github.com/dappros/ethora/blob/main/LICENSE.
Note: linked open-source libraries and components may be subject to their own licenses.
*/

import { getUserRoomsStanza, roomConfigurationForm } from "../../xmpp/stanzas";

export const renameTheRoom = (manipulatedWalletAddress:string, chatJid:string, roomConfig:any, xmpp:any) => {
    roomConfigurationForm(
        manipulatedWalletAddress,
        chatJid,
        roomConfig,
        xmpp
    )
    getUserRoomsStanza(manipulatedWalletAddress,xmpp);
  };
