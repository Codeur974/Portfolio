@echo off

echo 🛠️  Build du projet...
call npm run build

echo 📄 Copie de index.html en 404.html (React Router)...
if exist "dist\index.html" (
  echo ✅ Le fichier index.html a été trouvé.
  copy "dist\index.html" "dist\404.html"
  echo ✅ Le fichier 404.html a été créé.
) else (
  echo ❌ Le fichier index.html est introuvable !
  pause
  exit /b
)

cd dist

echo 🔄 Initialisation du dépôt Git...
git init
git remote remove origin
git remote add origin https://github.com/Codeur974/Portfolio.git

echo 🔍 Vérification de l'existence de la branche 'gh-pages'...
git branch | findstr "gh-pages" >nul
if errorlevel 1 (
  git checkout -b gh-pages
  echo ✅ Nouvelle branche 'gh-pages' créée.
) else (
  git checkout gh-pages
  echo ✅ Branche 'gh-pages' existante utilisée.
)

echo 📝 Ajout et commit...
git add .
git commit -m "🚀 Déploiement manuel vers GitHub Pages"

echo ⬆️  Push vers gh-pages...
git push -f origin gh-pages

cd ..
rmdir /s /q dist\.git

echo ✅ Déploiement terminé !
echo 🌍 https://codeur974.github.io/Portfolio
pause