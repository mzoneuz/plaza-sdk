# Plaza SDK (Software Development Kit)

Ushbu kutubxona dasturchilar uchun bir nechta marketplace'lar va online shoplarning dashboard apilarini taqdim etadi.

- Uzum Market (Dashboard Api)
- Uzum Market (Openapi)
- Alif Shop (Dashboard Api)
- ...

Hozirda kod bazasi kengaytirilishi ustida ishlanmoqda.

Loyiha kodlaridan foydalanish uchun bizga eng birinchi o'rinda `nodejs` yoki `browser` javascript muhiti kerak bo'ladi va `axios` kutubxonasi orqali har bir api uchun o'ziga xos `axios instance` yaratib olib uni berib yuborishimiz kerak bo'ladi!

---

### 1. Kutubxonani qo'llash

`Uzum Market (Dashboard Api)` uchun bunday atigi bitta instance kerak bo'ladi:

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
// lib/api/uzum-auth-service.ts
import { GetToken } from "plaza-sdk/uzum-market";

import { uzumHttp } from "@/libs/https";

const getToken = (username: string, password: string) => {
  return GetToken(uzumHttp, { password: "your-password", username: "your-username" });
};
```

---

`Eslatma! Har doim axios bilan sozlangan instance'ni har bir funksiya chaqirilganda uzatish shart!!!!`

`Alif Shop (Dashboard Api)` uchun bir nechta http yaratib qo'yib turli vaziyatlarga moslab uzatish kerak bo'ladi:

```typescript
// 1. authentication uchun
import axios from "axios";

const baseURL = "https://id.alif.uz/realms";
const alifIdHttp = axios.create({ baseURL });
export { alifIdHttp };

// 2. asosiy product va infolarni olish uchun api http
const baseURL = "https://api-merchant.alif.uz/merchant";
const alifMerchantHttp = axios.create({ baseURL });
export { alifMerchantHttp };
```

Va ularni quyidagicha ishlatishimiz mumkin:

```typescript
// lib/api/uzum-auth-service.ts
import { GetToken } from "plaza-sdk/alif-shop";

import { alifIdHttp } from "@/libs/https";

const getToken = (username: string, password: string) => {
  return GetToken(alifIdHttp, { password: "your-password", username: "your-username" });
};

// lib/api/uzum-auth-service.ts
import { GetProduct } from "plaza-sdk/alif-shop";

import { alifMerchantHttp } from "@/libs/https";

const getProductInfo = (username: string, password: string) => {
  return GetProduct(alifMerchantHttp, { shopId:"your shopid <number>" product: "your-product-id <number>", token: "your token <string>" });
};

```

Qolgan service'lar ustida hali ishlanmoqda!