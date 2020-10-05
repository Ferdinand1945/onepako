import React,{ useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { ACCESS_TOKEN_NAME, API_BASE_URL } from '../../constants/apiContants';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAddressCard, faBiking, faChartPie, faCog, faUser} from '@fortawesome/free-solid-svg-icons';
import {faDashcube} from "@fortawesome/free-brands-svg-icons";


function Home(props) {
    useEffect(() => {
        axios.get(API_BASE_URL+'/user/me', { headers: { 'token': localStorage.getItem(ACCESS_TOKEN_NAME) }})
            .then(function (response) {
                if(response.status !== 200){
                    redirectToLogin()
                }
            })
            .catch(function (error) {
                redirectToLogin()
            });
    })
    function redirectToLogin() {
        // props.history.push('/login');
    }
    return(
        <>
            <div className="row row-offcanvas row-offcanvas-left">
                <div className="col-md-3 col-lg-2 sidebar-offcanvas bg-light pl-0 text-left" id="sidebar" role="navigation">
                    <ul className="nav flex-column sticky-top pl-0 pt-5 mt-3">
                        <li className="nav-item"><a className="nav-link" href="/home"><FontAwesomeIcon icon={faDashcube} /> Dashboard</a></li>
                        <li className="nav-item"><a className="nav-link" href="/home"><FontAwesomeIcon icon={faUser} /> Users</a></li>
                        <li className="nav-item">
                            <a className="nav-link" href="/home" data-toggle="collapse"
                               data-target="#submenu1"><FontAwesomeIcon icon={faAddressCard} /> Customers▾</a>
                            <ul className="list-unstyled flex-column pl-3 collapse" id="submenu1"
                                aria-expanded="false">
                                <li className="nav-item"><a className="nav-link" href="/home">All Users</a></li>
                                <li className="nav-item"><a className="nav-link" href="/home">Add New</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/home" data-toggle="collapse"
                               data-target="#submenu2"><FontAwesomeIcon icon={faBiking} /> Courier▾</a>
                            <ul className="list-unstyled flex-column pl-3 collapse" id="submenu2"
                                aria-expanded="false">
                                <li className="nav-item"><a className="nav-link" href="/home">All Users</a></li>
                                <li className="nav-item"><a className="nav-link" href="/home">Add New</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/home" data-toggle="collapse"
                               data-target="#submenu3"><FontAwesomeIcon icon={faChartPie} /> Statics▾</a>
                            <ul className="list-unstyled flex-column pl-3 collapse" id="submenu3"
                                aria-expanded="false">
                                <li className="nav-item"><a className="nav-link" href="/home">Revenew</a></li>
                                <li className="nav-item"><a className="nav-link" href="/home">Transactions</a></li>
                                <li className="nav-item"><a className="nav-link" href="/home">Taxes</a></li>
                            </ul>
                        </li>
                        <li className="nav-item"><a className="nav-link" href="/home"><FontAwesomeIcon icon={faCog} /> Settings</a></li>
                    </ul>
                </div>

                <div className="col main pt-5 mt-3">

                    <div className="alert alert-warning fade collapse" role="alert" id="myAlert">
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">×</span>
                            <span className="sr-only">Close</span>
                        </button>
                        <strong>Holy guacamole!</strong> It's free.. this is an example theme.
                    </div>
                    <div className="row mb-3">
                        <div className="col-xl-3 col-sm-6 py-2">
                            <div className="card bg-success text-white h-100">
                                <div className="card-body bg-success">
                                    <div className="rotate">
                                        <i className="fa fa-user fa-4x"/>
                                    </div>
                                    <h6 className="text-uppercase">Users</h6>
                                    <h1 className="display-4">134</h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 py-2">
                            <div className="card text-white bg-danger h-100">
                                <div className="card-body bg-danger">
                                    <div className="rotate">
                                        <i className="fa fa-list fa-4x"/>
                                    </div>
                                    <h6 className="text-uppercase">Pick ups</h6>
                                    <h1 className="display-4">87</h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 py-2">
                            <div className="card text-white bg-info h-100">
                                <div className="card-body bg-info">
                                    <div className="rotate">
                                        <i className="fa fa-twitter fa-4x"/>
                                    </div>
                                    <h6 className="text-uppercase">Month</h6>
                                    <h1 className="display-4">125</h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 py-2">
                            <div className="card text-white bg-warning h-100">
                                <div className="card-body">
                                    <div className="rotate">
                                        <i className="fa fa-share fa-4x"/>
                                    </div>
                                    <h6 className="text-uppercase">Shares</h6>
                                    <h1 className="display-4">36</h1>
                                </div>
                            </div>
                        </div>
                    </div>


                    <hr/>
                    <div className="row placeholders mb-3">
                        <div className="col-6 col-sm-3 placeholder text-center">
                            <img src="//placehold.it/200/dddddd/fff?text=1"
                                 className="mx-auto img-fluid rounded-circle"
                                 alt="Generic placeholder thumbnail"/>
                            <h4>Responsive</h4>
                            <span className="text-muted">Device agnostic</span>
                        </div>
                        <div className="col-6 col-sm-3 placeholder text-center">
                            <img src="//placehold.it/200/e4e4e4/fff?text=2"
                                 className="mx-auto img-fluid rounded-circle"
                                 alt="Generic placeholder thumbnail"/>
                            <h4>Frontend</h4>
                            <span className="text-muted">UI / UX oriented</span>
                        </div>
                        <div className="col-6 col-sm-3 placeholder text-center">
                            <img src="//placehold.it/200/d6d6d6/fff?text=3"
                                 className="mx-auto img-fluid rounded-circle"
                                 alt="Generic placeholder thumbnail"/>
                            <h4>HTML5</h4>
                            <span className="text-muted">Standards-based</span>
                        </div>
                        <div className="col-6 col-sm-3 placeholder text-center">
                            <img src="//placehold.it/200/e0e0e0/fff?text=4"
                                 className="center-block img-fluid rounded-circle"
                                 alt="Generic placeholder thumbnail"/>
                            <h4>Framework</h4>
                            <span className="text-muted">CSS and JavaScript</span>
                        </div>
                    </div>

                    <hr/>
                    <p className="lead mt-5">
                        Are you ready for Bootstap 4? It's the 4th generation of this popular responsive
                        framework. Bootstrap 4 will include some interesting
                        new features such as flexbox, 5 grid sizes (now including xl), cards, `em` sizing,
                        CSS normalization (reboot) and larger font
                        sizes.
                    </p>
                    <div className="row my-4">
                        <div className="col-lg-3 col-md-4">
                            <div className="card">
                                <img className="card-img-top img-fluid"
                                     src="//placehold.it/740x180/bbb/fff?text=..." alt="1"/>
                                <div className="card-body">
                                    <h4 className="card-title">Layouts</h4>
                                    <p className="card-text">Flexbox provides simpler, more flexible
                                        layout options like vertical centering.</p>
                                    <a href="/home" className="btn btn-primary">Button</a>
                                </div>
                            </div>
                            <div className="card card-inverse bg-inverse mt-3">
                                <div className="card-body">
                                    <h3 className="card-title">Flexbox</h3>
                                    <p className="card-text">Flexbox is now the default, and Bootstrap 4
                                        supports SASS out of the box.</p>
                                    <a href="/home" className="btn btn-outline-secondary">Outline</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-8">
                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead className="thead-inverse">
                                    <tr>
                                        <th>#</th>
                                        <th>Label</th>
                                        <th>Header</th>
                                        <th>Column</th>
                                        <th>Data</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>1,001</td>
                                        <td>responsive</td>
                                        <td>bootstrap</td>
                                        <td>cards</td>
                                        <td>grid</td>
                                    </tr>
                                    <tr>
                                        <td>1,002</td>
                                        <td>rwd</td>
                                        <td>web designers</td>
                                        <td>theme</td>
                                        <td>responsive</td>
                                    </tr>
                                    <tr>
                                        <td>1,003</td>
                                        <td>free</td>
                                        <td>open-source</td>
                                        <td>download</td>
                                        <td>template</td>
                                    </tr>
                                    <tr>
                                        <td>1,003</td>
                                        <td>frontend</td>
                                        <td>developer</td>
                                        <td>coding</td>
                                        <td>card panel</td>
                                    </tr>
                                    <tr>
                                        <td>1,004</td>
                                        <td>migration</td>
                                        <td>bootstrap 4</td>
                                        <td>mobile-first</td>
                                        <td>design</td>
                                    </tr>
                                    <tr>
                                        <td>1,005</td>
                                        <td>navbar</td>
                                        <td>sticky</td>
                                        <td>jumbtron</td>
                                        <td>header</td>
                                    </tr>
                                    <tr>
                                        <td>1,006</td>
                                        <td>collapse</td>
                                        <td>affix</td>
                                        <td>submenu</td>
                                        <td>flexbox</td>
                                    </tr>
                                    <tr>
                                        <td>1,007</td>
                                        <td>layout</td>
                                        <td>examples</td>
                                        <td>themes</td>
                                        <td>grid</td>
                                    </tr>
                                    <tr>
                                        <td>1,008</td>
                                        <td>migration</td>
                                        <td>bootstrap 4</td>
                                        <td>flexbox</td>
                                        <td>design</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>



                    <hr />
                    <h2 className="sub-header mt-5">Use card decks for equal height rows of cards</h2>
                    <div className="mb-3">
                        <div className="card-deck">
                            <div className="card card-inverse card-success text-center">
                                <div className="card-body">
                                    <blockquote className="card-blockquote">
                                        <p>It's really good news that the new Bootstrap 4 now has
                                            support for CSS 3 flexbox.</p>
                                        <footer>Makes flexible layouts <cite
                                            title="Source Title">Faster</cite></footer>
                                    </blockquote>
                                </div>
                            </div>
                            <div className="card card-inverse card-danger text-center">
                                <div className="card-body">
                                    <blockquote className="card-blockquote">
                                        <p>The Bootstrap 3.x element that was called "Panel" before, is
                                            now called a "Card".</p>
                                        <footer>All of this makes more <cite
                                            title="Source Title">Sense</cite></footer>
                                    </blockquote>
                                </div>
                            </div>
                            <div className="card card-inverse card-warning text-center">
                                <div className="card-body">
                                    <blockquote className="card-blockquote">
                                        <p>There are also some interesting new text classes for
                                            uppercase and capitalize.</p>
                                        <footer>These handy utilities make it <cite
                                            title="Source Title">Easy</cite></footer>
                                    </blockquote>
                                </div>
                            </div>
                            <div className="card card-inverse card-info text-center">
                                <div className="card-body">
                                    <blockquote className="card-blockquote">
                                        <p>If you want to use cool icons in Bootstrap 4, you'll have to
                                            find your own such as Font Awesome or Ionicons.</p>
                                        <footer>The Glyphicons are not <cite
                                            title="Source Title">Included</cite></footer>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr/>
                    <h2 className="mt-5">Masonry-style grid columns</h2>
                    <h6>with Bootstrap 4 flexbox</h6>

                    <div className="card-columns mb-3">
                        <div className="card">
                            <img className="card-img-top img-fluid"
                                 src="//placehold.it/600x200/444/fff?text=..." alt="2"/>
                            <div className="card-body">
                                <h4 className="card-title">New XL Grid Tier</h4>
                                <p className="card-text">With screens getting smaller, Bootstrap
                                    4 introduces a new grid breakpoint with the col-xl-*
                                    classes. This extra tier extends the media query range all
                                    the way down to 576 px. Eventhough the new XL tier would
                                    make one think it’s been added to support extra large
                                    screens, it’s actually the opposite.</p>
                            </div>
                        </div>
                        <div className="card card-body">
                            <blockquote className="card-blockquote">
                                <p>Bootstrap 4 will be lighter and easier to customize.</p>
                                <footer>
                                    <small className="text-muted">
                                        Someone famous like <cite title="Source Title">Mark
                                        Otto</cite>
                                    </small>
                                </footer>
                            </blockquote>
                        </div>
                        <div className="card">
                            <img className="card-img-top img-fluid"
                                 src="//placehold.it/600x200/bbb/fff?text=..." alt="Card "/>
                            <div className="card-body">
                                <h4 className="card-title">Card title</h4>
                                <p className="card-text">This card has supporting text below as
                                    a natural lead-in to additional content.</p>
                                <p className="card-text"><small className="text-muted">Last
                                    updated 3 mins ago</small></p>
                            </div>
                        </div>
                        <div className="card card-body card-inverse card-primary text-center">
                            <blockquote className="card-blockquote">
                                <p>Create masonry or Pinterest-style card layouts in Bootstrap
                                    4.</p>
                                <footer>
                                    <small>
                                        Someone famous in <cite
                                        title="Source Title">Bootstrap</cite>
                                    </small>
                                </footer>
                            </blockquote>
                        </div>
                        <div className="card card-body text-center">
                            <h4 className="card-title">Clever heading</h4>
                            <p className="card-text">This card has supporting text below as a
                                natural lead-in to additional content.</p>
                            <p className="card-text"><small className="text-muted">Last updated 5
                                mins ago</small></p>
                        </div>
                        <div className="card">
                            <img className="card-img img-fluid"
                                 src="//placehold.it/600x200/777/fff?text=..." alt="Card 2"/>
                        </div>
                        <div className="card card-body text-right">
                            <blockquote className="card-blockquote">
                                <p>There are also some interesting new text classes to uppercase or
                                    capitalize.</p>
                                <footer>
                                    <small className="text-muted">
                                        Someone famous in <cite
                                        title="Source Title">Bootstrap</cite>
                                    </small>
                                </footer>
                            </blockquote>
                        </div>
                        <div className="card card-body">
                            <h4 className="card-title">Responsive</h4>
                            <p className="card-text">This is a wider card with supporting text below
                                as a natural lead-in to additional content. This card has even
                                longer content than the first to show that equal height action.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3
                                mins ago</small></p>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <ul className="list-unstyled">
                                    <li className="text-capitalize"><code
                                        className="text-lowercase">text-capitalize</code> Capitalize
                                        each word
                                    </li>
                                    <li className="text-uppercase"><code
                                        className="text-lowercase">text-uppercase</code> Uppercase
                                        text
                                    </li>
                                    <li className="text-success">
                                        <code>text-success</code> Contextual colors for text
                                    </li>
                                    <li><code>text-muted</code> <span className="text-muted">Lighten with muted</span>
                                    </li>
                                    <li><code>text-info</code> <span className="text-muted">Info text color</span>
                                    </li>
                                    <li><code>text-danger</code> <span className="text-muted">Danger text color</span>
                                    </li>
                                    <li><code>text-warning</code> <span className="text-muted">Warning text color</span>
                                    </li>
                                    <li><code>text-primary</code> <span className="text-primary">Primary text color</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="card card-body">
                            <h4 className="card-title">Heading</h4>
                            <p className="card-text">So now that you've seen some of what Bootstrap
                                4 has to offer, are you going to give it a try?</p>
                            <p className="card-text"><small className="text-muted">Last updated 12
                                mins ago</small></p>
                        </div>
                    </div>
                    <hr/>
                    <h2 className="sub-header mt-5">Interesting layouts and elements</h2>
                    <div className="row mb-3">
                        <div className="col-lg-6">

                            <div className="card mb-3">
                                <div className="card-header">
                                    Bye .well, .panel &amp; .thumbnail
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title">Replaced with .card</h4>
                                    <p className="card-text">All of these Bootstrap 3.x
                                        components have been dropped entirely for the new card
                                        component.</p>
                                    <button type="button"
                                            className="btn btn-secondary btn-lg">Large
                                    </button>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-6">

                            <ul className="nav nav-tabs" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" href="/home" role="tab"
                                       data-toggle="tab">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/home" role="tab"
                                       data-toggle="tab">Profile</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/home" role="tab"
                                       data-toggle="tab">Messages</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/home" role="tab"
                                       data-toggle="tab">Settings</a>
                                </li>
                            </ul>


                            <div className="tab-content">
                                <div role="tabpanel" className="tab-pane active" id="home1">
                                    <h4>Home</h4>
                                    <p>
                                        1. These Bootstrap 4 Tabs work basically the same as
                                        the Bootstrap 3.x tabs.
                                        <br/>
                                        <br/>
                                        <button className="btn btn-primary-outline btn-lg">Wow </button>
                                    </p>
                                </div>
                                <div role="tabpanel" className="tab-pane" id="profile1">
                                    <h4>Pro</h4>
                                    <p>
                                        2. Tabs are helpful to hide or collapse some
                                        addtional content.
                                    </p>
                                </div>
                                <div role="tabpanel" className="tab-pane" id="messages1">
                                    <h4>Messages</h4>
                                    <p>
                                        3. You can really put whatever you want into the tab
                                        pane.
                                    </p>
                                </div>
                                <div role="tabpanel" className="tab-pane" id="settings1">
                                    <h4>Settings</h4>
                                    <p>
                                        4. Some of the Bootstrap 3.x components like well
                                        and panel have been dropped for the new card
                                        component.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default withRouter(Home);