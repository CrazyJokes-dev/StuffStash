import React from "react";

const UpdateForm = () => {
  return (
    <form onSubmit="{update}">
      <div class="form-group m-3">
        <label for="Name">Name : </label>
        <input />
      </div>
      <div class="form-group m-3">
        <label for="Serial Code">Serial Code : </label>
        <input />
      </div>
      <div class="form-group m-3">
        <label for="avail">Availability :</label>
        <input />
      </div>

      <div class="form-group m-3">
        <label class="form-label" for="asset info">
          Asset Info :
        </label>
        <input />
      </div>
      <div class="form-group m-3">
        <label for="condition">Condition :</label>
        <select name="condition" id="condition">
          <option value="new">New</option>
          <option value="used">Used</option>
          <option value="poor">Poor</option>
        </select>
      </div>
      <div class="form-group m-3">
        <label for="WarrDate">Warranty Date :</label>
        <input />
      </div>
      <div className="text-center">
        <button type="submit" className="btn btn-primary m-3 ">
          Confirm{" "}
        </button>
      </div>
    </form>
  );
};
export default UpdateForm;
