describe('Health', () => {
  test('Reservations', async () => {
    const response = await fetch('http://localhost:3000');
    console.log(response);
    expect(response.ok).toBeTruthy();
  });
});
