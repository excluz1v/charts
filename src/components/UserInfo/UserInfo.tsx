import {LoginButton} from "../Login/Button";
import {RootState} from "../../infrastructure/redux/store";
import {loginRequest} from "../../infrastructure/modules/user/action";
import {connect, ConnectedProps} from "react-redux";

import styles from './UserInfo.module.css'

const UserInfo = ({user}) => {
    return <div className={styles.Auth}>
        {user && <>
            <span>
                {user.name}
            </span>
            <img src={user.picture} alt={user.name} className={styles.avatar} />
        </>}
        <LoginButton user={user} />
    </div>
}

const mapStateToProps = (state: RootState) => ({
    user: state.user.user
})
const mapDispatchToProps = ({
    getUsers: loginRequest
})

const connector = connect(mapStateToProps,mapDispatchToProps)
type PropsFromRedux = ConnectedProps<typeof connector>
export default connector(UserInfo)
