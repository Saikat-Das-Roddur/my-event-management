/**
 * Created by Saikat on 22-Oct-20.
 */
/**
 * Created by Saikat on 22-Oct-20.
 */
import React from 'react';
import "./../../../../node_modules/react-day-picker/lib/style.css";
import DayPickerInput from "./../../../../node_modules/react-day-picker/DayPickerInput";
// import 'react-dates/lib/css/_datepicker.css';
// import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
const EventByDate =({placeholder,handlechange})=>(
    <div>
        <DayPickerInput/>
        <i class="fa fa-calendar" aria-hidden="true"></i>
    </div>

    )

export default EventByDate;