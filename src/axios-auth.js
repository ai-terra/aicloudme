import axios from 'axios'

// Template to build axios instances for connecting to different aibase systems 
// and other web apps & channels eg fb, linkedin, github, emails, APIs, etc
const instance = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1'
})

// To be used for configuring axios connectivity to any other REST servers as needed
// instance.defaults.headers.common['SOMEAIBASE'] = 'someaibase'

export default instance