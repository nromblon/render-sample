// FRONTEND JS file for Users Page
document.addEventListener("DOMContentLoaded", () => {

    const submitBtn = document.querySelector("#createUser");

    submitBtn?.addEventListener("click", (e) => {
        e.preventDefault();
        const myForm = new FormData(document.forms.createUserForm);
        let formObj = {};
        for (let data of myForm) {
            formObj[data[0]] = data[1];
        }
        
        const jsonFormObj = JSON.stringify(formObj);
        console.log(jsonFormObj);
        // Fetch API
        fetch("/createUser", {
            method: "POST",
            body: jsonFormObj,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            console.log(`Server responded: ${res}`);
            if (res.status === 200) {
                const usersList = document.querySelector("#usersList");
                usersList.innerHTML += `<li> Username: ${formObj['username']} || Color: ${formObj['favColor']} </li>`;
            }
        }).catch(err => {
            console.error(err);
        });
    });
});