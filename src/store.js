const STORAGE_KEY = "todo"

export default {
	fetch () {
		return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]');
	},
	save (todos) {
		window.localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
	}	
}
