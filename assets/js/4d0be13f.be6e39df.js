"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7847],{93700:e=>{e.exports=JSON.parse('{"functions":[{"name":"PivotToScreenPosition","desc":"Navigates the NPC to a specific position/orientation derived from X/Y coordinates on the player\'s screen with a set depth","params":[{"name":"Target","desc":"The 2D position (In pixels) of where the NPC should pivot to","lua_type":"Vector2"},{"name":"Depth","desc":"How far away from the camera the NPC should be","lua_type":"number"},{"name":"Rotation","desc":"The rotation CFrame of the NPC (Applied relative to the camera\'s cframe)","lua_type":"CFrame?"}],"returns":[{"desc":"Returns a promise that resolves once the NPC reaches the desired target/depth/rotation, and rejects if it cannot","lua_type":"Promise<T>"}],"function_type":"method","source":{"line":48,"path":"src/Client/Controllers/Interface/TutorialController/TutorialNPC.lua"}},{"name":"PivotToWorldPosition","desc":"Pivots the NPC to a world CFrame","params":[{"name":"targetCFrame","desc":"The target CFrame to pivot the NPC to","lua_type":"CFrame"}],"returns":[{"desc":"Returns a promise that resolves once the NPC reaches the desired target/depth/rotation","lua_type":"Promise<T>"}],"function_type":"method","source":{"line":57,"path":"src/Client/Controllers/Interface/TutorialController/TutorialNPC.lua"}},{"name":"PlayAnimation","desc":"Plays an animation for the NPC","params":[{"name":"Animation","desc":"The name of the animation to play (Eg. \\"Walk\\", \\"Run\\", \\"Jump\\") - if no string provided, current animation will be stopped","lua_type":"string?"}],"returns":[],"function_type":"method","source":{"line":65,"path":"src/Client/Controllers/Interface/TutorialController/TutorialNPC.lua"}},{"name":"PlayEmotion","desc":"Plays an emotion to a customer NPC - function yields for as long as the emotion is playing","params":[{"name":"Emotion","desc":"The emotion to play - if no emotion is provided, the currently playing emotion is cancelled","lua_type":"string?"}],"returns":[],"function_type":"method","yields":true,"source":{"line":74,"path":"src/Client/Controllers/Interface/TutorialController/TutorialNPC.lua"}},{"name":"Destroy","desc":"Destroys the NPC class","params":[],"returns":[],"function_type":"method","source":{"line":81,"path":"src/Client/Controllers/Interface/TutorialController/TutorialNPC.lua"}},{"name":"new","desc":"Creates a new tutorial NPC class","params":[{"name":"NPCDesign","desc":"The design to load for the NPC","lua_type":"string"},{"name":"startPosition","desc":"The starting position of the NPC","lua_type":"CFrame"}],"returns":[{"desc":"Returns a new tutorial NPC class","lua_type":"table"}],"function_type":"static","source":{"line":91,"path":"src/Client/Controllers/Interface/TutorialController/TutorialNPC.lua"}}],"properties":[],"types":[],"name":"TutorialNPC","desc":"Author: ArtemisTheDeer\\nDate: 2/13/24\\nProject: roblox-sparkles\\n\\nThe tutorial NPC is based off of/inherits from the NPC client class\\n\\nTutorial NPCs are not controlled by the server, do not have pathfinding/movement enabled (Using humanoids), and can only be manipulated by the client","realm":["Client"],"source":{"line":13,"path":"src/Client/Controllers/Interface/TutorialController/TutorialNPC.lua"}}')}}]);