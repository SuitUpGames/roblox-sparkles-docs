"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2786],{89568:e=>{e.exports=JSON.parse('{"functions":[{"name":"Destroy","desc":"Destroys a customer class","params":[{"name":"self","desc":"References the customer\'s self class to destroy","lua_type":"Customer"}],"returns":[{"desc":"","lua_type":"nil\\r\\n"}],"function_type":"static","realm":["Server"],"source":{"line":48,"path":"src/Server/Services/Game/CustomerService/Customer.lua"}},{"name":"AddItemToCart","desc":"Adds an item to a customer\'s cart","params":[{"name":"self","desc":"References the customer","lua_type":"Customer"},{"name":"itemId","desc":"The ID of the item to add","lua_type":"string"},{"name":"itemQuantity","desc":"The amount of the item to add","lua_type":"number"}],"returns":[{"desc":"Returns a promise that resolves with the new updated shopping cart and new item quantity if the item is successfully added, and rejects if it cannot be added","lua_type":"Promise<T>"}],"function_type":"static","realm":["Server"],"source":{"line":62,"path":"src/Server/Services/Game/CustomerService/Customer.lua"}},{"name":"RemoveItemFromCart","desc":"Removes an item from a customer\'s cart","params":[{"name":"self","desc":"References the customer","lua_type":"Customer"},{"name":"itemId","desc":"The ID of the item to remove","lua_type":"string"},{"name":"itemQuantity","desc":"The quantity of the item to remove - if the number provided is","lua_type":"number"}],"returns":[{"desc":"Returns a promise that resolves with the new updated shopping cart and new item quantity if the item is successfully added, and rejects if it cannot be added","lua_type":"Promise<T>"}],"function_type":"static","realm":["Server"],"source":{"line":83,"path":"src/Server/Services/Game/CustomerService/Customer.lua"}},{"name":"new","desc":"Generates a new customer class","params":[{"name":"Replication","desc":"An array of players to replicate this customer to - if no table is provided (nil), then the customer will replicate to all clients","lua_type":"table"},{"name":"Origin","desc":"The starting position of the customer NPC","lua_type":"Vector3"},{"name":"rigType","desc":"The type of rig to use for the customer NPC","lua_type":"string"},{"name":"rigClass","desc":"","lua_type":"string"}],"returns":[{"desc":"Returns a promise that resolves with the new customer table and rejects if it cannot","lua_type":"Promise<T>"}],"function_type":"static","source":{"line":102,"path":"src/Server/Services/Game/CustomerService/Customer.lua"}}],"properties":[],"types":[],"name":"Customer","desc":"Author: ArtemisTheDeer\\nDate: 11/17/2023\\nProject: roblox-sparkles\\n\\nDescription: Customer server class","realm":["Server"],"source":{"line":11,"path":"src/Server/Services/Game/CustomerService/Customer.lua"}}')}}]);