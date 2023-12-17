import {APP_URL} from "./Constant";
import axios from "axios";

console.log("");

// export const fetchCartData = async () => {
//     try {
//       const response = await fetch(APP_URL);

//       if (response.ok) {
//         const data = await response.json();
//         return data;
//       } else {
//         console.error('Failed to fetch cart data');
//       }
//     } catch (error) {
//       console.error('Error fetching cart data:', error);
//     }

//   };

// export const fetchItems = async () =>{
//   try{
//     axios
//         .post(APP_URL, inputField)
//         .then((result) => {
//           console.log("result:-", result);
//           toast("Registration Completed");
//           navigate('/login');
//         })
//   }catch(error){
//     console.error('Error fetching cart data:', error);
//   }
// }
