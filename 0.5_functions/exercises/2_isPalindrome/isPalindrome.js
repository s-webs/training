// Палиндром — число, слово или текст, одинаково читающееся в обоих направлениях. Например: радар, топот.
// isPalindrome.js

// Реализуйте и экспортируйте по умолчанию функцию isPalindrome с использованием рекурсии.
// Примеры использования:
// import isPalindrome from './isPalindrome';
// isPalindrome('radar'); // => true
// isPalindrome('a');     // => true
// isPalindrome('abs');   // => false

// Один из способ реализовать эту функцию — попарно сравнить буквы, стоящие зеркально относительно центра.
// Если они совпадают, то перед нами палиндром.

// Алгоритм
// Если строка короче двух символов, то считается, что это палиндром.
// Проверяем, совпадают ли первый и последний символы. Если нет, то это не палиндром. 
// Если совпадают, то вызываем функцию рекурсивно, передавая внутрь строку минус первый и последний символ.

// Разбор на примере: radar (палиндром)
// Первый и последний символ r. Так как символы совпали, вызываем isPalindrome рекурсивно. Дальше передаем ada
// Первый и последний символ a. Так как символы совпали, вызываем isPalindrome рекурсивно. Дальше передаем d
// Так как длина строки d меньше двух символов, возвращаем true

// Разбор на примере: rador (не палиндром)
// Первый и последний символ r. Так как символы совпали, вызываем isPalindrome рекурсивно. Дальше передаем ado
// Первый символ a и последний символ o. Так как символы не совпали, возвращаем false

// Подсказки
// Чтобы узнать длину строки, используйте свойство length:
//     'hello'.length; // 5

//     Чтобы получить подстроку из строки, используйте метод substr:
//     'hello'.substr(0, 4); // "hell"
//     'hello'.substr(1, 2); // "el"

const length = str => str.length;
const isPalindrome = (str) => {
    let start = 0;
    let end = length(str) - 1;
    if (length(str) <= 2) {
        return true;
    }
    if ((str.substr(start, 1)) !== (str.substr(end, 1))) {
        return false;
    } else {
        return true
    }
};
console.log(isPalindrome('radar'));