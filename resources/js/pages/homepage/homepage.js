/**
 * Created by Saikat on 22-Oct-20.
 */
import React,{Component} from 'react';
import logo from '../../img/happe_logo.png';
// import back from '../../img/rsz_happe_logo.png';


import Header from '../../components/header/header';
import {Link} from 'react-router-dom';
import {CardList} from '../../components/cardList/card-list'
import {Footer} from '../../components/footer/footer'
import FindEvent from "../../components/find_event/find-event";
import '../homepage/homepage.css'


export default class HomePage extends Component{

    constructor(){
        super();
        this.state = {
            events:[],
            searchField:''
        }
    }

    render() {
        return (
            <div>
                <header>
                    <Header />
                </header>
                <section>
                    <FindEvent/>
                </section>
                <section className="upcoming-event">
                    <div className="upcoming-bar">
                        <p>Up Coming Events</p>
                    </div>
                    <CardList />
                </section>
                <section className="weekly-event">
                    <div className="weekly-event-bar">
                        <p>Events This Week</p>
                    </div>
                    <CardList />
                </section>
                <section className="section-work">

                    <div className='triangle-left'>
                        <p>How It Works</p>
                    </div>
                    <div className='triangle-right'>
                        <img src={logo} alt=""/>
                    </div>
                    {/*<div>*/}
                        {/*<img src={logo} alt=""/>*/}
                    {/*</div>*/}
                </section>
                <footer >
                    <Footer />
                </footer>
            </div>
        )
    }
}
