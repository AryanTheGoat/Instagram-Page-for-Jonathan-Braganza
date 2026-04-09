const followBtn = document.getElementById('followBtn');
const friendBtn = document.getElementById('friendBtn');
const messageBtn = document.getElementById('messageBtn');
const postGrid = document.getElementById('postGrid');
const followersCount = document.getElementById('followersCount');

let isFollowing = false;
let isFriendAdded = false;
let followerNumber = 1000000;

function formatFollowers(value) {
  if (value >= 1000000) {
    return `${(value / 1000000).toFixed(1).replace('.0', '')}M`;
  }
  if (value >= 1000) {
    return `${(value / 1000).toFixed(1).replace('.0', '')}K`;
  }
  return value.toString();
}

function updateFollowersDisplay() {
  followersCount.textContent = formatFollowers(followerNumber);
}

function generatePosts() {
  postGrid.innerHTML = '';

  for (let i = 1; i <= 24; i += 1) {
    const seed = `royal-post-${Date.now()}-${i}`;
    const image = document.createElement('img');
    image.src = `https://picsum.photos/seed/${encodeURIComponent(seed)}/600/600`;
    image.alt = `Instagram post ${i}`;
    image.loading = 'lazy';

    const card = document.createElement('div');
    card.className = 'post-card';
    card.appendChild(image);
    postGrid.appendChild(card);
  }
}

followBtn.addEventListener('click', () => {
  isFollowing = !isFollowing;
  followBtn.textContent = isFollowing ? 'Following' : 'Follow';
  followBtn.classList.toggle('following', isFollowing);
  followerNumber += isFollowing ? 1 : -1;
  updateFollowersDisplay();
});

friendBtn.addEventListener('click', () => {
  if (!isFriendAdded) {
    isFriendAdded = true;
    friendBtn.textContent = 'Friend Added';
    friendBtn.disabled = true;
    friendBtn.style.opacity = '0.75';
  }
});

messageBtn.addEventListener('click', () => {
  alert('Message feature is ready to open a chat soon.');
});

document.addEventListener('DOMContentLoaded', () => {
  updateFollowersDisplay();
  generatePosts();
});
