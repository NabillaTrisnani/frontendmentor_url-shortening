import React from "react";

class Cta extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <section className='cta'>
                <div className='container'>
                    <h1 className='text-white'>Boost your links today</h1>
                    <button className='btn btn-info rounded-pill'>Get Started</button>
                </div>
            </section>
        );
    }
}

export default Cta;