// please try to use these constants in your code
const SECONDS_PER_HOUR = 3600;
const SECONDS_PER_MIN = 60;

function formatTime(seconds) {
    // your code here
    if (seconds < 0 || seconds > 86400) return '';

    let hour = Math.trunc(seconds / SECONDS_PER_HOUR);

    let minute = Math.trunc((seconds - (SECONDS_PER_HOUR * hour)) / SECONDS_PER_MIN);

    let second = Math.trunc((seconds - ((SECONDS_PER_HOUR * hour) + (minute * SECONDS_PER_MIN))));

    if (hour < 10) { hour = `0${hour}` };
    if (minute < 10) { minute = `0${minute}` };
    if (second < 10) { second = `0${second}` };

    return `${hour}:${minute}:${second}`;
}

console.log(formatTime(4256));