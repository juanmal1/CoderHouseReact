const arraNombres = []

const findConPolyfill = (arrayOriginal, elementroAEcontrar)=> {
for (let i = 0; i < arrayOriginal.length; i++) {
    const element = arrayOriginal[i];
        if(elementroAEcontrar === element)
        return element
}
return undefined
}
