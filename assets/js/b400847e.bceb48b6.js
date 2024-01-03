"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2786],{89568:e=>{e.exports=JSON.parse('{"functions":[{"name":"Destroy","desc":"Destroys a customer class","params":[{"name":"self","desc":"References the customer\'s self class to destroy","lua_type":"[Customer]"}],"returns":[{"desc":"","lua_type":"nil\\r\\n"}],"function_type":"static","realm":["Server"],"source":{"line":60,"path":"src/Server/Services/Game/CustomerService/Customer.lua"}},{"name":"AddItemToShoppingList","desc":"Adds an item to the customer that they will want to purchase - the customer will search for the new items on the next lookup cycle","params":[{"name":"self","desc":"References the customer","lua_type":"[Customer]"},{"name":"itemId","desc":"The ID of the item to add","lua_type":"string"},{"name":"itemQuantity","desc":"(Optional) The amount of the item to add - defaults to 1","lua_type":"number"}],"returns":[{"desc":"Returns a promise that resolves with the new shopping list if the item was successfully added to the customer\'s shopping list, and rejects if not","lua_type":"Promise<T>"}],"function_type":"static","private":true,"source":{"line":74,"path":"src/Server/Services/Game/CustomerService/Customer.lua"}},{"name":"AddRandomItemsToShoppingList","desc":"Adds random item(s) to the customer that they will want to purchase - the customer will search for the new items on the next lookup cycle","params":[{"name":"itemQuantity","desc":"(Optional) The amount of the item to add - defaults to 1","lua_type":"number"}],"returns":[{"desc":"Returns a key/pair array of the desired items + how many to purchase","lua_type":"table"}],"function_type":"method","private":true,"source":{"line":88,"path":"src/Server/Services/Game/CustomerService/Customer.lua"}},{"name":"PlayAnimation","desc":"Replicates the state of an animation to the client and overrides any existing animations being played in that moment\\nAnimations are reset automatically when a new path is assigned","params":[{"name":"Animation","desc":"The animation to play","lua_type":"string"}],"returns":[{"desc":"Returns whether the animation was started successfully or not","lua_type":"boolean"}],"function_type":"method","source":{"line":138,"path":"src/Server/Services/Game/CustomerService/Customer.lua"}},{"name":"RemoveItemFromShoppingList","desc":"Removes an item from the customer\'s shopping list","params":[{"name":"itemId","desc":"","lua_type":"string"},{"name":"itemQuantity","desc":"(Optional) The amount of the item to remove - defaults to 1. Keys will be removed from table if quantity <= 0","lua_type":"number"}],"returns":[{"desc":"Returns a promise that resolves with the current shopping list if the item was removed from the shopping list/if it does not exist in the shopping list, and rejects if the function failed for some reason","lua_type":"Promise<T>"}],"function_type":"method","private":true,"source":{"line":149,"path":"src/Server/Services/Game/CustomerService/Customer.lua"}},{"name":"AddItemToCart","desc":"Adds an item to a customer\'s cart","params":[{"name":"self","desc":"References the customer","lua_type":"[Customer]"},{"name":"itemId","desc":"The ID of the item to add","lua_type":"string"},{"name":"itemQuantity","desc":"(Optional) The amount of the item to add - defaults to 1","lua_type":"number"}],"returns":[{"desc":"Returns a promise that resolves with the new updated shopping cart and new item quantity if the item is successfully added, and rejects if it cannot be added","lua_type":"Promise<T>"}],"function_type":"static","realm":["Server"],"private":true,"source":{"line":175,"path":"src/Server/Services/Game/CustomerService/Customer.lua"}},{"name":"RemoveItemFromCart","desc":"Removes an item from a customer\'s cart","params":[{"name":"self","desc":"References the customer","lua_type":"[Customer]"},{"name":"itemId","desc":"The ID of the item to remove","lua_type":"string"},{"name":"itemQuantity","desc":"The quantity of the item to remove - if the number provided is","lua_type":"number"}],"returns":[{"desc":"Returns a promise that resolves with the new updated shopping cart and new item quantity if the item is successfully added, and rejects if it cannot be added","lua_type":"Promise<T>"}],"function_type":"static","realm":["Server"],"private":true,"source":{"line":197,"path":"src/Server/Services/Game/CustomerService/Customer.lua"}},{"name":"NavigateToPoint","desc":"Navigates a customer to a specific point","params":[{"name":"Position","desc":"The desired position/orientation of the NPC","lua_type":"CFrame"}],"returns":[{"desc":"Returns a promise that resolves if the NPC reaches the desired point, and rejects if it does not","lua_type":"Promise<T>"}],"function_type":"method","private":true,"source":{"line":215,"path":"src/Server/Services/Game/CustomerService/Customer.lua"}},{"name":"GetCurrentNPCPosition","desc":"Gets the approx. server-side position of the NPC (Based on waypoints/elapsed time)","params":[],"returns":[{"desc":"Returns the CFrame of the NPC if it is spawned in, and returns nil if not","lua_type":"CFrame?"}],"function_type":"method","source":{"line":223,"path":"src/Server/Services/Game/CustomerService/Customer.lua"}},{"name":"new","desc":"Generates a new customer class","params":[{"name":"Replication","desc":"An array of players to replicate this customer to - if no table is provided (nil), then the customer will replicate to all clients","lua_type":"table"},{"name":"Origin","desc":"The starting position of the customer NPC","lua_type":"Vector3"},{"name":"rigType","desc":"The type of rig to use for the customer NPC","lua_type":"string"},{"name":"rigClass","desc":"","lua_type":"string"}],"returns":[{"desc":"Returns a promise that resolves with the new customer table and rejects if it cannot","lua_type":"Promise<T>"}],"function_type":"static","source":{"line":234,"path":"src/Server/Services/Game/CustomerService/Customer.lua"}}],"properties":[],"types":[],"name":"Customer","desc":"Author: ArtemisTheDeer\\nDate: 11/17/2023\\nProject: roblox-sparkles\\n\\nDescription: Customer server class","realm":["Server"],"source":{"line":11,"path":"src/Server/Services/Game/CustomerService/Customer.lua"}}')}}]);