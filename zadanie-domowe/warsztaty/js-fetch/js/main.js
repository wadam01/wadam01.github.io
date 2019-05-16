const getData = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())
    .then(response => {

        const user = response;

        // moje rozwiazanie

        // const createId = document.createElement('p');
        // const createName = document.createElement('p');
        // const createWebsite = document.createElement('p');

        // const getId = response.id;
        // const getName = response.name;
        // const getWebsite = response.website;

        // createId.innerHTML = `User ID: ${getId}`;
        // createName.innerHTML = `User Name: ${getName}`;
        // createWebsite.innerHTML = `User URL: ${getWebsite}`;

        // document.body.appendChild(createId);
        // document.body.appendChild(createName);
        // document.body.appendChild(createWebsite);

        // DRUGI SPOSOB
        const paragraph = document.createElement('p');

        paragraph.innerHTML = `
            <span>User ID: ${user.id}</span>
            <span>User Name: ${user.name}</span>
            <span>Website: ${user.website}</span>
        `;

        const btn = document.getElementById('button');

        btn.insertAdjacentElement('afterend', paragraph);

        // TRZECI SPOSOB
        // const userKeys = Object.keys(user);
        // userKeys.forEach(key => {
        //     const para = document.createElement('p');

        //     if (typeof user[key] === 'string') {
        //         para.innerHTML = `
        //         ${key.toUpperCase()} : ${user[key]}
        //     `;
        //     btn.insertAdjacentElement('afterend', para);
        //     }

        // })



    } 
)}

// wersja z addEventListener
// const btn = document.getElementById('button');
// button.addEventListener('click', getData);