const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('public'));

let slots = [
  { id: 1, name: 'Slot A1', occupied: false },
  { id: 2, name: 'Slot A2', occupied: false },
  { id: 3, name: 'Slot B1', occupied: true },
  { id: 4, name: 'Slot B2', occupied: false },
  { id: 5, name: 'Slot C1', occupied: false },
  { id: 6, name: 'Slot C2', occupied: true }
];

app.get('/api/slots', (req, res) => {
  res.json(slots);
});

app.post('/api/slots/:id/toggle', (req, res) => {
  const slot = slots.find(s => s.id == req.params.id);
  if (!slot) return res.status(404).json({ error: 'Slot not found' });
  slot.occupied = !slot.occupied;
  res.json(slot);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});