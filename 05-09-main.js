// Write a function to classify student
// Recive mark as a number , output as below
// mark > 8         --> 'Excellence'
// 7 <= mark <= 8   --> 'Good'
// 4 <= mark <= 6   --> 'Not Good'
// mark < 4         --> 'Bad'

function studentResult(mark) {
    if (mark < 0 || mark > 10) return 'Invalid mark!';

    if (mark > 8) return 'Excellence';
    if (mark >= 7) return 'Good';
    if (mark >= 4) return 'Not Good';

    return 'Bad';
}
console.log(studentResult(8));
