import React from 'react'
import FacebookLogin from 'react-facebook-login'

export default class FacebookLoginBtn extends React.Component {
    state = {
        auth: false,
        name: '',
        picture: ''
    }

    render() {

        let facebookData
        this.state.auth ? facebookData = (
            <div>
                Hi!
            </div>
        ) : facebookData = (
            <FacebookLogin
                appId="1088597931155576"
                autoLoad={true}
                fields="name,picture"
                onClick={componentClicked}
                callback={responseFacebook} 
            />
        )

        return (
            <>
                {facebookData}
            </>
        )
    }
}