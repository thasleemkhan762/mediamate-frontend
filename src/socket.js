import { io } from 'socket.io-client';

const socket = io('https://mediamate-backend.onrender.com');

export default socket;
