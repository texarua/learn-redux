import React, { Component, useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import Pagination from "react-js-pagination";
import api from '../api';
import { useDispatch, useSelector } from 'react-redux';

function Blog(props) {
    const [items, setItems] = useState({});
    const [activePage, setActivePage] = useState(1)
    const laterList = useSelector(state => state.listBlogReducer.laterList)
    const dispatch = useDispatch()

    useEffect(
        () => {
            api.get('/blog?page=' + activePage)
                .then(response => { 
                setItems(response.data.blog)
            })
                .catch(error => { console.log(error) })
        },[]
    )

    function fetchData() {
        if (items.data instanceof Array) {
            return items.data.map((object, i) => { 
                return (
                    <div key={i} index={ i } class="single-blog-post">
                        <h3>{ object.title }</h3>
                        <div class="post-meta">
                            <ul>
                                <li><i class="fa fa-user"></i> Mac Doe</li>
                                <li><i class="fa fa-clock-o"></i> 1:33 pm</li>
                                <li><i class="fa fa-calendar"></i> DEC 5, 2013</li>
                            </ul>
                            <span>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star-half-o"></i>
                            </span>
                        </div>
                        <Link to="">
                            <img src={ process.env.PUBLIC_URL + '/template/images/blog/' + object.image } alt="" />
                        </Link>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <button class="btn btn-primary" onClick={() => dispatch({
                            type: 'ADD_LATE',
                            payload: {
                                [object.id] : object.title
                            }
                        })}>Read Late</button>
                        <Link class="btn btn-primary" to={"/blog/detail/" + object.id }>Read More</Link>
                    </div>
                )
             })
        }
        
    }

    function handlePageChange(pageNumber) {
        setActivePage(pageNumber)
        api.get('/blog?page=' + pageNumber)
            .then(response => { 
            setItems(response.data.blog)
        })
            .catch(error => { console.log(error) })
    }

    function renderPage() {
        if (items.data instanceof Array) {
            return (
                <div class="pagination-area">
                    <Pagination
                         hideNavigation
                        activePage={activePage}/*  */
                        itemsCountPerPage={items.per_page}
                        totalItemsCount={items.total}
                        pageRangeDisplayed={5}
                        onChange={handlePageChange}
                        activeClassName={'active'}
                    />
                </div>
            )
        }
    }

    return (
        <div class="col-sm-9">
            {console.log(laterList)}
                <div class="blog-post-area">
                    <h2 class="title text-center">Latest From our Blog</h2>
                    
                    { fetchData() }
                    
                    { renderPage() }
                </div>
            </div> 
    )
}

export default Blog