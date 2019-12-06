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
        if (response.status !== 'unknown') {
            this.setState({
                auth: true,
                name: response.name,
                picture: response.picture.data.url
            })
        }   
    }

    render() {

        let facebookData
        this.state.auth ? facebookData = (
            <div>
                <img src={this.state.picture} alt={this.state.name} />
                <h2>Welcome {this.state.name}!</h2>
            </div>
        ) : facebookData = (
            <FacebookLogin
                appId="768969656910713"
                autoLoad={true}
                fields="name,picture,email"
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