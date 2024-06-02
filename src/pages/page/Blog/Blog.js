import React from "react";
import Header from "../../../components/Header/Header";
import Register from "../../../components/Login/Register";
import Login from "../../../components/Login/Login";
import MobileMenu from "../../../components/Mobile Menu/MobileMenu";
import Footer from "../../../components/Footer/Footer";

export default function Blog() {
  return (
    <div>
      {/* <!-- Header Modal --> */}
      <Header />

      <section className="sub-banner-section float-start w-100">
        <div className="img-main-abnner d-inline-block w-100">
          <img alt="sm" src="assets/images/horocurty03.jpg" />
        </div>
        <div className="container">
          <h2 className="text-center text-white"> Blog </h2>
          <nav className="mt-4">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">Home</li>
              <li className="breadcrumb-item active"> Blog </li>
            </ol>
          </nav>
        </div>
      </section>
      <main
        className="float-start w-100 body-main"
        style={{ backgroundColor: "#0c071c" }}
      >
        <section className="blogs-info-div d-inline-block w-100 my-5">
          <div className="container">
            <div className="row gy-5 g-lg-5">
              <div className="col-lg-8">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="listed-bn">
                    <ul className="list-unstyled d-flex align-items-center justify-content-end">
                      <li className="ms-0">
                        <a id="list" className="active">
                          {" "}
                          <i className="fas fa-th-list"></i>{" "}
                        </a>
                      </li>
                      <li>
                        <a id="grid">
                          {" "}
                          <i className="fas fa-th-large"></i>{" "}
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h6 className="ms-lg-4 ashow">
                    {" "}
                    Showing <b> 1-4 </b> of <b> 13 </b> results{" "}
                  </h6>
                </div>

                <div id="products" className="mt-4">
                  <div className="row justify-content-between gy-5 g-lg-5">
                    <a
                      href="blog-details.html"
                      className="item list-item col-md-6 col-lg-6 col-xl-6 view-group list-group-item"
                    >
                      <div className="inside-div01">
                        <div className="left-div-list">
                          <img
                            src="assets/images/imag-tarot_make-a-wish.webp"
                            alt="pnm"
                          />
                          <div className="hvert">
                            10<b className="d-block">Jan</b>
                          </div>
                        </div>
                        <div className="right-list-div">
                          <h6>
                            {" "}
                            <i className="fas fa-tags"></i> vulputate
                          </h6>
                          <h5>All the Lorem Ipsum generators Internet</h5>
                          <div className="d-flex align-items-center">
                            <div className="admin-t">
                              <i className="far fa-user"></i>
                              <span> By Admin </span>
                            </div>
                            <div className="admin-t">
                              <i className="fas fa-calendar-alt"></i>
                              <span> 25 May 2021 </span>
                            </div>
                          </div>
                          <p className="mt-3">
                            {" "}
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                          </p>
                        </div>
                      </div>
                    </a>

                    <a
                      href="blog-details.html"
                      className="item list-item col-md-6 col-lg-6 col-xl-6 view-group list-group-item"
                    >
                      <div className="inside-div01">
                        <div className="left-div-list">
                          <img src="assets/images/aggju.jpg" alt="pnm" />
                          <div className="hvert">
                            10<b className="d-block">Jan</b>
                          </div>
                        </div>
                        <div className="right-list-div">
                          <h6>
                            {" "}
                            <i className="fas fa-tags"></i>vulputate
                          </h6>
                          <h5>It is a long established fact that </h5>
                          <div className="d-flex align-items-center">
                            <div className="admin-t">
                              <i className="far fa-user"></i>
                              <span> By Admin </span>
                            </div>
                            <div className="admin-t">
                              <i className="fas fa-calendar-alt"></i>
                              <span> 25 May 2021 </span>
                            </div>
                          </div>
                          <p className="mt-3">
                            {" "}
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                          </p>
                        </div>
                      </div>
                    </a>

                    <a
                      href="blog-details.html"
                      className="item list-item col-md-6 col-lg-6 col-xl-6 view-group list-group-item"
                    >
                      <div className="inside-div01">
                        <div className="left-div-list">
                          <img
                            src="assets/images/b25b0862914e3a91284933a7af276075.jpg"
                            alt="pnm"
                          />
                          <div className="hvert">
                            10<b className="d-block">Jan</b>
                          </div>
                        </div>
                        <div className="right-list-div">
                          <h6>
                            {" "}
                            <i className="fas fa-tags"></i>vulputate
                          </h6>
                          <h5>In sed tortor eget risus egestas </h5>
                          <div className="d-flex align-items-center">
                            <div className="admin-t">
                              <i className="far fa-user"></i>
                              <span> By Admin </span>
                            </div>
                            <div className="admin-t">
                              <i className="fas fa-calendar-alt"></i>
                              <span> 25 May 2021 </span>
                            </div>
                          </div>
                          <p className="mt-3">
                            {" "}
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                          </p>
                        </div>
                      </div>
                    </a>

                    <a
                      href="blog-details.html"
                      className="item list-item col-md-6 col-lg-6 col-xl-6 view-group list-group-item"
                    >
                      <div className="inside-div01">
                        <div className="left-div-list">
                          <img
                            src="assets/images/cat-crawford-b1AsZn2C-lo-unsplash.jpg"
                            alt="pnm"
                          />
                          <div className="hvert">
                            10<b className="d-block">Jan</b>
                          </div>
                        </div>
                        <div className="right-list-div">
                          <h6>
                            {" "}
                            <i className="fas fa-tags"></i>vulputate
                          </h6>
                          <h5>Curabitur vitae leo feugiat </h5>
                          <div className="d-flex align-items-center">
                            <div className="admin-t">
                              <i className="far fa-user"></i>
                              <span> By Admin </span>
                            </div>
                            <div className="admin-t">
                              <i className="fas fa-calendar-alt"></i>
                              <span> 25 May 2021 </span>
                            </div>
                          </div>
                          <p className="mt-3">
                            {" "}
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                          </p>
                        </div>
                      </div>
                    </a>

                    <a
                      href="blog-details.html"
                      className="item list-item col-md-6 col-lg-6 col-xl-6 view-group list-group-item"
                    >
                      <div className="inside-div01">
                        <div className="left-div-list">
                          <img
                            src="assets/images/tengyart-VgijAV-e97Y-unsplash.jpg"
                            alt="pnm"
                          />
                          <div className="hvert">
                            10<b className="d-block">Jan</b>
                          </div>
                        </div>
                        <div className="right-list-div">
                          <h6>
                            {" "}
                            <i className="fas fa-tags"></i>vulputate
                          </h6>
                          <h5>Nullam et urna rhoncus purus </h5>
                          <div className="d-flex align-items-center">
                            <div className="admin-t">
                              <i className="far fa-user"></i>
                              <span> By Admin </span>
                            </div>
                            <div className="admin-t">
                              <i className="fas fa-calendar-alt"></i>
                              <span> 25 May 2021 </span>
                            </div>
                          </div>
                          <p className="mt-3">
                            {" "}
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                          </p>
                        </div>
                      </div>
                    </a>

                    <a
                      href="blog-details.html"
                      className="item list-item col-md-6 col-lg-6 col-xl-6 view-group list-group-item"
                    >
                      <div className="inside-div01">
                        <div className="left-div-list">
                          <img
                            src="assets/images/tania-medina-zwsL1bj_yKA-unsplash.jpg"
                            alt="pnm"
                          />
                          <div className="hvert">
                            10<b className="d-block">Jan</b>
                          </div>
                        </div>
                        <div className="right-list-div">
                          <h6>
                            {" "}
                            <i className="fas fa-tags"></i>vulputate
                          </h6>
                          <h5>Sed eget sapien eget felis commodo </h5>
                          <div className="d-flex align-items-center">
                            <div className="admin-t">
                              <i className="far fa-user"></i>
                              <span> By Admin </span>
                            </div>
                            <div className="admin-t">
                              <i className="fas fa-calendar-alt"></i>
                              <span> 25 May 2021 </span>
                            </div>
                          </div>
                          <p className="mt-3">
                            {" "}
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="right-comon-linst05 pt-0">
                  <h3> Categories </h3>
                  <ul className="mt-5">
                    <li>
                      {" "}
                      <a href="#"> Pellentesque </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="#"> Morbi viverra </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="#"> scelerisque </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="#"> Vestibulum </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="#"> Pellentesque </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="#"> ultricies </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="#"> scelerisque </a>{" "}
                    </li>
                  </ul>
                </div>

                <div className="right-comon-linst05 mt-5">
                  <h3 className="mb-5"> Recent Post </h3>
                  <a href="#" className="d-flex post-cmonk align-items-center">
                    <div className="img-small01">
                      <img
                        alt="gmh"
                        src="assets/images/numerology-concept-still-life.jpg"
                      />
                    </div>
                    <div className="right-details-yui">
                      <p> 16 jan, 2023 </p>
                      <h5>Morbi vitae felis eget turpis</h5>
                    </div>
                  </a>
                  <a href="#" className="d-flex post-cmonk align-items-center">
                    <div className="img-small01">
                      <img alt="gmh" src="assets/images/moon-phasing1.png" />
                    </div>
                    <div className="right-details-yui">
                      <p> 16 jan, 2023 </p>
                      <h5>Sed et sem at risus consectetur</h5>
                    </div>
                  </a>
                  <a href="#" className="d-flex post-cmonk align-items-center">
                    <div className="img-small01">
                      <img alt="gmh" src="assets/images/imag-tarot_zen.jpg" />
                    </div>
                    <div className="right-details-yui">
                      <p> 16 jan, 2023 </p>
                      <h5>Nullam mattis nisl eget </h5>
                    </div>
                  </a>
                  <a href="#" className="d-flex post-cmonk align-items-center">
                    <div className="img-small01">
                      <img
                        alt="gmh"
                        src="assets/images/tengyart-VgijAV-e97Y-unsplash.jpg"
                      />
                    </div>
                    <div className="right-details-yui">
                      <p> 16 jan, 2023 </p>
                      <h5>Vestibulum feugiat lorem</h5>
                    </div>
                  </a>
                </div>

                <div className="right-comon-linst05 tabs-links mt-5">
                  <h3 className="mb-5"> Tags </h3>
                  <ul>
                    <li>
                      <a href="#" className="btn">
                        {" "}
                        Vestibulum{" "}
                      </a>
                      <a href="#" className="btn">
                        {" "}
                        Morbi{" "}
                      </a>
                      <a href="#" className="btn">
                        {" "}
                        Curabitur{" "}
                      </a>
                      <a href="#" className="btn">
                        {" "}
                        Nullam{" "}
                      </a>
                      <a href="#" className="btn">
                        {" "}
                        Pellentesque{" "}
                      </a>
                      <a href="#" className="btn">
                        {" "}
                        Nullam{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* <!-- footer Modal --> */}
      <Footer />

      {/* <!-- mobile menu --> */}

      <MobileMenu />
    </div>
  );
}
