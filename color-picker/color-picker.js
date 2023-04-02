const blue = document.getElementById('blue');
const green = document.getElementById('green');
const red = document.getElementById('red');
let blueTheme = true;
let greenTheme = false;
let redTheme = false;

const lightBlue = {
    '--selection-bg': 'var(--blue-lightest)',

    '--link-text': 'var(--grey)',
    '--link-hover-text': 'var(--blue-darkest)',
    '--link-hover-bg': 'var(--blue-lightest)',

    '--link-contrast-text': 'var(--blue-lightest)',
    '--link-contrast-hover-text': 'var(--blue-light)',
    
    '--button-bg': 'var(--blue-light)',
    '--button-hover-text': 'var(--blue-darkest)',
    '--button-hover-bg': 'var(--blue-lightest)',

    '--input-focus-border': 'var(--blue-darker)',
    
    '--toggle-checked-bg': 'var(--blue-light)',
    '--toggle-switch-color': 'var(--blue-darker)',
    '--toggle-switch-bg': 'var(--blue-darker)',

    '--scroll-track': 'var(--blue-light)',
};

const darkBlue = {
    '--link-text': 'var(--blue-light)',
    '--link-hover-text': 'var(--blue-default)',

    '--link-contrast-text': 'var(--blue-lightest)',
    '--link-contrast-hover-text': 'var(--blue-light)',
    
    '--button-bg': 'var(--blue-default)',
    '--button-hover-text': 'var(--blue-darkest)',
    '--button-hover-bg': 'var(--blue-light)',

    '--input-focus-border': 'var(--blue-default)',
    
    '--toggle-checked-bg': 'var(--blue-light)',
    '--toggle-switch-color': 'var(--blue-darker)',
    '--toggle-switch-bg': 'var(--blue-darker)',

    '--scroll-thumb': 'var(--blue-darker)',
};

const lightGreen = {
    '--selection-bg': 'var(--green-lightest)',

    '--link-text': 'var(--grey)',
    '--link-hover-text': 'var(--green-darkest)',
    '--link-hover-bg': 'var(--green-lightest)',

    '--link-contrast-text': 'var(--green-lightest)',
    '--link-contrast-hover-text': 'var(--green-light)',
    
    '--button-bg': 'var(--green-light)',
    '--button-hover-text': 'var(--green-darkest)',
    '--button-hover-bg': 'var(--green-lightest)',

    '--input-focus-border': 'var(--green-darker)',
    
    '--toggle-checked-bg': 'var(--green-light)',
    '--toggle-switch-color': 'var(--green-darker)',
    '--toggle-switch-bg': 'var(--green-darker)',

    '--scroll-track': 'var(--green-light)',
};

const darkGreen = {
    '--link-text': 'var(--green-light)',
    '--link-hover-text': 'var(--green-default)',

    '--link-contrast-text': 'var(--green-lightest)',
    '--link-contrast-hover-text': 'var(--green-light)',
    
    '--button-bg': 'var(--green-default)',
    '--button-hover-text': 'var(--green-darkest)',
    '--button-hover-bg': 'var(--green-light)',

    '--input-focus-border': 'var(--green-default)',
    
    '--toggle-checked-bg': 'var(--green-light)',
    '--toggle-switch-color': 'var(--green-darker)',
    '--toggle-switch-bg': 'var(--green-darker)',

    '--scroll-thumb': 'var(--green-darker)',
};

const lightRed = {
    '--link-text': 'var(--grey)',
    '--selection-bg': 'var(--red-lightest)',

    '--link-hover-text': 'var(--red-darkest)',
    '--link-hover-bg': 'var(--red-lightest)',

    '--link-contrast-text': 'var(--red-lightest)',
    '--link-contrast-hover-text': 'var(--red-light)',
    
    '--button-bg': 'var(--red-light)',
    '--button-hover-text': 'var(--red-darkest)',
    '--button-hover-bg': 'var(--red-lightest)',

    '--input-focus-border': 'var(--red-darker)',
    
    '--toggle-checked-bg': 'var(--red-light)',
    '--toggle-switch-color': 'var(--red-darker)',
    '--toggle-switch-bg': 'var(--red-darker)',

    '--scroll-track': 'var(--red-light)',
};

const darkRed = {
    '--link-text': 'var(--red-light)',
    '--link-hover-text': 'var(--red-default)',

    '--link-contrast-text': 'var(--red-lightest)',
    '--link-contrast-hover-text': 'var(--red-light)',
    
    '--button-bg': 'var(--red-default)',
    '--button-hover-text': 'var(--red-darkest)',
    '--button-hover-bg': 'var(--red-light)',

    '--input-focus-border': 'var(--red-default)',
    
    '--toggle-checked-bg': 'var(--red-light)',
    '--toggle-switch-color': 'var(--red-darker)',
    '--toggle-switch-bg': 'var(--red-darker)',

    '--scroll-thumb': 'var(--red-darker)',
};

blue.onchange = () => {
    blueTheme = true;
    greenTheme = false;
    redTheme = false;
    if(blue.checked) {
        const root = document.querySelector(':root');
        if(light) {
            Object.entries(lightBlue).forEach(entry => root.style.setProperty(entry[0], entry[1]));
        }
        if(!light){
            Object.entries(darkBlue).forEach(entry => root.style.setProperty(entry[0], entry[1]));
        }
    }
}
green.onchange = () => {
    blueTheme = false;
    greenTheme = true;
    redTheme = false;
    if(green.checked) {
        const root = document.querySelector(':root');
        if(light) {
            Object.entries(lightGreen).forEach(entry => root.style.setProperty(entry[0], entry[1]));
        }
        if(!light){
            Object.entries(darkGreen).forEach(entry => root.style.setProperty(entry[0], entry[1]));
        }
    }
}
red.onchange = () => {
    blueTheme = false;
    greenTheme = false;
    redTheme = true;
    if(red.checked) {
        const root = document.querySelector(':root');
        if(light) {
            Object.entries(lightRed).forEach(entry => root.style.setProperty(entry[0], entry[1]));
        }
        if(!light){
            Object.entries(darkRed).forEach(entry => root.style.setProperty(entry[0], entry[1]));
        }
    }
}