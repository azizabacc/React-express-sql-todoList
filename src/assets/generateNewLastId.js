
const generateNewLastId = (prevItems) => {
    // get existing ids in prevItems
    const existingIds = prevItems.map((item) => item.id);
    // find the highest id || 0 if array empty
    const maxId = existingIds.length > 0 ? Math.max(...existingIds) : 0;
    // maxId++ for the new element 
    return maxId + 1;
  };

  export default generateNewLastId ;