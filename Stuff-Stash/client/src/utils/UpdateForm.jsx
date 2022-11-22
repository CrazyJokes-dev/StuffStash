import React from "react";

const UpdateForm = () => {
  return (
    <form onSubmit="{update}">
      <div class="form-group m-3">
        <label for="Name">Name : </label>
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
        <label for="WarrDate">Warrenty Date :</label>
        <input />
      </div>
      <button type="submit" class="btn btn-primary m-3 ">
        Confirm{" "}
      </button>
    </form>
  );
};
export default UpdateForm;
