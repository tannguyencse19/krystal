# Instruction

- Step 1: Open `https://www.programiz.com/javascript/online-compiler/`
- Step 2: Copy & Paste the code in "main.js" to the window
- Step 3: Run

---

# Notes

## About User Input

You must be resoponsible for the validity of your input. See guidelines below

- Input format is as followed and do not miss any line

```js
const input = `
2 3             --> Size of "map2D" array
1 4 3           --> first row of "map2D" value (i.e: map2D[0] = [1, 4, 3])
4 3 1           --> etc, second row of "map2D" value (i.e: map2D[1] = [4, 3, 1])
0 0             --> Robot start position
RRDUDLL         --> Robot instruction
`;
```

- Error input examples

---

```js
const input = `
2 3             --> row = 2; col = 3
1 4 3
4 3 1
69 69 69        --> Input value for row 3 will be ignored
0 0
RRDUDLL
`;
```

---

```js
const input = `
2 3             --> row = 2; col = 3
1 4 3 69 69     --> Input value for col 4, 5 will be ignored
4 3 1
0 0
RRDUDLL
`;
```

---

```js
const input = `
a b             --> Not accept char
1 4 3
4 3 1
0 0
RRDUDLL         --> Only accept chars at this line
`;
```

---

```js
const input = `
                --> Missing line: size of "map2D". May cause program bug
1 4 3
4 3 1
0 0
RRDUDLL
`;
```
