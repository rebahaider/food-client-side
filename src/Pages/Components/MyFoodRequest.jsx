import { useEffect } from "react";


const MyFoodRequest = () => {

      // set dynamic title
      useEffect(() => {
        document.title = "PETUK | MyFoodRequest"
    })

    return (
        <div>
            <h1>My food request</h1>
        </div>
    );
};

export default MyFoodRequest;