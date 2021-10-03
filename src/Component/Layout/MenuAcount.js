import React, { Component } from 'react';

class MenuAccount extends Component {

    render() {
        return (
            <div className="col-sm-3">
                    <div className="left-sidebar">
                        <h2>Category</h2>
                        <div className="panel-group category-products" id="accordian">{/*category-productsr*/}
                        <div className="panel panel-default">
                            <div className="panel-heading">
                            <h4 className="panel-title">
                                <a href="/account">
                                <span className="badge pull-right"><i className="fa fa-plus" /></span>
                                Account
                                </a>
                            </h4>
                            </div>
                        </div>
                        <div className="panel panel-default">
                            <div className="panel-heading">
                            <h4 className="panel-title">
                                <a href="/user/product/list">
                                <span className="badge pull-right"><i className="fa fa-plus" /></span>
                                    Products
                                </a>
                            </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default MenuAccount