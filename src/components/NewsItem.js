import React from "react";

const NewsItem = (props) => {
  let { title, description, imgUrl, newsUrl, author, date, source } = props;
  return (
    <div>
      <div className="card my-3">
        <img
          src={
            imgUrl
              ? imgUrl
              : "https://thumbs.dreamstime.com/z/no-image-available-icon-vector-illustration-flat-design-140476186.jpg"
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-footer text-body-secondary">
            By {author ? author : "Unknown"} on {new Date(date).toGMTString()}
          </p>
          <a href={newsUrl} className="btn btn-dark btn-sm">
            Read More
          </a>
          <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
            {source}
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
