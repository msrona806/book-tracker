import Api from '@/services/Api'

// email and passoword will be passed to post method. Post request will got to register endpoint using credentials.
export default {
  register (credentials) {
    return Api().post('register', credentials)
  }
};

// AuthenticationServices.register({
//   email: 'testing@gmail.com',
//   password: '123456'
// })
