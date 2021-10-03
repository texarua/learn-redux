import React, { Component } from 'react';
import Api from "../api";

class ListComment extends Component {
    constructor(props) {
      super(props)
      this.getIdSubComment = this.getIdSubComment.bind(this)
    }

  getIdSubComment(e) {
    this.props.getIdSubComment(e.target.getAttribute('subId'));
  }

  renderChildComment(listComment, idParent) {
    if (listComment) {
      return listComment.map((object, i) => {
        if (object.id_comment == idParent) {
          return (
            <li key={ i } className="media second-media">
              <a className="pull-left" href="#">
                <img className="media-object"  src={ process.env.PUBLIC_URL + 'images/blog/' + object.image_user } alt="" />
              </a>
              <div className="media-body">
                <ul className="sinlge-post-meta">
                  <li><i className="fa fa-user" />{ object.name_user }</li>
                  <li><i className="fa fa-clock-o" /> 1:33 pm</li>
                  <li><i className="fa fa-calendar" /> DEC 5, 2013</li>
                </ul>
                <p>{ object.comment }</p>
                <a className="btn btn-primary"  subId={ idParent } href="#comment" onClick={ this.getIdSubComment }><i className="fa fa-reply" />Replay</a>
              </div>
            </li>
            )
          }
      })
    }
   
  }

  renderComments() {
    let listComments = this.props.comments
    if (listComments instanceof Array) {
      return listComments.map((object, i) => {
        if (object.id_comment == 0) {
              return (
                <>
                <li key={ i } className="media">
                    <a className="pull-left" href="#">
                        <img className="media-object" src={ process.env.PUBLIC_URL + 'images/blog/' + object.image_user } alt="" />
                    </a>
                    <div className="media-body">
                        <ul className="sinlge-post-meta">
                      <li><i className="fa fa-user" />{object.name_user }</li>
                        <li><i className="fa fa-clock-o" /> 1:33 pm</li>
                        <li><i className="fa fa-calendar" /> DEC 5, 2013</li>
                        </ul>
                    <p>{ object.comment }</p>
                    <a className="btn btn-primary" subId={ object.id } href="#comment" onClick={ this.getIdSubComment }><i className="fa fa-reply" />Replay</a>
                    </div>
                </li>
                { this.renderChildComment(listComments, object.id) }
              </>
            )      
          }
        
      })
    }
  }

    render() {
        return (
            <>
                <div className="response-area">
                    <h2>3 RESPONSES</h2>
                    <ul className="media-list">
                        { this.renderComments() }
                    </ul>					
                  </div>{/*/Response-area*/}
            </>
        )
    }
}
export default ListComment