import axios from 'axios'

// Template to build axios instances for connecting to different aibase systems 
// and other web apps & channels eg fb, linkedin, github, emails, APIs, etc
const instance = axios.create({
    baseURL: 'https://aibase.firebaseio.com'
})

instance.defaults.headers.common['SOMEAIBASE'] = 'someaibase'

export default instance