import React, { Component } from 'react';

class Shop extends Component {
    constructor(props) {
        super(props);

        this.state = {
            catalog: [
                {
                    id: 1,
                    name: 'Red Headband',
                    image: 'assets/images/adult-red-headband.jpg',
                    description: 'Knitted Bow Ear Warmer Headband - Red - Adult One Size Fits All',
                    price: '$28.00'
                },
                {
                    id: 2,
                    name: 'White Headband',
                    image: 'assets/images/adult-white-headband.jpg',
                    description: 'Hand-Knit Textured Ear Warmer - White - Teen/Adult Size Headband',
                    price: '$28.00'
                },
                {
                    id: 3,
                    name: 'Black Headband',
                    image: 'assets/images/adult-black-headband.jpg',
                    description: 'Bow-Tie Knit Ear Warmer Headband - Black - Adult Unisex',
                    price: '$28.00'
                },
                {
                    id: 4,
                    name: 'Blue Headband',
                    image: 'assets/images/baby-navy-blue-ear-warmer.webp',
                    description: 'Knitted Ear Warmer - Baby One-Size (3-12 months) - Navy Blue',
                    price: '$36.00'
                },
                {
                    id: 5,
                    name: 'Pumpkin Hat',
                    image: 'assets/images/all-size-pumpkin-hat.jpg',
                    description: 'Hand Knit Pumpkin Beanie Hat - Newborn/Baby/Toddler/Child/Adult Sizes Available!',
                    price: '$23.00'
                }
            ]
        }
    }
    render() {
        const catalog = this.state.catalog.map(item => {
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