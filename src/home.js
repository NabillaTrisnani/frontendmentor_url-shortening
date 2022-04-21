import React from 'react';

const link = [
{
    "ok": true,
    "result": {
    "code": "V2MYHV",
    "short_link": "shrtco.de/V2MYHV",
    "full_short_link": "https://shrtco.de/V2MYHV",
    "short_link2": "9qr.de/V2MYHV",
    "full_short_link2": "https://9qr.de/V2MYHV",
    "short_link3": "shiny.link/V2MYHV",
    "full_short_link3": "https://shiny.link/V2MYHV",
    "share_link": "shrtco.de/share/V2MYHV",
    "full_share_link": "https://shrtco.de/share/V2MYHV",
    "original_link": "http://example.org/very/long/link.html"
    }
},
{
    "ok": true,
    "result": {
        "code": "LKjQra",
        "short_link": "shrtco.de/LKjQra",
        "full_short_link": "https://shrtco.de/LKjQra",
        "short_link2": "9qr.de/LKjQra",
        "full_short_link2": "https://9qr.de/LKjQra",
        "short_link3": "shiny.link/LKjQra",
        "full_short_link3": "https://shiny.link/LKjQra",
        "share_link": "shrtco.de/share/LKjQra",
        "full_share_link": "https://shrtco.de/share/LKjQra",
        "original_link": "https://reactjs.org/docs/lists-and-keys.html"
    }
},
{
    "ok": true,
    "result": {
        "code": "qFeb1D",
        "short_link": "shrtco.de/qFeb1D",
        "full_short_link": "https://shrtco.de/qFeb1D",
        "short_link2": "9qr.de/qFeb1D",
        "full_short_link2": "https://9qr.de/qFeb1D",
        "short_link3": "shiny.link/qFeb1D",
        "full_short_link3": "https://shiny.link/qFeb1D",
        "share_link": "shrtco.de/share/qFeb1D",
        "full_share_link": "https://shrtco.de/share/qFeb1D",
        "original_link": "https://www.google.com/search?q=react loop object&oq=react loop&aqs=chrome.0.0i512j69i57j0i512l8.7557j0j15&sourceid=chrome&ie=UTF-8"
    }
}
]
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: 'Home'
         };
    }
    render() {
        return (
            <div className="App">
            <section className='hero'>
                <div className='container'>          
                <div className='row align-items-end align-items-md-center'>
                    <div className='col-md-6 d-block d-md-none'>
                    <img src={require('./assets/img/illustration-working.svg').default} alt="" />
                    </div>
                    <div className='col-md-6'>
                    <h1 className='mb-1'>More than just shorter links</h1>
                    <p className='mb-4'>Build your brand's recognition and get detailed insights on how your links are performing.</p>
                    <button className='btn btn-info rounded-pill d-block mx-auto mx-md-0'>Get Started</button>
                    </div>
                </div>
                </div>
            </section>
            <section className='shorten'>
                <div className='container'>
                <div className='card-form'>
                    <div className='row'>
                    <div className='col-sm-9 col-md-9 col-lg-10'>
                        <input type="text" className="form-control" id="inputShorten" placeholder='Shorten a link here...' required />
                    </div>
                    <div className='col-sm-3 col-md-3 col-lg-2'>
                        <button className='btn btn-info d-block w-100'>Shorten It!</button>
                    </div>
                    </div>
                </div>
                {
                    link.result.map((link) => {
                    return (
                        <div className='card card-link border-0' key={link.code}>
                        <div className='card-header'>
                            <p>{link.original_link}</p>
                        </div>
                        <div className='card-body'>
                            <p className='text-info me-0 me-sm-4'>{link.full_short_link}</p>
                            <button className='btn btn-info'>Copy</button>
                        </div>
                        </div>
                    )
                    })
                }
                {/* <div className='card card-link border-0'>
                    <div className='card-header'>
                    <p>qwertyuiopasdfghjkl</p>
                    </div>
                    <div className='card-body'>
                    <p className='text-info me-0 me-sm-4'>tes copy</p>
                    <button className='btn btn-info'>Copy</button>
                    </div>
                </div>
                <div className='card card-link border-0'>
                    <div className='card-header'>
                    <p>qwertyuiopasdfghjkl</p>
                    </div>
                    <div className='card-body'>
                    <p className='text-info me-0 me-sm-4'>tes copy</p>
                    <button className='btn btn-info'>Copy</button>
                    </div>
                </div>
                <div className='card card-link border-0'>
                    <div className='card-header'>
                    <p>qwertyuiopasdfghjkl</p>
                    </div>
                    <div className='card-body'>
                    <p className='text-info me-0 me-sm-4'>tes copy</p>
                    <button className='btn btn-info'>Copy</button>
                    </div>
                </div> */}
                </div>
            </section>
            <section className='statistic'>
                <div className='container'>
                <h3 className='text-center mb-4'>Advanced Statistics</h3>
                <p className='text-center'>Track how your links are performing across the web with our <br />
        advanced statistics dashboard.</p>
                <div className='row justify-content-center'>
                    <div className='col-md-6 col-lg-4 d-flex align-items-start'>
                    <div className='card'>
                        <div className='icon'>
                        <img src={require('./assets/img/icon-brand-recognition.svg').default} alt="icon-brand-recognition" />
                        </div>
                        <h4>Brand Recognition</h4>
                        <p className='mb-0'>Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</p>
                    </div>
                    </div>
                    <div className='col-md-6 col-lg-4 position-relative'>
                    <div className='card card-middle'>
                        <div className='icon'>
                        <img src={require('./assets/img/icon-detailed-records.svg').default} alt="icon-detailed-records" />
                        </div>
                        <h4>Detailed Records</h4>
                        <p className='mb-0'>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
                    </div>
                    <hr />
                    </div>
                    <div className='col-md-6 col-lg-4 d-flex align-items-end'>
                    <div className='card'>
                        <div className='icon'>
                        <img src={require('./assets/img/icon-fully-customizable.svg').default} alt="icon-fully-customizable" />
                        </div>
                        <h4>Fully Customizable</h4>
                        <p className='mb-0'>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            <section className='cta'>
                <div className='container'>
                <h1 className='text-white'>Boost your links today</h1>
                <button className='btn btn-info rounded-pill'>Get Started</button>
                </div>
            </section>
            <div className="attribution">
                <div className='container'>
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer">Frontend Mentor</a>.  Coded by <a href="https://github.com/NabillaTrisnani" target="_blank" rel="noopener noreferrer">Nabilla Trisnani</a>.
                </div>
            </div>
            </div>            
        );
    }
}

export default Home;