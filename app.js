//find the longest word in a sentence
function findLongestWord(str){
    var words = str.split(" ");
    var longest = ""
    for (var word of words){
      if (word.length > longest.length) longest = word
        }
      return longest.length
    }
    
    findLongestWord("The quick brown fox jumped over the lazy dog");


    //in one line
    function findLongestWord(str){
    return str.split(" ").sort(function(a, b){return b.length - a.length})[0].length
    }
    
    findLongestWord("The quick brown fox jumped over the lazy dog");