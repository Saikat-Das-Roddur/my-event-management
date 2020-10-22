/**
 * Created by Saikat on 22-Oct-20.
 */
/**
 * Created by Saikat on 22-Oct-20.
 */
import React from 'react';
const EventByDate =({placeholder,handlechange})=> (
    <div>
        <input
               type='search'
               placeholder = {placeholder}
               onChange = {handlechange}/>
        <i class="fas fa-calendar"></i>
    </div>

)

export default EventByDate;