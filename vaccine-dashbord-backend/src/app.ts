import express from 'express';
import cors from 'cors';

import vaccineRoutes from './routes/vaccineRoutes.js';
import summaryRoutes from './routes/summaryRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/apivaccines', vaccineRoutes);
app.use('/apisummary', summaryRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Backend server running on port ${PORT}`);
});
