class BaseRepository {
  // recibe un modelo de mongoose
  constructor(model) {
    this.model = model;
  }
  // obtener un documento de mongo mediante su id
  async get(id) {
    return await this.model.findById(id);
  }

  // retornar todos los documentos de una colección
  async getAll() {
    return await this.model.find();
  }

  async create(entity) {
    return await this.model.create(entity);
  }

  async update(entity) {
    return await this.model.findByIdAndDelete();
  }
  async delete(id) {
    return await this.model.findByIdAndUpdate(id, entity, { new: true });
  }
}

module.exports = BaseRepository;
