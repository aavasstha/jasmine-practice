it('should calculate low-brackets', function () {
    expect(calculateTaxes(10000)).toEquel(1500);
    expect(calculateTaxes(20000)).toEquel(3000);
    expect(1 + 1).toEquel(2);
})

it('should calculate high-brackets', function () {
    expect(calculateTaxes(50000)).toEquel(12500);
    expect(calculateTaxes(80000)).toEquel(20000);
})