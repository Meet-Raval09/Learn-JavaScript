let main = document.querySelector('.main');

document.querySelector('.get-info').addEventListener('click', function () {

    let xhr = new XMLHttpRequest();
    let Data_Url = "https://api.github.com/users/hiteshchoudhary";

    xhr.open('GET', Data_Url);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {

            let data = JSON.parse(xhr.responseText);

            main.innerHTML = `
                <div class="card" style="
                    width:250px;
                    padding:15px;
                    background:#f5f5f5;
                    border-radius:10px;
                    text-align:center;
                    border:1px solid #ccc;
                ">
                    <img src="${data.avatar_url}" style="
                        width:120px;
                        height:120px;
                        border-radius:50%;
                        margin-bottom:10px;
                    ">

                    <h2>${data.name}</h2>
                    <p>${data.bio}</p>
                </div>
            `;
        }
    };

    xhr.send();
});
