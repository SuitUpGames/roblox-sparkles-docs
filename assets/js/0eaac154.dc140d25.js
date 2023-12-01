"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[305],{74502:e=>{e.exports=JSON.parse('{"functions":[{"name":"GenerateNPC","desc":"Generate a new NPC class","params":[{"name":"Replication","desc":"What player(s) should be replicated to; can be a single string (The name of the player to replicate to), or an array of player(s)","lua_type":"{ Player} | string"},{"name":"Tags","desc":"Optional list of tags","lua_type":"table"},{"name":"Body","desc":"Key/pair array of values to replicate","lua_type":"table"}],"returns":[{"desc":"Returns a promise that resolves with the newly created NPC class if successful, and rejects if not","lua_type":"Promise<T>"}],"function_type":"method","realm":["Server"],"source":{"line":46,"path":"src/Server/Services/Game/NPCService/init.lua"}},{"name":"DestroyNPC","desc":"Deletes a NPC class","params":[{"name":"replicaId","desc":"The ID of the NPC you want to destroy","lua_type":"string"}],"returns":[{"desc":"Returns a promise that resolves if an NPC with the provided replicaId exists and is destroyed, and rejects if it cannot be found/destroyed","lua_type":"Promise<T>"}],"function_type":"method","realm":["Server"],"source":{"line":81,"path":"src/Server/Services/Game/NPCService/init.lua"}},{"name":"KnitInit","desc":"Initialize NPCService","params":[],"returns":[],"function_type":"method","source":{"line":98,"path":"src/Server/Services/Game/NPCService/init.lua"}},{"name":"KnitStart","desc":"Start NPCService","params":[],"returns":[],"function_type":"method","source":{"line":105,"path":"src/Server/Services/Game/NPCService/init.lua"}}],"properties":[],"types":[],"name":"NPCService","desc":"Author: ArtemisTheDeer\\nDate: 11/17/2023\\nProject: roblox-sparkles\\n\\nDescription: Knit service description goes here","source":{"line":10,"path":"src/Server/Services/Game/NPCService/init.lua"}}')}}]);