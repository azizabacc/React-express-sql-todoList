import connection from "../config/db.js";

const resetId = (req, res) => {
  //  set @num to 0
  const query1 = 'SET @num := 0';
  
  connection.query(query1, (err1, result1) => {
    if (err1) {
      throw err1;
    }

    //  update the id column using the incremented value of @num
    const query2 = 'UPDATE tasks SET id = @num := (@num + 1)';
    
    connection.query(query2, (err2, result2) => {
      if (err2) {
        throw err2;
      }
      
/*       console.log('reset ids successfully'); */
      res.send('reset ids successfully');
    });
  });
};

export default resetId;