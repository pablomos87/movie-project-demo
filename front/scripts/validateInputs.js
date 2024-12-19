function validateInputs() {
    const inputs = document.querySelectorAll('input');
    const isAnyFieldEmpty = [...inputs].some(input => input.value.trim() === '');

    if (isAnyFieldEmpty) {
        alert("Por favor, completa todos los campos.");
        return false;
    };
    const yearInput = document.getElementById('inputYear');
    if (yearInput && !/^\d{4}$/.test(yearInput.value)) {
        alert("El año debe ser un número de 4 cifras.");
        return false;
    };
    const rateInput = document.getElementById('inputRate')
    if (rateInput && (rateInput.value < 0 || rateInput.value > 10)) {
        alert("El puntaje de la película debe estar entre 0 y 10.");
        return false;
    };
    const minutesDurationInput = document.getElementById('inputDurationMinutes')
    if (minutesDurationInput && (minutesDurationInput.value >= 60 || minutesDurationInput.value < 0)) {
        alert("En el casillero de minutos el número debe ser menor de 60 y no puede ser negativo.");
        return false;
    };
    const hoursDurationInput = document.getElementById('inputDurationHours')
    if (hoursDurationInput.value < 0) {
        alert("En el casillero de horas el número no puede ser negativo.");
        return false;
    };

    return true;
};

module.exports = { 
    validateInputs 
};