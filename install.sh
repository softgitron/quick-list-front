rm -rf quick-list-front
git clone https://github.com/softgitron/quick-list-front.git
cd quick-list-front
npm install react-script
npm install
npm run-script build
cd build
sudo rm -rf /usr/share/nginx/html/*
sudo cp -r * /usr/share/nginx/html/
sudo systemctl restart nginx