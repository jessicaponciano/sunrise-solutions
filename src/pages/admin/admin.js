import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { signIn , signInWithGoogle } from '../../store/actions/authActions'
import { Samy } from 'react-samy-svg';
import Logo from '../../styles/images/logo_green.svg'


class admin extends Component {

    state = {  email:'',  password:''  }
  
    handleChange = (e) => {
      this.setState({
          [e.target.id]: e.target.value
      })
    }
  
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.signIn(this.state)
    }
    
    render() {
  
      const { auth } = this.props
      if(auth.uid) { return <Redirect to='/painel-administrador' /> }
      
      return (
        <div className='login'>
          <form onSubmit={this.handleSubmit}>
          
                  <Samy path={Logo}/>
                         
                  <input type='email' id='email' placeholder='email' onChange={this.handleChange}/>   
                  <input type='password' id='password' placeholder='senha' onChange={this.handleChange}/>

                  <button>Login</button>
                  <div className='recover'>Recuperar a minha senha</div>
                  
                  
          </form>
        </div>
      )
    }
  }
  
  const mapStateToProps = (state) => {
    return {
      authError: state.auth.authError,
      auth: state.firebase.auth
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      signIn: (creds) => dispatch(signIn(creds)),      
      signInWithGoogle: () => dispatch(signInWithGoogle())
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(admin)
  