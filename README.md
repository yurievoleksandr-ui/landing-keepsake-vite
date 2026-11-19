# Keepsake — Creative Agency Landing Page

Адаптивний лендінг креативної агенції **Keepsake**, реалізований на сучасному фронтенд-стеку з використанням шаблонізатора **Pug**, препроцесора **SCSS (архітектура 7-1)** та збирача **Vite**.

🔗 **Демо (GitHub Pages):** https://yurievoleksandr-ui.github.io/landing-keepsake-vite/

---

## Вимоги до середовища

- **Node.js:** v20+ (LTS)
- **npm:** v10+
- **Git**

## Команди проєкту

| Команда | Призначення |
| :--- | :--- |
| `npm install` | Встановлення всіх залежностей проєкту |
| `npm run dev` | Запуск локального сервера розробки (`http://localhost:5173`) із HMR |
| `npm run build` | Продакшн-збірка проєкту у директорію `dist/` (мініфікація HTML/CSS, PostCSS) |
| `npm run preview` | Локальний попередній перегляд зібраної продакшн-версії з папки `dist/` |
| `npm run format` | Автоматичне форматування файлів проєкту за допомогою Prettier |
| `npm run lint` | Запуск повної перевірки стилів (Stylelint) та форматування (Prettier) |
| `npm run lint:styles` | Перевірка SCSS-файлів на відповідність БЕМ та правилам Stylelint |
| `npm run lint:format` | Перевірка коректності форматування коду без внесення змін |

---

## Структура проєкту

```text
landing-keepsake-vite/
├── .github/workflows/
│   └── deploy.yml          # CI/CD для автоматичного деплою на GitHub Pages
├── .husky/
│   └── pre-commit          # Git-хук для запуску lint-staged перед комітом
├── public/
│   └── images/             # Оптимізовані зображення у форматах AVIF, WebP та JPEG
├── src/
│   ├── components/
│   │   └── sections/       # Окремі секції лендінгу (header, hero, works, services, stats, journal, footer)
│   ├── data/
│   │   └── site.pug        # Дані для динамічного рендерингу навігації, карток робіт, послуг та журналу
│   ├── layouts/
│   │   └── main.pug        # Базовий HTML-шаблон сторінки (head, метатеги, шрифти, підключення секцій)
│   ├── mixins/
│   │   ├── btn.pug         # Міксин кнопок
│   │   ├── picture.pug     # Міксин адаптивних зображень (<picture> з AVIF/WebP/JPEG)
│   │   └── work-card.pug   # Міксин картки портфоліо
│   ├── pages/
│   │   └── index.pug       # Головна сторінка лендінгу
│   └── styles/             # Архітектура SCSS 7-1
│       ├── abstracts/      # Змінні, функції, міксини адаптивності (respond-to)
│       ├── base/           # Скидання стилів, базова типографіка, утиліти
│       ├── components/     # Стилі кнопок, карток, фільтрів портфоліо
│       ├── layout/         # Стилі хедера, футера, сіток та контейнера
│       ├── sections/       # Специфічні стилі окремих секцій
│       └── main.scss       # Головна точка входу стилів (@use)
├── .prettierrc             # Конфігурація форматування Prettier (+ plugin-pug)
├── .prettierignore         # Виключення для Prettier
├── .stylelintrc.json       # Правила лінтингу SCSS та валідації БЕМ-класів
├── package.json            # Залежності, npm-скрипти, browserslist та конфігурація lint-staged
├── postcss.config.js       # Налаштування PostCSS та Autoprefixer
└── vite.config.js          # Конфігурація Vite, Vituum та плагіна Pug
