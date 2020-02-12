(window.webpackJsonp=window.webpackJsonp||[]).push([[511],{"./manual/Vim/Neovim.md":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return u});var l=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=(t("./node_modules/react/index.js"),t("./node_modules/@mdx-js/react/dist/index.es.js")),a={},s="wrapper";function u(e){var n=e.components,t=Object(l.a)(e,["components"]);return Object(i.b)(s,Object.assign({},a,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"neovim"},"Neovim"),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("p",null,"On Mac, use brew: ",Object(i.b)("inlineCode",{parentName:"p"},"brew install vim")),Object(i.b)("h2",{id:"settings"},"Settings"),Object(i.b)("p",null,"Install ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/junegunn/vim-plug"}),"Vim Plug")," for plugins and check personal Gist for useful plugins."),Object(i.b)("p",null,"Some of the plugins include:"),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-shell"}),"call plug#begin('~/.local/share/nvim/plugged')\n\nPlug 'Yggdroot/indentLine'\nPlug 'junegunn/fzf', { 'dir': '~/.fzf', 'do': './install --all' }\nPlug 'junegunn/fzf.vim'\nPlug 'morhetz/gruvbox'\nPlug 'mattn/emmet-vim'\nPlug 'tpope/vim-surround'\nPlug 'tpope/vim-commentary'\nPlug 'tpope/vim-repeat'\nPlug 'sheerun/vim-polyglot'\nPlug 'fatih/vim-go'\nPlug 'scrooloose/nerdtree'\nPlug 'jlanzarotta/bufexplorer'\n\" Plug 'Numkil/ag.nvim'\nPlug 'mhinz/vim-grepper'\nPlug 'vim-airline/vim-airline'\nPlug 'vim-airline/vim-airline-themes'\nPlug 'tpope/vim-fugitive'\nPlug 'dense-analysis/ale'\nPlug 'tpope/vim-sleuth' \" automaticlly guess indentation settings\n\n\" Plug 'kien/ctrlp.vim'\n\" Plug 'ivalkeen/vim-ctrlp-tjump'\n\n\" Plug 'Shougo/deoplete.nvim', { 'do': ':UpdateRemotePlugins' }\n\nPlug 'pangloss/vim-javascript'\n\" Plug 'leafgarland/typescript-vim'\n\" Plug 'peitalin/vim-jsx-typescript'\n\" Plug 'mhartington/nvim-typescript', {'for': ['typescript', 'typescript.tsx'], 'do': './install.sh' }\nPlug 'flowtype/vim-flow'\n\" Plug 'amdeus/vim-xml'\nPlug 'amadeus/vim-jsx'\n\nPlug 'leafgarland/typescript-vim'\nPlug 'peitalin/vim-jsx-typescript'\n\nPlug 'elixir-editors/vim-elixir'\n\n\" Plug 'neoclide/coc.nvim', {'do': { -> coc#util#install()}}\n\n\" Typescript\n\" Plug 'HerringtonDarkholme/yats.vim'\n\" \" For async completion\n\" Plug 'Shougo/deoplete.nvim', { 'do': ':UpdateRemotePlugins' }\n\" \" For Denite features\n\" Plug 'Shougo/denite.nvim'\n\n\nPlug 'elmcast/elm-vim'\n\nPlug 'tpope/vim-commentary'\n\n\" Plug 'fatih/vim-go', { 'for': 'go' }\n\" Plug 'zchee/deoplete-go', { 'for': 'go', 'do': 'make'}\n\nPlug 'nanotech/jellybeans.vim'\nPlug '~/dev/jellybeans_pda'\n\n\" Plug 'chriskempson/base16-vim'sh\n\" Plug 'joshdick/onedark.vim'\n\nPlug 'ludovicchabant/vim-gutentags'\n\nPlug 'RRethy/vim-hexokinase'\n\ncall plug#end()\n")),Object(i.b)("h2",{id:"text-objects"},"Text Objects"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object.assign({parentName:"tr"},{align:null}),"Keys"),Object(i.b)("th",Object.assign({parentName:"tr"},{align:null}),"Definition"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"ciw"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"Change inside word")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"ci("),Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"Change inside parenthesis")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),'ca"'),Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"Change around quotes")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"cat"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"Change around HTML tags")))))}u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"manual/Vim/Neovim.md"}}),u.isMDXComponent=!0}}]);
//# sourceMappingURL=manual-vim-neovim.101a1afd2417ec7a4a77.js.map