

const apiUrl= {
  dev: '',
  pro: ''
}

const defaultShelfCoordinate={

}
const hotKeys={
  1:'1',
  2:'2',
  3:'3',
  4:'4',
  5:'5',
  6:'6',
  7:'7',
  8:'8',
  9:'9',
  delete:'del',
  copy:{Windows:'ctrl+c',macOS:'command+c'},
  paste:{Windows:'ctrl+v',macOS:'command+v'},
  next:{Windows:'ctrl+y',macOS:'command+y'},
  pre:{Windows:'ctrl+z',macOS:'command+z'},
  collect:{Windows:'ctrl+g',macOS:'command+g'},
  moveUp:'shift+w',
  moveDown:'shift+s',
  tenfoldMoveUp:'w',
  tenfoldMoveDown:'s'
}
const defaultFaceNum={
  faceNum:20,
}
const defaultFontSizeProps={
  defaulltRemRadio:13.46*2,
}
export {
    hotKeys,
    apiUrl,
    defaultShelfCoordinate,
    defaultFaceNum,
    defaultFontSizeProps
}