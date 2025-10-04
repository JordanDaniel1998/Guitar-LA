# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Website Link

You can visit the live demo of this project at the following link:

- [Live Demo Guitar-La](https://website-guitar-la.netlify.app/)


deployment: 
  tasks: 
    - export DEPLOYPATH=/home/jdanield/repositories/Guitar-LA 
    - TARGET_PATH=/home/jdanield/public_html/guitarla 
    - /usr/bin/git -c $DEPLOY_PATH reset --hard 
    - /usr/bin/git $DEPLOY_PATH pull origin main 
    - echo "Despliegue completo en $(date)" >> $DEPLOY_PATH/deploy.log