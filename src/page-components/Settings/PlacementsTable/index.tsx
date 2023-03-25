import styles from './PlacementsTable.module.css'

const sites =['pornhub.com', 'mail.ru','beeg.com', 'mail.kz', 'zakon.kz','Ds.kz']

export const PlacementsTable = ()=>{
    return <section className='wrapper'>
                <header className={styles.Header}>
                    <button>
                        Placements
                    </button>
                    <button>
                        Blacklist
                    </button>
                    <button>
                        Whitelists
                    </button>
                </header>
        <div>
            <ul className={styles.List}>
                {sites.map(el=>{
                    return <li key={el}>{el}</li>
                })}
            </ul>
        </div>
    </section>
}
