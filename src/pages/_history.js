const createObjectForDropdown = array => {
    let targetArray = [];
    console.log('IN')

    if (searchHistory.length > 1) {
      console.log('IN 2')
      searchHistory && searchHistory.length > 1 && searchHistory.map((item, index) => {
        targetArray.push({ key: index, text: item, value: item })
      });
      setDropdown(targetArray)
      return targetArray;
    }
    setDropdown(array)
    return array;
  }