import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

class UpdateArticleInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:8082/api/articles/'+this.props.match.params.id)
      .then(res => {
        // this.setState({...this.state, article: res.data})
        this.setState({
          title: res.data.title,
          body: res.data.body
        })
      })
      .catch(err => {
        console.log("Error from UpdateArticleInfo");
      })
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      title: this.state.title,
      body: this.state.body
    };

    axios
      .put('http://localhost:8082/api/articles/'+this.props.match.params.id, data)
      .then(res => {
        this.props.history.push('/show-article/'+this.props.match.params.id);
      })
      .catch(err => {
        console.log("Error in UpdateArticleInfo!");
      })
  };


  render() {
    return (
      <div className="UpdateArticleInfo">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Article List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Edit article</h1>
              <p className="lead text-center">
                  Update article's Info
              </p>
            </div>
          </div>

          <div className="col-md-8 m-auto">
          <form noValidate onSubmit={this.onSubmit}>
            <div className='form-group'>
              <label htmlFor="title">Title</label>
              <input
                type='text'
                placeholder='Title of the article'
                name='title'
                className='form-control'
                value={this.state.title}
                onChange={this.onChange}
              />
            </div>
            <br />

            <div className='form-group'>
            <label htmlFor="isbn">Body</label>
              <input
                type='text'
                placeholder='BODY'
                name='body'
                className='form-control'
                value={this.state.body}
                onChange={this.onChange}
              />
            </div>

            <button type="submit" className="btn btn-outline-info btn-lg btn-block">Update 
            
            Article</button>
            </form>
          </div>

        </div>
      </div>
    );
  }
}

export default UpdateArticleInfo;