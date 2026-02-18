# Lab 5.1 – Typed Components & Props Validation

## TypeScript не үшін қолданылды?

Бұл жобада компоненттердің props-тары **TypeScript арқылы compile-time деңгейінде тексеріледі**.
PropTypes runtime кезінде ғана ескерту береді, ал TypeScript қателерді код орындалмай тұрып ұстайды.

---

## Interface және Type айырмашылығы

### `interface` – объект құрылымы үшін

```ts
export interface User {
  name: string;
  email: string;
  age: number;
}
```

`interface` объект формасын сипаттау үшін қолданылды.

---

### `type` – union типтер үшін

```ts
export type SkillLevel = "Beginner" | "Intermediate" | "Expert";
```

`type` union типтерді анықтау үшін қолданылды.

---

## UserCard компонентін типтеу

```ts
interface UserCardProps {
  user: User;
  isActive?: boolean;
  children: React.ReactNode;
}
```

* `isActive?` – optional prop
* `React.ReactNode` – кез келген рендерленетін контент
* Props толық типтелген

Бұл компонент props-тың дұрыс типте берілуін қамтамасыз етеді.

---

## SkillList компонентін типтеу

```ts
interface SkillListProps {
  skills: Skill[];
}
```

* `Skill[]` – типтелген массив
* `SkillLevel` арқылы деңгей қатаң шектелген

Қате мән берілсе, TypeScript бірден көрсетеді.

