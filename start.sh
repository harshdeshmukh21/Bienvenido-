# Navigate to the project directory
cd /Users/harshdeshmukh/Desktop/Bienvenido

echo "Starting backend server..."
cd backend\ 
NODE_ENV=development node server.js &
BACKEND_PID=$!
cd ..

# Start the client server
echo "Starting client server..."
cd client\
npm run dev &
CLIENT_PID=$!
cd ..

# Wait for the user to press Ctrl+C
trap 'kill $BACKEND_PID $CLIENT_PID; echo "Servers stopped."; exit' INT

# Keep the script running until interrupted
while true
do
  sleep 1
done