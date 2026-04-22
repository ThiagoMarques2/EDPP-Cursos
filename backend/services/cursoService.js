const cursoRepository = require('../repositories/cursoRepository');

class CursoService {
  async getAllCursos() {
    const cursos = await cursoRepository.findAll();
    return cursos;
  }

  async getCursoById(id) {
    if (!id || isNaN(parseInt(id))) {
      throw new Error('ID inválido');
    }
    const curso = await cursoRepository.findById(id);
    if (!curso) {
      throw new Error('Curso não encontrado');
    }
    return curso;
  }

  async createCurso(data) {
    this.validateCursoData(data);
    const curso = await cursoRepository.create(data);
    return curso;
  }

  async updateCurso(id, data) {
    if (!id || isNaN(parseInt(id))) {
      throw new Error('ID inválido');
    }
    const existingCurso = await cursoRepository.findById(id);
    if (!existingCurso) {
      throw new Error('Curso não encontrado');
    }
    this.validateCursoData(data);
    const curso = await cursoRepository.update(id, data);
    return curso;
  }

  async deleteCurso(id) {
    if (!id || isNaN(parseInt(id))) {
      throw new Error('ID inválido');
    }
    const deleted = await cursoRepository.delete(id);
    if (!deleted) {
      throw new Error('Curso não encontrado');
    }
    return deleted;
  }

  validateCursoData(data) {
    const { titulo, categoria, nivel } = data;
    if (!titulo || titulo.trim() === '') {
      throw new Error('Título é obrigatório');
    }
    if (!categoria || categoria.trim() === '') {
      throw new Error('Categoria é obrigatória');
    }
    if (!nivel || nivel.trim() === '') {
      throw new Error('Nível é obrigatório');
    }
    const niveisValidos = ['Iniciante', 'Intermediário', 'Avançado'];
    if (nivel && !niveisValidos.includes(nivel)) {
      throw new Error(`Nível deve ser um dos seguintes: ${niveisValidos.join(', ')}`);
    }
    if (data.valor !== undefined && data.valor < 0) {
      throw new Error('Valor não pode ser negativo');
    }
  }
}

module.exports = new CursoService();