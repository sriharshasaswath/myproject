import React from 'react';
import './Dashboard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCalendarDays, faSearch } from '@fortawesome/free-solid-svg-icons';

export default class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <div className='full-container'>
                    <div className='main-container'>
                        <div>
                            <p className='main-heading'>My Inbox</p>
                            <div className='main'>
                                <p className='name'>Artwork Approval Process</p>
                                <p className='value'>17</p>
                                <div>
                                    <div className='main'>
                                        <p className='name'>OnTime</p>
                                        <p className='time'>0</p>
                                    </div>
                                    <div className='main'>
                                        <p className='name'>Delayed</p>
                                        <p className='delay'>17</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div>
                            <div className='main'>
                                <p className='name'>Project Initiation Process</p>
                                <p className='value'>03</p>
                                <div>
                                    <div className='main'>
                                        <p className='name'>OnTime</p>
                                        <p className='time'>1</p>
                                    </div>
                                    <div className='main'>
                                        <p className='name'>Delayed</p>
                                        <p className='delay'>2</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='main-container'>
                        <div>
                            <p className='main-heading'>Initiated Projects</p>
                            <div className='main'>
                                <p className='name'>Artwork Approval Process</p>
                                <p className='value'>38</p>
                                <div>
                                    <div className='main'>
                                        <p className='name'>OnTime</p>
                                        <p className='time'>08</p>
                                    </div>
                                    <div className='main'>
                                        <p className='name'>Delayed</p>
                                        <p className='delay'>30</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div>
                            <div className='main'>
                                <p className='name'>Project Initiation Process</p>
                                <p className='value'>31</p>
                                <div>
                                    <div className='main'>
                                        <p className='name'>OnTime</p>
                                        <p className='time'>26</p>
                                    </div>
                                    <div className='main'>
                                        <p className='name'>Delayed</p>
                                        <p className='delay'>05</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='main-container'>
                        <div>
                            <p className='main-heading'>All Projects</p>
                            <div className='main'>
                                <p className='name'>Project Initiation Process</p>
                                <p className='value'>38</p>
                                <div>
                                    <div className='main'>
                                        <p className='name'>OnTime</p>
                                        <p className='time'>28</p>
                                    </div>
                                    <div className='main'>
                                        <p className='name'>Delayed</p>
                                        <p className='delay'>10</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div>
                            <div className='main'>
                                <p className='name'>Artwork Approval Process</p>
                                <p className='value'>38</p>
                                <div>
                                    <div className='main'>
                                        <p className='name'>OnTime</p>
                                        <p className='time'>8</p>
                                    </div>
                                    <div className='main'>
                                        <p className='name'>Delayed</p>
                                        <p className='delay'>30</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='inbox-container'>
                        <p className='inbox-name'>My Inbox (Artwork Approval Process)</p>
                        <div className='search-box-container'>
                            <div>
                                <input
                                    placeholder="Filter items...."
                                    type="search"
                                    style={{ outline: 'none' }}
                                />
                                <button
                                    type="button"
                                    testid="searchButton"
                                    style={{ backgroundColor: 'white', border: '1px solid black', borderLeft: '0',paddingTop: '2px' }}
                                >
                                    <FontAwesomeIcon icon={faSearch} style={{ fontSize: '1em', backgroundColor: 'white' }} />
                                </button>
                            </div>
                            <FontAwesomeIcon icon={faBars} style={{ fontSize: '1em', marginRight: '10px', marginLeft: '10px' }} />
                            <FontAwesomeIcon icon={faCalendarDays} style={{ fontSize: '1em', marginRight: '10px' }} />
                        </div>
                    </div>
                    <div className='component-container'>
                        <p className='comp-element'>Component<img src='https://manageartworks.com/wp-content/uploads/2017/09/highres-ma.png' className='img' alt='img'/></p>

                        <div className='comp-element'>
                            <p>Category</p>
                            <p>Demo</p>
                        </div>
                        <div className='comp-element'>
                            <p>brand</p>
                            <p>jstland</p>
                        </div>
                        <div className='comp-element'>
                            <p>Product Name</p>
                            <p>jstland2</p>
                        </div>
                        <div className='comp-element'>
                            <p>pack size</p>
                            <p>100ml</p>
                        </div>
                        <div className='comp-element'>
                            <p>Component Type</p>
                            <p>Label back</p>
                        </div>
                        <FontAwesomeIcon icon={faBars} style={{ fontSize: '1em', marginLeft: '80px' }} />
                    </div>
                    <hr style={{ margin: '0'}}/>
                    <div className='progress-box-container'>
                        <p className='main-progress'>In progress</p>
                        <p className='progress'>Task due 37+ day(s) ago</p>
                    </div>
                </div>
                <div>
                    <div className='component-container'>
                        <p className='comp-element'>Component<img src='https://manageartworks.com/wp-content/uploads/2017/09/highres-ma.png' className='img' alt='img'/></p>
                        <div className='comp-element'>
                            <p>Category</p>
                            <p>Demo</p>
                        </div>
                        <div className='comp-element'>
                            <p>brand</p>
                            <p>jstland</p>
                        </div>
                        <div className='comp-element'>
                            <p>Product Name</p>
                            <p>jstland2</p>
                        </div>
                        <div className='comp-element'>
                            <p>pack size</p>
                            <p>100ml</p>
                        </div>
                        <div className='comp-element'>
                            <p>Component Type</p>
                            <p>Label back</p>
                        </div>
                        <FontAwesomeIcon icon={faBars} style={{ fontSize: '1em', marginLeft: '80px' }} />
                    </div>
                    <hr style={{ margin: '0'}}/>
                    <div className='progress-box-container'>
                        <p className='main-progress'>In progress</p>
                        <p className='progress'>Task due 37+ day(s) ago</p>
                    </div>
                </div>
                <div>
                    <div className='component-container'>
                        <p className='comp-element'>Component<img src='https://manageartworks.com/wp-content/uploads/2017/09/highres-ma.png' className='img' alt='img'/></p>
                        <div className='comp-element'>
                            <p>Category</p>
                            <p>Demo</p>
                        </div>
                        <div className='comp-element'>
                            <p>brand</p>
                            <p>jstland</p>
                        </div>
                        <div className='comp-element'>
                            <p>Product Name</p>
                            <p>jstland2</p>
                        </div>
                        <div className='comp-element'>
                            <p>pack size</p>
                            <p>100ml</p>
                        </div>
                        <div className='comp-element'>
                            <p>Component Type</p>
                            <p>Label back</p>
                        </div>
                        <FontAwesomeIcon icon={faBars} style={{ fontSize: '1em', marginLeft: '80px' }} />
                    </div>
                    <hr style={{ margin: '0'}}/>
                    <div className='progress-box-container'>
                        <p className='main-progress'>In progress</p>
                        <p className='progress'>Task due 37+ day(s) ago</p>
                    </div>
                </div>
            </div>

        );
    };
}