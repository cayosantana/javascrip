const loginUser = (email, password, callback, onError) => {
    setTimeout(() => {
        const error = true

        if (error) {
            return onError( new Error('Error in Login!'))
        }

        console.log('User Logged!')
        callback({email})
    }, 1500)

    console.log('After SetTimeout!')
}
const valueUser = loginUser('cayo.santana@gmail.com', '123456', (User) => {
    console.log({User})
}, (Error) => {
    console.log({Error})
})

//console.log({valueUser})