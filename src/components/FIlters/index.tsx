import React, { useState } from "react";
import DatePicker from "react-datepicker";
import styles from "./Filter.module.css";
import "react-datepicker/dist/react-datepicker.css";

export const Filters = ()=>{
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };
    return  <div className={styles.Filters}>
        <div>
            <DatePicker        selected={startDate}
                               onChange={onChange}
                               startDate={startDate}
                               endDate={endDate}
                               selectsRange
                                />
        </div>
        <label>
            <select defaultValue={''}>
                <option value="" disabled >Рекламодатель</option>
                <option value="apple">apple</option>
                <option value="yandex">yandex</option>
            </select>
        </label>
        <label>
            <select  defaultValue={''}>
                <option value="" disabled>Компания</option>
                <option value="apple">apple</option>
                <option value="yandex">yandex</option>
            </select>
        </label>
        <input placeholder='Поиск'/>
    </div>
}


