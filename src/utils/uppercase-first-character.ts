export function uppercaseFirstCharacter(text: string) {
    if (text.length === 0) {
        return text;
    }
    
    return text[0].toUpperCase() + text.slice(1);
}