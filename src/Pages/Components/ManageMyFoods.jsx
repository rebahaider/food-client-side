import { useEffect } from "react";


const ManageMyFoods = () => {

      // set dynamic title
      useEffect(() => {
        document.title = "PETUK | ManageMyFoods"
    })

    return (
        <div>
            <h1>i am from manage my foods</h1>
        </div>
    );
};

export default ManageMyFoods;