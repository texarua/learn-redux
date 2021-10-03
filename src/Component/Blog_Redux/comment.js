import React, { Component } from "react";
import Api from '../api';

class Comment extends Component {
    constructor(props) {
        super(props)
        this.state = {       
            comment: '',
            userData: localStorage['auth'] ? JSON.parse(localStorage['auth']) : null
        }
        this.doComment = this.doComment.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    doComment(e) {
        e.preventDefault()
        const { userData } = this.state 
        const token = localStorage['token']
        let url = '/blog/comment/' + this.props.idBlog

        let config = {
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
            }
        }

        let { comment } = this.state
        
        if (comment) {
            const formData = new FormData();
            formData.append('id_blog', this.props.idBlog)
            formData.append('id_user', userData.id)
            formData.append('id_comment', this.props.idSubComment ?? 0)
            formData.append('comment', this.state.comment)
            formData.append('image_user', userData.avatar)
            formData.append('name_user', userData.name)

            Api.post(url, formData, config)
                .then(res => {
                    if (res.data.data) {
                        this.props.addComment(res.data.data);
                    }
                
            })
            .catch(err => console.log(err))
        }

        
        
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        let name = 'Your Name'
        let { userData } = this.state
        if (userData) {
            name = userData.name
        }
        
        return (
            <div className="replay-box">
                <div className="row">       
                    <form onSubmit={ this.doComment }>
                    <div className="col-sm-8">
                    <h2>Leave a replay</h2> 
                    <div className="text-area">
                        <div className="blank-arrow">
                            <label>{ name }</label>
                        </div>
                        <span>*</span>
                        <textarea id="comment" onChange={ this.handleChange } name="comment" rows={11} defaultValue={""} />
                        <button type="submit" className="btn btn-primary">post comment</button>
                    </div>
                    </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default Comment