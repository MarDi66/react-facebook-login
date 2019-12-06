import React from 'react'
import FacebookLogin from 'react-facebook-login'

export default class FacebookLoginBtn extends React.Component {
    state = {
        auth: false,
        name: '',
        picture: ''
    }

    componentClicked = () => {
        console.log('component click')
    }

    responseFacebook = (response) => {
        console.log(response)
    }

    render() {

        let facebookData
        this.state.auth ? facebookData = (
            <div>
                Hi!
            </div>
        ) : facebookData = (
            <FacebookLogin
                appId="768969656910713"
                autoLoad={true}
                fields="name,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook} 
            />
        )

        return (
            <>
                {facebookData}
            </>
        )
    }
}