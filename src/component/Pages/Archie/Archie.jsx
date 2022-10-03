import React, {Component} from 'react';
// import { Link } from 'react-router-dom';

class Archie extends Component{
	constructor(){
        super();
        this.state = {
            topics: []
        }
    }
    componentDidMount(){
        fetch("./Archie.json")
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
									Ask Archie - an Architect helper Bot
								</div>
								<div className="brief-description">
									I can help provision cloud services, provide documentation and references to standards
								</div>
								<br />
								<br />
								<br />
							</div> 
						</div>
					</div>
				</section>
			</div>
        )
    }
			
}
export default Archie;