#!/bin/bash

# Rutas absolutas
DEPLOY_PATH=/home/jdanield/repositories/Guitar-LA
TARGET_PATH=/home/jdanield/public_html/guitarla

# Crear carpeta destino si no existe
mkdir -p "$TARGET_PATH"

# Ir al repositorio y actualizar (ya puedes hacer pull desde cPanel)
cd "$DEPLOY_PATH" || exit

# Instalar dependencias y compilar
npm install
npm run build

# Copiar dist al public_html
rsync -av --delete "$DEPLOY_PATH/dist/" "$TARGET_PATH/"

# Log del deploy
echo "Despliegue completo en $(date)" >> "$DEPLOY_PATH/deploy.log"
