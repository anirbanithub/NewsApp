import React, { Component } from "react";
import PropTypes from "prop-types";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export default class News extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
      searchInput: "cricket",
    };
    document.title = `NewsMonkey-${this.props.country.toUpperCase()}`;
  }

  async updatepage() {
    this.props.setProgress(10);
    this.setState({ loading: true });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=85940a4d7b23488ba7ecd9e9e7c6533e&page=${this.state.page}&pagesize=${this.props.noOfnews}`;
    let data = await fetch(url);
    this.props.setProgress(40);
    let parseddata = await data.json();
    this.props.setProgress(70);

    this.setState({
      articles: parseddata.articles,
      totalResults: parseddata.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }

  async searchUpdate() {
    this.props.setProgress(10);
    this.setState({ loading: true });
    const url = `https://newsapi.org/v2/everything?q=${this.state.searchInput}&apiKey=85940a4d7b23488ba7ecd9e9e7c6533e&page=${this.state.page}`;
    let data = await fetch(url);
    this.props.setProgress(40);
    let parseddata = await data.json();
    this.props.setProgress(70);

    this.setState({
      articles: parseddata.articles,
      totalResults: parseddata.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }

  handelChange = (searchValue) => {
    if (searchValue !== "") {
      this.setState({ searchInput: searchValue });
      this.searchUpdate();
    }
  };

  async componentDidMount() {
    this.updatepage();
  }

  goprev = async () => {
    this.setState({ page: this.state.page - 1 });
    this.updatepage();
  };

  gonext = async () => {
    this.setState({ page: this.state.page + 1 });
    this.updatepage();
  };

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    this.updatepage();
  };

  render() {
    return (
      <>
        <div className="container ">
          <div className="my-3">
            {/* For the heading */}
            <h2 className="text-center">
              Top {this.props.country.toUpperCase()} News of Today{" "}
            </h2>

            {/* Imp. search bar  */}
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={this.searchInput}
                onChange={(e) => this.handelChange(e.target.value)}
              />
            </form>

            <div className="text-center">
              {this.state.loading && <Spinner />}
            </div>
          </div>
          {
            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div className="col md-3" key={element.url}>
                    <NewsItem
                      title={element.title}
                      description={element.description}
                      imgUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          }

          {/* </InfiniteScroll> */}
          <div className="d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              type="button"
              className="btn btn-dark"
              onClick={this.goprev}
            >
              {" "}
              &#8606; Previous
            </button>
            <button
              disabled={
                this.state.page + 1 >
                Math.ceil(this.state.totalResults / this.props.noOfnews)
              }
              type="button"
              className="btn btn-dark"
              onClick={this.gonext}
            >
              Next &#8608;
            </button>
          </div>
        </div>
      </>
    );
  }
}

News.defaultProps = {
  country: "in",
  noOfnew: 8,
};

News.propTypes = {
  country: PropTypes.string,
  noOfnew: PropTypes.number,
};
