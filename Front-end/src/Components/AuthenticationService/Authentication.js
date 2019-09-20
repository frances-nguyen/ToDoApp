import Axios from "axios"

/* Register that a user has logged in */
class Authentication {

  /* Store the username in sessionStorage */
  registerSuccessfulLogin(username, password) {
    sessionStorage.setItem('authenticatedUser', username)
    this.setupAxiosInterceptors()
  }

  logOut() {
    sessionStorage.removeItem('authenticatedUser')
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser')
    if (user === null) {
      return false
    }
    return true
  }

  getUsername(){
    let username = sessionStorage.getItem('authenticatedUser')
    if(username === null){
      return ''
    }
    return username
  }

  setupAxiosInterceptors(){
    const username = 'user'
    const password = 'password'
    const basicAuthHeader = 'Basic ' + window.btoa(username + ':' + password)
    Axios.interceptors.request.use(
      (config) => {
        if(this.isUserLoggedIn()){
          config.headers.authorization = basicAuthHeader
        }
        return config
      }
    )
  }
}

export default new Authentication() // Export an instance of Authentication
