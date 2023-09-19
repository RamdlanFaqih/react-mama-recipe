import React from "react";
import Navigation from "../../Component/Navigation/Nav1";
import Footer from "../../Component/Footer/Footer";
import Button from "../../Component/Button/Button";
import "./app.css";

const AddRecipe = () => {
  return (
    <React.Fragment>
      <Navigation />
      <div className="container" id="all-content">
        <div className="row align-items-center">
          <div className="col-12 text-center mx-auto" id="insert">
            <div className="d-grid mb-3" id="insert-data">
              <input type="file" id="file" className="text-center" />
              <label htmlFor="file">
                <p>Image</p>
                <img src="../../Component/assets/icon/addImage.svg" alt="" />
                <p>Add Photo </p>
              </label>
            </div>
            <div className="mb-3">
              <input
                className="form-control form-control-lg"
                type="text"
                placeholder="Title"
                aria-label=".form-control-lg example"
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                placeholder="Ingredients"
                id="floatingTextarea2"
                style={{ height: "380px" }}
              ></textarea>
            </div>
            <div className="d-grid mb-3" id="insert-data">
              <input type="file" id="file" className="text-center" />
              <label htmlFor="file">
                Video
              </label>
            </div>
          </div>
          <div className="col-12 text-center mx-auto" id="post">
            <div className="d-grid mb-3">
              <Button type="submit" buttonName="Submit" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default AddRecipe;
