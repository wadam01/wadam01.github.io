$(() => {
    let clicked = false;
    const getData = () => {
        $.getJSON('https://jsonplaceholder.typicode.com/users/1', response => {
            const paragraph = $('<p></p>');

        paragraph.html(`
            <span>User ID: ${response.id}</span>
            <span>User Name: ${response.name}</span>
            <span>Website: ${response.website}</span>
        `) 
        $('#button').after(paragraph);
        });
        
    }
    $('#button').click(() => {
        if (!clicked) {
            getData();
            clicked = true;
        } else {
            return;
        }
        
    })
})