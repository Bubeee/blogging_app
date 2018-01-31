let blog = require('./blog');

let blogs = [
  new blog.Blog(
    1,
    'Cool blog',
    ` has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desk`,
    1
  ),
  new blog.Blog(
    2,
    'Coolest blog',
    ` has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was `,
    1
  ),
  new blog.Blog(
    3,
    'Shitty blog',
    ` has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desk`,
    1
  ),
  new blog.Blog(
    4,
    'Lol blog',
    `ges of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a `,
    1
  ),
  new blog.Blog(
    5,
    'Lookah blog',
    'aldfjkals;f hhkasdjf kasjdf;i jasdkfj kasjdf kasjdfk jas;dlkf askldfjkasdkj flas;jkle f',
    1
  ),
  new blog.Blog(6, 'Blog blog', 'А здесь у нас будет русский текст!', 1)
];

function get() {
  return blogs;
}

function getById(id) {
  index = blogs.findIndex(obj => obj.id == id);
  return blogs[index];
}

function post(blog) {
  blog.id = blogs[blogs.length - 1].id + 1;
  blogs.push(blog);

  return blog;
}

function put(id, blog) {
  index = blogs.findIndex(obj => obj.id == id);
  blogs[index] = blog;
}

function remove(id) {
  index = blogs.findIndex(obj => obj.id == id);
  blogs.splice(index, 1);
}

module.exports = {
  get: get,
  getById: getById,
  post: post,
  put: put,
  remove: remove
};
