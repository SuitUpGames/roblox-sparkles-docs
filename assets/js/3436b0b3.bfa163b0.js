"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9046],{28832:e=>{e.exports=JSON.parse('{"functions":[{"name":"_createNewReplica","desc":"Creates a new replica","params":[{"name":"params","desc":"[ReplicaParams] table","lua_type":"table"}],"returns":[],"function_type":"method","private":true,"source":{"line":41,"path":"src/Client/Controllers/Data/ReplicaController/init.lua"}},{"name":"_destroyReplica","desc":"Destroys a replica and fires replicaDestroyed with arguments (ClassName: string, replicaId: string)","params":[{"name":"replicaId","desc":"The replica ID to destroy","lua_type":"string"}],"returns":[],"function_type":"method","private":true,"source":{"line":54,"path":"src/Client/Controllers/Data/ReplicaController/init.lua"}},{"name":"_updateReplica","desc":"Updates the key(s)/value(s) within a specific [Replica] object","params":[{"name":"replicaId","desc":"The [Replica] ID to update","lua_type":"string"},{"name":"methodName","desc":"The method under the [Replica] object to call","lua_type":"string"},{"name":"...","desc":"Any arguments to pass along to the method under the [Replica] object","lua_type":"variadic"}],"returns":[],"function_type":"method","private":true,"source":{"line":75,"path":"src/Client/Controllers/Data/ReplicaController/init.lua"}},{"name":"replicaOfClassCreated","desc":"When a new [Replica] object of the \'class\' parameter is added, the \'callback\' function is called (The provided argument is the new [Replica] object)","params":[{"name":"class","desc":"The class of replica that you want to connect to (Eg. \\"Playerdata\\")","lua_type":"string"},{"name":"callback","desc":"A function that will be called when a new [Replica] object of the same class parameter is created - only argument provided is the newly created [Replica] object","lua_type":"function"}],"returns":[{"desc":"Returns a function that (When called) disconnects the created script connection","lua_type":"function"}],"function_type":"method","source":{"line":113,"path":"src/Client/Controllers/Data/ReplicaController/init.lua"}},{"name":"KnitInit","desc":"Initialize ReplicaController","params":[],"returns":[],"function_type":"method","source":{"line":134,"path":"src/Client/Controllers/Data/ReplicaController/init.lua"}},{"name":"KnitStart","desc":"Start ReplicaController","params":[],"returns":[],"function_type":"method","source":{"line":153,"path":"src/Client/Controllers/Data/ReplicaController/init.lua"}}],"properties":[],"types":[],"name":"ReplicaController","desc":"Author: ArtemisTheDeer, loleris, luarook\\nDate: 11/16/2023\\nProject: Sparkles\\n\\nDescription: Custom replication controller for stateful values between client and server\\nCredit to loleris for using some of the code/ideas from ReplicaService for stateful replication, and luarook for their fork of ReplicaService (That was stripped down of unused functionality)","realm":["Client"],"source":{"line":12,"path":"src/Client/Controllers/Data/ReplicaController/init.lua"}}')}}]);