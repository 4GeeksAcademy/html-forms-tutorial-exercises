# `06` Campos, etiquetas y estilos

Darle estilo de un formulario es aburrido y tedioso, pero si usas ciertas etiquetas, tu vida puede ser más fácil. 

`<label>`  
Una de las cosas recurrentes que debes hacer es agregar un etiqueta "label". Label le dice al usuario final que representa esa entrada/input.

`<fieldset>` 

Son ideales para añadir varias entradas en el mismo grupo lógico (por ejemplo, agrupar a los input radio -hombre y mujer- en un conjunto de campos de sexo).

`<legend>`  

Es el nombre del grupo de campos que se va a mostrar al usuario final.

## 📝 Instrucciones

1. Aplica un estilo a esta fuente aplicandándole al "body":

```css
font-family: "Lato", sans-serif;
```

2. Elimina los bordes (border) y los márgenes (margin) de todos los campos. Aplica un relleno (padding) de 10px en la parte superior e inferior y un relleno (padding) de 0px a la izquierda y a la derecha. Aplicar un grosor de fuente de 800.

3. Disminuye el grosor de la fuente de todas las `label` a 400

4. Aplica estas reglas a todas las entradas de texto

```css
input[type=text] {
	border: none;
	border-bottom: 1px solid black;
	font-size: 16px;
}
```

5. Aplica este estilo al botón de envío (submit).

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

El resultado debería ser este:

![06-fieldsets-labels-and-styles](https://github.com/4GeeksAcademy/html-forms-tutorial-exercises/blob/master/.learn/assets/NGmLdal.png?raw=true)
