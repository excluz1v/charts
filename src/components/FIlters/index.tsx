import styles from "./Filter.module.css";

export const Filters = ()=>{
    return  <div className={styles.Filters}>
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
}
