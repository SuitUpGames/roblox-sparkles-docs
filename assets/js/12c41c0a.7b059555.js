"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1791],{58860:e=>{e.exports=JSON.parse('{"functions":[{"name":"MoveModel","desc":"Move bounding box of prop","params":[{"name":"player","desc":"","lua_type":"Player"},{"name":"args","desc":"table of arguments {ReplicaId: string, Floor: BasePart, Placement: CFrame}","lua_type":"table"}],"returns":[{"desc":"true if prop successfully moved, false otherwise","lua_type":"boolean"}],"function_type":"method","source":{"line":53,"path":"src/Server/Services/Game/PlacementService.lua"}},{"name":"ToggleStoreOpen","desc":"Sets the state of a player\'s store to open/closed (NPCs can enter/not enter)","params":[{"name":"Player","desc":"The player to toggle the store open/close state for","lua_type":"Player"},{"name":"Open","desc":"Whether the store is open or not","lua_type":"boolean"}],"returns":[],"function_type":"method","realm":["Server"],"source":{"line":87,"path":"src/Server/Services/Game/PlacementService.lua"}},{"name":"_spawnTutorialNPC","desc":"Spawns an NPC that spawns in front of the player\'s store/prefers to go to the player\'s store with the item they just placed down","params":[{"name":"Player","desc":"The player to spawn an NPC for","lua_type":"Player"}],"returns":[],"function_type":"method","realm":["Server"],"private":true,"source":{"line":121,"path":"src/Server/Services/Game/PlacementService.lua"}},{"name":"ChangeBuildingDesign","desc":"Changes the design of a player\'s building","params":[{"name":"Player","desc":"The player to change the building design for (With their shop)","lua_type":"Player"},{"name":"newBuildingDesign","desc":"The chosen building design - if nil, building will default to default design for that store plot","lua_type":"string?"}],"returns":[{"desc":"Returns true if the building design was successfully updated, and false if not","lua_type":"boolean"}],"function_type":"method","realm":["Server"],"source":{"line":159,"path":"src/Server/Services/Game/PlacementService.lua"}},{"name":"PlaceModel","desc":"Place a model","params":[{"name":"Player","desc":"","lua_type":"Player"},{"name":"args","desc":"table of arguments {Model: string, Floor: BasePart}","lua_type":"table"}],"returns":[{"desc":"Returns a promise that resolves if successfully placed, and rejects otherwise","lua_type":"Promise<T>"}],"function_type":"method","source":{"line":200,"path":"src/Server/Services/Game/PlacementService.lua"}},{"name":"UnequipWand","desc":"Destroy player wand model if it exists under their character","params":[{"name":"player","desc":"","lua_type":"Player"}],"returns":[],"function_type":"method","source":{"line":278,"path":"src/Server/Services/Game/PlacementService.lua"}},{"name":"EquipWand","desc":"Create a wand model and parent it to the player\'s character","params":[{"name":"player","desc":"","lua_type":"Player"}],"returns":[],"function_type":"method","source":{"line":303,"path":"src/Server/Services/Game/PlacementService.lua"}},{"name":"StockShelf","desc":"Stocks a shelf with specified item","params":[{"name":"Player","desc":"The owner of the shop","lua_type":"Player"},{"name":"floorId","desc":"The unique ID of the floor","lua_type":"string"},{"name":"propId","desc":"The prop (Replica) ID of the shelf","lua_type":"string"},{"name":"desiredProduct","desc":"The desired product to stock","lua_type":"string"}],"returns":[{"desc":"Returns a promise that resolves with the new stock configuration for the shelf if successfully stocked, and rejects if it cannot be stocked","lua_type":"Promise<T>"}],"function_type":"method","source":{"line":345,"path":"src/Server/Services/Game/PlacementService.lua"}},{"name":"EnchantProp","desc":"Toggle specified enchantment for a prop","params":[{"name":"player","desc":"The owner of the shop","lua_type":"Player"},{"name":"floorId","desc":"The unique ID of the floor","lua_type":"string"},{"name":"propId","desc":"The prop (Replica) ID of the shelf","lua_type":"string"},{"name":"enchantmentName","desc":"Name of enchantment","lua_type":"string"}],"returns":[{"desc":"Returns a promise that resolves if successfully enchanted","lua_type":"Promise<T>"}],"function_type":"method","source":{"line":380,"path":"src/Server/Services/Game/PlacementService.lua"}},{"name":"GetProps","desc":"Gets the placed props of a specific shop floor","params":[{"name":"floorId","desc":"The ID of the floor","lua_type":"string"},{"name":"propId","desc":"The replica ID of the prop","lua_type":"string"}],"returns":[{"desc":"Returns a key/pair table of the currently placed down props for the floor, and returns nil if the floor cannot be found for some reason","lua_type":"table"}],"function_type":"method","source":{"line":421,"path":"src/Server/Services/Game/PlacementService.lua"}},{"name":"RemoveModel","desc":"Removes a model","params":[{"name":"Player","desc":"","lua_type":"Player"},{"name":"args","desc":"","lua_type":"table"}],"returns":[{"desc":"true if successfully removed, false otherwise","lua_type":"boolean"}],"function_type":"method","source":{"line":450,"path":"src/Server/Services/Game/PlacementService.lua"}},{"name":"GetMatrix","desc":"Get pathfinding matrix of a given shop\'s floor layout","params":[{"name":"floorId","desc":"The generated GUID of the floor","lua_type":"string"}],"returns":[{"desc":"The layout of the shop floor","lua_type":"table"}],"function_type":"method","source":{"line":504,"path":"src/Server/Services/Game/PlacementService.lua"}},{"name":"GetMatrixCoordinate","desc":"Get matrix coordinates of a position relative to a shop\'s floor","params":[{"name":"floorId","desc":"The generated GUID of the floor","lua_type":"string"},{"name":"position","desc":"","lua_type":"Vector3"}],"returns":[{"desc":"i, j representing matrix[i][j]","lua_type":"number, number"}],"function_type":"method","source":{"line":523,"path":"src/Server/Services/Game/PlacementService.lua"}},{"name":"GetPropById","desc":"Get a prop by id","params":[{"name":"floorId","desc":"ID of floor prop is placed on","lua_type":"string"},{"name":"replicaId","desc":"replica ID of prop","lua_type":"string"}],"returns":[{"desc":"prop object if floor and prop exist, nil otherwise","lua_type":"table?"}],"function_type":"method","source":{"line":540,"path":"src/Server/Services/Game/PlacementService.lua"}},{"name":"GetShelfData","desc":"Returns the shelf data from the [ShopFloor] class of a specific floor","params":[{"name":"floorId","desc":"The floor ID to retrieve a specific shelf data","lua_type":"string"},{"name":"shelfId","desc":"The shelf (Replica) id to retrieve shelf data for","lua_type":"string"}],"returns":[{"desc":"Returns a table of the shelf data from the prop class if it exists, and nil if not","lua_type":"table?"}],"function_type":"method","source":{"line":550,"path":"src/Server/Services/Game/PlacementService.lua"}},{"name":"LookForProp","desc":"Look for prop given floorId","params":[{"name":"floorId","desc":"ID of floor we want to search in","lua_type":"string"},{"name":"propName","desc":"name of prop to look for","lua_type":"string"}],"returns":[{"desc":"list of props","lua_type":"table"}],"function_type":"method","source":{"line":574,"path":"src/Server/Services/Game/PlacementService.lua"}},{"name":"LookForServices","desc":"Look for stores with service props corresponding to given list of services","params":[{"name":"serviceList","desc":"List of services to look for e.g. {\\"TestService1\\", \\"TestService2\\"}","lua_type":"table"},{"name":"searchOrigin","desc":"(Optional) The position to consider when eliminating store choices (Eg. All stores within X studs of Y position)","lua_type":"CFrame?"},{"name":"floorId","desc":"(Optional) The generated GUID of the floor","lua_type":"string?"}],"returns":[{"desc":"Returns a table that contains all of the stores, and nil if no stores are found","lua_type":"table?"}],"function_type":"method","source":{"line":593,"path":"src/Server/Services/Game/PlacementService.lua"}},{"name":"LookForProducts","desc":"Returns an array of stores that stock the item in question","params":[{"name":"shoppingList","desc":"Key/pair table of items to search stores for (Eg. {Eggs=1,Milk=2,Bread=3})","lua_type":"table"},{"name":"searchOrigin","desc":"(Optional) The position to consider when eliminating store choices (Eg. All stores within X studs of Y position)","lua_type":"Vector3?"},{"name":"floorId","desc":"(Optional) The generated GUID of the floor","lua_type":"string?"}],"returns":[{"desc":"Returns a table that contains all of the stores, and nil if no stores are found","lua_type":"table?"}],"function_type":"method","source":{"line":659,"path":"src/Server/Services/Game/PlacementService.lua"}},{"name":"GetStockedProducts","desc":"Returns an array of the current stock of items across the entire market","params":[],"returns":[{"desc":"Returns an array (Key/pair) of all currently stocked market items in-game","lua_type":"table"}],"function_type":"method","source":{"line":734,"path":"src/Server/Services/Game/PlacementService.lua"}},{"name":"GetAvailableServices","desc":"Returns an array of the available services across the entire market","params":[],"returns":[{"desc":"Returns an array (Key/pair) of all currently available services in the game","lua_type":"table"}],"function_type":"method","source":{"line":764,"path":"src/Server/Services/Game/PlacementService.lua"}},{"name":"AddFloor","desc":"Add a new floor part","params":[{"name":"floorPart","desc":"","lua_type":"BasePart"}],"returns":[{"desc":"","lua_type":"nil"}],"function_type":"method","private":true,"source":{"line":788,"path":"src/Server/Services/Game/PlacementService.lua"}},{"name":"AssignFloorToPlayer","desc":"Assign an existing floor object to the player in question","params":[{"name":"Player","desc":"The player to assign ownership of the floor part to","lua_type":"Player"},{"name":"floorID","desc":"(Optional) The ID of the floor to assign to the player. If floorID is nil, a random available floor will be assigned","lua_type":"string"}],"returns":[{"desc":"Returns a promise that resolves with the selected floor ID (string) if a floor is assigned to the player, and rejects if a floor cannot be assigned to a player","lua_type":"Promise<T>"}],"function_type":"method","source":{"line":813,"path":"src/Server/Services/Game/PlacementService.lua"}},{"name":"KnitInit","desc":"Initializes PlacementService","params":[],"returns":[{"desc":"","lua_type":"nil"}],"function_type":"method","source":{"line":858,"path":"src/Server/Services/Game/PlacementService.lua"}},{"name":"KnitStart","desc":"Start PlacementService","params":[],"returns":[{"desc":"","lua_type":"nil"}],"function_type":"method","source":{"line":877,"path":"src/Server/Services/Game/PlacementService.lua"}}],"properties":[],"types":[],"name":"PlacementService","desc":"Author: Maxim Peng\\nProject: roblox-sparkles\\n\\nHandles placing of props and provides methods for getting shop floor matrices for pathfinding","realm":["Server"],"source":{"line":10,"path":"src/Server/Services/Game/PlacementService.lua"}}')}}]);