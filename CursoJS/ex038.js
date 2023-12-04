const loginUser = (email, password) => {
    return new Promise((resolve, reject) => {
      const error = false
  
      if (error) {
        reject(new Error("error in login!"))
      }
  
      console.log("user logged!")
      resolve({ email })
    })
}
const displayUser = async () => {
    const user = await loginUser("felipe@gmail.com", "1234567")
    console.log({user})
}
displayUser()
//loginUser("felipe@gmail.com", "1234567")
//.then((user) => console.log({user}))
//.catch((error) => console.log({ error }))