export  const stringJSParser = (jsString: string) => {
    const text = jsString
    let transformed= text.replaceAll("moveUp()", "moveCharacter('up'); await sleep(500)")
    transformed = transformed.replaceAll("moveDown()", "moveCharacter('down'); await sleep(500)")
    transformed = transformed.replaceAll("moveLeft()", "moveCharacter('left'); await sleep(500)")
    transformed = transformed.replaceAll("moveRight()", "moveCharacter('right'); await sleep(500)")
    return transformed

}