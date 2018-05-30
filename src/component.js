export default (text = 'hello world, again') => {
    const element = document.createElement('div');

    element.innerHTML = text;

    return element;
}