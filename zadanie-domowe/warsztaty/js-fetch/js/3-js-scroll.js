const getData = () => {
    if (window.scrollY + window.innerHeight > document.body.offsetHeight) {

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {

                data.forEach(user => {
                    let containter = document.getElementById('containter');
                    containter.innerHTML += `
                        <span>User ID: ${user.id}</span>
                        <span>User Name: ${user.name}</span>
                        <span>Website: ${user.website}----------</span>
                    `
                });
            })
    }
}
window.addEventListener('scroll', getData);