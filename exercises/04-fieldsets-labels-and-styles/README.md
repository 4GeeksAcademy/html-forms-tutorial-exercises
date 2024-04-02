---
tutorial: "https://www.youtube.com/watch?v=G8RtzrhoFfU"
---

# `04` Fieldsets, labels and styles

Styling a form is boring and tedious, but if you use certain tags, your life can be easier. 

`<label>`: One of the typical things you need to do is add a "label" to your `<input>`, labels tell the end-user what the input stands for.

`<fieldset>`: They are ideal to add several inputs into the same logical group (for example grouping radios -male and female- into a gender fieldset).

`<legend>`: It's the name of the fieldset group that is going to be shown to the end-user.

## 📝 Instructions:

1. Give style to this form by applying this font to the `<body>`:

```css
font-family: "Lato", sans-serif;
```

2. Set the `display` of the `<form>` tag to `inline-block`.
   
3. Remove `borders` and `margins` from all the `<fieldset>` tags.

4. Apply a `padding` of `10px` to the top and bottom and a `padding` of `0px` to the left and right of all the `<fieldset>` tags.

5. Apply a `font-weight` of `800` to all the `<fieldset>` tags.

6. Decrease the `font-weight` of all the `<label>` tags to `400`.

7. Apply these rules to all the text inputs:

```css
input[type=text] {
	border: none;
	border-bottom: 1px solid black;
	font-size: 16px;
}
```

8. Apply this style to the submit button:

```css
input[type=submit] {
  cursor: pointer;
  border: none;
  padding: 10px;
  background-color: #f65252;
  color: white;
  width: 100%;
}
```

## 💻 Expected Result:

![06-fieldsets-labels-and-styles](../../.learn/assets/NGmLdal.png?raw=true)
