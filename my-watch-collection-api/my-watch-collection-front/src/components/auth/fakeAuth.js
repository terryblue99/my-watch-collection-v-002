const fakeAuth = {
  isAuthenticated:false,  // set to false for LogIn.js & SignUp.js to work properly!
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100) //fake async
  }
}

export default fakeAuth