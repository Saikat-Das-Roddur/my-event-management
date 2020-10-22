/**
 * Created by Saikat on 22-Oct-20.
 */
import React,{Component} from 'react';
import logo from '../../img/happe_logo.png';
import backImage from '../../img/happ_header.jpg'
import Search from '../../components/search/search';
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
                    <div>
                        <Link to="/"><img src={logo}/></Link>
                        <Search placeholder={'Search Events'}
                                handlechange={(e) => this.setState({searchField: e.target.value})}/>
                    </div>
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

                    </div>
                    <div className='triangle-right'>

                    </div>
                    <div>
                        <img src={logo} alt=""/>
                    </div>
                </section>
                <footer >
                    <Footer />
                </footer>
            </div>
        )
    }
}
