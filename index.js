function minimumSum(sum) {

    if(typeof sum !== 'number') return null;

    const values = [1, 2, 5, 10, 20, 50, 100, 200];
    const res = [0, 0, 0, 0, 0, 0, 0, 0];

    for (let i = values.length; i > 0; i--) {
        const current = values[i];

        if (sum <= 0) break;

        while (current <= sum) {

            sum -= current;
            res[i]++;
        }
    }

    return res;
}

export { minimumSum };
