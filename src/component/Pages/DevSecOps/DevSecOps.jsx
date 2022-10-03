import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class DevSecOps extends Component{
	constructor(){
        super();
        this.state = {
            topics: []
        }
    }
    componentDidMount(){
        fetch("./DevSecOps.json")
            .then(res => res.json())
            .then((x) => {

                this.setState((state) => {
                    return{
                        topics: x.topics,
                    };
                })
            })
    }
     render(){
        console.log(this.state.topics)
        let order = 1;
        return (
            <div>
				<section className="internal-page-wrapper">
					<div className="container"> 
						<div className="row justify-content-center text-center">
							<div className="col-12">
								<div className="title-wraper large">
								DevSecOps
								</div>
								<div className="brief-description">
									The integration of observability, testability, & security at every stage of the SDLC.
								</div>
								<br />
								<br />
								<br />
							</div> 
						</div>
						{
							this.state.topics.map((topic) => {
								let id = topic.Id;
								let topicPage = "/topic/"+id;

								let order1 = 1;
								let order2 = 2;
								if(order != 1)	{
									order1 = 2;
									order2 = 1;
									order--;
								}else{
									order++;
								}

								let topicDiv =
								<div key={id} className="row justify-content-center text-center topic-holder h-100">
									<div className={`col-sm-12 col-md-6 my-auto order-${order1}`}>
										<div className ="new-alert">
											{topic.alert}
										</div>
										{/* <div className="description-wraper">
											{topic.description}
										</div> */}
										<div className="product-title">
                                        	{ topic.title}
										</div>
										<div className="links-wrapper">
											<ul>
												<li>
													<Link url={topic.url}>Main Link
													</Link>
												</li>
												<li>
													<Link to={topicPage}>Learn more
													</Link>
												</li>
											</ul> 
										</div>
									</div> 

									<div  className={`col-sm-12 col-md-6 order-${order2}`}>
										<div className="topic-image">
											<img src={ topic.img} alt="topicImage"/>
										</div>
									</div> 
								</div>								
								;
								return topicDiv; 
							})
						}
				
					</div>
				</section>
			</div>
        )
    }
			
}
export default DevSecOps;