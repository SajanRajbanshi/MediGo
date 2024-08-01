import React, { useState } from 'react';
// import {AutoComplete,AutoCompleteSearchBasis} from './AutoComplete';
import  AutoComplete  from './AutoComplete';
import AutoCompleteBody from './AutoCompleteBody';
import { Box } from '@mui/material';


function AutoCompletePage() {
  const [Search, setSearch] = useState({})
  const [SearchType, setSearchType] = useState("All")
  const [resultSize,setResultSize] = useState(0)
  const changeSearch = (search) => {
    setSearch(search)
  }
  const changeResultSize=(value)=>{
    setResultSize(value)
  }
  // return (<Box style={{ Padding: "40px" }}>
  //   <AutoComplete onChangeSearch={changeSearch} SearchType={SearchType} />
  //   <AutoCompleteSearchBasis onChangeSearchType={changeSearchType}/>
  //   <AutoCompleteBody searchingFor={Search} />
  // </Box>
  // )



  return (<Box style={{ Padding: "40px" }}>
    <AutoComplete onChangeSearch={changeSearch} resultSize={resultSize}/>
    {/* <AutoCompleteSearchBasis onChangeSearchType={changeSearchType}/> */}
    <AutoCompleteBody searchingFor={Search} resultSize={changeResultSize}/>
  </Box>
  )


}

export default AutoCompletePage