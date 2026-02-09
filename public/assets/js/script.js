async function searchWord() {

    const term = document.getElementById("searchTerm").value;

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

        document.getElementById("result").textContent =
            data.list[0].definition;

    } catch (error) {
        console.error(error);
    }
}
