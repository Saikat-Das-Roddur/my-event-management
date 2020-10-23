/**
 * Created by Saikat on 22-Oct-20.
 */
import React,{Component} from 'react';
import './card.css';
import logo from '../../img/happe_logo.png';
export const Card = props =>{
    return(
        <div className = 'card-container'>

            <div className = 'card-div' >
                <div>
                    <div></div>
                    <p>Friday October 10 02:00 pm</p>
                </div>
            </div>
            {/*<img alt='monster' src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}/>*/}
            {/*<h2>{props.monster.name}</h2>*/}
            {/*<p>{props.monster.email}</p>*/}
        </div>
    )
}