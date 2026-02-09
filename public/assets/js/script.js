async function searchWord() {

    const term = document.getElementById("searchTerm").value;
    const resultElement = document.getElementById("result");

    const url = `https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${term}`;

    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-host': 'mashape-community-urban-dictionary.p.rapidapi.com',
            'x-rapidapi-key': 'e51e798956msh121093de888ea70p19a428jsn48c07b5a98a4'
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();

        resultElement.innerHTML = "";

        if (data.list.length === 0) {
            resultElement.textContent = "No definition found.";
        } else {

            for (let i = 0; i < 3 && i < data.list.length; i++) {

                resultElement.innerHTML += `
                    <p>
                        <strong>${i + 1}.</strong>
                        ${data.list[i].definition}
                    </p>
                `;
            }
        }

    } catch (error) {
        console.error(error);
    }
}

document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("searchTerm")
    .addEventListener("keydown", function(e) {
        if (e.key === "Enter") {
            searchWord();
        }
    });

});