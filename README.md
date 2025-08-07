# Plaza SDK (Software Development Kit)

Ushbu kutubxona dasturchilar uchun bir nechta marketplace'lar va online shoplarning dashboard apilarini taqdim etadi.

- Uzum Market (Dashboard Api)
- Uzum Market (Openapi)
- Alif Shop (Dashboard Api)
- ...

Hozirda kod bazasi kengaytirilishi ustida ishlanmoqda.

Loyiha kodlaridan foydalanish uchun bizga eng birinchi o'rinda `nodejs` yoki `browser` javascript muhiti kerak bo'ladi va `axios` kutubxonasi orqali har bir api uchun o'ziga xos `axios instance` yaratib olib uni berib yuborishimiz kerak bo'ladi!

---

Masalan `Uzum Market (Dashboard Api)` uchun bunday atigi bitta instance kerak bo'ladi:

```typescript
// libs/https/uzum-http.ts

import axios from "axios";

// baseURLni berib qo'yish shart!
const baseURL = "https://api-seller.uzum.uz/api";

const uzumHttp = axios.create({
  baseURL,
  headers: {
    "accept-language": "ru-RU",
  },
});

export default uzumHttp;
```

---

Va uni quyidagicha ishlatishimiz mumkin:

```typescript
// lib/api/auth-service.ts
import { GetToken } from "plaza-sdk/uzum-market"


const getToken = (username: string, password: string) => {
  return GetToken({ username, password })
}

```
