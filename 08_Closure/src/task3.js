module.exports = getQuntityPostsByAuthor;

function getQuntityPostsByAuthor(listOfPosts, author) {
    let post = 0;
    let comments = 0;

    listOfPosts.forEach((el) => {
        if (el['author'] === author) {
            post = post + 1;
        }
        if (el.hasOwnProperty('comments')) {
            el['comments'].forEach((e) => {
                if (e['author'] === author) {
                    comments = comments + 1;
                }
            });
        }
    });

    return `post - ${post}, comments - ${comments}`;
}