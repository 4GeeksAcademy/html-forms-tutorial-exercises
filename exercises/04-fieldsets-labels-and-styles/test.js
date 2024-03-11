const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
const css = fs.readFileSync(path.resolve(__dirname, './styles.css'), 'utf8');

document.documentElement.innerHTML = html;

describe("Form styles should be applied", () => {
  test("The form tag should have display set to 'inline-block'", () => {
    document.querySelector("head").innerHTML = `<style>${css}</style>`;
    const form = document.querySelector('form');
    const formStyles = window.getComputedStyle(form);
    expect(formStyles['display']).toBe('inline-block');
  });

  test("The body should have the font family 'Lato, sans-serif'", () => {
    document.querySelector("head").innerHTML = `<style>${css}</style>`;
    const body = document.querySelector('body');
    const bodyStyles = window.getComputedStyle(body);
    expect(bodyStyles['font-family']).toBe("'Lato', sans-serif" || '"Lato", sans-serif');
  });

  test("The fieldset tags should have the correct padding and font-weight", () => {
    document.querySelector("head").innerHTML = `<style>${css}</style>`;
    const fieldsets = document.querySelectorAll('fieldset');
    fieldsets.forEach(fieldset => {
      const fieldsetStyles = window.getComputedStyle(fieldset);
      expect(fieldsetStyles['padding']).toBe('10px 0px');
      expect(fieldsetStyles['font-weight']).toBe('800');
    });
  });

  test("The label tags should have font weight set to 400", () => {
    document.querySelector("head").innerHTML = `<style>${css}</style>`;
    const labels = document.querySelectorAll('label');
    labels.forEach(label => {
      const labelStyles = window.getComputedStyle(label);
      expect(labelStyles['font-weight']).toBe('400');
    });
  });

  test("The text inputs should have the correct styling", () => {
    document.querySelector("head").innerHTML = `<style>${css}</style>`;
    const inputsText = document.querySelectorAll('input[type="text"]');
    inputsText.forEach(inputtext => {
      const inputStyles = window.getComputedStyle(inputtext);
      expect(inputStyles['border']).toBe('0px');
      expect(inputStyles['border-bottom']).toBe('1px solid black');
      expect(inputStyles['font-size']).toBe('16px');
    })
  })
  test("The submit inputs should have the correct styling", () => {
    document.querySelector("head").innerHTML = `<style>${css}</style>`;
    const submitImputs = document.querySelectorAll('input[type="submit"]');
    submitImputs.forEach(imputsubmit => {
      const inputStyles = window.getComputedStyle(imputsubmit);
      expect(inputStyles['cursor']).toBe('pointer');
      expect(inputStyles['border']).toBe('0px');
      expect(inputStyles['padding']).toBe('10px');
      expect(inputStyles['background-color']).toBe('rgb(246, 82, 82)');
      expect(inputStyles['color']).toBe('white');
      expect(inputStyles['width']).toBe('100%');
    })
  });
});

