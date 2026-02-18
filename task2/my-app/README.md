# Lab 5.2 – Typing State & Event Handlers

## Неге `React.ChangeEvent` қолдандық, `any` емес?

Бұл жобада **`any` қолданылған жоқ**.
`any` TypeScript тип тексерісін өшіреді және strict режимнің мағынасын жояды.

`React.ChangeEvent<HTMLInputElement>` қолдану арқылы:

* `event.target.value` қауіпсіз түрде типтеледі
* Қате property қолдансақ, TypeScript компиляция кезінде бірден көрсетеді
* Код compile-time деңгейінде тексеріледі

Сондықтан нақты React event типтерін қолдану кодтың **тип қауіпсіздігін қамтамасыз етеді**.

---

## Қашан explicit generic керек?

### Type inference жеткілікті болған жағдай:

```ts
const [searchTerm, setSearchTerm] = useState("");
```

Мұнда TypeScript автоматты түрде типті `string` деп анықтайды.

---

### Explicit generic қажет болған жағдай:

```ts
const [users, setUsers] = useState<User[]>([]);
```

Егер жай ғана:

```ts
useState([]);
```

деп жазсақ, TypeScript оны `never[]` деп түсінеді.
Сондықтан бос массивпен инициализация жасағанда **generic міндетті түрде көрсетіледі**.

