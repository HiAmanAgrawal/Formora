const routes = express.Router();
import Form from '../models/formModel';

routes.get('/forms', async (req, res) => {
    try {
        const forms = await Form.find();
        res.status(200).json(forms); 
    } catch (error) {
        console.error('Error fetching forms:', error);
        res.status(500).json({ error: 'Failed to fetch forms' });
    }
});