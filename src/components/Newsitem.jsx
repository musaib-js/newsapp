import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let { title, desc, imgUrl, url, mode } = this.props;
    return (
      <>
        <div className="col-md-3">
          <div className="my-3">
            <div className="card shadow-lg">
              <img
                src={
                  imgUrl
                    ? imgUrl
                    : "https://c.ndtvimg.com/2023-05/672oh498_heinrich-klaasen-bcci_625x300_18_May_23.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=675"
                }
                alt="News"
                className="card-img-top"
              />
              <div className={`card-body bg-${mode==="dark"?"dark":"light"} text-${mode==="dark"?"light":"dark"}`}>
                <h5 className="card-title">{title.slice(0, 50)}</h5>
                <p className="card-text">
                  {desc
                    ? desc.slice(0, 90)
                    : "This doesn't contain any description. Please click the Read More button to know more"}
                </p>
                <a
                  href={url}
                  rel="noreferrer"
                  target="_blank"
                  className="btn btn-sm btn-primary"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
      
    );
  }
}
export default Newsitem;
