"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7162],{44216:e=>{e.exports=JSON.parse('{"functions":[{"name":"roundToNearestMultiple","desc":"Rounds number to nearest multiple of specified number","params":[{"name":"numToRound","desc":"number to round","lua_type":"number"},{"name":"multiple","desc":"number to round to nearest multiple of","lua_type":"number"}],"returns":[{"desc":"rounded number","lua_type":"number"}],"function_type":"static","private":true,"source":{"line":45,"path":"src/Shared/Modules/Data/Furniture.lua"}},{"name":"generateBoundingBox","desc":"Generate bounding box for model","params":[{"name":"model","desc":"model to generate for","lua_type":"Model"}],"returns":[{"desc":"generated bounding box","lua_type":"BasePart"}],"function_type":"static","private":true,"source":{"line":63,"path":"src/Shared/Modules/Data/Furniture.lua"}},{"name":"setupFurnitureModel","desc":"Set up furniture model for furniture in database","params":[{"name":"furnitureData","desc":"","lua_type":"table"}],"returns":[{"desc":"","lua_type":"nil"}],"function_type":"static","private":true,"source":{"line":98,"path":"src/Shared/Modules/Data/Furniture.lua"}}],"properties":[{"name":"GRID_UNIT","desc":"Grid unit for snapping prop placement","lua_type":"number","source":{"line":28,"path":"src/Shared/Modules/Data/Furniture.lua"}},{"name":"FURNITURE_TAG","desc":"String pattern used for identifying hitboxes assigned to a specific shop owner","lua_type":"string","source":{"line":35,"path":"src/Shared/Modules/Data/Furniture.lua"}}],"types":[],"name":"Furniture","desc":"Author: ArtemisTheDeer\\nDate: 1/9/24\\nProject: roblox-sparkles\\n\\nDescription: Furniture class gets all of the furniture modules from ReplicatedStorage > Shared > Assets > Furniture, and sets their names as keys under this table (With all the metadata and also a reference to the model)\\n\\nExampleItem = {\\n\\t\\tName = \\"Example\\",\\n\\t\\tCategory = \\"Shelf\\", -- Item category (e.g. \\"Shelf\\", \\"Decor\\", etc.)\\n\\t\\tShelfType = \\"Default\\", -- The type of shelf this counts as - nil for non-shelves\\n\\t\\tPurchasePrice = 10, -- How much currency a player needs to purchase one (1) of this item\\n\\t}","source":{"line":17,"path":"src/Shared/Modules/Data/Furniture.lua"}}')}}]);