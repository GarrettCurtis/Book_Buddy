const API_URL = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com"

export async function fetchBooks () {
    const response = await fetch(`${API_URL}/api/books`)
    const result = await response.json();
    return result;
}