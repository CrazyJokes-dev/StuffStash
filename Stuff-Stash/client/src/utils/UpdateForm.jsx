import React from "react";
import { ReactSession } from "react-client-session";
import "../components/styles/assetCard.css";

var name ="";
var serialCode ="";
var availability ="";
var category ="";
var condition ="";
var warranty ="";




const UpdateForm = () => {

  const setNewName= (e) => {
    name = e.target.value;
  };
  const setNewSerialCode= (e) => {
    serialCode = e.target.value;
  };
  const setNewAvailabity= (e) => {
    availability = e.target.value;
  };
  const setCategory= (e) => {
    category = e.target.value;
  };
  const setCondition= (e) => {
    condition = e.target.value;
  };
  const setWarranty= (e) => {
    warranty = e.target.value;
  };

  const update =  async (event) => {
    // console.log("your identifer is" + oldIdentifer+"your old stockroom is " + oldIdentifer +"and your newname is"+newName);
    event.preventDefault();
    try {
     const response =  await fetch("http://localhost:3000/api/v1/UpdateAsset", {
       method: "POST",
       body: JSON.stringify({
         stockroomName:ReactSession.get("selectedStockroom"),
         newIdentifer:name,  
         identifier:ReactSession.get("identiferName"),
         newSerialCode:serialCode,
         newIsAvailable:availability,
         newCategory:category,
         newCondition:condition,
         newWarranty:warranty
       }),
       headers: {
         "Content-Type": "application/json",
         Accept: "application/json",
       },
     });
  
     if (!response.ok) {
       throw new Error(`Error! status: ${response.status}`);
     }
     
     const result =  await response.json();
  
     console.log("result is: ", JSON.stringify(result, null, 4));
   } catch (err) {
   } finally {
     window.location.reload();
   }
   };
  return (
    <form onSubmit="{update}">
      <div class="form-group m-3 black">
        <label for="Name" >Name : </label>
        <input onChange={setNewName}/>
      </div>
      <div class="form-group m-3 black">
        <label for="Serial Code">Serial Code : </label>
        <input onChange={setNewSerialCode}/>
      </div>
      <div class="form-group m-3 black">
        <label for="avail">Availability :</label>
        <input onChange={setNewAvailabity}/>
      </div>

      <div class="form-group m-3 black">
        <label class="form-label" for="asset info">
          Asset Info :
        </label>
        <input onChange={setCategory}/>
      </div>
      <div class="form-group m-3 black" >
        <label for="condition">Condition :</label>
        <select name="condition" id="condition" onChange={setCondition}>
          <option>Select Value</option>
          <option value="new">New</option>
          <option value="used">Used</option>
          <option value="poor">Poor</option>
        </select>
      </div>
      <div class="form-group m-3 black">
        <label for="WarrDate">Warranty Date :</label>
        <input onChange={setWarranty}/>
       <div className="text-center">
        <button className="btn btn-primary m-3 " onClick={update}>
          Confirm{" "}
        </button>
      </div></div>
     
    </form>
  );
};
export default UpdateForm;
