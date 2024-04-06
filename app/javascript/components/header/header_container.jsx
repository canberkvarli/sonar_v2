import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { signup, login, logout } from '../../actions/session_actions';
import Header from './header'

const mSTP = ({ session, entities: { users }, errors, ui }) => (
    {
        currentUser: users[session.id],
        currentUserId: session.id,
        errors: errors.session,
        modal: ui.modal.props.open
    }
);

const mDTP = (dispatch) => ({
    signup: (user) => dispatch(signup(user)),
    login: (user) => dispatch(login(user)),
    logout: () => dispatch(logout()),
    openModal: (modal) => dispatch(openModal(modal))
});


export default connect(mSTP, mDTP)(Header);

