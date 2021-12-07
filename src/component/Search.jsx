import React, { useState } from 'react';

const Search = (props) => {
  const[searchValue, setSearchValue ] = useState("")

  const handleSearchInputChanges = (e) => {
    // console.log(e.target.value); // 查看是否获取输入的值
    setSearchValue(e.target.value) // 改变输入框中的值
  }

  const resetInputField = () => {
    setSearchValue("")
  }

  const callSearchFunction = (e) => {
    e.preventDefault()
    props.search(searchValue)
    resetInputField()
  }

  return(
    <form className='search'>
      <input
       type="text" 
       value={searchValue}
       onChange={handleSearchInputChanges}
       />
       <input
        onClick={callSearchFunction}
        value='SEARCH'
        type="submit"
         />
    </form>
  )
}

export default Search