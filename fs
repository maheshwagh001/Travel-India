warning: in the working copy of 'Backend/Controllers/comment.js', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'Backend/Controllers/story.js', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'Backend/Helpers/Libraries/deleteImageFile.js', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'Backend/Middlewares/database/databaseErrorhandler.js', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'Backend/Models/user.js', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'Backend/Routers/comment.js', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'Backend/Routers/story.js', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'Backend/Routers/user.js', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'Frontend/package-lock.json', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'Frontend/package.json', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'Frontend/public/index.html', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'Frontend/public/manifest.json', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'Frontend/src/App.js', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'Frontend/src/Context/AuthContext.js', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'Frontend/src/Css/DetailStory.css', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'Frontend/src/Css/Footer.css', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'Frontend/src/Css/Header.css', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'Frontend/src/Css/Profile.css', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'Frontend/src/components/AuthScreens/LoginScreen.js', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'Frontend/src/components/AuthScreens/RegisterScreen.js', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'Frontend/src/components/CommentScreens/AddComment.js', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'Frontend/src/components/CommentScreens/CommentItem.js', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'Frontend/src/components/CommentScreens/CommentSidebar.js', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'Frontend/src/components/CommentScreens/StoryComments.js', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'Frontend/src/components/GeneralScreens/SearchForm.js', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'Frontend/src/components/ProfileScreens/EditProfile.js', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'Frontend/src/components/ProfileScreens/Mypost.js', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'Frontend/src/components/ProfileScreens/Profile.js', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'Frontend/src/components/ProfileScreens/ReadListPage.js', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'Frontend/src/components/Routing/PrivateRoute.js', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'Frontend/src/components/StoryScreens/AddStory.js', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'Frontend/src/components/StoryScreens/DetailStory.js', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'Frontend/src/components/StoryScreens/EditStory.js', LF will be replaced by CRLF the next time Git touches it
[1mdiff --git a/.gitignore b/.gitignore[m
[1mdeleted file mode 100644[m
[1mindex 1050897..0000000[m
[1m--- a/.gitignore[m
[1m+++ /dev/null[m
[36m@@ -1,3 +0,0 @@[m
[31m-.env[m
[31m-[m
[31m-node_modules[m
[1mdiff --git a/Backend/Controllers/comment.js b/Backend/Controllers/comment.js[m
[1mindex 99c90c0..bdc03cb 100644[m
[1m--- a/Backend/Controllers/comment.js[m
[1m+++ b/Backend/Controllers/comment.js[m
[36m@@ -111,9 +111,34 @@[m [mconst getCommentLikeStatus = asyncErrorWrapper(async(req, res, next) => {[m
 [m
 })[m
 [m
[32m+[m
[32m+[m[32mconst deleteComment  =asyncErrorWrapper(async(req,res,next)=>{[m
[32m+[m
[32m+[m[32m    const {comment_id} = req.params  ;[m
[32m+[m
[32m+[m[32m    const comment = await Comment.findById(comment_id);[m
[32m+[m
[32m+[m[32m    const story = await Story.findById(comment.story);[m
[32m+[m
[32m+[m[32m    const index = story.comments.indexOf(comment_id);[m
[32m+[m[32m    story.comments.splice(index, 1);[m
[32m+[m[32m    story.commentCount = story.comments.length;[m
[32m+[m[32m    await story.save()  ;[m
[32m+[m[32m    await Comment.findByIdAndDelete(comment_id);[m
[32m+[m
[32m+[m
[32m+[m[32m    return res.status(200).[m
[32m+[m[32m        json({[m
[32m+[m[32m            success:true,[m
[32m+[m[32m            message : "Story delete succesfully "[m
[32m+[m[32m    })[m
[32m+[m
[32m+[m[32m})[m
[32m+[m
 module.exports ={[m
     addNewCommentToStory,[m
     getAllCommentByStory,[m
     commentLike,[m
[31m-    getCommentLikeStatus[m
[32m+[m[32m    getCommentLikeStatus,[m
[32m+[m[32m    deleteComment[m
 }[m
\ No newline at end of file[m
[1mdiff --git a/Backend/Controllers/story.js b/Backend/Controllers/story.js[m
[1mindex 4387760..36de45b 100644[m
[1m--- a/Backend/Controllers/story.js[m
[1m+++ b/Backend/Controllers/story.js[m
[36m@@ -160,10 +160,11 @@[m [mconst editStory = asyncErrorWrapper(async(req,res,next)=>{[m
     story.image = previousImage ;[m
 [m
     // await deleteImageFile.deleteImage(previousImage);[m
[31m-    if(req.file != null){[m
[31m-        await deleteImageFile.deleteImage(previousImage);[m
[32m+[m[32m    if(req.file != null){[m[41m   [m
         const upload = await imageUpload.uploadFile(req.file.path);[m
[31m-        story.image = upload.secure_url[m
[32m+[m[32m        story.image = upload.secure_url;[m
[32m+[m[32m        await deleteImageFile.deleteImage(previousImage);[m
[32m+[m[41m        [m
     }[m
 [m
     await story.save();[m
[1mdiff --git a/Backend/Helpers/Libraries/deleteImageFile.js b/Backend/Helpers/Libraries/deleteImageFile.js[m
[1mindex ab7612f..bf74acf 100644[m
[1m--- a/Backend/Helpers/Libraries/deleteImageFile.js[m
[1m+++ b/Backend/Helpers/Libraries/deleteImageFile.js[m
[36m@@ -15,8 +15,7 @@[m [mcloudinary.config({[m
 }); [m
 [m
 const deleteImage = async (public_id) => {[m
[31m-      cloudinary.uploader.destroy(public_id)[m
[31m-        .then(resp => console.log(resp))[m
[32m+[m[32m      await cloudinary.uploader.destroy(public_id)[m
         .catch(_err=> console.log("Something went wrong, please try again later."));[m
 }[m
 [m
[1mdiff --git a/Backend/Middlewares/database/databaseErrorhandler.js b/Backend/Middlewares/database/databaseErrorhandler.js[m
[1mindex 620c65d..818970a 100644[m
[1m--- a/Backend/Middlewares/database/databaseErrorhandler.js[m
[1m+++ b/Backend/Middlewares/database/databaseErrorhandler.js[m
[36m@@ -1,6 +1,7 @@[m
 const asyncErrorWrapper = require("express-async-handler")[m
 const CustomError = require("../../Helpers/error/CustomError");[m
 const Story = require("../../Models/story")[m
[32m+[m[32mconst Comment = require("../../Models/comment")[m
 [m
 [m
 const checkStoryExis