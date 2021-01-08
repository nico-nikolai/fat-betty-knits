import React, { Component } from 'react';

class Shop extends Component {

    render() {
        const catalog = this.props.catalog.map(item => {
            return (
                <div key={item.id} className="col">
                    <img src={item.image} alt={item.name} />
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                </div>
            )
        })
        return (
            <div className="container">
                <div className="row">
                    {catalog}
                </div>
            </div>
        )
    }
}

export default Shop;