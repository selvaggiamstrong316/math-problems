  import express from 'express';
import { body, validationResult } from 'express-validator';

const app = express();

app.post('/math-problems', [
  body('num1').isInt({ gt: 0 }).withMessage('Please enter a positive integer for num1'),
  body('num2').isInt({ gt: 0 }).withMessage('Please enter a positive integer for num2')
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const num1 = req.body.num1;
  const num2 = req.body.num2;
  const problemType = req.query.type || 'addition';

  let result;
  switch (problemType) {
    case 'addition':
      result = num1 + num2;
      break;
    case 'subtraction':
      result = num1 - num2;
      break;
    case 'multiplication':
      result = num1 * num2;
      break;
    case 'division':
      if (num2 === 0) {
        return res.status(400).json({ message: 'Cannot divide by zero' });
      }
      result = num1 / num2;
      break;
    default:
      return res.status(400).json({ message: 'Invalid problem type' });
  }

  res.json({ num1, num2, problemType, result });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});