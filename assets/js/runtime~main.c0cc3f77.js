(()=>{"use strict";var e,a,f,b,c,d={},t={};function r(e){var a=t[e];if(void 0!==a)return a.exports;var f=t[e]={exports:{}};return d[e].call(f.exports,f,f.exports,r),f.exports}r.m=d,e=[],r.O=(a,f,b,c)=>{if(!f){var d=1/0;for(i=0;i<e.length;i++){f=e[i][0],b=e[i][1],c=e[i][2];for(var t=!0,o=0;o<f.length;o++)(!1&c||d>=c)&&Object.keys(r.O).every((e=>r.O[e](f[o])))?f.splice(o--,1):(t=!1,c<d&&(d=c));if(t){e.splice(i--,1);var n=b();void 0!==n&&(a=n)}}return a}c=c||0;for(var i=e.length;i>0&&e[i-1][2]>c;i--)e[i]=e[i-1];e[i]=[f,b,c]},r.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return r.d(a,{a:a}),a},f=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(e,b){if(1&b&&(e=this(e)),8&b)return e;if("object"==typeof e&&e){if(4&b&&e.__esModule)return e;if(16&b&&"function"==typeof e.then)return e}var c=Object.create(null);r.r(c);var d={};a=a||[null,f({}),f([]),f(f)];for(var t=2&b&&e;"object"==typeof t&&!~a.indexOf(t);t=f(t))Object.getOwnPropertyNames(t).forEach((a=>d[a]=()=>e[a]));return d.default=()=>e,r.d(c,d),c},r.d=(e,a)=>{for(var f in a)r.o(a,f)&&!r.o(e,f)&&Object.defineProperty(e,f,{enumerable:!0,get:a[f]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((a,f)=>(r.f[f](e,a),a)),[])),r.u=e=>"assets/js/"+({305:"0eaac154",359:"13943bb3",553:"f7df6e25",641:"ff08a31a",650:"f32c4cf0",766:"bca1eae2",782:"22e6fcf2",897:"4c8a30ef",950:"2debf2fd",1031:"023be167",1070:"2de50b84",1331:"02fae9b5",1347:"7a4fb791",1454:"48a7fcec",1476:"8f635086",1515:"5682cf33",1618:"2ab97823",1651:"9f6b4b73",1667:"505d4e7b",1773:"65159082",1791:"12c41c0a",1794:"470fbeeb",1801:"da170560",1812:"80091401",1888:"daf4f15d",2013:"732401bc",2048:"898a0a35",2071:"856c9af0",2156:"3d442bbe",2208:"4893c8fe",2225:"cdb5b3d7",2249:"6a743db6",2303:"fb88540a",2475:"4059069c",2481:"7b189033",2533:"161f07a9",2672:"c9cfce03",2701:"cce56fc5",2712:"fa32dbfb",2758:"f2f44c2e",2786:"b400847e",2791:"60d5a923",2896:"f977b0cb",2918:"6857060a",2967:"0e8d9a33",2992:"fd735ad0",3085:"1f391b9e",3089:"18dab53c",3147:"3c1c7a8a",3190:"09a791a7",3235:"f7e6541c",3398:"02fbf861",3474:"39e3e5fa",3549:"fcc5d72a",3563:"b6b4178a",3571:"410ca37c",3578:"efac6909",3587:"78d9cc66",3744:"854f394f",3762:"1cc8bf44",3780:"033a99de",3860:"2f9d36d3",3933:"1ddbbae7",3953:"bb19cb13",4035:"ff8474cc",4111:"1cced0fe",4144:"abb8be67",4164:"592cb4b6",4307:"b885b55a",4326:"c2e15f07",4534:"5802fb4f",4597:"7f151c8a",4663:"9c6b54bc",4736:"5a2c6932",4876:"deb8cfac",4913:"4411d4f7",4943:"a2761381",4962:"bcea8cf3",5008:"5a544061",5083:"229b5e17",5118:"a06c6f08",5240:"9f2c9004",5262:"fb285b45",5395:"fa95fb7b",5526:"c992b077",5561:"d3e222da",5615:"fef9f710",5727:"f6addeea",5775:"eb7c5487",5794:"3a7db8d4",5835:"d6eea105",5870:"3290e422",5943:"3bbb4a6a",6016:"038c7726",6054:"c83f4b06",6119:"01bba6c6",6199:"8ad3e575",6232:"ec2f03fb",6256:"1fbcb8c6",6273:"5b52a6bb",6319:"77e0084d",6340:"1f30690c",6507:"de412eff",6557:"eb8a0b00",6566:"2ae1e5a4",6752:"c1007d10",6804:"070980fc",6841:"edb1642e",6844:"3949dbc7",6911:"e73c6137",6957:"61c48636",6971:"23ad186a",6989:"fe7c3f9d",7162:"55050a08",7173:"ce1128e6",7248:"c148a7e7",7353:"149baf09",7482:"aae5c49b",7504:"8ffed545",7788:"0f7bc700",7789:"35aeb4a2",7806:"9b595657",7809:"5ef36d34",7847:"4d0be13f",7849:"70f0c2ad",7882:"139905da",8033:"487776aa",8053:"00126537",8062:"f98330cf",8118:"3cfb0a99",8162:"f45b4b84",8176:"e33fbbae",8228:"81af8ed9",8236:"d55add6a",8253:"2d5e5f3d",8267:"6d441ae9",8337:"5a0c83d3",8385:"bb69711e",8514:"bda78da4",8518:"6d4b3386",8642:"94f0363d",8696:"82fadcca",8753:"ef0112d8",8811:"7cf1249d",8888:"07b2c061",8891:"3fe444c0",9035:"ba1000a6",9046:"3436b0b3",9136:"f9ea1d76",9148:"acdc5fed",9157:"03710046",9200:"1c0da5c8",9210:"6726efc4",9346:"a9eeea79",9353:"d1211574",9371:"ec6488e7",9491:"d2eacb9d",9547:"db5a7ab4",9616:"f38c52f7",9631:"3c727640",9695:"7e6ef4e3",9744:"8996229a",9811:"823b453d",9846:"41381167",9863:"91ba6c09",9908:"75f38536",9928:"d8a8d197",9936:"a2868d55",9943:"40985381"}[e]||e)+"."+{305:"2478c153",359:"115550f7",553:"647af16f",641:"642155f9",650:"45b1bcfb",766:"9971e348",782:"ea928115",897:"b70707ea",950:"d9ded371",1031:"d53837bf",1070:"0972a6fa",1331:"8781cb6e",1347:"ecdca6ef",1454:"fe58c832",1476:"01653b51",1515:"d7935d2b",1618:"63a0ba58",1651:"1ef387bd",1667:"6efd701b",1773:"7a446176",1791:"7b059555",1794:"87a907dd",1801:"773bbdaa",1812:"8907caf9",1888:"ee84df6d",2013:"be1a904e",2048:"08216056",2071:"e94ce2e6",2156:"d69dde73",2208:"a84438f5",2225:"8b5a0c6a",2249:"e9cd4cc3",2303:"3dd127db",2475:"dffc4b3b",2481:"78195b06",2533:"77e64c86",2672:"ee78fa08",2701:"fce1212c",2712:"fc3f1423",2758:"ddf74c72",2786:"f3fe69b8",2791:"4cc48832",2896:"916acbac",2918:"320ab52c",2967:"993db94a",2992:"c9fcf1fc",3085:"4f9721fc",3089:"764c9d6e",3147:"349fdc1b",3190:"ac0cc0a8",3235:"82d48d9a",3339:"074f2188",3343:"c8aa0086",3398:"46b8d992",3474:"e2f66af7",3549:"b303e7ed",3563:"20619cfa",3571:"be68c71d",3578:"d3689adb",3587:"3e2a74fd",3744:"65118d82",3762:"f7b6ca38",3780:"01b3677b",3860:"20042b2b",3933:"472e9f0d",3953:"296e3643",4035:"6e73cfd5",4111:"489611af",4144:"7fb604ef",4164:"a28715e3",4307:"692eec97",4326:"ee8991a6",4534:"42ffdf76",4597:"51aa8eb0",4663:"7c2942f7",4736:"27b25ce1",4876:"d4d9548e",4913:"030a9cd3",4943:"69ad494d",4962:"ef08f1d5",4972:"0d63f83b",5008:"d603e2de",5083:"8f000949",5118:"9dd20aa0",5240:"422f177b",5262:"b9ea887e",5395:"e573994b",5526:"8db19767",5561:"c171ef74",5615:"89b30c90",5727:"0b2d1d13",5775:"e71c91ec",5794:"aa924f73",5835:"2bb6d389",5870:"7c4d4ccb",5943:"d6d94eb6",6016:"44af4a3c",6054:"d59e7302",6119:"568d79a2",6199:"0ecfd5b0",6232:"43bd4215",6256:"67a70d2f",6273:"6ff42502",6319:"1f8371ca",6340:"3b36721a",6507:"8147ed4b",6557:"31864fca",6566:"3b366d36",6752:"6de685f3",6804:"902ecdf1",6841:"a9181f8c",6844:"dcc746db",6911:"0a85eb0c",6957:"2a67c937",6971:"8a16195c",6989:"87ebee96",7162:"f132bcf5",7173:"b896f0a1",7248:"8ee7d82f",7353:"aa230050",7482:"caa4b671",7504:"40983d63",7788:"b0ab4fd4",7789:"fe123bf9",7806:"7bf7511f",7809:"ecb223b6",7847:"be6e39df",7849:"81096d28",7882:"3b0515ed",8033:"f99c02ce",8053:"79011f99",8062:"0f370e20",8118:"399fa250",8162:"410ad029",8176:"73c78d86",8228:"a4963806",8236:"7ee247b9",8253:"1e4bbc0f",8267:"704e0538",8337:"35c2064b",8385:"11eb7edf",8514:"365780c9",8518:"4fd37e8c",8642:"16875de6",8696:"47fe3728",8753:"9badc973",8811:"3d73f079",8888:"6dcf0944",8891:"4b958618",9035:"5836626a",9046:"bfa163b0",9136:"fa5e3408",9148:"07bafb47",9157:"7350cd0f",9200:"4baf0c4a",9210:"e7863fe1",9346:"1adad62a",9353:"1b744511",9371:"ae7c5935",9491:"631c0547",9547:"b3a1c7b5",9616:"530396cb",9631:"4d579456",9695:"a006f2b0",9744:"70737608",9811:"939edd06",9846:"20a3c784",9863:"8cd01004",9878:"2475637b",9908:"8a409cf9",9928:"f927e8e0",9936:"d19312e6",9943:"5c765522"}[e]+".js",r.miniCssF=e=>{},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),b={},c="docs:",r.l=(e,a,f,d)=>{if(b[e])b[e].push(a);else{var t,o;if(void 0!==f)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==c+f){t=u;break}}t||(o=!0,(t=document.createElement("script")).charset="utf-8",t.timeout=120,r.nc&&t.setAttribute("nonce",r.nc),t.setAttribute("data-webpack",c+f),t.src=e),b[e]=[a];var l=(a,f)=>{t.onerror=t.onload=null,clearTimeout(s);var c=b[e];if(delete b[e],t.parentNode&&t.parentNode.removeChild(t),c&&c.forEach((e=>e(f))),a)return a(f)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=l.bind(null,t.onerror),t.onload=l.bind(null,t.onload),o&&document.head.appendChild(t)}},r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="/roblox-sparkles-docs/",r.gca=function(e){return e={40985381:"9943",41381167:"9846",65159082:"1773",80091401:"1812","0eaac154":"305","13943bb3":"359",f7df6e25:"553",ff08a31a:"641",f32c4cf0:"650",bca1eae2:"766","22e6fcf2":"782","4c8a30ef":"897","2debf2fd":"950","023be167":"1031","2de50b84":"1070","02fae9b5":"1331","7a4fb791":"1347","48a7fcec":"1454","8f635086":"1476","5682cf33":"1515","2ab97823":"1618","9f6b4b73":"1651","505d4e7b":"1667","12c41c0a":"1791","470fbeeb":"1794",da170560:"1801",daf4f15d:"1888","732401bc":"2013","898a0a35":"2048","856c9af0":"2071","3d442bbe":"2156","4893c8fe":"2208",cdb5b3d7:"2225","6a743db6":"2249",fb88540a:"2303","4059069c":"2475","7b189033":"2481","161f07a9":"2533",c9cfce03:"2672",cce56fc5:"2701",fa32dbfb:"2712",f2f44c2e:"2758",b400847e:"2786","60d5a923":"2791",f977b0cb:"2896","6857060a":"2918","0e8d9a33":"2967",fd735ad0:"2992","1f391b9e":"3085","18dab53c":"3089","3c1c7a8a":"3147","09a791a7":"3190",f7e6541c:"3235","02fbf861":"3398","39e3e5fa":"3474",fcc5d72a:"3549",b6b4178a:"3563","410ca37c":"3571",efac6909:"3578","78d9cc66":"3587","854f394f":"3744","1cc8bf44":"3762","033a99de":"3780","2f9d36d3":"3860","1ddbbae7":"3933",bb19cb13:"3953",ff8474cc:"4035","1cced0fe":"4111",abb8be67:"4144","592cb4b6":"4164",b885b55a:"4307",c2e15f07:"4326","5802fb4f":"4534","7f151c8a":"4597","9c6b54bc":"4663","5a2c6932":"4736",deb8cfac:"4876","4411d4f7":"4913",a2761381:"4943",bcea8cf3:"4962","5a544061":"5008","229b5e17":"5083",a06c6f08:"5118","9f2c9004":"5240",fb285b45:"5262",fa95fb7b:"5395",c992b077:"5526",d3e222da:"5561",fef9f710:"5615",f6addeea:"5727",eb7c5487:"5775","3a7db8d4":"5794",d6eea105:"5835","3290e422":"5870","3bbb4a6a":"5943","038c7726":"6016",c83f4b06:"6054","01bba6c6":"6119","8ad3e575":"6199",ec2f03fb:"6232","1fbcb8c6":"6256","5b52a6bb":"6273","77e0084d":"6319","1f30690c":"6340",de412eff:"6507",eb8a0b00:"6557","2ae1e5a4":"6566",c1007d10:"6752","070980fc":"6804",edb1642e:"6841","3949dbc7":"6844",e73c6137:"6911","61c48636":"6957","23ad186a":"6971",fe7c3f9d:"6989","55050a08":"7162",ce1128e6:"7173",c148a7e7:"7248","149baf09":"7353",aae5c49b:"7482","8ffed545":"7504","0f7bc700":"7788","35aeb4a2":"7789","9b595657":"7806","5ef36d34":"7809","4d0be13f":"7847","70f0c2ad":"7849","139905da":"7882","487776aa":"8033","00126537":"8053",f98330cf:"8062","3cfb0a99":"8118",f45b4b84:"8162",e33fbbae:"8176","81af8ed9":"8228",d55add6a:"8236","2d5e5f3d":"8253","6d441ae9":"8267","5a0c83d3":"8337",bb69711e:"8385",bda78da4:"8514","6d4b3386":"8518","94f0363d":"8642","82fadcca":"8696",ef0112d8:"8753","7cf1249d":"8811","07b2c061":"8888","3fe444c0":"8891",ba1000a6:"9035","3436b0b3":"9046",f9ea1d76:"9136",acdc5fed:"9148","03710046":"9157","1c0da5c8":"9200","6726efc4":"9210",a9eeea79:"9346",d1211574:"9353",ec6488e7:"9371",d2eacb9d:"9491",db5a7ab4:"9547",f38c52f7:"9616","3c727640":"9631","7e6ef4e3":"9695","8996229a":"9744","823b453d":"9811","91ba6c09":"9863","75f38536":"9908",d8a8d197:"9928",a2868d55:"9936"}[e]||e,r.p+r.u(e)},(()=>{var e={1303:0,532:0};r.f.j=(a,f)=>{var b=r.o(e,a)?e[a]:void 0;if(0!==b)if(b)f.push(b[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var c=new Promise(((f,c)=>b=e[a]=[f,c]));f.push(b[2]=c);var d=r.p+r.u(a),t=new Error;r.l(d,(f=>{if(r.o(e,a)&&(0!==(b=e[a])&&(e[a]=void 0),b)){var c=f&&("load"===f.type?"missing":f.type),d=f&&f.target&&f.target.src;t.message="Loading chunk "+a+" failed.\n("+c+": "+d+")",t.name="ChunkLoadError",t.type=c,t.request=d,b[1](t)}}),"chunk-"+a,a)}},r.O.j=a=>0===e[a];var a=(a,f)=>{var b,c,d=f[0],t=f[1],o=f[2],n=0;if(d.some((a=>0!==e[a]))){for(b in t)r.o(t,b)&&(r.m[b]=t[b]);if(o)var i=o(r)}for(a&&a(f);n<d.length;n++)c=d[n],r.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return r.O(i)},f=self.webpackChunkdocs=self.webpackChunkdocs||[];f.forEach(a.bind(null,0)),f.push=a.bind(null,f.push.bind(f))})()})();