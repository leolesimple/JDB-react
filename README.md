# 📘 Journal de Bord – React + Tailwind

Ce projet est une réécriture complète de mon journal de bord en **React** avec **TailwindCSS**. Il permet de documenter les actions menées au fil du temps, notamment dans le cadre d’un **stage**.

---

## ✨ Fonctionnalités

- 🔥 Ajout de notes via une interface moderne
- 🧊 Effet **glassmorphism** + design responsive en **masonry**
- 🎨 Fond animé avec dégradés en mouvement
- 🌙 **Dark mode** automatique et manuel (`.dark`)
- 💾 Persistance dans le `localStorage`
- 🖼️ Possibilité d'attacher une **image** à chaque note
- 📦 Construit avec **React 19**, **Vite** et **TailwindCSS 4**

---

## 🚀 Installation

```bash
git clone https://github.com/votre-utilisateur/react-journal-bord.git
cd react-journal-bord
npm install
npm run dev
```

---

## 🧱 Structure

```
📁 src/
 ┣ 📄 App.jsx
 ┣ 📁 components/
 ┃ ┣ 📄 JournalForm.jsx
 ┃ ┗ 📄 JournalList.jsx
```

- `App.jsx` : logique principale, gestion du state global + modal
- `JournalForm` : formulaire d’ajout (dans une modal)
- `JournalList` : affichage en mode **masonry**

---

## 📦 Build

```bash
npm run build
```

Le build final sera dans le dossier `dist`.

---

## 📃 Licence

Projet personnel sous licence MIT.

---

## 💡 À venir ?

- 🗓️ Ajout de dates automatiques ou choisies
- 🏷️ Tags ou filtres de type “UX”, “Dev”, “Bugfix”
- 📊 Statistiques de progression