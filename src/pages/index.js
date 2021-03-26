import * as React from "react"

const IndexPage = () => {
  return (
    <main className="site-main">
      <section className="section d-flex align-items-center justify-content-center px-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <h2 className="h1 mb-2">
                Say <span className="hello">Hello</span> to JadedGamer.
              </h2>
              <h2 className="h2">We're a development lab that builds innovative mobile apps.</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-dark text-white">
        <div className="container py-5">
          <div className="row justify-content-center py-5 text-center">
            <div className="col-md-8">
              <h3 className="h1 pb-5">We're currently working on a few things...</h3>
              <div className="dash mx-auto my-1" />
            </div>
          </div>
          <div className="row justify-content-center pb-5">
            <div className="col-md-6">
              <ul className="list-unstyled text-center">
                <li className="py-2">
                  <h4 className="h4">
                    <a className="d-block d-md-inline-block mb-1" href="https://news.jadedgamer.com">
                      <span className="hello-thing">Video Game News</span>
                    </a>{' '}
                    A news aggregator.
                  </h4>
                </li>
                <li className="py-2 d-none">
                  <h4 className="h4">
                    <a className="d-block d-md-inline-block mb-1" href="https://boredable.com">
                      <span className="hello-thing">Boredable</span>
                    </a>{' '}
                    Post something.
                  </h4>
                </li>
                <li className="py-2">
                  <h4 className="h4">
                    <span className="d-block d-md-inline-block mb-1">
                      <span className="hello-thing">Project Magnolia</span>
                    </span>{' '}
                    A mobile video game (working title).
                  </h4>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 px-5">
        <div className="container text-center pt-5">
          <div className="row justify-content-center py-5">
            <div className="col-md-6">
              <p className="h5 mb-5">
                If you have other questions, thoughts or concerns, or If you’d like to work on something together you should email -{' '}
                <a className="hello" href="mailto:hello@jadedgamer.com">
                  hello@jadedgamer.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="text-center py-5">
        <small>Copyright © 2021 JadedGamer</small>
      </footer>
    </main>
  )
}

export default IndexPage
