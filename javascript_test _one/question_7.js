function normalCase(str) {
    let normalCaseStr = '';
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (char === char.toUpperCase()) {
            normalCaseStr += char.toLowerCase();
        } else {
            normalCaseStr += char.toUpperCase();
        }
    }
    return normalCaseStr;
}

// Example usage:
const inputString = "hEILo";
const normalString = normalCase(inputString);
console.log(normalString); // Output: "HeLIO"