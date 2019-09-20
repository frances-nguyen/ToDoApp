import Axios from 'axios'

class HelloworldService {

    executeHelloWorldService() {
        const username = 'user'
        const password = 'password'
        const basicAuthHeader = 'Basic ' + window.btoa(username + ':' + password)
        return Axios.get('http://localhost:8080/hello-world',
            {
                headers: {
                    authorization: basicAuthHeader
                }
            })
    }
}

export default new HelloworldService()