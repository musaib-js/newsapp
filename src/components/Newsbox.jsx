import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";

export class Newsbox extends Component {

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,

    };
  }

  async updateNews(){
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=97892940bed14d2fb524642b0f97594d&pageSize=${this.props.pageSize}&page=${this.state.page}`;
    this.setState({loading:true})
    let data =  await fetch(url);
    let parsedData = await data.json()
    this.setState({loading:false})
    this.setState({articles: parsedData.articles})
    this.setState({loading:false})
  }
  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=97892940bed14d2fb524642b0f97594d&pageSize=${this.props.pageSize}&page=${this.state.page}`;
    this.setState({loading:true})
    let data =  await fetch(url);
    let parsedData = await data.json()
    this.setState({loading:false})
    this.setState({articles: parsedData.articles})
    this.setState({loading:false})


  }
  handlePrevious = async()=>{
    this.setState({page: this.state.page-1});
    this.updateNews()
  }

  handleNext = async()=>{
    this.setState({page: this.state.page+1});
    this.updateNews()
  }
  render() {
    return (
      <div className="container my-4">
        <h2 className={`text-center text-${this.props.mode==="dark"?"light":"dark"}`}>Today's Top Headlines - {this.props.category.charAt(0).toUpperCase()+this.props.category.slice(1)}</h2>
        {this.state.loading && <Spinner/>}
        <div className="row">
            {!this.state.loading && this.state.articles.map((element)=>{
                return <Newsitem key={element.url} title = {element.title} desc = {element.description} imgUrl = {element.urlToImage} url = {element.url} loading = {this.state.loading} mode = {this.props.mode}/>
            })}
        </div>
        <div className="d-flex justify-content-between">
        <button type="button" className="btn shadow-lg btn-light" onClick={this.handlePrevious}>&larr; Previous</button>
        <button type="button" className="btn shadow-lg btn-light" onClick={this.handleNext}>Next &rarr;</button>
        </div>
      </div>
    );
  }
}

export default Newsbox;
