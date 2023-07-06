// equivalent to module.exports = {bread, vegetable, fruit}

export const bread = (req, res) => res.send('bread')

export const vegetable = (req, res) => res.send('vegetable');

export const fruit = (req, res) => res.send('fruit');