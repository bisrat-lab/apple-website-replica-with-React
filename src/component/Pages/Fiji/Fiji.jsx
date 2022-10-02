import React, { Component } from 'react'
import Carousel from '../../Images/Carousel';

 class Fiji extends Component {
    constructor(){
        super();
        this.state = {
            products: []
        }
    }
    componentDidMount(){
        // fetch("./watch.json")
        //     .then(res => res.json())
        //     .then((x) => {

        //         this.setState((state) => {
        //             return{
        //                 products: x.products,
        //             };
        //         })
        //     })
    }
     
    render() {
        //console.log(this.state.products)
        //let order = 1;
        return (
            <div>
				<section className="internal-page-wrapper">
					<div className="container"> 
                        <Carousel />
					</div>
				</section>
			</div>
        )
    }
}

export default Fiji
