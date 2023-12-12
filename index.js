const strings = ['enchanted', 'clumsy', 'humdrum', 'obvious', 'low', 'green', 'material', 'go', 'messy', 'lucky', 'melodic', 'dry', 'petite', 'bad', 'pink', 'callous', 'united', 'fearless', 'odd', 'hollow', 'roomy', 'lying', 'overt', 'oafish', 'hot', 'ad hoc', 'fast', 'legal', 'few', 'naive', 'round', 'supreme', 'fixed', 'wrong', 'inner', 'clean', 'near', 'unarmed', 'latter', 'big', 'false', 'piquant', 'boorish', 'damp', 'plucky', 'clammy', 'superb', 'ten', 'pumped', '9']
const strings2 = []

for (let i = 0; i < strings.length; i+=1) {
  if (strings[i].length <= 3) {
    strings2.push(strings[i])
  }
}

console.log(strings2)  // ['low', 'go', 'dry', 'bad', 'odd', 'hot', 'few', 'big', 'ten', '9']