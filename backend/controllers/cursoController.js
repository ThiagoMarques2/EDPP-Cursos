const cursoService = require('../services/cursoService');

class CursoController {
  async index(req, res) {
    try {
      const cursos = await cursoService.getAllCursos();
      res.json(cursos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async show(req, res) {
    try {
      const curso = await cursoService.getCursoById(req.params.id);
      res.json(curso);
    } catch (error) {
      const status = error.message === 'ID inválido' ? 400 : 404;
      res.status(status).json({ error: error.message });
    }
  }

  async store(req, res) {
    try {
      const curso = await cursoService.createCurso(req.body);
      res.status(201).json(curso);
    } catch (error) {
      if (error.message.includes('obrigatório') || error.message.includes('Nível deve ser')) {
        return res.status(400).json({ error: error.message });
      }
      res.status(500).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      const curso = await cursoService.updateCurso(req.params.id, req.body);
      res.json(curso);
    } catch (error) {
      if (error.message === 'ID inválido' || error.message === 'Curso não encontrado') {
        return res.status(404).json({ error: error.message });
      }
      if (error.message.includes('obrigatório') || error.message.includes('Nível deve ser')) {
        return res.status(400).json({ error: error.message });
      }
      res.status(500).json({ error: error.message });
    }
  }

  async destroy(req, res) {
    try {
      await cursoService.deleteCurso(req.params.id);
      res.json({ message: 'Curso deletado com sucesso' });
    } catch (error) {
      const status = error.message === 'ID inválido' || error.message === 'Curso não encontrado' ? 404 : 500;
      res.status(status).json({ error: error.message });
    }
  }
}

module.exports = new CursoController();