import React, {Component} from 'react';

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
        console.log('alpha')
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
                                <div>May not connect as it may be disabled for user</div>
                                <iframe title="askarchie" style={{height:600, width:800}} src='https://webchat.botframework.com/embed/askarchiedev4d64fc?s=v7Bh8B-KKQI.Gs3qzekdmRuG3A24n13LQSCnJT-CuAYotrf5rhDOse0'></iframe>
							</div> 
						</div>
					</div>
				</section>
			</div>
        )
    }
			
}
export default Archie;