"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2490],{7182:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var r=n(7896),a=(n(2784),n(876));const i={sidebar_position:7},o="Renaming Functionality",l={unversionedId:"guides/renaming",id:"guides/renaming",title:"Renaming Functionality",description:"React Complex Tree provides native renaming capabilities which are enabled by default. They can be disabled",source:"@site/docs/guides/renaming.mdx",sourceDirName:"guides",slug:"/guides/renaming",permalink:"/docs/guides/renaming",draft:!1,editUrl:"https://github.com/lukasbach/react-complex-tree/edit/main/packages/docs/docs/guides/renaming.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Search Functionality",permalink:"/docs/guides/search"},next:{title:"Multiple Trees",permalink:"/docs/guides/multiple-trees"}},d={},m=[{value:"Example",id:"example",level:2},{value:"Example with disabled renaming",id:"example-with-disabled-renaming",level:2},{value:"Reacting to rename events",id:"reacting-to-rename-events",level:2},{value:"Via <code>onRenameProp</code>",id:"via-onrenameprop",level:3},{value:"Via <code>StaticTreeDataProvider</code>",id:"via-statictreedataprovider",level:3},{value:"Via a custom tree data provider",id:"via-a-custom-tree-data-provider",level:3},{value:"Programmatic interaction",id:"programmatic-interaction",level:2}],c={toc:m};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"renaming-functionality"},"Renaming Functionality"),(0,a.kt)("p",null,"React Complex Tree provides native renaming capabilities which are enabled by default. They can be disabled\nby providing the ",(0,a.kt)("inlineCode",{parentName:"p"},"canRename")," prop with the value ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,a.kt)("p",null,"If renaming is enabled, the user can hit the hotkey ",(0,a.kt)("inlineCode",{parentName:"p"},"F2"),", and the title component of the focused item\nis replaced with an input. The rendering of that component can be customized with\n",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/rendering"},"custom render hooks"),". The hotkey ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/keyboard"},"can also be customized"),"."),(0,a.kt)("p",null,"When the input is blurred, i.e. the user clicks on somewhere else, or presses ",(0,a.kt)("inlineCode",{parentName:"p"},"escape"),", the renaming is aborted,\nthe input is replaced with the title component again and changes made to the title are omitted. If the user clicks\non the submit button or submits the input by pressing enter, the name of the item is changed."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function App() {\n  return (\n    <UncontrolledTreeEnvironment\n      dataProvider={new StaticTreeDataProvider(longTree.items, (item, data) => ({ ...item, data }))}\n      getItemTitle={item => item.data}\n      viewState={{\n        'tree-1': {\n          expandedItems: ['Fruit', 'Meals'],\n        },\n      }}\n    >\n      <Tree treeId=\"tree-1\" rootItem=\"root\" treeLabel=\"Tree Example\" />\n    </UncontrolledTreeEnvironment>\n  );\n}\n")),(0,a.kt)("h2",{id:"example-with-disabled-renaming"},"Example with disabled renaming"),(0,a.kt)("p",null,"If ",(0,a.kt)("inlineCode",{parentName:"p"},"canRename")," is set to false, renaming is disabled."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function App() {\n  return (\n    <UncontrolledTreeEnvironment\n      dataProvider={new StaticTreeDataProvider(longTree.items, (item, data) => ({ ...item, data }))}\n      getItemTitle={item => item.data}\n      viewState={{\n        'tree-2': {\n          expandedItems: ['Fruit', 'Meals'],\n        },\n      }}\n      canRename={false}\n    >\n      <Tree treeId=\"tree-2\" rootItem=\"root\" treeLabel=\"Tree Example\" />\n    </UncontrolledTreeEnvironment>\n  );\n}\n")),(0,a.kt)("h2",{id:"reacting-to-rename-events"},"Reacting to rename events"),(0,a.kt)("h3",{id:"via-onrenameprop"},"Via ",(0,a.kt)("inlineCode",{parentName:"h3"},"onRenameProp")),(0,a.kt)("p",null,"Both the ",(0,a.kt)("inlineCode",{parentName:"p"},"UncontrolledTreeEnvironment")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"ControlledTreeEnvironment")," provide a ",(0,a.kt)("inlineCode",{parentName:"p"},"onRenameItem")," prop\nto which can be reacted to."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function App() {\n  return (\n    <UncontrolledTreeEnvironment\n      dataProvider={new StaticTreeDataProvider(longTree.items, (item, data) => ({ ...item, data }))}\n      getItemTitle={item => item.data}\n      viewState={{\n        'tree-3': {\n          expandedItems: ['Fruit', 'Meals'],\n        },\n      }}\n      canRename={false}\n      onRenameItem={(item, name) => alert(`${item.data} renamed to ${name}`)}\n    >\n      <Tree treeId=\"tree-3\" rootItem=\"root\" treeLabel=\"Tree Example\" />\n    </UncontrolledTreeEnvironment>\n  );\n}\n")),(0,a.kt)("h3",{id:"via-statictreedataprovider"},"Via ",(0,a.kt)("inlineCode",{parentName:"h3"},"StaticTreeDataProvider")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"StaticTreeDataProvider")," also defines a method that is provided as the second argument to the constructor,\nwhich is invoked if a item is renamed. This method is expected to return the renamed item."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function App() {\n  return (\n    <UncontrolledTreeEnvironment\n      dataProvider={\n        new StaticTreeDataProvider(longTree.items, (item, newName) => {\n          alert(`${item.data} renamed to ${newName}`);\n          return { ...item, data: newName };\n        })\n      }\n      getItemTitle={item => item.data}\n      viewState={{\n        'tree-4': {\n          expandedItems: ['Fruit', 'Meals'],\n        },\n      }}\n      canRename={false}\n    >\n      <Tree treeId=\"tree-4\" rootItem=\"root\" treeLabel=\"Tree Example\" />\n    </UncontrolledTreeEnvironment>\n  );\n}\n")),(0,a.kt)("h3",{id:"via-a-custom-tree-data-provider"},"Via a custom tree data provider"),(0,a.kt)("p",null,"When implementing a custom tree data provider, a method ",(0,a.kt)("inlineCode",{parentName:"p"},"onRenameItem")," can be implemented to react to rename\nevents. ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/custom-data-provider"},"Read more on implementing custom tree data providers"),"\nfor more details."),(0,a.kt)("h2",{id:"programmatic-interaction"},"Programmatic interaction"),(0,a.kt)("p",null,"This feature can programmatically be controlled by pulling a React Ref either from the tree environment\nor the tree itself, and acting on the Ref object. ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/refs"},"Read the documentation on externally interacting\nwith the tree via Refs")," to find out more."))}p.isMDXComponent=!0},876:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),m=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=m(e.components);return r.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=m(n),u=a,v=s["".concat(d,".").concat(u)]||s[u]||p[u]||i;return n?r.createElement(v,o(o({ref:t},c),{},{components:n})):r.createElement(v,o({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var m=2;m<i;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);