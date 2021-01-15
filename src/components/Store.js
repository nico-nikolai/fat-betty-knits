import React, { Component } from 'react';

class Store extends Component {

    render() {
        const catalog = this.props.catalog.map(item => {
            return (
                <div key={item.id} className="col-sm-6">
                    <img src={item.image} alt={item.name} />
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                </div>
            )
        })
        return (
            <div className="container">
                <div className="row store">
                    {catalog}
                </div>
            </div>
        )
    }
}

export default Store;