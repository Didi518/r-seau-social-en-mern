const router = require('express').Router();
const postController = require('../controllers/post.controller');

router.get('/', postController.readPost);
router.post('/', postController.createPost);
router.put('/:id', postController.updatePost);
router.delete('/:id', postController.deletePost);
router.patch('/like-post/:id', postController.likePost);
router.patch('/unlike-post/:id', postController.unlikePost);

// commentaires
router.patch('/com-post/:id', postController.commentPost);
router.patch('/edit-com-post/:id', postController.editCommentPost);
router.patch('/supprimer-com-post/:id', postController.editCommentPost);

module.exports = router;
