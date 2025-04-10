export function stringCalculatorV1(text: string, separator: string = ','): number {
  if (text === '' || text === null || text.match(/\d/g) === null) return 0;

  if (text.includes(separator)) {
    const foo: string[] = text.split(separator);
    //const extractedDigits: RegExpMatchArray = text.match(/\d/g);
    let result: number = 0;
    for (let i: number = 0; i < foo.length; i++) {
      if (Number(foo[i])) {
        result = result + Number(foo[i]);
      }
    }
    return result;
  }
  text = text.replace(/[A-Za-z\W_]/g, '');
  let newText: string = '';
  for (let i: number = 0; i < text.length; i++) {
    newText = newText + text.charAt(i);
  }
  return Number(newText);
}
