import React, { Component } from 'react'
import { Link } from 'react-router-dom';

 class Watch extends Component {
    constructor(){
        super();
        this.state = {
            products: []
        }
    }
    componentDidMount(){
        fetch("./watch.json")
            .then(res => res.json())
            .then((x) => {

                this.setState((state) => {
                    return{
                        products: x.products,
                    };
                })
            })
    }
     
    render() {
        console.log(this.state.products)
        let order = 1;
        return (
            <div>
				<section className="internal-page-wrapper">
					<div className="container"> 
						<div className="row justify-content-center text-center">
							<div className="col-12">
								<div className="title-wraper large">
                                The #1 smartwatch<br/>
                                in the world. Times two. 
								</div>
								{/* <div className="brief-description">
									The best for the brightest
								</div> */}
							</div> 
						</div>
						{
							this.state.products.map((product) => {
								let id = product.Id;
								let productPage = "/iphone/"+id;

								let order1 = 1;
								let order2 = 2;
								if(order != 1)	{
									order1 = 2;
									order2 = 1;
									order--;
								}else{
									order++;
								}

								let productDiv =
								<div key={id} className="row justify-content-center text-center product-holder h-100">
									<div className={`col-sm-12 col-md-6 my-auto order-${order1}`}>
										<div className="product-title">
                                        <img src={ product.Title}/>
										</div>
										<div className="description-wraper">
											{product.Description}
										</div>
										<div className="price-wrapper">
											{`Starting at ${product.StartPrice}`}
										</div>
										<div className="monthly-price">
											{product.PriceRange}
										</div>
										<div className="links-wrapper">
											<ul>
												<li>
													<Link to={productPage}>Learn more
													</Link>
												</li>
											</ul> 
										</div>
									</div> 

									<div  className={`col-sm-12 col-md-6 order-${order2}`}>
										<div className="prodict-image">
											<img src={ product.img}/>
										</div>
									</div> 
								</div>								
								;
								return productDiv; 
							})
						}
				
					</div>
				</section>
			</div>
        )
    }
}

export default Watch
