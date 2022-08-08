"use strict";(self.webpackChunkrptools_doc=self.webpackChunkrptools_doc||[]).push([[9952],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=d(n),h=a,m=p["".concat(s,".").concat(h)]||p[h]||c[h]||o;return n?i.createElement(m,l(l({ref:t},u),{},{components:n})):i.createElement(m,l({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var d=2;d<o;d++)l[d]=n[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},66481:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var i=n(87462),a=(n(67294),n(3905));const o={},l="Creating Add-On Libraries",r={unversionedId:"add-ons/creation/index",id:"add-ons/creation/index",title:"Creating Add-On Libraries",description:"MapTool 1.11 introduces add-on libraries which are intended to be an easier",source:"@site/docs/add-ons/creation/index.mdx",sourceDirName:"add-ons/creation",slug:"/add-ons/creation/",permalink:"/docs/add-ons/creation/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Add-On Libraries",permalink:"/docs/add-ons/"},next:{title:"MTScript Library functions",permalink:"/docs/add-ons/mtscript-lib-functions"}},s={},d=[{value:"Managing the add-on libraries for your campaign.",id:"managing-the-add-on-libraries-for-your-campaign",level:2},{value:"Drag and Drop",id:"drag-and-drop",level:3},{value:"Format of add-on library files",id:"format-of-add-on-library-files",level:2},{value:"format of the configuration file",id:"format-of-the-configuration-file",level:2},{value:"format of the events configuration file",id:"format-of-the-events-configuration-file",level:2},{value:"MTScript macros",id:"mtscript-macros",level:2},{value:"mts_properties.json file",id:"mts_propertiesjson-file",level:3},{value:"public/ directory",id:"public-directory",level:2},{value:"Converting Lib:tokens",id:"converting-libtokens",level:2},{value:"Things you will want to change",id:"things-you-will-want-to-change",level:3},{value:"Things still to be addressed.",id:"things-still-to-be-addressed",level:3}],u={toc:d};function c(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"creating-add-on-libraries"},"Creating Add-On Libraries"),(0,a.kt)("p",null,"MapTool 1.11 introduces add-on libraries which are intended to be an easier\nto work with replacement for Lib:Tokens while also offering a lot more functionality.\nLib:Tokens will still function the way that they currently do in MapTool 1.11 and future\nversions, but will not be getting a lot of the new features that add-on libraries will have,\nso it is recommended that framework developers transition to add-on libraries if supporting\nMapTool 1.11 and above."),(0,a.kt)("p",null,"I have a very sparse and contrived add-on library I have been using for testing available at\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cwisniew/test-maptool-add-on-lib"},"test-maptool-add-on-lib")),(0,a.kt)("h2",{id:"managing-the-add-on-libraries-for-your-campaign"},"Managing the add-on libraries for your campaign."),(0,a.kt)("p",null,"The dialog to manage the add-on libraries for your campaign can be reached using the add-on\nmenu item in file menu.\n",(0,a.kt)("img",{alt:"Add-On User Interface",src:n(57731).Z,width:"1432",height:"1270"})),(0,a.kt)("p",null,"This dialog can be used to add or remove add-on libraries, view the details of all add-ons\nin the campaign and view their license/read me files."),(0,a.kt)("h3",{id:"drag-and-drop"},"Drag and Drop"),(0,a.kt)("p",null,"As of MapTool 1.12, add-on libraries can be dragged and dropped on to the map from the file\nexplorer / finder. This will either add the add-on library to the campaign or replace it\nif it is already in the campaign."),(0,a.kt)("h2",{id:"format-of-add-on-library-files"},"Format of add-on library files"),(0,a.kt)("p",null,"Add-On libraries can be shared in a .mtlib file. This file is a zip file with a specific\nstructure and content. You can import these libraries with the File -> Import Add-On Library menu option."),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"File / Directory name"),(0,a.kt)("th",null,"Description")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"library.json"),(0,a.kt)("td",null,"Configuration information for the add-on library")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"mts_properties.json"),(0,a.kt)("td",null,"Properties for macro script functions in the add-on library")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"events.json"),(0,a.kt)("td",null,"Events definition for events supported by the add-on library")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"library/"),(0,a.kt)("td",null,"Contents of the add-on library")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"library/public/"),(0,a.kt)("td",null,"Contents of the library that are accessible via ",(0,a.kt)("code",null,"lib://")," URI")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"library/mtscript/"),(0,a.kt)("td",null,"Directory containing the macro Script files for the add-on library.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"library/mtscript/public/"),(0,a.kt)("td",null,"Directory containing the macro Script files that can be called via `[macro(): ]` outside of the add-on library."))),(0,a.kt)("h2",{id:"format-of-the-configuration-file"},"format of the configuration file"),(0,a.kt)("p",null,"The library.json configuration file is a json file with the following structure."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "test-library",\n  "version": "1.0.0",\n  "website": "www.rptools.net",\n  "gitUrl": "github.com/RPTools/test-library",\n  "authors": [ "RPTools Team" ],\n  "license": "GPL 3.0",\n  "namespace": "net.rptools.maptool.test-library",\n  "description": "My new test library for stuff",\n  "shortDescription": "test library",\n  "allowsUriAccess": true,\n  "readMeFile": "readme.md",\n  "licenseFile": "license.txt",\n  "requires": [\n      "net.rptools.maptool.lib.tokens"\n  ],\n  "exports": [\n      "/somedir/",\n      "/someotherdir/somefile.js"\n  ]\n}\n')),(0,a.kt)("p",null,"The properties in this file are"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Name"),(0,a.kt)("th",null,"Description"),(0,a.kt)("th",null,"Required"),(0,a.kt)("th",null,"Notes")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"name"),(0,a.kt)("td",null,"The name of the add-on."),(0,a.kt)("td",null,"Yes"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("th",null,"website"),(0,a.kt)("td",null,"The website for your add-on."),(0,a.kt)("td",null,"No"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("th",null,"gitUrl"),(0,a.kt)("td",null,"The url for the git source repository."),(0,a.kt)("td",null,"No"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("th",null,"authors"),(0,a.kt)("td",null,"An array of the authors of the add-on."),(0,a.kt)("td",null,"Yes"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("th",null,"license"),(0,a.kt)("td",null,"The name or short description of the license."),(0,a.kt)("td",null,"No"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("th",null,"namespace"),(0,a.kt)("td",null,"The namespace of the add-on."),(0,a.kt)("td",null,"Yes"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("th",null,"description"),(0,a.kt)("td",null,"The description of the add-on"),(0,a.kt)("td",null,"No"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("th",null,"shortDescription"),(0,a.kt)("td",null,"The short description of the add-on"),(0,a.kt)("td",null,"Yes"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("th",null,"allowsUriAccess"),(0,a.kt)("td",null,"Should add-on allow URI access to contents."),(0,a.kt)("td",null,"No"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("th",null,"readMeFile"),(0,a.kt)("td",null,"The path to the readme file for the add-on."),(0,a.kt)("td",null,"No"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("th",null,"licenseFile"),(0,a.kt)("td",null,"The path to the license file for the add-on."),(0,a.kt)("td",null,"No"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("th",null,"requires"),(0,a.kt)("td",null,"An array of the add-ons that are required (namespaces)"),(0,a.kt)("td",null,"No"),(0,a.kt)("td",null,"Added in 1.13")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"exports"),(0,a.kt)("td",null,"An array directories and files that are exported to other add-ons."),(0,a.kt)("td",null,"No"),(0,a.kt)("td",null,"Added in 1.13"))),(0,a.kt)("p",null,"ReadMe and License files can be plain text, HTML, or Markdown (GitHub Flavored). These can\nbe viewed from the add-on dialog."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"GitHub provides a way to host your own static site at ","<","username",">",".github.io, if you do not have\nyour own host this can be used for both your add-on webstite and reversed for namespace, although\nthere is no requirement fo there to be an actual website running at the address used for the namespace.")),(0,a.kt)("h2",{id:"format-of-the-events-configuration-file"},"format of the events configuration file"),(0,a.kt)("p",null,"This json file contains which files should be run for certain events."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "events": [\n      { "name": "onFirstInit", "mts": "onFirstInit" },\n      { "name": "onInit", "mts": "onInit"}\n   ],\n   "legacyEvents": [\n      { "name": "onInitiativeChangeRequest", "mts": "onInitiativeChangeRequest" },\n      { "name": "onInitiativeChange", "mts": "onInitiativeChange" },\n      { "name": "onTokenMove", "mts": "onTokenMove" },\n      { "name": "onMultipleTokensMove", "mts": "onMultipleTokensMove"}\n   ]\n}\n')),(0,a.kt)("p",null,'Add ons do not respond to the "onCampaignLoad" event, instead they have 2 new events.'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"onFirstInit - This is called only once, when the add on is added. Add the same add on a second time\noverwriting the existing one it will ",(0,a.kt)("em",{parentName:"li"},"not")," be called again unless the add-on is removed first."),(0,a.kt)("li",{parentName:"ul"},"onInit - This is called every time the campaign is loaded (including after the inital onFirstInit event), and\non the client when sent to a client. This functionality is very much similar to onCampaignLoad.")),(0,a.kt)("p",null,'The other events must be in the "legacyEvents" section, as the name implies these events are now considered to\nbe legacy events, new events will be added in the future to replace these (these will not be removed though).'),(0,a.kt)("p",null,"Currently only macro scripts are supported, in the future JavaScript scripts will also be supported. "),(0,a.kt)("h2",{id:"mtscript-macros"},"MTScript macros"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"library/public is only exposed via lib:// URI if ",(0,a.kt)("inlineCode",{parentName:"li"},"allowsUriAccess")," is set (see configuration file)"),(0,a.kt)("li",{parentName:"ul"},"MTScript macros must all end with the file extension .mts to be recognised."),(0,a.kt)("li",{parentName:"ul"},"Any\nOnly MTScript files in ",(0,a.kt)("inlineCode",{parentName:"li"},"content/mtscript/public")," can be called using ",(0,a.kt)("inlineCode",{parentName:"li"},"[macro():]")," from outside of the add-on")),(0,a.kt)("p",null,"The path of the file becomes that macroname for ",(0,a.kt)("inlineCode",{parentName:"p"},"[macro(): ]")," the namespace of the add-on library\nis used for the ",(0,a.kt)("inlineCode",{parentName:"p"},"@")," portion.  "),(0,a.kt)("p",null,"Add-On libraries support both public and private macro functions. Public macro functions must\nreside in the mtscript/public and can be called from anywhere (chat, other add-ons, lib:tokens, macro buttons).\nYou can call them using the following syntax\n",(0,a.kt)("inlineCode",{parentName:"p"},'[macro("mtscript1@lib:net.rptools.maptool.test-library")]')," executes MTScript macro in the file\n",(0,a.kt)("inlineCode",{parentName:"p"},"content/mtscript/public/mtscript1.mts"),"."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},'The "public/" is ommited from the macro name when calling it.\nYou can also use subdirectories to organise your macros and would call them like\n','[macro("subdir/script@lib:net.rptools.maptool.test-library")]')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"@this")," shorthand can also be used for calling a macro from within the same add-on, similar to how it works\nfor lib:Tokens. For example\n",(0,a.kt)("inlineCode",{parentName:"p"},'[macro("mtscript2@this")]')),(0,a.kt)("p",null,'Macro script files that are not in the "public/" directory can only be called from within the add-on itself or\nby events.\nGiven a library with the namespace ',(0,a.kt)("inlineCode",{parentName:"p"},"net.mylib.addon")," with the following files."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mtsscript/func1.mts\nmtsscript/public/func2.mts\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'[macro("func1@lib:net.mylib.addon")]')," can be called from anywhere, but ",(0,a.kt)("inlineCode",{parentName:"p"},'[macro("func2@lib:net.mylib.addon")]'),"\ncan only be called from a macro that is on the ",(0,a.kt)("inlineCode",{parentName:"p"},"net.mylib.addon")," add-on."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},'Since the "public/" is not required, if you have to files with the same name excluding the "public/" part, for example\nmtscript/public/funct1.mts\nmtscript/funct1.mts'),(0,a.kt)("p",{parentName:"admonition"},"Then only the one in public/ will be able to be executed, you will not be able to call the other macro")),(0,a.kt)("p",null,"The above works not just with `",(0,a.kt)("inlineCode",{parentName:"p"},"[macro():]"),"  but the other places you would expect it to as well such as\ndefineFunction() for user defined functions and macro links."),(0,a.kt)("h3",{id:"mts_propertiesjson-file"},"mts_properties.json file"),(0,a.kt)("p",null,"The mts_properties.json file contains property information about macro scripts, it is not required and currrently\nonly allows you to set properties used in macro links."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{ \n  "properties": [ \n    {\n      "filename": "public/auto_exec.mts",\n      "autoExecute": true,\n      "description": "Auto executable macro link"\n    },\n    {\n      "filename": "public/myUDF.mts",\n      "description": "My Test UDF in a drop in lib."\n    }\n  ]\n}\n')),(0,a.kt)("p",null,"Where"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"filename is the path of the file for the MacroScript function (excluding mtscript/)."),(0,a.kt)("li",{parentName:"ul"},"autoExecute determines if a macro link created for this macro will be auto executable or not."),(0,a.kt)("li",{parentName:"ul"},"description is the description that will appear in the UDF listing, unlike Lib:Token this is just a plain string and not evaluated if it contains ",(0,a.kt)("inlineCode",{parentName:"li"},"[]"))),(0,a.kt)("h2",{id:"public-directory"},"public/ directory"),(0,a.kt)("p",null,"The contents of this directory are exposed as a lib:// URI  as long as the allowsUriAccess is set to true in the configuration file.\nThe public directory part of the filename is discared, for example\npublic/myhttml.html -> lib://net.myaddons.addon1/myhtml.html"),(0,a.kt)("p",null,'You can add images to this directory and use src="lib://" in image tags in HTML.\nIt will eventually work with audio (probably aleady does but I haven\'t tested it yet so not claining it will yet :) )'),(0,a.kt)("p",null,"These assets will be included correctly in the campaign file when saving, so you do not need to add them to image tables or\nimage tokens or any other tricks to make sure that they are included."),(0,a.kt)("p",null,"There are some differences to be aware of when using lib property support for add-ons."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The name is case sensitive, unles tokens where it is not case sensitive."),(0,a.kt)("li",{parentName:"ul"},"The values stored do not need to be be converted to/from strings like they do with lib:tokens so\nin many cases for large json values this should result in a speed improvement."),(0,a.kt)("li",{parentName:"ul"},"The default properties list for the campain are not present for Add-Ons as they are not tokens unlike Lib:Tokens")),(0,a.kt)("h2",{id:"converting-libtokens"},"Converting Lib:tokens"),(0,a.kt)("p",null,"The token popup menu includes a way to export your existing library tokens to an add-on.\nThis is useful for starting the conversion of an existing token library to an add-on but in all but\nthe simplest lib:tokens you will want edit the extracted data."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Convert and Export Lib:Tokens",src:n(18170).Z,width:"574",height:"1196"})),(0,a.kt)("h3",{id:"things-you-will-want-to-change"},"Things you will want to change"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You should probably change the namespace in the library.json file to something that is unlikely to\nconflict with other users. It's a good practice to use a reversed hostname + add on name for this."),(0,a.kt)("li",{parentName:"ul"},"All macros (except event based ones) are created in mtscript/public with the pattern macro_{number>.mts,\nthis is because macro names have many things that might make them invalid -- or worse dangerous -- filenames.\nThere is a macro_script_map.txt file saved in the top level which contains the names of your macros and the\nfilename that they were saved in."),(0,a.kt)("li",{parentName:"ul"},"Not all macro buttons on lib:tokens always contain MT Script macros, they are used for CSS etc as well so\nyou will probably want to rename and move them to the library/public/ directory."),(0,a.kt)("li",{parentName:"ul"},"The onCampaignLoad macro will be saved as onInit "),(0,a.kt)("li",{parentName:"ul"},"All properties are saved in the library/properties directory. These are saved with the names prop_{number}.txt\nand a mapping file prop_file_map.txt is created to map these. (this may change slightly when data access\nis introduced, more the location)")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"After doing the above you should ",(0,a.kt)("em",{parentName:"p"},"REALLY")," take the opportunity to source control your Add-On... ")),(0,a.kt)("h3",{id:"things-still-to-be-addressed"},"Things still to be addressed."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"There is only minimal checking of data when importing add-ons so error reporting is not great."),(0,a.kt)("li",{parentName:"ul"},"Expanding of JavaScript API which will make this much more useful will be part of another change."),(0,a.kt)("li",{parentName:"ul"},"Better replacement for user defined functions."),(0,a.kt)("li",{parentName:"ul"},"Providing an equivalent to lib:token buttons"),(0,a.kt)("li",{parentName:"ul"},"Ability to check URL for later version and update from that (most likely github to start with)"),(0,a.kt)("li",{parentName:"ul"},"Link Maps to required Add-Ons when exporting/importing"),(0,a.kt)("li",{parentName:"ul"},"Documentation / Procedures for creating a GitHub release for your Add-On."),(0,a.kt)("li",{parentName:"ul"},"The data store could be slightly smarter about large text blocks that remain static and attempt to\ncache them")))}c.isMDXComponent=!0},57731:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/add-on-dialog-f99859833e5ab59e3895d543cda76c4d.png"},18170:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/export-lib-token-411a9818be4bb776c133809df8d1971a.png"}}]);