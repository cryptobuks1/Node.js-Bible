let _ideaService = null;
class IdeaController {
  constructor({ IdeaService }) {
    _ideaService = IdeaService;
  }

  async get(req, res) {
    const { ideaID } = req.params;
    const idea = await _ideaService.get(ideaID);
    return res.send(idea);
  }
  async getAll(req, res) {
    const idea = await _ideaService.getAll();
    return res.send(idea);
  }

  async update(req, res) {
    const { body } = req;
    const { ideaID } = req.params;
    const updateIdea = await _ideaService.update(ideaID, body);
    return res.send(updatedIdea);
  }

  async create(req, res) {
    const { body } = req;
    const createIdea = await _ideaService.create(body);
    return res.status(201).send(createIdea);
  }

  async delete(req, res) {
    const { ideaID } = req.params;
    const deletedIdea = await _ideaService.delete(ideaID);
    // retornamos al cliente
    return res.send(deletedIdea);
  }

  async getUserIdeas(req, res) {
    const { userID } = req.params;
    const ideas = await _ideaService.getUserIdeas(userID);
    return res.send(ideas);
  }
  async upvoteIdea(req, res) {
    const { ideaID } = req.params;
    const idea = await _ideaService.upvoteIdea(ideaID);
    return res.send(idea);
  }
  async downvoteIdea(req, res) {
    const { ideaID } = req.params;
    const idea = await _ideaService.downvoteIdea(ideaID);
    return res.send(idea);
  }
}

module.exports = IdeaController;
