document.addEventListener("DOMContentLoaded", function () {
    const input = document.querySelector("input[type='text']");
    const submitBtn = document.querySelector("input[type='submit']");
    const resultDiv = document.getElementById("result");

    submitBtn.addEventListener("click", function () {
        const inputValue = input.value.trim();

        if (inputValue.length == 7) {
            resultDiv.textContent = "THALA FOR A REASON";
        } else if (!isNaN(inputValue) && /^\d+$/.test(inputValue)) {
            const sum = inputValue.split("").reduce((acc, digit) => acc + parseInt(digit), 0);
            resultDiv.textContent = sum === 7 ? "THALA FOR A REASON" : "Not a THALA";
        } else {
            resultDiv.textContent = "Not a THALA";
        }
    });
});
        