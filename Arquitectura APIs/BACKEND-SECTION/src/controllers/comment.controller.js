let _commentService = null;
class CommentController {
  constructor({ CommentService }) {
    _commentService = CommentService;
  }

  async get(req, res) {
    const { commentID } = req.params;
    const user = await _commentService.get(commentID);
    return res.send(user);
  }

  async update(req, res) {
    const { body } = req;
    const { commentID } = req.params;
    const deletedComment = await _commentService.update(commentID, body);
    return res.send(updatedComment);
  }

  async delete(req, res) {
    const { commentID } = req.params;
    const deletedComment = await _commentService.delete(commentID);
    // retornamos al cliente
    return res.send(deletedComment);
  }

  async getIdeaComments(req, res) {
    const { ideaID } = req.params;
    const comments = await _commentService.getIdeaComments(ideaID);
    return res.send(comments);
  }

  async createComment(req, res) {
    const { body } = req;
    const { ideaID } = req.params;
    const createdComment = await _commentService.create(body, ideaID);
    return res.status(201).send(createdComment);
  }
}

module.exports = CommentController;
