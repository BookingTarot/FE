import React from "react";

export default function SessionType({ onClose }) {
  return (
    <div
      className="modal show"
      id="sessionType"
      tabIndex="-1"
      aria-labelledby="sessionTypeLabel"
      aria-hidden="true"
      // style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
      }}
    >
      <div className="modal-dialog">
        <div
          className="modal-content"
          style={{
            borderRadius: "30px",
            boxShadow: "rgb(0, 0, 0) 0px 3px 0px 0px",
          }}
        >
          <div className="modal-header border-bottom-0">
            <button
              style={{ marginRight: "5px" }}
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            <div className="modal-contact">
              <h2>Session Type</h2>
              <div className="form-div-sections mt-5 d-inline-block w-100 px-5">
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="row" data-aos="fade-down">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label htmlFor="duration">Duration</label>
                        <input
                          type="text"
                          className="form-control"
                          id="duration"
                          name="duration"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <input
                          type="text"
                          className="form-control"
                          id="description"
                          name="description"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label htmlFor="price">Price</label>
                        <input
                          type="text"
                          className="form-control"
                          id="price"
                          name="price"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 mt-3">
                    <input
                      type="submit"
                      className="btn btn-submit"
                      value="Submit"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
