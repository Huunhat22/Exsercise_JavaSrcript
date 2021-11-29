// Bài tập String Capitalize
// eg: 'easy Fontend' => 'Easy fontend'

function capitalize(params) {

    if (params === '') return '';

    const first = params[0].toUpperCase();
    const rest = params.slice(1).toLowerCase();
    return `${first}${rest}`;
}

console.log(capitalize('eaSy Fontend'));