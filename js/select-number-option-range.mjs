const definedOptKeys = Object.freeze(["minRange", "maxRange", "name", "id"]);

export const selectNumberOptionRange = (opts) =>
{
    if (opts === undefined || opts === null)
    {
        throw new TypeError(`${opts} ${selectNumberOptionRange.name} options.`);
    }

    for (const key of Object.keys(opts))
    {
        if ( ! definedOptKeys.includes(key))
        {
            throw new Error(`unrecognized ${selectNumberOptionRange.name} options key: ${key}`);
        }
    }

    const selectElement = document.createElement("select");

    if (opts.name)
    {
        selectElement.name = opts.name;
    }

    if (opts.id)
    {
        selectElement.id = opts.id;
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

export default selectNumberOptionRange;
