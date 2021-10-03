import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';
import Api, { getConfig } from '../api';

class Rate extends Component { 
    constructor(props) {
        super(props)
        this.state = {
            rates: {}
        }
        this.doRate = this.doRate.bind(this)
    }
    
    doRate(newRating) {
        const userData = localStorage['auth'] ? JSON.parse(localStorage['auth']) : null
        alert('123123')
        if (userData) {
            const token = localStorage['token']
            let url = '/blog/rate/' + this.props.idBlog
            let config = getConfig(token)
            const formData = new FormData();
                formData.append('user_id', userData.id)
                formData.append('rate', newRating)
                formData.append('blog_id', this.props.idBlog)
    
            Api.post(url, formData ,config)
                .then(res => { alert(res.data.message) })
                .catch(err => { console.log(err) }) 
        } 
    }
    render() {
        return (
            <div className="rating-area">
                <div className="rate">
                    <div className="vote">
                         <StarRatings
                            rating={3.3}
                            starRatedColor="#fe980f"
                            changeRating={this.doRate}
                            numberOfStars={5}
                            name='rating'
                        />
                    </div> 
                </div>
                 <ul className="tag">
                    <li>TAG:</li>
                    <li><a className="color" href>Pink <span>/</span></a></li>
                    <li><a className="color" href>T-Shirt <span>/</span></a></li>
                    <li><a className="color" href>Girls</a></li>
                </ul>
            </div>
        )
    }
}
 export default Rate