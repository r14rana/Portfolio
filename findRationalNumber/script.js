document.getElementById('rational-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let p = parseInt(document.getElementById('p').value);
    let q = parseInt(document.getElementById('q').value);
    let n = parseInt(document.getElementById('n').value) + 1;

    if (q <= p) {
        document.getElementById('result').textContent = 'Number q must be greater than number p.';
        return;
    }

    let scaledP = p * n;
    let scaledQ = q * n;

    let rationalNumbers = [];
    for (let i = scaledP + 1; i < scaledQ; i++) {
        rationalNumbers.push(`${i}/${scaledP}`);
    }

    document.getElementById('result').textContent = rationalNumbers.join(", ");
});
