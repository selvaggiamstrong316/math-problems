function sumSeries(n) {
    if (!Number.isInteger(n)) throw new Error('Input must be an integer.');
    if (n <= 0) throw new Error('Input must be a positive integer.');

    let result = n * ((n + 1) / 2);
    return result;
}
