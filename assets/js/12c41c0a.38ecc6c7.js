"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1791],{58860:e=>{e.exports=JSON.parse('{"functions":[{"name":"roundUp","desc":"Rounds up a number to the nearest multiple","params":[{"name":"numToRound","desc":"","lua_type":"number"},{"name":"multiple","desc":"","lua_type":"number"}],"returns":[{"desc":"","lua_type":"number"}],"function_type":"static","source":{"line":58,"path":"src/Server/Services/Game/PlacementService.lua"}},{"name":"GenerateBoundingBox","desc":"Generate bounding boxes for props","params":[{"name":"model","desc":"the model to make a bounding box for","lua_type":"Model"}],"returns":[{"desc":"","lua_type":"nil"}],"function_type":"method","source":{"line":77,"path":"src/Server/Services/Game/PlacementService.lua"}},{"name":"PlaceModel","desc":"Place a model","params":[{"name":"Player","desc":"","lua_type":"Player"},{"name":"args","desc":"table of arguments {Model: string, Floor: BasePart}","lua_type":"table"}],"returns":[{"desc":"true if successfully placed, false otherwise","lua_type":"boolean"}],"function_type":"method","source":{"line":122,"path":"src/Server/Services/Game/PlacementService.lua"}},{"name":"UnequipWand","desc":"Destroy player wand model if it exists under their character","params":[{"name":"player","desc":"","lua_type":"Player"}],"returns":[],"function_type":"method","source":{"line":165,"path":"src/Server/Services/Game/PlacementService.lua"}},{"name":"EquipWand","desc":"Create a wand model and parent it to the player\'s character","params":[{"name":"player","desc":"","lua_type":"Player"}],"returns":[],"function_type":"method","source":{"line":190,"path":"src/Server/Services/Game/PlacementService.lua"}},{"name":"StockShelf","desc":"Stocks an item for a shelf","params":[{"name":"Player","desc":"The owner of the shop","lua_type":"Player"},{"name":"floorId","desc":"The unique ID of the floor","lua_type":"string"},{"name":"propId","desc":"The prop (Replica) ID of the shelf","lua_type":"string"},{"name":"desiredProduct","desc":"The desired product to stock","lua_type":"string"}],"returns":[{"desc":"Returns a promise that resolves with the new stock configuration for the shelf if successfully stocked, and rejects if it cannot be stocked","lua_type":"Promise<T>"}],"function_type":"method","source":{"line":232,"path":"src/Server/Services/Game/PlacementService.lua"}},{"name":"GetProps","desc":"Gets the placed props of a specific shop floor","params":[{"name":"floorId","desc":"The ID of the floor","lua_type":"string"},{"name":"propId","desc":"The replica ID of the prop","lua_type":"string"}],"returns":[{"desc":"Returns a key/pair table of the currently placed down props for the floor, and returns nil if the floor cannot be found for some reason","lua_type":"table"}],"function_type":"method","source":{"line":258,"path":"src/Server/Services/Game/PlacementService.lua"}},{"name":"RemoveModel","desc":"Removes a model","params":[{"name":"Player","desc":"","lua_type":"Player"},{"name":"args","desc":"","lua_type":"table"}],"returns":[{"desc":"true if successfully removed, false otherwise","lua_type":"boolean"}],"function_type":"method","source":{"line":287,"path":"src/Server/Services/Game/PlacementService.lua"}},{"name":"GetMatrix","desc":"Get pathfinding matrix of a given shop\'s floor layout","params":[{"name":"floorId","desc":"The generated GUID of the floor","lua_type":"string"}],"returns":[{"desc":"The layout of the shop floor","lua_type":"table"}],"function_type":"method","source":{"line":336,"path":"src/Server/Services/Game/PlacementService.lua"}},{"name":"GetMatrixCoordinate","desc":"Get matrix coordinates of a position relative to a shop\'s floor","params":[{"name":"floorId","desc":"The generated GUID of the floor","lua_type":"string"},{"name":"position","desc":"","lua_type":"Vector3"}],"returns":[{"desc":"i, j representing matrix[i][j]","lua_type":"number, number"}],"function_type":"method","source":{"line":355,"path":"src/Server/Services/Game/PlacementService.lua"}},{"name":"LookForProducts","desc":"Returns an array of stores that stock the item in question","params":[{"name":"shoppingList","desc":"Key/pair table of items to search stores for (Eg. {Eggs=1,Milk=2,Bread=3})","lua_type":"table"},{"name":"searchOrigin","desc":"(Optional) The position to consider when eliminating store choices (Eg. All stores within X studs of Y position)","lua_type":"Vector3?"},{"name":"floorId","desc":"(Optional) The generated GUID of the floor","lua_type":"string?"}],"returns":[{"desc":"Returns a table that contains all of the stores, and nil if no stores are found","lua_type":"table?"}],"function_type":"method","source":{"line":374,"path":"src/Server/Services/Game/PlacementService.lua"}},{"name":"GetStockedProducts","desc":"Returns an array of the current stock of items across the entire market","params":[],"returns":[{"desc":"Returns an array (Key/pair) of all currently stocked market items in-game","lua_type":"table"}],"function_type":"method","source":{"line":451,"path":"src/Server/Services/Game/PlacementService.lua"}},{"name":"AddFloor","desc":"Add a new floor part","params":[{"name":"floorPart","desc":"","lua_type":"BasePart"}],"returns":[{"desc":"","lua_type":"nil"}],"function_type":"method","private":true,"source":{"line":481,"path":"src/Server/Services/Game/PlacementService.lua"}},{"name":"PlaceStarterProps","desc":"Place starter floor props","params":[{"name":"floorId","desc":"the floor ID","lua_type":"string"}],"returns":[],"function_type":"method","source":{"line":503,"path":"src/Server/Services/Game/PlacementService.lua"}},{"name":"AssignFloorToPlayer","desc":"Assign an existing floor object to the player in question","params":[{"name":"Player","desc":"The player to assign ownership of the floor part to","lua_type":"Player"},{"name":"floorID","desc":"(Optional) The ID of the floor to assign to the player. If floorID is nil, a random available floor will be assigned","lua_type":"string"}],"returns":[{"desc":"Returns a promise that resolves with the selected floor ID (string) if a floor is assigned to the player, and rejects if a floor cannot be assigned to a player","lua_type":"Promise<T>"}],"function_type":"method","source":{"line":531,"path":"src/Server/Services/Game/PlacementService.lua"}},{"name":"KnitInit","desc":"Initializes PlacementService","params":[],"returns":[{"desc":"","lua_type":"nil"}],"function_type":"method","source":{"line":585,"path":"src/Server/Services/Game/PlacementService.lua"}},{"name":"KnitStart","desc":"Start PlacementService","params":[],"returns":[{"desc":"","lua_type":"nil"}],"function_type":"method","source":{"line":608,"path":"src/Server/Services/Game/PlacementService.lua"}}],"properties":[{"name":"NPC_SEARCH_RANGE","desc":"How many studs away from a specific position (Vector3) to search the contents of a store for","lua_type":"number","source":{"line":44,"path":"src/Server/Services/Game/PlacementService.lua"}}],"types":[],"name":"PlacementService","desc":"Author: Maxim Peng\\nProject: roblox-sparkles\\n\\nHandles placing of props and provides methods for getting shop floor matrices for pathfinding","realm":["Server"],"source":{"line":10,"path":"src/Server/Services/Game/PlacementService.lua"}}')}}]);