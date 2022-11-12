export  const stringJSParser = (jsString: string) => {
    const textList = jsString.split('\n')
    const transformedList = textList.map(text=> stringFunctionTransformer(text))
    return transformedList.reduce((previousValue, currentValue) => previousValue + '\n' + currentValue);

}

const stringFunctionTransformer = (text: string) => {
    let transformed= text.replaceAll("move()", "move(); await sleep(300);")
    transformed = transformed.replaceAll("turnRight()", "turnRight(); await sleep(300);")
    transformed = transformed.replaceAll("turnLeft()", "turnLeft(); await sleep(300);")
    transformed = transformed.replaceAll("turnWhile()", "turnWhile(); await sleep(300);")

    // Doing this because of end of input syntaxerror seen when trying to call eval on //: eval("// ")
    if (transformed.startsWith('//')) {
        transformed = `/*${transformed}*/` ;
    }
    return transformed;
}