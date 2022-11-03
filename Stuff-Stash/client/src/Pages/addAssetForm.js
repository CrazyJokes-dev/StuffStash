import React from "react";

function AssetForm() {
  return (
    <div className="container  ">
      <div className="row ">
        <div className="col-sm "></div>

        <div className="col-sm ">
          <form className="justify-content-center">
            <div className="form-group">
              <label htmlFor="identifier" className="">
                Identifier:
              </label>
              <input
                type="identifier"
                className="form-control"
                id="identifier"
                placeholder="Enter identifier"
                name="identifier"
              />
            </div>

            <div className="form-group">
              <label htmlFor="pwd" className="">
                Category:
              </label>
              <input
                type="category"
                className="form-control"
                id="category"
                placeholder="Enter category"
                name="category"
              />
            </div>

            <button type="create asset" className="btn btn-primary m-3 p-1">
              Create Asset
            </button>
          </form>
        </div>
        <div className="col-sm"></div>
      </div>
    </div>
  );
}

export default AssetForm;
