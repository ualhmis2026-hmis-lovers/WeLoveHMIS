#!/bin/bash
# Debug script para VM deployment

set -e

echo "================================================"
echo "🔍 Debugging VM Deployment"
echo "================================================"

cd /var/www/WeLoveHMIS

echo ""
echo "1️⃣  Git Status ANTES:"
git status || echo "❌ Error en git"

echo ""
echo "2️⃣  Limpiando repositorio..."
git fetch origin main || echo "⚠️  fetch failed"
git reset --hard origin/main || echo "⚠️  reset failed"
git clean -fd

echo ""
echo "3️⃣  Git Status DESPUÉS:"
git status

echo ""
echo "4️⃣  Instalando Hugo si no existe..."
if ! command -v hugo &> /dev/null; then
    echo "Hugo no encontrado, instalando..."
    cd /tmp
    wget -q https://github.com/gohugoio/hugo/releases/download/v0.157.0/hugo_extended_0.157.0_linux-amd64.tar.gz
    tar -xzf hugo_extended_0.157.0_linux-amd64.tar.gz
    sudo mv hugo /usr/local/bin/
    cd /var/www/WeLoveHMIS
else
    echo "✅ Hugo ya existe: $(hugo version)"
fi

echo ""
echo "5️⃣  Verificando estructura..."
ls -la content/en/posts/ | head -5
echo ""
ls -la static/

echo ""
echo "6️⃣  Limpiando build anterior..."
rm -rf public/

echo ""
echo "7️⃣  Construyendo Hugo..."
hugo --minify --baseURL "https://panconjamon.westus2.cloudapp.azure.com/" -v

echo ""
echo "8️⃣  Verificando public/..."
if [ -d "public" ]; then
    echo "✅ Directorio public/ creado"
    echo "Contenido:"
    ls public/ | head -10
else
    echo "❌ ERROR: Directorio public/ NO existe"
    exit 1
fi

echo ""
echo "9️⃣  Verificando index.html..."
if [ -f "public/index.html" ]; then
    echo "✅ index.html existe ($(stat --format=%s public/index.html) bytes)"
else
    echo "❌ ERROR: index.html NO existe"
    exit 1
fi

echo ""
echo "🔟 Copiando a nginx..."
sudo cp -r public/* /var/www/html/
sudo chown -R www-data:www-data /var/www/html
sudo chmod -R 755 /var/www/html

echo ""
echo "1️⃣1️⃣  Verificando permisos nginx..."
ls -la /var/www/html/ | head -10

echo ""
echo "1️⃣2️⃣  Reloading nginx..."
sudo systemctl reload nginx
sudo systemctl status nginx --no-pager

echo ""
echo "================================================"
echo "✅ Deploy completado!"
echo "================================================"
