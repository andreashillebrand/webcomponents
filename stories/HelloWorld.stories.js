import '../components/HelloWorld/HelloWorld.js';

export default {
  title: 'Components'
};

export const HelloWorld = () => '<hello-world>Hello World</hello-world>'

/*
https://github.com/storybookjs/storybook/discussions/23021
export const H1 = () => {
    return document.createElement('hello-world');
};

https://javascript.plainenglish.io/storybook-for-html-projects-1e99aa452a44
export default {
  title: 'Example/Headings'
};
export const H1 = () => '<h1>Heading 1</h1>'
export const H2 = () => '<h2>Heading 2</h2>'
export const H3 = () => '<h3>Heading 3</h3>'
export const H4 = () => '<h4>Heading 4</h4>'
export const H5 = () => '<h5>Heading 5</h5>'
export const H6 = () => '<h6>Heading 6</h6>'
*/