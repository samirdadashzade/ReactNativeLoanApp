const printf = (word, dict) => {
    for (let key in dict) word = word.replace(RegExp("\\{" + key + "\\}", "gi"), dict[key]);
    return word;
}

export default printf;