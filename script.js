const wrapper = document.querySelector('.wrapper');

async function fetchComments() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments');
    const data = await response.json();

    data.slice(0, 20).forEach((item) => {
      const commentHTML = createCommentHTML(item);
      wrapper.appendChild(commentHTML);
    });
  } catch (error) {
    console.error('Error fetching comments:', error);
  }
}

function createCommentHTML(item) {
  const div = document.createElement('div');
  const h1 = document.createElement('h1');
  h1.textContent = item.name;
  const p = document.createElement('p');
  p.textContent = item.body;
  div.appendChild(h1);
  div.appendChild(p);
  wrapper.appendChild(div)
  return div;
}

fetchComments();