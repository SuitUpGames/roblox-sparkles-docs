"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7173],{25482:e=>{e.exports=JSON.parse('{"functions":[{"name":"_toggleEnchantment","desc":"Toggles a specific enchantment\'s behavior (Private internal method)","params":[{"name":"enchantmentKey","desc":"The enchantment to enable/disable","lua_type":"string"},{"name":"doEnable","desc":"Should the enchantment be enabled?","lua_type":"boolean"}],"returns":[{"desc":"Returns a boolean if the enchantment is successfully set, and a string (Error) if not","lua_type":"boolean | string"}],"function_type":"method","private":true,"source":{"line":116,"path":"src/Shared/Assets/Furniture/Shelf/init.lua"}},{"name":"ToggleEnchantment","desc":"Toggles a specific enchantment\'s behavior","params":[{"name":"enchantmentKey","desc":"The enchantment to enable/disable","lua_type":"string"},{"name":"doEnable","desc":"Should the enchantment be enabled?","lua_type":"boolean"}],"returns":[{"desc":"Returns a boolean if the enchantment is successfully set, and a string (Error) if not","lua_type":"boolean | string"}],"function_type":"method","source":{"line":128,"path":"src/Shared/Assets/Furniture/Shelf/init.lua"}},{"name":"GetEnabledEnchantments","desc":"Get an array of enchantments that are presently equipped to this prop","params":[],"returns":[{"desc":"Returns an array (strings) of equipped enchantments","lua_type":"table"}],"function_type":"method","source":{"line":151,"path":"src/Shared/Assets/Furniture/Shelf/init.lua"}},{"name":"_renderRow","desc":"Replaces the products on a row on a shelf","params":[{"name":"rowNumber","desc":"The row to stock","lua_type":"number"},{"name":"stockedItem","desc":"The item to stock on the shelf - if nil, shelf will erase all contents for that row","lua_type":"string?"},{"name":"stockAmount","desc":"The amount of that item to stock","lua_type":"number"}],"returns":[{"desc":"","lua_type":"nil\\r\\n"}],"function_type":"method","realm":["Client"],"private":true,"source":{"line":178,"path":"src/Shared/Assets/Furniture/Shelf/init.lua"}},{"name":"_renderShelf","desc":"Replaces the products on a shelf","params":[{"name":"shelfRows","desc":"The rows to stock","lua_type":"table"},{"name":"stockedItem","desc":"The item to stock on the shelf","lua_type":"string"}],"returns":[],"function_type":"method","realm":["Client"],"private":true,"source":{"line":229,"path":"src/Shared/Assets/Furniture/Shelf/init.lua"}},{"name":"PivotTo","desc":"Moves the furniture model to a new location\\n\\nIf called from the client, the 3D model will pivot to the new location\\nIf called from the server, the hitbox will pivot to the new location","params":[{"name":"targetCFrame","desc":"The new CFrame for the model/hitbox","lua_type":"CFrame"}],"returns":[{"desc":"Returns true if the prop\'s position is successfully adjusted, and false if not","lua_type":"boolean"}],"function_type":"method","source":{"line":247,"path":"src/Shared/Assets/Furniture/Shelf/init.lua"}},{"name":"_initiateServer","desc":"Initiates the server-side code for the furniture class (Activated by the :Initiate(...) method)","params":[{"name":"targetCFrame","desc":"The starting CFrame of the prop","lua_type":"CFrame"}],"returns":[{"desc":"Returns the newly created bounding box","lua_type":"BasePart"}],"function_type":"method","realm":["Server"],"private":true,"source":{"line":273,"path":"src/Shared/Assets/Furniture/Shelf/init.lua"}},{"name":"_initiateClient","desc":"Initiates the client-side code for the furniture class (Activated by the :Initiate(...) method)","params":[{"name":"targetCFrame","desc":"The CFrame to pivot the furniture model to","lua_type":"CFrame"}],"returns":[{"desc":"Returns a model (The newly created furniture)","lua_type":"Model"}],"function_type":"method","realm":["Client"],"private":true,"source":{"line":337,"path":"src/Shared/Assets/Furniture/Shelf/init.lua"}},{"name":"StockShelf","desc":"Stocks the shelf","params":[{"name":"desiredProduct","desc":"The desired product to stock on this shelf. If desiredProduct is nil, all items stocked on the shelf will be removed","lua_type":"string?"}],"returns":[],"function_type":"method","realm":["Server"],"source":{"line":401,"path":"src/Shared/Assets/Furniture/Shelf/init.lua"}},{"name":"Initiate","desc":"Initiates furniture behavior","params":[{"name":"...","desc":"TBD optional parameters","lua_type":"any"}],"returns":[{"desc":"Returns the furniture model if the code is being run client-side, and returns the bounding box BasePart if run server-side","lua_type":"Model | BasePart"}],"function_type":"method","source":{"line":457,"path":"src/Shared/Assets/Furniture/Shelf/init.lua"}},{"name":"_destroyServer","desc":"Destroys the furniture class","params":[],"returns":[],"function_type":"method","realm":["Server"],"private":true,"source":{"line":471,"path":"src/Shared/Assets/Furniture/Shelf/init.lua"}},{"name":"_destroyClient","desc":"Destroys the furniture class","params":[],"returns":[],"function_type":"method","realm":["Client"],"private":true,"source":{"line":481,"path":"src/Shared/Assets/Furniture/Shelf/init.lua"}},{"name":"_processRemoteInput","desc":"Processes input from the client (That\'s sent to the server) for a specific prop","params":[{"name":"Player","desc":"The player firing the remote","lua_type":"Player"},{"name":"propFunction","desc":"The name of the function to fire under the prop","lua_type":"string"},{"name":"...","desc":"Variadic args for the propFunction","lua_type":"any"}],"returns":[{"desc":"Returns the result from the respective propFunction","lua_type":"any"}],"function_type":"method","realm":["Server"],"private":true,"source":{"line":495,"path":"src/Shared/Assets/Furniture/Shelf/init.lua"}},{"name":"_stockShelf","desc":"A test function to see if the bridge between the client/server works","params":[{"name":"self","desc":"The respective prop class","lua_type":"table"},{"name":"Player","desc":"The player invoking the remote","lua_type":"Player"},{"name":"...","desc":"Variadic args","lua_type":"any"}],"returns":[{"desc":"","lua_type":"nil"}],"function_type":"static","source":{"line":524,"path":"src/Shared/Assets/Furniture/Shelf/init.lua"}},{"name":"_stockShelf","desc":"Stocks the shelf model w/a desired item, or erases the existing items from the shelf","params":[{"name":"self","desc":"The respective prop class","lua_type":"table"},{"name":"Player","desc":"The player invoking the remote","lua_type":"Player"},{"name":"...","desc":"Variadic args","lua_type":"any"}],"returns":[{"desc":"","lua_type":"nil"}],"function_type":"static","source":{"line":534,"path":"src/Shared/Assets/Furniture/Shelf/init.lua"}},{"name":"Destroy","desc":"Destroys the furniture class","params":[],"returns":[],"function_type":"method","source":{"line":541,"path":"src/Shared/Assets/Furniture/Shelf/init.lua"}},{"name":"new","desc":"Creates a new furniture class","params":[{"name":"floorId","desc":"The ID of the floor this prop is being placed on","lua_type":"string"},{"name":"ownerId","desc":"The user ID of the player who owns the floor this prop is placed on","lua_type":"number"},{"name":"existingFurnitureData","desc":"(Optional) Existing saved furniture data for this prop","lua_type":"table?"}],"returns":[{"desc":"Returns a new furniture class","lua_type":"table"}],"function_type":"static","source":{"line":557,"path":"src/Shared/Assets/Furniture/Shelf/init.lua"}}],"properties":[],"types":[],"name":"ShelfFurniture","desc":"Author: ArtemisTheDeer\\nDate: 01/09/2024\\nProject: roblox-sparkles\\n\\nDescription: Furniture class\\n\\nUnder the furniture class, there is a signal (PropEnchantmentToggled) - you can connect to it for determining when a prop\'s enchantment was enabled/disabled\\n\\nArgs provided for the callback function are:\\n\\t\\nEnchantment: string - The enchantment being enabled/disabled\\n\\nisEnabled: boolean - If the enchantment is enabled/disabled\\n\\nTo add enchantments:\\n\\nEnchantments go under the optional \'Enchantments\' table of Metadata\\n\\nEach enchantment table key should have the following:\\n\\nKey: string = {\\n\\t\\t\\t\\tName: string= \\"MyEnchantment\\", -- Name of the enchantment (What text should be displayed to players)\\n\\t\\t\\t\\tDescription: string = \\"Automatically check out customers who approach the cash register\\", -- Description of the enchantment (What text should be displayed to players)\\n\\t\\t\\t\\tPrice: number = 100, -- How much one quantity of this enchantment costs (Players can buy multiple quantities of the enchantment and equip/unequip across the same type of prop w/their store)\\n\\t\\t\\t\\tPurchaseCurrency: string = \\"Credits\\", -- What currency to bill players to purchase one copy of this enchantment\\n\\t\\t\\t\\t_function: string = \\"automaticCheckout\\", -- What internal function to fire when the enchantment is toggled on/off (Client/server)\\n\\t\\t\\t},\\n\\n\\t\\tWith the _function string, here is how you add an enchantment function to the prop\\n\\n\\t\\t\\tThe function should be defined under the prop class (Eg. ShelfFurniture) as follows:\\n\\n\\t\\t\\tfunction MyProp._enchantmentFunction(self: ANY_TABLE, doEnable: boolean): boolean | string\\n\\n\\t\\t\\tWhere:\\n\\n\\t\\t\\t- _function key (Under the enchantment table) would be \\"enchantmentFunction\\"\\n\\n\\t\\t\\t- MyProp would have a function under it called ._enchantmentFunction\\n\\n\\t\\t\\tThis function will be called server and client-side (With the self argument being the server/client prop class, respectively, and doEnable being whether that enchantment is enabled/disabled)\\n\\n\\t\\t\\tThe function should return a boolean if the behavior is successfully set, and a string (The error reason) if it is unable to be successfully ran","private":true,"source":{"line":49,"path":"src/Shared/Assets/Furniture/Shelf/init.lua"}}')}}]);