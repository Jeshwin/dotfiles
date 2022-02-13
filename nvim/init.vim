call plug#begin(stdpath('data') . '/plugged')

" Gruvbox Theme
Plug 'morhetz/gruvbox'

" Bottom Bar
Plug 'vim-airline/vim-airline'

" Battery
Plug 'lambdalisue/battery.vim'

" Syntax Packs
Plug 'sheerun/vim-polyglot'

" Brackets
Plug 'jiangmiao/auto-pairs'
Plug 'machakann/vim-sandwich'

" CoC
Plug 'neoclide/coc.nvim', {'branch': 'release'}

" fzf
Plug 'junegunn/fzf', {'dir': '~/.fzf', 'do': './install --all'}
Plug 'junegunn/fzf.vim'

" Prettier
Plug 'prettier/vim-prettier', { 'do': 'npm install' }

" Commenting
Plug 'preservim/nerdcommenter'

" RGB Highlight Colors
Plug 'ap/vim-css-color'

" Git Tools
Plug 'tpope/vim-fugitive'

" Latex Snippets
Plug 'sirver/ultisnips'
    let g:UltiSnipsExpandTrigger = '<tab>'
    let g:UltiSnipsJumpForwardTrigger = '<tab>'
    let g:UltiSnipsJumpBackwardTrigger = '<s-tab>'

" Latex Compiling
Plug 'lervag/vimtex'
    set nocompatible
    let &rtp = '~/.local/share/nvim/plugged/vimtex,' . &rtp
    let &rtp .= ',~/.local/share/nvim/plugged/vimtex/after'
    filetype plugin indent on
    syntax enable
    let g:tex_flavor='latex'
    let g:Tex_DefaultTargetFormat='pdf'
    let g:vimtex_view_enabled=1
    let g:vimtex_view_automatic=1
    let g:vimtex_view_general_viewer='zathura'
    let g:vimtex_view_method='zathura'
    let g:vimtex_quickfix_mode=0
    let g:vimtex_compiler_latexmk = { 
      \  'callback' : 0,
	  \  'continuous' : 1 ,
      \}

" More Latex Settings
Plug 'KeitaNakamura/tex-conceal.vim'
    set conceallevel=1
    let g:tex_conceal='abdmg'
    hi Conceal ctermbg=none

call plug#end()

set encoding=utf-8
set hidden
filetype plugin on
syntax on
set termguicolors
colorscheme gruvbox

" Vim-Latex-Zathura
set tabstop=4
set shiftwidth=4
autocmd TextChanged,TextChangedI <buffer> silent write
set backspace=indent,eol,start
set rtp+=~/.local/share/nvim
set rtp+=~/.local/share/nvim/UltiSnips/greek

" 
let g:airline_theme = "gruvbox"
let g:airline#extensions#tabline#enabled = 1
let g:airline#extensions#tabline#left_sep = ''
let g:airline#extensions#tabline#left_alt_sep = ''
let g:airline#extensions#tabline#right_sep = ''
let g:airline#extensions#tabline#right_alt_sep = ''
let g:airline_left_sep = ''
let g:airline_left_alt_sep = ''
let g:airline_right_sep = ''
let g:airline_right_alt_sep = ''
let g:airline_section_b = '%{battery#component()}'
let g:airline_section_z = '%p%% %l:%c'

let g:loaded_python_provider = 0
let g:python3_host_prog = '/usr/local/bin/python'
let g:loaded_perl_provider = 0

" Spell checker
setlocal spell
set spelllang=en_us
inoremap <C-l> <c-g>u<Esc>[s1z=`]a<c-g>u

" Fuzzy Finder
map ; :Files<CR>

" CoC Settings
set nobackup
set nowritebackup
" set cmdheight=2
set updatetime=300
set shortmess+=c
set signcolumn=number
inoremap <silent><expr> <c-space> coc#refresh()

" CoC Navigation
nmap <silent> [g <Plug>(coc-diagnostic-prev)
nmap <silent> ]g <Plug>(coc-diagnostic-next)
nmap <silent> gd <Plug>(coc-definition)
nmap <silent> gy <Plug>(coc-type-definition)
nmap <silent> gi <Plug>(coc-implementation)
nmap <silent> gr <Plug>(coc-references)
nmap <leader>cl  <Plug>(coc-codelens-action)

" Window Navigation
function! WinMove(key)
    let t:curwin = winnr()
    exec "wincmd ".a:key
    if (t:curwin == winnr())
        if (match(a:key,'[jk]'))
            wincmd v
        else
            wincmd s
        endif
        exec "wincmd ".a:key
    endif
endfunction

nnoremap <silent> <C-h> :call WinMove('h')<CR>
nnoremap <silent> <C-j> :call WinMove('j')<CR>
nnoremap <silent> <C-k> :call WinMove('k')<CR>
nnoremap <silent> <C-l> :call WinMove('l')<CR>

" Cursor Crosshair
set number relativenumber
set mouse=inv
set cursorline
set cursorcolumn
