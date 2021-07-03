import React, { ComponentType } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirectComponent } from '../../hoc/withAuthRedirect';
import { addMessageCreate, onMessageChangeCreate } from './../../Redux/dialogs-reducer'
import { Dialogs } from './Dialogs';


let mapStateToProps = (state: any) => {
    return{
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth,
    }
};

let mapDispatchToProps = (dispatch: any) => {
    return {
        // updateNewMessage: (message: any) => {
        //     dispatch(onMessageChangeCreate(message));
        // },
        addNewMessage: (newMessage: any) => {
            dispatch(addMessageCreate(newMessage))
        },
    }
};

export default compose <ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirectComponent
)(Dialogs);

// let AuthRedirect = withAuthRedirectComponent(Dialogs);

// export const DialogsContaner = connect(mapStateToProps, mapDispatchToProps) (AuthRedirect);

