document.addEventListener("DOMContentLoaded", () => {
    const getCountryInfoButton = document.getElementById("get-pais-info");

    getCountryInfoButton.addEventListener("click", () => {
        const PaisNombreInput = document.getElementById("pais-input").value;

        if (PaisNombreInput) {
            fetch(`https://restcountries.com/v3.1/name/${PaisNombreInput}?full=true`)
                .then((response) => response.json())
                .then((data) => {
                    if (data.length > 0) {
                        const countryData = data[0];
                        const paisNombre = countryData.name.common;
                        const paisCapital = countryData.capital[0];
                        const paisPoblacion = countryData.population;
                        const paisArea = countryData.area;

                        document.getElementById("pais-nombre").textContent = paisNombre;
                        document.getElementById("pais-capital").textContent = paisCapital;
                        document.getElementById("pais-poblacion").textContent = paisPoblacion;
                        document.getElementById("pais-area").textContent = paisArea;
                    } else {
                        alert("No se encontraron datos para ese país.");
                    }
                })
                .catch((error) => {
                    console.error("Error al obtener datos:", error);
                });
        } else {
            alert("Por favor, ingresa un nombre de país válido.");
        }
    });
});