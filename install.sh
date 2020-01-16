git clone https://github.com/softgitron/quick-list-front.git
npm install
npm install react-script
npm run-script build
cd build
sudo cp * /usr/share/nginx/html/
sudo systemctl restart nginx