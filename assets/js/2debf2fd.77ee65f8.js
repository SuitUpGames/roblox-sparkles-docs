"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[950],{65588:e=>{e.exports=JSON.parse('{"functions":[{"name":"renderRow","desc":"Renders the product rows for a shelf model","params":[{"name":"startPos","desc":"The start BasePart","lua_type":"BasePart"},{"name":"productName","desc":"The product name","lua_type":"string"},{"name":"count","desc":"How many copies of the item to render","lua_type":"number"}],"returns":[],"function_type":"static","private":true,"source":{"line":56,"path":"src/Client/Controllers/Game/ShelfController.lua"}},{"name":"renderShelf","desc":"Render a shelf model","params":[{"name":"shelfModel","desc":"The shelf model","lua_type":"Model"},{"name":"rows","desc":"The rows table","lua_type":"table"},{"name":"stockedItem","desc":"What item to render","lua_type":"string"}],"returns":[],"function_type":"static","private":true,"source":{"line":105,"path":"src/Client/Controllers/Game/ShelfController.lua"}},{"name":"clearAllRows","desc":"Clears the rows from a shelf model","params":[{"name":"model","desc":"The shelf model","lua_type":"Model"}],"returns":[],"function_type":"static","private":true,"source":{"line":120,"path":"src/Client/Controllers/Game/ShelfController.lua"}},{"name":"HandleShelfAdded","desc":"Handles new shelves being added","params":[{"name":"floorId","desc":"The floor ID","lua_type":"string"},{"name":"model","desc":"The shelf model","lua_type":"Model"},{"name":"replica","desc":"The replica for the prop","lua_type":"[Replica]"}],"returns":[],"function_type":"method","private":true,"source":{"line":133,"path":"src/Client/Controllers/Game/ShelfController.lua"}},{"name":"_setHighlightAdornee","desc":"Highlight a shelf model","params":[{"name":"adornee","desc":"The shelf model to highlight","lua_type":"Model"}],"returns":[],"function_type":"method","private":true,"source":{"line":163,"path":"src/Client/Controllers/Game/ShelfController.lua"}},{"name":"Raycast","desc":"Raycast function","params":[{"name":"ray","desc":"A ray object","lua_type":"Ray"}],"returns":[{"desc":"Returns the result of the ray","lua_type":"RaycastResult"}],"function_type":"method","private":true,"source":{"line":187,"path":"src/Client/Controllers/Game/ShelfController.lua"}},{"name":"StartStocking","desc":"Start stocking mode","params":[{"name":"productName","desc":"name of product to stock","lua_type":"string"}],"returns":[{"desc":"","lua_type":"nil"}],"function_type":"method","source":{"line":198,"path":"src/Client/Controllers/Game/ShelfController.lua"}},{"name":"StopStocking","desc":"Stop stocking mode","params":[],"returns":[{"desc":"","lua_type":"nil"}],"function_type":"method","source":{"line":265,"path":"src/Client/Controllers/Game/ShelfController.lua"}},{"name":"KnitStart","desc":"Start ShelfController","params":[],"returns":[{"desc":"","lua_type":"nil"}],"function_type":"method","source":{"line":275,"path":"src/Client/Controllers/Game/ShelfController.lua"}}],"properties":[],"types":[],"name":"ShelfController","desc":"Author: Maxim Peng\\nProject: roblox-sparkles\\n\\nHandles rendering shelves on client","realm":["Client"],"source":{"line":10,"path":"src/Client/Controllers/Game/ShelfController.lua"}}')}}]);