const express = require('express');
const bodyParser = require('body-parser');
const { Project, Task } = require('./database');
const cors = require('cors');
const axios = require('axios');
const userServerUrl = 'http://localhost:3001';
const app = express();
const PORT = 3000;
app.use(cors());

app.use(bodyParser.json());

// Pobieranie wszystkich projektów
app.get('/projects', async (req, res) => {
  try {
    const userId = req.query.userId;
    if (!userId) {
      return res.status(400).json({ error: 'Brak identyfikatora użytkownika' });
    }

    const projects = await Project.findAll({
      where: { ownerId: userId }
    });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: 'Nie można pobrać projektów' });
  }
});

// Endpoint do tworzenia nowego projektu
app.post('/projects', async (req, res) => {
  try {
    const { name, ownerId } = req.body;
    const project = await Project.create({ name, ownerId });
    res.status(201).json(project);
  } catch (error) {
    res.status(400).json({ error: 'Nie można utworzyć projektu' });
  }
});

app.get('/projects/:projectId', async (req, res) => {
  try {
    const project = await Project.findByPk(req.params.projectId);
    if (!project) {
      return res.status(404).json({ error: 'Projekt nie znaleziony' });
    }
    res.json(project);
  } catch (error) {
    res.status(500).json({ error: 'Nie można pobrać szczegółów projektu' });
  }
});

// Endpoint do dodawania nowego zadania do projektu
app.post('/projects/:projectId/tasks', async (req, res) => {
  try {
    const project = await Project.findByPk(req.params.projectId);
    if (!project) return res.status(404).json({ error: 'Projekt nie znaleziony' });
    const task = await Task.create({ ...req.body, projectId: project.id });
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ error: 'Nie można utworzyć zadania' });
  }
});
// Pobieranie wszystkich zadań dla danego projektu
app.get('/projects/:projectId/tasks', async (req, res) => {
  try {
    const tasks = await Task.findAll({ where: { projectId: req.params.projectId } });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: 'Nie można pobrać zadań' });
  }
});
app.delete('/projects/:projectId', async (req, res) => {
  try {
    const project = await Project.findByPk(req.params.projectId);
    if (!project) return res.status(404).json({ error: 'Projekt nie znaleziony' });

    await project.destroy();
    res.status(200).json({ message: 'Projekt usunięty' });
  } catch (error) {
    res.status(400).json({ error: 'Nie można usunąć projektu' });
  }
});
// Usuwanie zadania
app.delete('/tasks/:taskId', async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.taskId);
    if (!task) return res.status(404).json({ error: 'Zadanie nie znaleziono' });

    await task.destroy();
    res.status(200).json({ message: 'Zadanie usunięto' });
  } catch (error) {
    res.status(400).json({ error: 'Nie można usunąć zadania' });
  }
});
// Aktualizacja zadania
app.put('/tasks/:taskId', async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.taskId);
    if (!task) return res.status(404).json({ error: 'Zadanie nie znaleziono' });

    task.name = req.body.name || task.name;
    task.description = req.body.description || task.description;
    await task.save();

    res.status(200).json(task);
  } catch (error) {
    res.status(400).json({ error: 'Nie można zaktualizować zadania' });
  }
});



app.listen(PORT, () => {
  console.log(`Serwer działa na porcie ${PORT}`);
});
