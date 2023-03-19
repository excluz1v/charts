import {LineGraph} from "../../components/LineGraph";
import styles from './Home.module.css'

export const Home = ()=>{
    return <section  className='container'>
        <h1>Overview</h1>
        <div className={styles.Filters}>
            <label>
                <select>
                    <option value="" disabled selected>Выбор дат (от:до)</option>
                    <option value="hurr">тут будет выбор даты</option>
                </select>
            </label>
            <label>
                <select>
                    <option value="" disabled selected>Рекламодатель</option>
                    <option value="apple">apple</option>
                    <option value="yandex">yandex</option>
                </select>
            </label>
            <label>
                <select>
                    <option value="" disabled selected>Компания</option>
                    <option value="apple">apple</option>
                    <option value="yandex">yandex</option>
                </select>
            </label>
            <input placeholder='Поиск'/>
        </div>
        <LineGraph />


    </section>
}
