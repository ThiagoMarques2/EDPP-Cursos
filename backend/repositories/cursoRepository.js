/**
 * @swagger
 * components:
 *   schemas:
 *     Curso:
 *       type: object
 *       required:
 *         - titulo
 *         - categoria
 *         - nivel
 *       properties:
 *         id:
 *           type: integer
 *           description: ID único do curso
 *         titulo:
 *           type: string
 *           description: Título do curso
 *         categoria:
 *           type: string
 *           description: Categoria do curso
 *         nivel:
 *           type: string
 *           description: Nível do curso (Iniciante, Intermediário, Avançado)
 *         descricao:
 *           type: string
 *           description: Descrição detalhada do curso
 *         valor:
 *           type: number
 *           description: Valor do curso
 *         created_at:
 *           type: string
 *           format: date-time
 *           description: Data de criação do registro
 *     CursoInput:
 *       type: object
 *       required:
 *         - titulo
 *         - categoria
 *         - nivel
 *       properties:
 *         titulo:
 *           type: string
 *         categoria:
 *           type: string
 *         nivel:
 *           type: string
 *         descricao:
 *           type: string
 *         valor:
 *           type: number
 *     Error:
 *       type: object
 *       properties:
 *         error:
 *           type: string
 *           description: Mensagem de erro
 */

const pool = require('../config/db');

class CursoRepository {
  async findAll() {
    const result = await pool.query(
      'SELECT * FROM cursos ORDER BY created_at DESC'
    );
    return result.rows;
  }

  async findById(id) {
    const result = await pool.query(
      'SELECT * FROM cursos WHERE id = $1',
      [id]
    );
    return result.rows[0] || null;
  }

  async create(data) {
    const { titulo, categoria, nivel, descricao, valor } = data;
    const result = await pool.query(
      `INSERT INTO cursos (titulo, categoria, nivel, descricao, valor)
       VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [titulo, categoria, nivel, descricao, valor || 0]
    );
    return result.rows[0];
  }

  async update(id, data) {
    const { titulo, categoria, nivel, descricao, valor } = data;
    const result = await pool.query(
      `UPDATE cursos
       SET titulo = $1, categoria = $2, nivel = $3, descricao = $4, valor = $5
       WHERE id = $6 RETURNING *`,
      [titulo, categoria, nivel, descricao, valor, id]
    );
    return result.rows[0] || null;
  }

  async delete(id) {
    const result = await pool.query(
      'DELETE FROM cursos WHERE id = $1 RETURNING *',
      [id]
    );
    return result.rows[0] || null;
  }
}

module.exports = new CursoRepository();