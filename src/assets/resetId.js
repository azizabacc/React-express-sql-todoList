  import axios from "axios";
  // Function to reset Id
  const resetId = async () => {
    try {
      await axios.get("/api/resetId");
      console.log('reset Ids successfully');
    } catch (err) {
      console.error(err);
    }
  };

  export default resetId;