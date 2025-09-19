# CSS Selectors

## Basic Selectors

1. **Element Selector**  
   Selects all instances of a specified element.  
   ```css
   p {
     color: blue;
   }
   ```

2. **Class Selector**  
   Selects elements with a specific class attribute.  
   ```css
   .highlight {
     background-color: yellow;
   }
   ```

3. **ID Selector**  
   Selects a single element with a specific ID.  
   ```css
   #header {
     background-color: black;
     color: white;
   }
   ```

4. **Universal Selector**  
   Selects all elements.  
   ```css
   * {
     margin: 0;
     padding: 0;
   }
   ```

## Attribute Selectors

Select elements based on their attributes.

 
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

1. **Descendant Selector (space)**  
   Selects all descendants.  
   ```css
   article p {
     font-size: 16px;
   }
   ```

2. **Child Selector (>)**  
   Selects direct children only.  
   ```css
   ul > li {
     list-style-type: square;
   }
   ```

3. **Adjacent Sibling Selector (+)**  
   Selects element immediately after another.  
   ```css
   h2 + p {
     font-weight: bold;
   }
   ```

4. **General Sibling Selector (~)**  
   Selects all siblings after an element.  
   ```css
   h2 ~ p {
     color: gray;
   }
   ```

## Pseudo-classes and Pseudo-elements

### Common Pseudo-classes

- Visited links:  
  ```css
  a:visited {
    color: blue;
  }
  ```

- Mouse over:  
  ```css
  a:hover {
    color: red;
  }
  ```

- Being clicked:  
  ```css
  a:active {
    color: green;
  }
  ```

- Focus:  
  ```css
  button:focus {
    border: 2px solid blue;
  }
  ```

- Checked radio/checkbox:  
  ```css
  input:checked {
    background: lightblue;
  }
  ```

- First child:  
  ```css
  p:first-child {
    font-weight: bold;
  }
  ```

- Last child:  
  ```css
  p:last-child {
    border-bottom: none;
  }
  ```

- Nth child:  
  ```css
  p:nth-child(2) {
    background: #f2f2f2;
  }
  ```

- Nth last child:  
  ```css
  p:nth-last-child(2) {
    border-bottom: none;
  }
  ```

- Even rows (example):  
  ```css
  tr:nth-child(even) {
    background: #f2f2f2;
  }
  ```

### Common Pseudo-elements

- First line of text:  
  ```css
  p::first-line {
    font-weight: bold;
  }
  ```

- First letter of text:  
  ```css
  p::first-letter {
    font-size: 200%;
  }
  ```

- Insert content before (content property required):  
  ```css
  p::before {
    content: "Note: ";
    font-weight: bold;
  }
  ```

- Insert content after:  
  ```css
  p::after {
    content: " - ";
  }
  ```

- Selected text:  
  ```css
  ::selection {
    background: yellow;
    color: black;
  }
  ```