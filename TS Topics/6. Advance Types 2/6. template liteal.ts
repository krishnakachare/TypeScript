/* 
## 🔤 Template Literal Types

Template literal types enable the creation of new string literal types.
```ts
type Lang = "en" | "fr";
type MessageID = `welcome_${Lang}`; // "welcome_en" | "welcome_fr"
```

Use them with string manipulation utilities:
```ts
type Event = "click" | "hover";
type Handler = `on${Capitalize<Event>}`; // "onClick" | "onHover"
```
*/
