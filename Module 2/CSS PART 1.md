# CSS Selectors

## Basic Selectors

### 1. Element Selector

Selects all instances of a specified element:

```css
p {
  color: blue;
}

```

### 2. Class Selector

Selects elements with a specific class attribute:

```css
.highlight {
  background-color: yellow;
}

```

### 3. ID Selector

Selects a single element with a specific ID:

```css
#header {
  background-color: black;
  color: white;
}

```

### 4. Universal Selector

Selects all elements:

```css
* {
  margin: 0;
  padding: 0;
}

```

## Attribute Selectors

Select elements based on their attributes:

```css
/* Elements with the specified attribute */
[data-type] {
  border: 1px solid gray;
}

/* Elements with specific attribute value */
[type="text"] {
  border-radius: 5px;
}

/* Elements with attribute value containing specific word */
[class~="card"] {
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

/* Elements with attribute value starting with specific string */
[href^="https"] {
  color: green;
}

/* Elements with attribute value ending with specific string */
[src$=".jpg"] {
  border: 2px solid black;
}

/* Elements with attribute value containing specific substring */
[title*="user"] {
  font-weight: bold;
}

```

## Combinators

### 1. Descendant Selector (space)

Selects all descendants:

```css
article p {
  font-size: 16px;
}

```

### 2. Child Selector (>)

Selects direct children only:

```css
ul > li {
  list-style-type: square;
}

```

### 3. Adjacent Sibling Selector (+)

Selects element immediately after another:

```css
h2 + p {
  font-weight: bold;
}

```

### 4. General Sibling Selector (~)

Selects all siblings after an element:

```css
h2 ~ p {
  color: gray;
}

```

## Pseudo-classes and Pseudo-elements

### Common Pseudo-classes:

```css
/* Unvisited links */
a:link {
  color: blue;
}

/* Visited links */
a:visited {
  color: purple;
}

/* Mouse over element */
button:hover {
  background-color: lightblue;
}

/* Active/being clicked element */
button:active {
  background-color: darkblue;
}

/* Input with focus */
input:focus {
  border-color: blue;
}

/* First child element */
li:first-child {
  font-weight: bold;
}

/* Last child element */
li:last-child {
  border-bottom: none;
}

/* Odd-numbered elements */
tr:nth-child(odd) {
  background-color: #f2f2f2;
}

```

### Common Pseudo-elements:

```css
/* First line of text */
p::first-line {
  font-weight: bold;
}

/* First letter of text */
p::first-letter {
  font-size: 200%;
}

/* Before an element (content property required) */
.note::before {
  content: "Note: ";
  font-weight: bold;
}

/* After an element (content property required) */
a.external::after {
  content: " ↗";
}

```

### 4. Box Model
### 5. Margin, Padding, Border Properties
### 6. Display: Block, inline-block,and inline
### 7. Background color, height,width, min-height, min-width
### 8. Layout algorithm or modules: inline or Flow MOdule
### 9. Layout algorithm or models: Positioned Mode (absolute, relative, etc)

