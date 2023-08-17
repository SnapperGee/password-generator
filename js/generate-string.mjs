const createCharArray = (start, end) =>
{
    const charArray = [];

    for (let codePoint = start; codePoint <= end; ++codePoint) {
        charArray.push(String.fromCharCode(codePoint));
    }

    return charArray;
}

const uppercaseChars = Object.freeze(createCharArray(65, 90));
const lowercaseChars = Object.freeze(createCharArray(97, 122));
const numericChars = Object.freeze(createCharArray(48, 57));
const symbolChars = Object.freeze([
    ...createCharArray(32, 47),
    ...createCharArray(91, 96),
    ...createCharArray(58, 64),
    ...createCharArray(123, 126)
]);

export const chars = Object.freeze({
    uppercase: uppercaseChars,
    lowercase: lowercaseChars,
    numeric: numericChars,
    symbol: symbolChars
});

export const generateString = (length, chars) => {
    if (typeof length !== "number")
    {
        throw new TypeError(`${generateString.name}: non number length argument.`);
    }

    if (length < 0)
    {
        throw new Error(`${generateString.name}: length less than 0.`);
    }

    let generatedString = "";

    if ( ! (chars instanceof Array) || chars.some(element => typeof element !== "string"))
    {
        throw new TypeError(`${generateString.name}: non array of strings.`);
    }

    for (let charIndex = 0; charIndex < length; ++charIndex) {
        const randomCharIndex = Math.floor(Math.random() * chars.length)
        generatedString += chars[randomCharIndex];
    }

    return generatedString;
}

export default generateString;
