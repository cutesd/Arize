import React, { Component } from 'react';
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import AuthService from '../../components/AuthService';
import './Welcome.css';

let lastScrollY = 0;

class Welcome extends Component {

    constructor() {
        super();
        this.Auth = new AuthService
    }

    state = {
        classes: "is-preload",
        headclass: "alt"
    }

    componentDidMount() {
        if (this.Auth.loggedIn()) {
            this.props.history.replace('/');
            return;
        }

        setTimeout(function () {
            this.setState({ classes: "" });
        }
            .bind(this), 100);
        Events.scrollEvent.register('begin', function (to, element) {
            console.log("begin", arguments);
        });

        Events.scrollEvent.register('end', function (to, element) {
            console.log("end", arguments);
        });

        scrollSpy.update();
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
        window.removeEventListener('scroll', this.handleScroll);
    }

    scrollTo = () => {
        scroll.scrollTo(100);
    }

    scrollToTop = () => {
        scroll.scrollToTop();
    }

    handleScroll = () => {
        lastScrollY = window.scrollY;
        if (lastScrollY > 500) {
            this.setState({ headclass: "title" });
        } else {
            this.setState({ headclass: "alt" });
        }
    }

    menuOpen = evt => {
        evt.preventDefault();
        this.setState({ classes: "is-menu-visible" });
    }

    menuClose = evt => {
        evt.preventDefault();
        this.setState({ classes: "" });
    }

    render() {
        return (
            <div className={`landing ${this.state.classes}`}>

                {/* <!-- Page Wrapper --> */}
                <div id="page-wrapper">

                    {/* <!-- Header --> */}
                    <header id="header" className={this.state.headclass}>
                        <h1><a onClick={this.scrollToTop}>Spectral</a></h1>
                        <nav id="nav">
                            <ul>
                                <li className="special">
                                    <a className="menuToggle" onClick={this.menuOpen}><span>Menu</span></a>
                                    <div id="menu">
                                        <a className="close" onClick={this.menuClose}></a>
                                        <ul>
                                            <li><a href="index.html">Home</a></li>
                                            <li><a href="generic.html">Generic</a></li>
                                            <li><a href="elements.html">Elements</a></li>
                                            <li><a href="#">Sign Up</a></li>
                                            <li><a href="#">Log In</a></li>
                                        </ul>

                                    </div>
                                </li>
                            </ul>
                        </nav>
                    </header>

                    {/* <!-- Banner --> */}
                    <section id="banner">
                        <div className="inner">
                            <h2>Spectral</h2>
                            <p>Another fine responsive<br />
                                site template freebie<br />
                                crafted by <a href="http://html5up.net">HTML5 UP</a>.</p>
                            <ul className="actions special">
                                <li><a href="#" className="button primary">Activate</a></li>
                            </ul>
                        </div>
                        <Link to="one" spy={true} smooth={"easeInOutCubic"} duration={1500}>
                            <a className="more">Learn More</a>
                        </Link>

                    </section>

                    {/* <!-- One --> */}
                    <section id="one" className="wrapper style1 special">
                        <div className="inner">
                            <header className="major">
                                <h2>Arcu aliquet vel lobortis ata nisl<br />
                                    eget augue amet aliquet nisl cep donec</h2>
                                <p>Aliquam ut ex ut augue consectetur interdum. Donec amet imperdiet eleifend<br />
                                    fringilla tincidunt. Nullam dui leo Aenean mi ligula, rhoncus ullamcorper.</p>
                            </header>
                            <ul className="icons major">
                                <li><span className="icon fa-diamond major style1"><span className="label">Lorem</span></span></li>
                                <li><span className="icon fa-heart-o major style2"><span className="label">Ipsum</span></span></li>
                                <li><span className="icon fa-code major style3"><span className="label">Dolor</span></span></li>
                            </ul>
                        </div>
                    </section>

                    {/* <!-- Two --> */}
                    <section id="two" className="wrapper alt style2">
                        <section className="spotlight">
                            <div className="image"><img src="/assets/images/pic01.jpg" alt="" /></div><div className="content">
                                <h2>Magna primis lobortis<br />
                                    sed ullamcorper</h2>
                                <p>Aliquam ut ex ut augue consectetur interdum. Donec hendrerit imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.</p>
                            </div>
                        </section>
                        <section className="spotlight">
                            <div className="image"><img src="/assets/images/pic02.jpg" alt="" /></div><div className="content">
                                <h2>Tortor dolore feugiat<br />
                                    elementum magna</h2>
                                <p>Aliquam ut ex ut augue consectetur interdum. Donec hendrerit imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.</p>
                            </div>
                        </section>
                        <section className="spotlight">
                            <div className="image"><img src="/assets/images/pic03.jpg" alt="" /></div><div className="content">
                                <h2>Augue eleifend aliquet<br />
                                    sed condimentum</h2>
                                <p>Aliquam ut ex ut augue consectetur interdum. Donec hendrerit imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.</p>
                            </div>
                        </section>
                    </section>

                    {/* <!-- Three --> */}
                    <section id="three" className="wrapper style3 special">
                        <div className="inner">
                            <header className="major">
                                <h2>Accumsan mus tortor nunc aliquet</h2>
                                <p>Aliquam ut ex ut augue consectetur interdum. Donec amet imperdiet eleifend<br />
                                    fringilla tincidunt. Nullam dui leo Aenean mi ligula, rhoncus ullamcorper.</p>
                            </header>
                            <ul className="features">
                                <li className="icon fa-paper-plane-o">
                                    <h3>Arcu accumsan</h3>
                                    <p>Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem tincidunt nullam amet leo Aenean ligula consequat consequat.</p>
                                </li>
                                <li className="icon fa-laptop">
                                    <h3>Ac Augue Eget</h3>
                                    <p>Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem tincidunt nullam amet leo Aenean ligula consequat consequat.</p>
                                </li>
                                <li className="icon fa-code">
                                    <h3>Mus Scelerisque</h3>
                                    <p>Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem tincidunt nullam amet leo Aenean ligula consequat consequat.</p>
                                </li>
                                <li className="icon fa-headphones">
                                    <h3>Mauris Imperdiet</h3>
                                    <p>Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem tincidunt nullam amet leo Aenean ligula consequat consequat.</p>
                                </li>
                                <li className="icon fa-heart-o">
                                    <h3>Aenean Primis</h3>
                                    <p>Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem tincidunt nullam amet leo Aenean ligula consequat consequat.</p>
                                </li>
                                <li className="icon fa-flag-o">
                                    <h3>Tortor Ut</h3>
                                    <p>Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem tincidunt nullam amet leo Aenean ligula consequat consequat.</p>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* <!-- CTA --> */}
                    <section id="cta" className="wrapper style4">
                        <div className="inner">
                            <header>
                                <h2>Arcue ut vel commodo</h2>
                                <p>Aliquam ut ex ut augue consectetur interdum endrerit imperdiet amet eleifend fringilla.</p>
                            </header>
                            <ul className="actions stacked">
                                <li><a href="#" className="button fit primary">Activate</a></li>
                                <li><a href="#" className="button fit">Learn More</a></li>
                            </ul>
                        </div>
                    </section>


                    <footer id="footer">
                        <ul className="icons">
                            <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                            <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
                            <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
                            <li><a href="#" className="icon fa-dribbble"><span className="label">Dribbble</span></a></li>
                            <li><a href="#" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
                        </ul>
                        <ul className="copyright">
                            <li>&copy; Untitled</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                        </ul>
                    </footer>

                </div>
            </div>
        );
    }

}

export default Welcome;
