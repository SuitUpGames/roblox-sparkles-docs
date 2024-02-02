"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3571],{49777:e=>{e.exports=JSON.parse('{"functions":[{"name":"GetStates","desc":"This is a REQUIRED method for all screens\\nIt is responsible for returning the current states","params":[],"returns":[{"desc":"","lua_type":"{isVisible: Fusion.StateObject<boolean>}"}],"function_type":"method","realm":["Client"],"source":{"line":79,"path":"src/Client/Controllers/Interface/Screens/BuildScreenController.luau"}},{"name":"Show","desc":"This is a REQUIRED method for all screens\\nIt is responsible for showing this screenGui\\n\\nExample Usage:\\nMainGuiController:ShowScreen(\\"Template\\") will automatically call THIS function\\n\\tAND also CLOSE the other visible screens","params":[],"returns":[],"function_type":"method","realm":["Client"],"source":{"line":95,"path":"src/Client/Controllers/Interface/Screens/BuildScreenController.luau"}},{"name":"Hide","desc":"This is a REQUIRED method for all screens\\nIt is responsible for hiding this screenGui\\n\\nExample Usage:\\nMainGuiController:HideScreen(\\"Template\\") will automatically call THIS function\\n\\tAND also CLOSE the other visible screens","params":[],"returns":[],"function_type":"method","realm":["Client"],"source":{"line":123,"path":"src/Client/Controllers/Interface/Screens/BuildScreenController.luau"}},{"name":"_configureGui","desc":"Clones the GUI from assets into the player\'s PlayerGui\\nself.Gui is a variable that will be set to this item","params":[],"returns":[{"desc":"","lua_type":"boolean"}],"function_type":"method","realm":["Client"],"private":true,"source":{"line":149,"path":"src/Client/Controllers/Interface/Screens/BuildScreenController.luau"}},{"name":"_configureContainer","desc":"Configures the container inside the given GUI\\nAnimates the container in/out based on the isVisible state","params":[],"returns":[],"function_type":"method","realm":["Client"],"private":true,"source":{"line":179,"path":"src/Client/Controllers/Interface/Screens/BuildScreenController.luau"}},{"name":"HideTutorialArrow","desc":"Exclusively hide tutorial arrow for the shelf object.","params":[],"returns":[{"desc":"","lua_type":"nil"}],"function_type":"method","source":{"line":212,"path":"src/Client/Controllers/Interface/Screens/BuildScreenController.luau"}},{"name":"ShowTutorialArrow","desc":"Select a category to show the tutorial arrow in.","params":[{"name":"name","desc":"Name of category or item","lua_type":"string"},{"name":"isCategory","desc":"True if is a category, false if is an item.","lua_type":"boolean"}],"returns":[{"desc":"","lua_type":"nil"}],"function_type":"method","source":{"line":223,"path":"src/Client/Controllers/Interface/Screens/BuildScreenController.luau"}},{"name":"SelectCategory","desc":"Select a furniture category and show furniture buttons of that category","params":[{"name":"category","desc":"name of category","lua_type":"string"}],"returns":[{"desc":"","lua_type":"nil"}],"function_type":"method","source":{"line":245,"path":"src/Client/Controllers/Interface/Screens/BuildScreenController.luau"}},{"name":"ShowInfo","desc":"Show furniture info","params":[{"name":"product","desc":"Key for Furniture","lua_type":"string"}],"returns":[{"desc":"","lua_type":"nil"}],"function_type":"method","source":{"line":290,"path":"src/Client/Controllers/Interface/Screens/BuildScreenController.luau"}},{"name":"HideInfo","desc":"Hide furniture info","params":[],"returns":[{"desc":"","lua_type":"nil"}],"function_type":"method","source":{"line":305,"path":"src/Client/Controllers/Interface/Screens/BuildScreenController.luau"}},{"name":"ToggleDonutTutorialOn","desc":"Prompts the player to access the area during tutorial for donuts.","params":[],"returns":[{"desc":"","lua_type":"nil"}],"function_type":"method","source":{"line":318,"path":"src/Client/Controllers/Interface/Screens/BuildScreenController.luau"}},{"name":"PlaceRegisterTutorial","desc":"Prompts the player to access the area during tutorial for the cash register.","params":[],"returns":[{"desc":"","lua_type":"nil"}],"function_type":"method","source":{"line":328,"path":"src/Client/Controllers/Interface/Screens/BuildScreenController.luau"}},{"name":"_setupButtons","desc":"Set up building option buttons","params":[],"returns":[{"desc":"","lua_type":"nil"}],"function_type":"method","private":true,"source":{"line":340,"path":"src/Client/Controllers/Interface/Screens/BuildScreenController.luau"}},{"name":"SelectButton","desc":"Select a button","params":[{"name":"button","desc":"","lua_type":"ImageButton"}],"returns":[{"desc":"","lua_type":"nil"}],"function_type":"method","source":{"line":542,"path":"src/Client/Controllers/Interface/Screens/BuildScreenController.luau"}},{"name":"ClearSelection","desc":"Clear the current selection option","params":[],"returns":[{"desc":"","lua_type":"nil"}],"function_type":"method","source":{"line":556,"path":"src/Client/Controllers/Interface/Screens/BuildScreenController.luau"}},{"name":"UpdateEnchantmentStock","desc":"This function runs to update what enchantments are available to the player.","params":[],"returns":[{"desc":"","lua_type":"nil"}],"function_type":"method","realm":["Client"],"source":{"line":570,"path":"src/Client/Controllers/Interface/Screens/BuildScreenController.luau"}},{"name":"OpenEnchants","desc":"This function opens the enchants menu remotely.","params":[],"returns":[{"desc":"","lua_type":"nil"}],"function_type":"method","realm":["Client"],"source":{"line":598,"path":"src/Client/Controllers/Interface/Screens/BuildScreenController.luau"}},{"name":"OpenBuildScreen","desc":"Open build screen","params":[],"returns":[{"desc":"","lua_type":"nil"}],"function_type":"method","realm":["Client"],"source":{"line":610,"path":"src/Client/Controllers/Interface/Screens/BuildScreenController.luau"}},{"name":"OpenStockingMenu","desc":"Open shelf stocking menu","params":[],"returns":[{"desc":"","lua_type":"nil"}],"function_type":"method","realm":["Client"],"source":{"line":622,"path":"src/Client/Controllers/Interface/Screens/BuildScreenController.luau"}},{"name":"KnitInit","desc":"Initialize BuildScreenController","params":[],"returns":[{"desc":"","lua_type":"nil"}],"function_type":"method","realm":["Client"],"source":{"line":633,"path":"src/Client/Controllers/Interface/Screens/BuildScreenController.luau"}},{"name":"MouseMovedEnchant","desc":"This function runs every time the mouse is moved to update the enchantments selection box.","params":[],"returns":[{"desc":"","lua_type":"nil"}],"function_type":"static","realm":["Client"],"private":true,"source":{"line":645,"path":"src/Client/Controllers/Interface/Screens/BuildScreenController.luau"}},{"name":"MouseClickedEnchant","desc":"Handles functionality for client-side enchantment clicking and checking.","params":[],"returns":[{"desc":"","lua_type":"nil"}],"function_type":"method","realm":["Client"],"source":{"line":689,"path":"src/Client/Controllers/Interface/Screens/BuildScreenController.luau"}},{"name":"MouseClickedEnchant","desc":"This function runs every time the mouse is clicked to attempt to enchant something.","params":[],"returns":[{"desc":"","lua_type":"nil"}],"function_type":"static","realm":["Client"],"private":true,"source":{"line":736,"path":"src/Client/Controllers/Interface/Screens/BuildScreenController.luau"}},{"name":"KnitStart","desc":"Start BuildScreenController","params":[],"returns":[{"desc":"","lua_type":"nil"}],"function_type":"method","realm":["Client"],"source":{"line":745,"path":"src/Client/Controllers/Interface/Screens/BuildScreenController.luau"}}],"properties":[],"types":[],"name":"BuildScreenController","desc":"Author: Daniel S.\\nDate: 11/28/2023\\nProject: roblox-sparkles\\n\\nDescription: Tycoon grid build UI controller (build menu)","realm":["Client"],"source":{"line":11,"path":"src/Client/Controllers/Interface/Screens/BuildScreenController.luau"}}')}}]);