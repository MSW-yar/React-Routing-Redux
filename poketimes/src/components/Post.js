import React, { Component } from "react";
import { connect } from "react-redux";
import { deletePost } from '../actions/posactions'

class Post extends Component {
  handleclick= (id)=> {
    this.props.deletePost(this.props.post.id)
  }
  render() {
    console.log(this.props);
    const post = this.props.post ? (
      <div className="center">
        <h4> {this.props.post.title} </h4>
        <p> {this.props.post.body} </p>
        <div className='center'>
         <button className='btn grey' onClick={this.handleclick}> Delete Post </button><div>
      </div>
    ) : (
      <div className="container">
        <p> Loading Post U Requested ... </p>
      </div>
    );
    return <div className="container">{post}</div>;
  }
}
const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id;
  return {
  posts : state.posts.find(post=>post.id === id)
}
}

const mapStateTodelete = (dispatch) => {
  return {
    deletePost: (id) => {dispatch(deletePost(id))}
  }
}
export default connect(mapStateToProps,mapStateTodelete)(Post);
