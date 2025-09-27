async function fetchData() {
    const response = await fetch('/api/data');
    const data = await response.json();
    const container = document.getElementById('data-container');
    container.innerHTML = JSON.stringify(data, null, 2);
}

fetchData();