In the syntactic grammar we’re talking about now, we’re at a different level of granularity. Now each “letter” in the alphabet is an entire token and a “string” is a sequence of tokens—an entire expression.

| Terminology            | Lexical Grammar | Syntactic Grammar |
| ---------------------- | --------------- | ----------------- |
| The "alphabet" is...   | Characters      | Tokens            |
| A "string" is...       | Lexeme or token | Expression        |
| It's implemented by... | Scanner         | Parser            | 

A formal grammar’s job is to specify which strings are valid and which aren’t. If we were defining a grammar for English sentences, “eggs are tasty for breakfast” would be in the grammar, but “tasty breakfast for are eggs” would probably not.

#### Example

- **Terminal** - Literal values, like `"with"` or `"on the side"` in the example below.
- **Non-Terminal** - Reference to another rule in the grammar. Like `protein` or `cooked`.
- **Rule** - Is on the left side like `breakfast`, `protein`, etc.

From this context-free grammar, we can create different expressions!

```js
breakfast → protein "with" breakfast "on the side" ;
breakfast → protein ;
breakfast → bread ;

protein → crispiness "crispy" "bacon" ;
protein → "sausage" ;
protein → cooked "eggs" ;

crispiness → "really" ;
crispiness → "really" crispiness ;

cooked → "scrambled" ;
cooked → "poached" ;
cooked → "fried" ;

bread → "toast" ;
bread → "biscuits" ;
bread → "English muffin" ;
```

```js
protein "with" breakfast "on the side"
crispiness "crispy" "bacon" "with" breakfast "on the side"
"really" "cripsy" "bacon" "with" breakfast "on the side"
"really" "cripsy" "bacon" "with" bread "on the side"
"really" "cripsy" "bacon" "with" "toast" "on the side"
```

Notice how we replace the non terminal with one of its possible outputs, that output may be a terminal or non-terminal.

#### Enhancing the Notation

Use `|` to represent each possible choice.

```js
bread → "toast" | "biscuits" | "english muffin" ; 
```

Use parenthesis for grouping and `|` for selecting on of the options

```js
protein → ("scrambled" | "poached" | "fried" ) "eggs" ; 
```

`*` postfix means you can repeat the previous symbol 0 or more times

```js
crispiness → "really" "really"* ; 
```

`+` postfix means it must appear 1 or more times.

```js
crispiness → "really"+ ; 
```

`?` postfix is for an optional production. It can appear 0 or 1 times.

```js
breakfast → protein ( "with" breakfast "on the side" )? ;
```

Full enhanced context:

```js
breakfast → protein ( "with" breakfast "on the side" )? | bread

protein → "really"+ "crispy" "bacon" 
          | "sausage" 
          | ("scrambled" | "poached" | "fried" ) "eggs"

bread → "toast" | "biscuits" | "english muffin";
```