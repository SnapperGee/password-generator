export const selectWithOptionNumberRange = (opts) =>
{
    const selectElement = document.createElement("select");

    if (opts.name)
    {
        selectElement.name = opts.name;
    }

    if (opts.id)
    {
        selectElement.id = opts.id;
    }

    if (opts.className)
    {
        selectElement.className = opts.className;
    }

    for (let currentNum = opts.minRange; currentNum <= opts.maxRange; ++currentNum)
    {
        const optionElement = document.createElement("option");
        optionElement.value = currentNum;
        optionElement.innerText = currentNum;
        selectElement.appendChild(optionElement);
    }

    return selectElement;
}
