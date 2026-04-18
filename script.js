let postUser = async () => {
    let img = document.querySelector('.img').value
    let names = document.querySelector('.name').value
    let Pasword = document.querySelector('.password').value
    let LastName = document.querySelector('.LastName').value
    let Login = document.querySelector('.login').value
    let title = document.querySelector('.title').value
    let usersPost = await fetch('http://localhost:3001/users', {
        method: 'POST',
        headers: { 'Content-Type': 'aplication/json' },
        body: JSON.stringify({
            img: img,
            name: names,
            password: Pasword,
            lastName: LastName,
            title: title,
            login: Login
        })
    })
}


let btn = document.querySelector('.buttons')
btn.addEventListener('click', () => {
    postUser()
})
