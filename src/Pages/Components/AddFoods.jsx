import { useEffect } from "react";


const AddFoods = () => {

      // set dynamic title
      useEffect(() => {
        document.title = "PETUK | AddFoods"
    })

    return (
        <div>
            <h1>Add food form</h1>
        </div>
    );
};

export default AddFoods;