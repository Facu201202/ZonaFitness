# 🛒 ZonaFitness – Online SportWear Store

A full e-commerce platform developed with Next.js, TypeScript, and PostgreSQL, featuring an admin panel, authentication with roles, and a complete purchase system.

---

## 🔗 Live Demo

👉 https://zona-fitness.vercel.app/

---

## Preview 

![Homepage](/images/homepage.png)
*Main page displaying products.*

![Product Modal](/images/product_modal.png)
*Product modal with detailed information.*

![Product Admin Panel](/images/Admin_products.png)
*Admin panel for product management.*

---

## 📌 Description

ZonaFitness is an online sportswear store designed to modernize the sales process of a physical shop.
It includes a full product catalog, advanced search filters, review system, favorites, user profile, and an admin panel for managing products, publications, and sales.

---

## 🚀 Main features
### 👤 Users

- Login and registration with encrypted passwords

- JWT authentication with role-based access (user / admin)

- User profile with:

    - Personal information

    - Purchase history

    - Reviews

    - Favorites

    - Option to update personal data and password

- Purchase flow with full validations:

    - Stock

    - Balance

    - SIzes

    - Prices

- PDF receipt generation

### 🛍️ Product Catalog

- Homepage with recommended products

- Advanced search filters

- Sorting options (ascending / descending / rating)

- Product modal with complete details

- Related products section

### ⭐ Reviews

- Leave a review only after purchasing a product

- Edit or delete reviews

- View all reviews on the product page

### 🔐 Administrator Panel

- Full administrative access to manage store operations.

### 📦 Products

- Create, update, and delete products

- Stock management

- Search and filtering options

### 📰 Publications

- Create and edit publications

- Activate/deactivate publications

- Search filters

### 💲 Sales

- View complete sales history

- Update sale status

- Track profits, losses, and totals

---

## 🛠️ Technologies Used
**Frontend / Backend**

- Next.js (React)

- TypeScript

- TailwindCSS


**Authentication**

- jsonwebtoken

- jose

- bcrypt

**Database**

- PostgreSQL (AlwaysData)

- Prisma ORM

**Utilities**

- Cloudinary (Images)

- html2pdf.js

- Keen Slider

---

<details> <summary>🗂️ Project Structure</summary>

/app: Routes, pages, and frontend components

/components: Reusable components

/lib: Validations, helpers, authentication logic

/prisma: Models and migrations

/api: Backend endpoints

</details>

---

## 🧪 Test Accounts
You can freely create a user account to explore the platform.  
Each new account receives a simulated balance of 200,000 ARS to test the purchase flow.

⚠️ The admin panel is restricted and not publicly accessible for security reasons.

---

## ▶️ How to run the project locally

```bash
git clone https://github.com/tuUsuario/zona-fitness.git
cd zona-fitness
npm install
```

**Configure environment variables:**

```bash
DATABASE_URL=
JWT_SECRET=
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
NEXT_PUBLIC_CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

**Start development server:**
```bash
npm run dev
```

## 👨‍💻 Autor

**Facundo Fernández**  
Web developer – React | Next.js | TypeScript | Node.js 
LinkedIn: https://www.linkedin.com/in/facundo-leonel-fern%C3%A1ndez/ 
