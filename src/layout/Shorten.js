import React from "react";

class Shorten extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: 'Shorten',
            error: null,
            value: '',
            items: [],
            btnClicked: '',
            linkStorage: JSON.parse(localStorage.getItem('data'))
        };
        
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    fetchAPI = () => {
        
        let param = this.state.value;

        fetch(`https://api.shrtco.de/v2/shorten?url=${param}`)
            .then(res => res.json())
            .then(
                (result) => {   
                    
                    // if localStorage 'data' is null make an empty array
                    if(localStorage.getItem('data') == null){
                        localStorage.setItem('data', '[]');
                    }
                    
                    // get localStorage 'data' as var old_data
                    var old_data = JSON.parse(localStorage.getItem('data'));

                    // if fetch is ok return localStorage 'data' push result
                    if (result.ok === true) {
                        old_data.push(result);
                    }
                    
                    // set localStorage 'data' to new data from push result
                    localStorage.setItem('data', JSON.stringify(old_data));

                    // set state items equal to result, linkStorage to localStorage 'data'
                    this.setState({
                        items: result,
                        linkStorage: JSON.parse(localStorage.getItem('data'))
                    })

                    // console.log(this.state.items, "fetch item"); 
                }
            )
            .catch(error => console.log('error', error));
    }

    render() {
        const { items, linkStorage } = this.state;
        // console.log(linkStorage, 'link storage');
        return (
            <section className='shorten'>
                <div className='container'>
                    <div className='card-form'>
                        <div className='row'>
                            <div className='col-sm-12 col-md-9 col-lg-10'>
                                <input type="text" className={`form-control ${items.ok === false ? 'border-danger' : ''}`} id="inputShorten" placeholder='Shorten a link here...' required value={this.state.value} onChange={this.handleChange} />
                            </div>
                            <div className='col-sm-12 col-md-3 col-lg-2'>
                                <button className='btn btn-info d-block w-100' onClick={this.fetchAPI}>Shorten It!</button>
                            </div>
                        </div>
                        {
                            // validation
                            items.ok === false ? <p className="validation text-danger">Please add a link</p> : ''
                        }
                    </div>
                    {
                        //if localStorage data is not null return map state linkStorage
                        localStorage.getItem('data') != null &&
                        linkStorage.reverse().slice(0, 3).map((item, index) => (
                            <div className='card card-link border-0' key={index}>
                                <div className='card-header'>
                                    <p>{item.result.original_link}</p>
                                </div>
                                <div className='card-body'>
                                    <p className='text-info me-0 me-sm-4'>{item.result.short_link}</p>
                                    <button className={`btn ${index === this.state.btnClicked ? 'btn-primary' : 'btn-info'}`} onClick={() => {
                                        navigator.clipboard.writeText(item.result.short_link);
                                        this.setState({
                                            btnClicked: index
                                        })
                                    }}>
                                        {index === this.state.btnClicked ? 'Copied!' : 'Copy'}
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        );
    }
}

export default Shorten;