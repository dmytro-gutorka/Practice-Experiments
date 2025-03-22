export async function getFriendNames(userId) {
        const response = await fetch(`https://example.com/users/${userId}/friends`);
        const userData = await response.json();
        return userData.map(friend => friend.name);
}
