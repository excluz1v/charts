import styles from './Footer.module.css'

export const Footer = ()=>{
    return <footer className={styles.Footer}>
        <div className={styles.Footer__export}>
            <button className={styles.Export__button}>Экспорт в CSV</button>
            <button className={styles.Export__button}>Экспорт в PDF</button>
            <p>support@hitarget.ai</p>
        </div>
      <div className={styles.Footer__contacts}>
          <div className={styles.Footer__row}>
              <p>© 2020 Hitarget inc. Made with LOVE in Almaty.</p>
              <a>Terms of services</a>
              <a>Privacy policy</a>
          </div>
          <div className={styles.Footer__row}>
              <p>Адрес: г.Алматы, 050000, ул. Тимирязева 42к15/1Б, офис 313</p>
              <a>+7 705 7401880</a>
          </div>
      </div>
    </footer>
}
