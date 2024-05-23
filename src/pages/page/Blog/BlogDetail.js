import React from "react";
import Header from "../../../components/Header/Header";
import Login from "../../../components/Login/Login";
import Register from "../../../components/Login/Register";
import MobileMenu from "../../../components/Mobile Menu/MobileMenu";
import Footer from "../../../components/Footer/Footer";

export default function BlogDetail() {
  return (
    <div>
      {/* <!-- Header Modal --> */}
      <Header />

      <section className="sub-banner-section float-start w-100">
        <div className="img-main-abnner d-inline-block w-100">
          <img alt="sm" src="assets/images/horocurty03.jpg" />
        </div>
        <div className="container">
          <h2 className="text-center text-white"> Blog details </h2>
          <nav className="mt-4">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">Home</li>
              <li className="breadcrumb-item active"> Blog details </li>
            </ol>
          </nav>
        </div>
      </section>
      <main className="float-start w-100 body-main">
        <section className="blogs-info-div d-inline-block w-100 my-5">
          <div className="container">
            <div className="row gy-5 g-lg-5">
              <div className="col-lg-8">
                <div className="left-details-info">
                  <figure className="moni">
                    <img
                      alt="hjm"
                      src="assets/images/imag-tarot_make-a-wish.webp"
                    />
                  </figure>
                  <div className="d-flex justify-content-between share-div mt-5">
                    <ul className="list-unstyled d-flex">
                      <li>
                        {" "}
                        <i className="far fa-user"></i> By Author{" "}
                      </li>
                      <li>
                        {" "}
                        <i className="far fa-calendar-alt"></i> Oct 12, 2021{" "}
                      </li>
                      <li>
                        {" "}
                        <i className="far fa-comment"></i> 2 comments{" "}
                      </li>
                    </ul>
                    <a data-bs-toggle="modal" data-bs-target="#exampleModal">
                      {" "}
                      <i className="fas fa-share-alt"></i> Share
                    </a>
                  </div>
                  <h1 className="mt-5">
                    {" "}
                    Donec eu lectus convallis, ornare ligula eu, hendrerit
                    tortor.{" "}
                  </h1>

                  <p className="mt-4">
                    {" "}
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>

                  <div className="oqute d-lg-flex align-items-center w-100 p-5 my-5">
                    <span>
                      {" "}
                      <i className="fas fa-quote-right"></i>{" "}
                    </span>
                    <h2 className="ms-5">
                      {" "}
                      Grursus mal suada faci lisis Lorem ipsum dolarorit more a
                      ametion the is consectetur elit. Vesti at bulum nec odio
                      aea the dumm more ipsumm ipsum the consectetur elit.
                    </h2>
                  </div>

                  <p className="mt-3">
                    {" "}
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web
                    page editors now use Lorem Ipsum as their default model
                    text, and a search for 'lorem ipsum' will uncover many web
                    sites still in their infancy. Various versions have evolved
                    over the years, sometimes by accident, sometimes on purpose
                    (injected humour and the like).
                  </p>

                  <div className="comment-sec-part">
                    <h2> Comments</h2>
                    <div className="comon-com-div">
                      <div className="d-lg-flex justify-content-between">
                        <figure>
                          <img
                            src="assets/images/testimonials-1-1.jpg"
                            alt="user-pic"
                          />
                        </figure>
                        <div className="comment-text">
                          <div className="d-flex align-items-center">
                            <h5 className="mb-0"> Jone due </h5>{" "}
                            <span className="d-inline ms-3">
                              {" "}
                              Oct 12 ,2021{" "}
                            </span>
                          </div>

                          <p>
                            {" "}
                            Contrary to popular belief, Lorem Ipsum is not
                            simply random text. It has roots in a piece of
                            classical Latin literature from 45 BC, making it
                            over 2000 years old. Richard McClintock.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="comon-com-div d-inline-block w-100">
                      <div className="d-lg-flex justify-content-between">
                        <figure>
                          <img
                            src="assets/images/istockphoto-1277996375-612x612.jpg"
                            alt="user-pic"
                          />
                        </figure>
                        <div className="comment-text">
                          <div className="d-flex align-items-center">
                            <h5 className="mb-0"> Jone due </h5>{" "}
                            <span className="d-inline ms-3">
                              {" "}
                              Oct 12 ,2021{" "}
                            </span>
                          </div>

                          <p>
                            {" "}
                            Contrary to popular belief, Lorem Ipsum is not
                            simply random text. It has roots in a piece of
                            classical Latin literature from 45 BC, making it
                            over 2000 years old. Richard McClintock.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="leave-sec-part">
                    <h2> Leave a Comment </h2>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Full Name"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <textarea
                            className="form-control"
                            placeholder="Message"
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <input
                            type="submit"
                            className="btn subimt-comment"
                            value="Post Comment"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="right-comon-linst05">
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

      {/* 
<!-- login Modal --> */}
      <Login />

      {/* <!-- register Modal --> */}

      <Register />
    </div>
  );
}
