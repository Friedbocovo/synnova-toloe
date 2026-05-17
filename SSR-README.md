# SSR (Server-Side Rendering) Configuration

Ce projet utilise maintenant le **Server-Side Rendering (SSR)** avec Vite pour améliorer le SEO et les performances.

## 🚀 Avantages du SSR

✅ **Meilleur SEO** : Les moteurs de recherche peuvent indexer le contenu HTML complet
✅ **Temps de chargement initial plus rapide** : Le HTML est déjà rendu côté serveur
✅ **Meilleure performance** : First Contentful Paint (FCP) amélioré
✅ **Partage sur réseaux sociaux** : Les meta tags Open Graph sont correctement lus

## 📦 Installation

Installer les nouvelles dépendances :

```bash
npm install
```

## 🛠️ Commandes

### Développement
```bash
npm run dev
```
Lance le serveur de développement SSR sur http://localhost:5173

### Build Production
```bash
npm run build
```
Compile le client et le serveur pour la production

### Preview Production
```bash
npm run preview
```
Lance le serveur de production localement

## 📁 Structure des fichiers SSR

```
synnova-site/
├── server.js                    # Serveur Express pour SSR
├── src/
│   ├── entry-client.jsx        # Point d'entrée client (hydratation)
│   ├── entry-server.jsx        # Point d'entrée serveur (rendu SSR)
│   ├── main.jsx                # Ancien point d'entrée (non utilisé en SSR)
│   └── App.jsx                 # Application React
├── dist/
│   ├── client/                 # Build client (après npm run build)
│   └── server/                 # Build serveur (après npm run build)
└── index.html                  # Template HTML avec placeholders SSR
```

## 🔧 Comment ça fonctionne

1. **Développement** : Le serveur Express utilise Vite en mode middleware pour le HMR
2. **Production** : Le serveur Express sert les fichiers statiques compilés
3. **Rendu** : React est rendu côté serveur, puis hydraté côté client
4. **Routing** : React Router fonctionne en SSR avec StaticRouter (serveur) et BrowserRouter (client)

## 🌐 Déploiement

### Option 1: Serveur Node.js (VPS, DigitalOcean, AWS EC2)

```bash
# Build
npm run build

# Lancer en production
NODE_ENV=production node server.js
```

### Option 2: Vercel / Netlify

Ces plateformes supportent le SSR automatiquement. Il suffit de :
1. Connecter le repo GitHub
2. Configurer la commande de build : `npm run build`
3. Configurer la commande de start : `node server.js`

### Option 3: Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 5173
CMD ["node", "server.js"]
```

## 🔍 Vérification SSR

Pour vérifier que le SSR fonctionne :

1. Lancer `npm run dev` ou `npm run preview`
2. Ouvrir http://localhost:5173
3. Faire clic droit > "Afficher le code source de la page"
4. Le HTML complet doit être visible (pas juste `<div id="root"></div>`)

## ⚠️ Notes importantes

- Les animations Framer Motion peuvent nécessiter des ajustements pour le SSR
- `window` et `document` ne sont pas disponibles côté serveur
- Utiliser `useEffect` pour le code qui doit s'exécuter uniquement côté client

## 🐛 Troubleshooting

### Erreur "window is not defined"
Envelopper le code dans un `useEffect` ou vérifier `typeof window !== 'undefined'`

### Hydration mismatch
S'assurer que le rendu serveur et client produisent exactement le même HTML initial

### Styles manquants
Vérifier que les imports CSS sont bien dans `entry-client.jsx` et `entry-server.jsx`
