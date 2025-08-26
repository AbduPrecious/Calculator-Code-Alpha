const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.getAttribute("data-value");

        if (button.id === "clear") {
            display.value = "";
        } else if (button.id === "equals") {
            try {
                // eval calculates the expression in display.value
                display.value = eval(display.value);
            } catch {
                display.value = "Error";
            }
        } else if (value) {
            display.value += value;
        }
    });
});
