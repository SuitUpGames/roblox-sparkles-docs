"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2533],{45941:e=>{e.exports=JSON.parse('{"functions":[{"name":"PivotTo","desc":"Moves the furniture model to a new location\\n\\nIf called from the client, the 3D model will pivot to the new location\\nIf called from the server, the hitbox will pivot to the new location","params":[{"name":"targetCFrame","desc":"The new CFrame for the model/hitbox","lua_type":"CFrame"}],"returns":[{"desc":"Returns true if the prop\'s position is successfully adjusted, and false if not","lua_type":"boolean"}],"function_type":"method","source":{"line":61,"path":"src/Shared/Assets/Furniture/CashRegister/init.lua"}},{"name":"_initiateServer","desc":"Initiates the server-side code for the furniture class (Activated by the :Initiate(...) method)","params":[{"name":"targetCFrame","desc":"The starting CFrame of the prop","lua_type":"CFrame"}],"returns":[{"desc":"Returns the newly created bounding box","lua_type":"BasePart"}],"function_type":"method","realm":["Server"],"private":true,"source":{"line":87,"path":"src/Shared/Assets/Furniture/CashRegister/init.lua"}},{"name":"_initiateClient","desc":"Initiates the client-side code for the furniture class (Activated by the :Initiate(...) method)","params":[{"name":"targetCFrame","desc":"The CFrame to pivot the furniture model to","lua_type":"CFrame"}],"returns":[{"desc":"Returns a model (The newly created furniture)","lua_type":"Model"}],"function_type":"method","realm":["Client"],"private":true,"source":{"line":113,"path":"src/Shared/Assets/Furniture/CashRegister/init.lua"}},{"name":"Initiate","desc":"Initiates furniture behavior","params":[{"name":"...","desc":"TBD optional parameters","lua_type":"any"}],"returns":[{"desc":"Returns the furniture model if the code is being run client-side, and returns the bounding box BasePart if run server-side","lua_type":"Model | BasePart"}],"function_type":"method","source":{"line":153,"path":"src/Shared/Assets/Furniture/CashRegister/init.lua"}},{"name":"_destroyServer","desc":"Destroys the furniture class","params":[],"returns":[],"function_type":"method","realm":["Server"],"private":true,"source":{"line":168,"path":"src/Shared/Assets/Furniture/CashRegister/init.lua"}},{"name":"_destroyClient","desc":"Destroys the furniture class","params":[],"returns":[],"function_type":"method","realm":["Client"],"private":true,"source":{"line":178,"path":"src/Shared/Assets/Furniture/CashRegister/init.lua"}},{"name":"_processRemoteInput","desc":"Processes input from the client (That\'s sent to the server) for a specific prop","params":[{"name":"Player","desc":"The player firing the remote","lua_type":"Player"},{"name":"propFunction","desc":"The name of the function to fire under the prop","lua_type":"string"},{"name":"...","desc":"Variadic args for the propFunction","lua_type":"any"}],"returns":[{"desc":"Returns the result from the respective propFunction","lua_type":"any"}],"function_type":"method","realm":["Server"],"private":true,"source":{"line":192,"path":"src/Shared/Assets/Furniture/CashRegister/init.lua"}},{"name":"_activatedRegister","desc":"A test function to see if the bridge between the client/server works","params":[{"name":"self","desc":"The respective prop class","lua_type":"table"},{"name":"Player","desc":"The player invoking the remote","lua_type":"Player"},{"name":"...","desc":"Variadic args","lua_type":"any"}],"returns":[{"desc":"","lua_type":"nil"}],"function_type":"static","source":{"line":216,"path":"src/Shared/Assets/Furniture/CashRegister/init.lua"}},{"name":"Destroy","desc":"Destroys the furniture class","params":[],"returns":[],"function_type":"method","source":{"line":223,"path":"src/Shared/Assets/Furniture/CashRegister/init.lua"}},{"name":"new","desc":"Creates a new furniture class","params":[{"name":"propReplica","desc":"Replica class of the furniture","lua_type":"Replica"}],"returns":[{"desc":"Returns a new furniture class","lua_type":"table"}],"function_type":"static","source":{"line":237,"path":"src/Shared/Assets/Furniture/CashRegister/init.lua"}}],"properties":[],"types":[],"name":"CashRegister","desc":"Author: ArtemisTheDeer\\nDate: 01/09/2024\\nProject: roblox-sparkles\\n\\nDescription: Furniture class","private":true,"source":{"line":11,"path":"src/Shared/Assets/Furniture/CashRegister/init.lua"}}')}}]);