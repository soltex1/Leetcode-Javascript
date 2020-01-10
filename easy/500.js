/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {

  const rows = ['qwertyuiop','asdfghjkl','zxcvbnm']

  const response = []

  words.forEach((word) => {

    const canBeTyped = rows.some((row) => {

      let visited = {}

      for (let i = 0; i < word.length; i++) {

        let char = word[i].toLowerCase()

        if (!visited[char]) {
          visited[char] = true

          if (!row.includes(char)) return false
        }
      }

      return true
    })

    if (canBeTyped) response.push(word)
  })

  return response
};
